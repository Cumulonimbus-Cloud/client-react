import { ChatElem } from '../components/chat';
import './Chat.css';

function Chat() {
  return (
    <div id="chat-wrapper">
        {chatList.map((chat, idx) => {
            return <ChatElem key={idx} chat={chat} />
        })}
    </div>
  );
}

export default Chat;

const chatList = [
    {   message: "안녕하세요! 인덕봇입니다 🦆 무엇이 궁금하신가요?",
        type: "bot",
        date: "2021-10-01 12:00:00",
    },
    {
        message: "아직 수강하지 않은 전공 필수 과목",
        type: "user",
        date: "2021-10-01 12:00:00",
    },
    {
        message: "종합설계를 수강하지 않았습니다.",
        type: "bot",
        date: "2021-10-01 12:00:00",
    },
    {
        message: "계속 질문하기",
        type: "user",
        date: "2021-10-01 12:00:00",
    },
    {   message: "안녕하세요! 인덕봇입니다 🦆\n무엇이 궁금하신가요?",
        type: "bot",
        date: "2021-10-01 12:00:00",
    },
    {
        message: "아직 수강하지 않은 전공 필수 과목",
        type: "question",
        date: "2021-10-01 12:00:00",
    },
    {
        message: "지금까지 이수한 전공 과목",
        type: "question",
        date: "2021-10-01 12:00:00",
    },
    {
        message: "수강 안 한 필요한 교양 필수 과목",
        type: "question",
        date: "2021-10-01 12:00:00",
    },
    {
        message: "이번학기 수강하는 학점",
        type: "question",
        date: "2021-10-01 12:00:00",
    },
    {
        message: "다음 학기에 들을만한 과목 추천",
        type: "question",
        date: "2021-10-01 12:00:00",
    },
]