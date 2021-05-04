import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from './components/ChatFeed';
import { LoginForm } from './components/LoginForm';
import './styles/App.css';

export const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />;

    return (
        //Add new Users + Credentials here https://chatengine.io/
        <ChatEngine
            height="100vh"
            projectID="6e893b73-280d-40ca-9ef4-a1eb2ab50e0a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};