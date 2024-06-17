import { ChattingBtn, EditBtn } from './buttons';
import { ExampleQuestion, UploadBtn } from './index';
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