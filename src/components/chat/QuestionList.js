import React, { useState, useLayoutEffect } from 'react';
import ChatElem from './ChatElem';
import './QuestionList.css';

function QuestionList({ chatContainerRef }) {
  const [chats, setChats] = useState([initialBotMessage]);
  const [showQuestions, setShowQuestions] = useState(true);

  useLayoutEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const handleQuestionClick = (clickedQuestion) => {
    const newChats = [
      ...chats,
      clickedQuestion,
      { message: `${clickedQuestion.message}에 대한 대답입니다.`, type: 'bot', date: new Date().toISOString() }
    ];
    setChats(newChats);
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

  return (
    <div>
      {chats.map((chat, idx) => (
        <div className='wrapper-hidden'>
            <ChatElem key={idx} chat={{ ...chat, type: chat.type === 'bot' ? 'bot' : 'user' }} onClick={handleQuestionClick} />
        </div>
      ))}
      <div className='wrapper-hidden'>
        {showQuestions && questionList.map((question, idx) => (
          <ChatElem key={idx} chat={question} onClick={handleQuestionClick} />
        ))}
      </div>
      {!showQuestions && (
        <div className='wrapper-hidden'>
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
  message: '안녕하세요! 인덕봇입니다 🦆 무엇이 궁금하신가요?',
  type: 'bot',
  date: new Date().toISOString()
};

const askAgainMessage = {
  message: '다시 질문하기',
  type: 'question',
  date: new Date().toISOString()
};

const questionList = [
  {
      message: "아직 수강하지 않은 전공 필수 과목이 뭐야?",
      type: "question",
      date: "2021-10-01 12:00:00",
  },
  {
      message: "아직 수강하지 않은 전공 필수 과목이 뭐야?",
      type: "question",
      date: "2021-10-01 12:00:00",
  },
  {
      message: "커리큘럼을 참조해서 졸업하기 위해 필요한 교양과목 중에서 안들은 과목이 있다면 과목 이름을 알려줘",
      type: "question",
      date: "2021-10-01 12:00:00",
  },
  {
      message: "이번 학기 몇 학점 들었는지 과목 명이랑 같이 알려줘",
      type: "question",
      date: "2021-10-01 12:00:00",
  },
  {
      message: "내 성적표와 커리큘럼 바탕으로 다음에 들을 과목 추천해줘",
      type: "question",
      date: "2021-10-01 12:00:00",
  }
];