import React, { useEffect, useRef } from 'react';
import { QuestionList } from '../components/chat';
import './Chat.css';

function Chat({ accessToken, setIsChatOpen }) {
    const [chatList, setChatList] = React.useState([]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        fetch('http://47.128.3.240:8080/api/v1/chat', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setChatList(data.result.chatHistory);
        })
        .catch((error) => {
            console.error(error);
        })
        setIsChatOpen(true);
    }, [])

    return (
        <div id="chat-wrapper" ref={chatContainerRef}>
            <QuestionList chatContainerRef={chatContainerRef} chatList={chatList} accessToken={accessToken} />
        </div>
    );
};

export default Chat;