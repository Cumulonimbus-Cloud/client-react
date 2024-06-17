import { ChattingBtn, EditBtn, UploadBtn } from './buttons';
import { ExampleQuestion } from './index';
import './MainContents.css';

function MainContents({ hasGradCard, accessToken, setHasGradCard }) {
  return (
    <div id="bottom-contents">
        <ExampleQuestion />
        {hasGradCard ? 
          <div id='main-btns-wrapper'>
            <EditBtn />
            <ChattingBtn />
          </div>
         : <UploadBtn accessToken={accessToken} setHasGradCard={setHasGradCard} />}
    </div>
  );
}

export default MainContents;