import { TranscriptIcon } from "../../assets/main";
import "./Description.css";

function Description() {
  return (
    <div id="main-description">
        <TranscriptIcon id="main-transcript-icon" />
        <div id="main-description-content">성적표를 업로드하고<br/>궁금증을 해결해보세요</div>
    </div>
  );
}

export default Description;