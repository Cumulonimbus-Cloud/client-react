import './ChatElem.css';

function ChatElem({ chat, key, onClick }) {
  const formattedMessage = chat.message ? chat.message.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  )) : null;

  return (
    <div className={`chat-elem-wrappers ${chat.type}`} onClick={chat.type === 'question' ? () => onClick(chat) : null}>
      <div className={`chat-elems ${chat.type}`}>
        {formattedMessage}
      </div>
    </div>
  );
}

export default ChatElem;