import './ChatElem.css';

function ChatElem({ chat }) {
  return (
    <div className={`chat-elem-wrappers ${chat.type}`}>
        <div className={`chat-elems ${chat.type}`}>
            {chat.message}
        </div>
    </div>
  );
}

export default ChatElem;