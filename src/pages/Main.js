import { Description, MainContents } from "../components/main";
import { LoginBtn } from "../components/login";
import "./Main.css";

function Main({ isLogin, hasGradCard, accessToken, setHasGradCard }) {
  return (
    <div id="main-wrapper">
        <Description />
        {isLogin ? <MainContents hasGradCard={hasGradCard} accessToken={accessToken} setHasGradCard={setHasGradCard} /> 
        : <LoginBtn />}
    </div>
  );
}

export default Main;