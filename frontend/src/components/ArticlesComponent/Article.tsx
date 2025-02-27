import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import ArticleDetail from "./ArticlesDetails"
import { Article as ArticleType } from "../../gql/graphql";
import {useUserContext} from "../UserContext.tsx";



const ADD_LIKE = gql`
    mutation AddLike($articleId: ID!) {
        addLike(articleId: $articleId) {
            code
            success
            message
            like {
                id
                user {
                    id
                    username
                }
            }
        }
    }
`;

const REMOVE_LIKE = gql`
    mutation DeleteLike($deleteLikeId: ID!) {
        deleteLike(id: $deleteLikeId) {
            code
            success
            message
        }
    }
`;

const Article: React.FC<{articles: ArticleType[] | null}> = ({ articles }) => {
    const { user } = useUserContext();
    const [selectedArticle, setSelectedArticle] = useState<ArticleType | null>(null)
    const [addLike] = useMutation(ADD_LIKE, {
        refetchQueries: ["GetArticles", "GetArticle"],
        context: {
            headers: {
                authorization: user.token ? user.token : "",
            },
        }
    })
    const [removeLike] = useMutation(REMOVE_LIKE, {
        refetchQueries: ["GetArticles", "GetArticle"],
        context: {
            headers: {
                authorization: user.token ? user.token : "",
            },
        },
    })

    const handleArticleClick = (article: ArticleType) => {
        setSelectedArticle(article)
    }

    const closeModal = () => {
        setSelectedArticle(null);
    };

    const handleLike = async (e: React.MouseEvent, articleId: string) => {
        e.stopPropagation();

        try {
            const response = await addLike({ variables: { articleId } });

            if (!response.data.addLike.success) {
                await toggleLike(articleId);
            }
        } catch (error) {
            console.error('Error during AddLike:', error);
        }
    };

    const toggleLike = async (articleId: string) => {
        try {
            await removeLike({ variables: { deleteLikeId: articleId } });
        } catch (error) {
            console.error('Error during RemoveLike:', error);
        }
    };

    return (
        <div className="feed-container">
            {articles?.map((article) => (
                <div key={article.id} className="article" onClick={() => handleArticleClick(article)}>
                    <div className="article-header">
                        <span className="username">{article.author.username}</span>
                    </div>
                    <div className="article-content">
                        <p>{article.content}</p>
                    </div>
                    <div className="article-footer">
                        <button className="like-button" onClick={(e) => handleLike(e, article.id)}>
                            ❤️ {article?.likes?.length}
                        </button>
                    </div>
                </div>
            ))}
            {selectedArticle && <ArticleDetail articleId={selectedArticle.id} onClose={closeModal} handleLike={handleLike} />}
        </div>
    );
}

export default Article;