import { XIcon } from "../../assets/header";
import ContentElem from "./ContentElem";
import './ModalContent.css';

function DescriptionContent({ closeModal }) {

  return (
    <div>
      <XIcon id="x-icon" onClick={closeModal} />

      <h2 id="modal-title">성적표를 통해 편리하게<br/>정보를 찾아보세요!</h2>
      <div id="modal-subtitle">다음과 같은 정보를 확인할 수 있어요<br/></div>

      <ContentElem title="이수체계도" content="이수체계도 관련 정보와 다음 학기 추천 과목을 알 수 있어요"/>
      <ContentElem title="졸업요건 확인" content="수강하지 않은 필수 과목과 졸업까지 남은 학점을 알 수 있어요"/>
      <ContentElem title="수강 내역 분석" content="현재 이수한 과목과 학점 관련 정보를 알 수 있어요"/>
    </div>
  );
}

export default DescriptionContent;