import React, { useEffect, useRef } from 'react';
import { QuestionList } from '../components/chat';
import './Chat.css';

function Chat({ accessToken }) {
    const [chatList, setChatList] = React.useState([]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        fetch('http://13.214.147.170:8080/api/v1/chat', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    return (
        <div id="chat-wrapper" ref={chatContainerRef}>
            <QuestionList chatContainerRef={chatContainerRef} />
        </div>
    );
};

export default Chat;