import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import { useUserContext } from "../UserContext.tsx";
import "../codeCss/CreateArticle.css";

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
    const [content, setContent] = useState('');
    const navigate = useNavigate();
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
            <h2>Création d'un nouvel article</h2>
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
                    <button type="button" className="back-button" onClick={() => navigate("/")}>
                        Retour
                    </button>
                    <button type="submit">Poster</button>
                </div>
            </form>
        </div>
    );
};

export default CreateArticle;
