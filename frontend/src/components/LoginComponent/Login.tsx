import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import {useUserContext} from "../UserContext.tsx";
import "../codeCss/Login.css";


const postLogIn = gql(`
  mutation LogIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      code
      success
      message
      token
      user {
        id
        username
      }
    }
  }
`);

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [logIn] = useMutation(postLogIn);
    const navigate = useNavigate();
    const { setUser } = useUserContext();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Username:', username, 'Password:', password);
        try {
            const response = await logIn({ variables: { username, password } });
            console.log('LogIn response:', response);
            if (response.data.logIn.success) {
                console.log('LogIn successful:', response.data);
                localStorage.setItem('token', response.data.logIn.token);
                setUser({ id: response.data.logIn.user.id, username: response.data.logIn.user.username, token: response.data.logIn.token });
                navigate('/');
            } else {
                console.error('LogIn failed:', response.data.logIn.message);
            }
        } catch (error) {
            console.error('Error during LogIn:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img className="logo"   src="../../public/logo.jpg"  alt="logo" />
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        className="input"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Log In</button>
                </form>
                <div className="signup-link">
                    Don't have an account? <a href="Signin">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;