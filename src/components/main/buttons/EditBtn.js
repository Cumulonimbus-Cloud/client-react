import { UploadIcon } from "../../../assets/main";
import './EditBtn.css';

function EditBtn({ onClick }) {
  return (
    <button id="edit-btn">
      <div id="edit-btn-contents">
        <UploadIcon id="edit-btn-icon" />
        <div id="edit-btn-title">성적표 수정</div>
      </div>
    </button>
  );
}

export default EditBtn;