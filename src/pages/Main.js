import { Description, MainContents } from "../components/main";
import { LoginBtn } from "../components/login";
import "./Main.css";

function Main({ isLogin, hasGradCard }) {
  console.log(isLogin);
  return (
    <div id="main-wrapper">
        <Description />
        {isLogin ? <MainContents hasGradCard={hasGradCard} /> : <LoginBtn />}
    </div>
  );
}

export default Main;