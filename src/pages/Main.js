import { Description, MainContents } from "../components/main";
import { LoginBtn } from "../components/login";
import "./Main.css";

function Main({ isLogin }) {
  console.log(isLogin);
  return (
    <div id="main-wrapper">
        <Description />
        {isLogin ? <MainContents /> : <LoginBtn />}
    </div>
  );
}

export default Main;