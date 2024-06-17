import { ChattingBtn, EditBtn, UploadBtn } from './buttons';
import { ExampleQuestion } from './index';
import './MainContents.css';

function MainContents({ hasGradCard }) {
  return (
    <div id="bottom-contents">
        <ExampleQuestion />
        {hasGradCard ? 
          <div id='main-btns-wrapper'>
            <EditBtn />
            <ChattingBtn />
          </div>
         : <UploadBtn />}
    </div>
  );
}

export default MainContents;