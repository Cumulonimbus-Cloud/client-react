import { UploadIcon } from "../../../assets/main";
import "./UploadBtn.css";

function UploadBtn() {
  return (
    <button id="upload-btn">
      <div id="upload-btn-contents">
        <UploadIcon id="upload-btn-icon" />
        <div id="upload-btn-title">참고용 성적표 업로드</div>
      </div>
    </button>
  );
}

export default UploadBtn;