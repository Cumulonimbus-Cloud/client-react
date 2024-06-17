import { ChattingIcon } from "../../../assets/main";
import './ChattingBtn.css';

function ChattingBtn() {
  return (
    <button id="chatting-btn">
      <div id="chatting-btn-contents">
        <ChattingIcon id="chatting-btn-icon" />
        <div id="chatting-btn-title">채팅하기</div>
      </div>
    </button>
  );
}

export default ChattingBtn;