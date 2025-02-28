import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import '../../style.css';
import { gql, useMutation } from '@apollo/client';
import "../codeCss/Register.css";

const postCreateUser = gql(`
  mutation SignIn($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      code
      success
      message
      user {
        id
        username
      }
    }
  }
`);

const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const [createUser] = useMutation(postCreateUser);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Username:', username, 'Password:', password);
        try {
            const response = await createUser({ variables: { username, password } });
            console.log('CreateUser response:', response);
            if (response.data.createUser.success) {
                console.log('CreateUser successful:', response.data);
                navigate('/login');
            } else {
                console.error('CreateUser failed:', response.data.createUser.message);
            }
        } catch (error) {
            console.error('Error during CreateUser:', error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <img className="logo" src="../../../public/logo.jpg" alt="logo" />
                <form onSubmit={handleSignUp}>
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
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <div className="login-link">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;