import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {useUserContext} from "../UserContext.tsx";

const ADD_ARTICLE = gql`
    mutation AddArticle($title: String!, $content: String!) {
        addArticle(title: $title, content: $content) {
            code
            success
            message
            article {
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

const CreateArticle: React.FC = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [addArticle, { data }] = useMutation(ADD_ARTICLE, {
        refetchQueries: ["GetArticles"],
    });
    const { user } = useUserContext();
    useEffect(() => {
        if (data && data.addArticle && data.addArticle.success) {
            navigate("/");
        }
    }, [data, navigate]);

    const handleCreateArticle = async (e: React.FormEvent) => {
        e.preventDefault();
        await addArticle({
            variables: { title, content },
            context: {
                headers: {
                    authorization: user.token ? user.token : "",
                },
            },
        });
    };

    return (
        <div className="create-post-container">
            <h2>Creation d'un nouveau article</h2>
            <form onSubmit={handleCreateArticle}>
                <div>
                    <label>Titre:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contenu:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div className="form-actions">

                    <button type="submit" > Post</button>
                </div>
            </form>
        </div>
    );
};

export default CreateArticle;