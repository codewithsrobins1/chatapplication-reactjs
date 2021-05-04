import React, { useState } from 'react';
import axios from 'axios';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 
            'Project-ID': '6e893b73-280d-40ca-9ef4-a1eb2ab50e0a',
            'User-Name': username,
            'User-Secret': password
        };

        //Get Messages from Chat Engine
        try {
           await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            //If Success, Log In and Store in Local Storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }
        catch (error) {
             //If Failure, Use Different Credentials
            setError('Oops, wrong credentials');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Join Chat</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
};
