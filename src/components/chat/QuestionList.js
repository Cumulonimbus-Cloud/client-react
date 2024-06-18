import React, { useState, useLayoutEffect, useEffect } from 'react';
import ChatElem from './ChatElem';
import './QuestionList.css';
import { LogoWhiteIcon } from '../../assets/header';

function QuestionList({ chatContainerRef, accessToken, chatList }) {
  const [chats, setChats] = useState([initialBotMessage]);
  const [showQuestions, setShowQuestions] = useState(true);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [customQuestion, setCustomQuestion] = useState('');

  useLayoutEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  useEffect(() => {
    if (chatList.length === 0) {
      setChats([initialBotMessage]);
    } else {
      setShowQuestions(false)
      const formattedChats = [{ ...initialBotMessage }];
      chatList.forEach((chat, index) => {
        formattedChats.push({ message: chat.text.S, type: 'user', date: new Date(parseInt(chat.timestamp.N)).toISOString() });
        formattedChats.push({ message: chat.message.S, type: 'bot', date: new Date(parseInt(chat.timestamp.N)).toISOString() });
        if (index < chatList.length - 1) {
          formattedChats.push({ message: '다시 질문하기', type: 'user', date: new Date().toISOString() });
          formattedChats.push(initialBotMessage);
        }
      });
      setChats(formattedChats);
    }
    console.log(chatList)
  }, [chatList]);

  const handleQuestionClick = (clickedQuestion, idx) => {
    const newChats = [
      ...chats,
      clickedQuestion,
      { message: '응답을 기다리는 중입니다...', type: 'bot', date: new Date().toISOString() }
    ];
    setChats(newChats);
    setShowQuestions(false);
    setIsWaitingForResponse(true);

    fetch('http://47.128.3.240:8080/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ chatId: idx+1, etc: null }),
    })
    .then((response) => response.json())
    .then((data) => {
      setChats((prevChats) => {
        const updatedChats = [...prevChats];
        updatedChats.pop();
        updatedChats.push({ message: data.result.answer, type: 'bot', date: new Date().toISOString() });
        return updatedChats;
      });
      setIsWaitingForResponse(false);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching answer:', error);
      setChats((prevChats) => {
        const updatedChats = [...prevChats];
        updatedChats.pop();
        updatedChats.push({ message: '답변을 가져오는데 실패했습니다. 다시 시도해주세요.', type: 'bot', date: new Date().toISOString() });
        return updatedChats;
      });
      setIsWaitingForResponse(false);
    });
    setShowQuestions(false);
  };

  const handleAskAgainClick = () => {
    const newChats = [
      ...chats,
      { message: '다시 질문하기', type: 'user', date: new Date().toISOString() },
      initialBotMessage
    ];
    setChats(newChats);
    setShowQuestions(true);
  };

  const handleOtherQuestionClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setCustomQuestion(event.target.value);
  };

  const handleCustomQuestionSubmit = () => {
    if (customQuestion.trim() === '') return;

    const newChats = [
      ...chats,
      { message: customQuestion, type: 'user', date: new Date().toISOString() },
      { message: '응답을 기다리는 중입니다...', type: 'bot', date: new Date().toISOString() }
    ];
    setChats(newChats);
    setShowInput(false);
    setIsWaitingForResponse(true);

    fetch('http://47.128.3.240:8080/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ chatId: 6, etc: customQuestion }),
    })
    .then((response) => response.json())
    .then((data) => {
      setChats((prevChats) => {
        const updatedChats = [...prevChats];
        updatedChats.pop();
        updatedChats.push({ message: data.result.answer, type: 'bot', date: new Date().toISOString() });
        return updatedChats;
      });
      setIsWaitingForResponse(false);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching answer:', error);
      setChats((prevChats) => {
        const updatedChats = [...prevChats];
        updatedChats.pop();
        updatedChats.push({ message: '답변을 가져오는데 실패했습니다. 다시 시도해주세요.', type: 'bot', date: new Date().toISOString() });
        return updatedChats;
      });
      setIsWaitingForResponse(false);
      setShowInput(false);
    });
    setCustomQuestion('');
    setShowQuestions(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && customQuestion.trim() !== '') {
      handleCustomQuestionSubmit();
    }
  };

  return (
    <div>
      {chats.map((chat, idx) => (
        <div className={`wrapper-hidden ${showInput ? 'showinput' : ''}`} key={idx}>
          <ChatElem chat={{ ...chat, type: chat.type === 'bot' ? 'bot' : 'user' }} />
        </div>
      ))}
      <>
        <div className={`wrapper-hidden ${showInput ? 'showinput' : ''}`}>
          {showQuestions && !showInput && questionList.map((question, idx) => (
            <ChatElem key={idx} chat={question} onClick={() => handleQuestionClick(question, idx)} />
          ))}
        </div>
        <div className={`wrapper-hidden ${showInput ? 'showinput' : ''}`}>
          {showQuestions && !showInput && <ChatElem chat={otherQuestion} onClick={handleOtherQuestionClick} />}
        </div>
        <div>
          {showInput && (
            <div className='input-wrapper fixed-bottom'>
              <input
                type='text'
                value={customQuestion}
                onKeyUp={handleKeyPress}
                onChange={handleInputChange}
                placeholder='질문을 입력하세요...'
              />
              <button
                onClick={handleCustomQuestionSubmit}
                disabled={customQuestion.trim() === ''}>
                <LogoWhiteIcon />
              </button>
            </div>
          )}
        </div>
      </>
      {!showQuestions && !isWaitingForResponse && (
        <div className={`wrapper-hidden ${showInput ? 'showinput' : ''}`}>
          <ChatElem
            key="ask-again"
            chat={askAgainMessage}
            onClick={handleAskAgainClick}
          />
        </div>
      )}
    </div>
  );
}

export default QuestionList;

const initialBotMessage = {
  message: '안녕하세요! 인덕봇입니다 🦆\n무엇이 궁금하신가요?',
  type: 'bot',
  date: new Date().toISOString()
};

const askAgainMessage = {
  message: '다시 질문하기',
  type: 'question',
  date: new Date().toISOString()
};

const otherQuestion = {
  message: '기타 질문',
  type: 'question',
  date: new Date().toISOString()
};

const questionList = [
  {
      message: "수강하지 않은 전공 필수 과목",
      type: "question",
      date: "2021-10-01 12:00:00",
  },
  {
      message: "현재까지 이수한 전공 과목",
      type: "question",
      date: "2021-10-01 12:00:00",
  },
  {
      message: "수강 안 한 교양 과목",
      type: "question",
      date: "2021-10-01 12:00:00",
  },
  {
      message: "이번 학기에 수강한 과목과 총 학점",
      type: "question",
      date: "2021-10-01 12:00:00",
  },
  {
      message: "다음 학기에 수강할 과목 추천",
      type: "question",
      date: "2021-10-01 12:00:00",
  }
];
