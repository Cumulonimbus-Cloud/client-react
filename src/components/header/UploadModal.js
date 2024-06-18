import { XIcon } from "../../assets/header";
import './ModalContent.css';

function EditModal({ closeModal }) {
  return (
    <div>
      <XIcon id="x-icon" onClick={closeModal} />
      <h2 id="modal-title">성적표 업로드 완료됐습니다 🦆</h2>
      <div id="modal-subtitle">이제 인덕봇에게 질문하러 가봅시다<br/></div>
    </div>
  );
}

export default EditModal;