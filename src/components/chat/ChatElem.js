import './ChatElem.css';

function ChatElem({ chat, key, onClick }) {
  return (
    <div className={`chat-elem-wrappers ${chat.type}`} onClick={chat.type === 'question' ? () => onClick(chat) : null}>
        <div className={`chat-elems ${chat.type}`}>
            {chat.message}
        </div>
    </div>
  );
}

export default ChatElem;