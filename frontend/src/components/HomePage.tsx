import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Article as ArticleType, GetArticlesQuery, GetAuthorsQuery, User } from "../gql/graphql";
import { Link } from "react-router";
import { useUserContext } from "./UserContext.tsx";
import Article from "./ArticlesComponent/Article.tsx";
import "./codeCss/HomePage.css";

const GET_ARTICLES = gql`
    query GetArticles($authorId: String, $orderByLikesAsc: Boolean, $orderByLikesDesc: Boolean) {
        getArticles(authorId: $authorId, orderByLikesAsc: $orderByLikesAsc, orderByLikesDesc: $orderByLikesDesc) {
            code
            success
            message
            articles {
                id
                title
                content
                author {
                    id
                    username
                }
                createdAt
                updatedAt
                likes {
                    id
                    user {
                        id
                        username
                    }
                }
            }
        }
    }
`;

const GET_AUTHORS = gql`
    query GetAuthors {
        getAuthors {
            code
            success
            message
            authors {
                id
                username
            }
        }
    }
`;

const Home: React.FC = () => {
    const { user } = useUserContext();
    const [authorId, setAuthorId] = useState<string | null>(null);
    const [orderByLikesAsc] = useState<boolean | null>(null);
    const [orderByLikesDesc] = useState<boolean | null>(null);
    const { data: articlesData } = useQuery<GetArticlesQuery>(GET_ARTICLES, {
        variables: { authorId, orderByLikesAsc, orderByLikesDesc },
        skip: !user.token,
        context: {
            headers: {
                authorization: user.token ? user.token : "",
            },
        },
    });
    const { data: authorsData } = useQuery<GetAuthorsQuery>(GET_AUTHORS, {
        skip: !user.token,
        context: {
            headers: {
                authorization: user.token ? user.token : "",
            }
        }
    });
    const [articles, setArticles] = useState<ArticleType[] | null>([]);
    const [authors, setAuthors] = useState<User[] | null>([]);

    useEffect(() => {
        if (articlesData && articlesData.getArticles && articlesData.getArticles.articles) {
            setArticles(articlesData.getArticles.articles.filter(article => article !== null));
        }
    }, [articlesData]);

    useEffect(() => {
        if (authorsData && authorsData.getAuthors && authorsData.getAuthors.authors) {
            setAuthors(authorsData.getAuthors.authors.filter(author => author !== null));
        }
    }, [authorsData]);

    return (
        <div className="main-container">
            <div className="menu-container">
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    <option value="">Tous les auteurs</option>
                    {authors && authors.map(author => (
                        <option key={author.id} value={author.id}>{author.username}</option>
                    ))}
                </select>

                <Link to="/CreatePost">
                    <button className="create-post-button">Créer un Post</button>
                </Link>
                <button id="disconnect" onClick={() => { localStorage.removeItem('token'); window.location.reload(); }}>
                    Se déconnecter
                </button>
            </div>

            <div className="article-container">
                <Article articles={articles} />
            </div>
        </div>
    );
}

export default Home;
