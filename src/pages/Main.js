import { Description, MainContents, LoginBtn } from "../components/main";
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