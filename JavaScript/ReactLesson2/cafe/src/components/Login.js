import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Alert from "./Alert";
import CurrentUserContext from "../context/CurrentUserContext";
import "./Login.css";

function Login(){
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [apiError, setApiError] = useState('');
    const navigate = useNavigate();

    const login = async(event) => {
        event.preventDefault(); // use reactjs method, not default js
        try {
            const result = await axios.post('/api/auth/login', {username, password});
            setCurrentUser(result.data);
            navigate('/');
        } catch (error) {
            console.error('Error logging in: ', error);
            setApiError(error?.response?.data?.message || 'Unknown error');
        }
    };

    return (
        <div className='login-component'>
            <Alert  visible={!!apiError} type="error">
                <p>There was an error logging in.</p>
                <p>{apiError}</p>
                <p>Please try again</p>
            </Alert>
            <h2>Login</h2>
            <form onSubmit={login}>
                <div>
                    <label htmlFor="username">Username
                        <input
                            type="text"
                            id="username"
                            value={username}
                            autoComplete="username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="password">Password
                        <input
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </div>
    )
}

export default Login;