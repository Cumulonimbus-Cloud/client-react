import { XIcon } from "../../assets/header";
import ContentElem from "./ContentElem";
import './ModalContent.css';

function DescriptionContent({ closeModal }) {

  return (
    <div>
      <XIcon id="x-icon" onClick={closeModal} />

      <h2 id="modal-title">성적표를 통해 편리하게<br/>정보를 찾아보세요!</h2>
      <div id="modal-subtitle">다음과 같은 정보를 알 수 있어요<br/></div>

      <ContentElem title="인하대학교 학칙" content="질문과 관련된 학칙에 대해서 알 수 있어요"/>
      <ContentElem title="학사 일정" content="학사 일정 및 학사 관련 정보를 알 수 있어요"/>
      <ContentElem title="인하대학교 공지사항" content="관련된 공지사항과 링크를 알 수 있어요"/>
    </div>
  );
}

export default DescriptionContent;