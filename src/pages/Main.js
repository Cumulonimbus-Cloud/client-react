import { Description, MainContents } from "../components/main";
import { LoginBtn } from "../components/login";
import "./Main.css";
import { useEffect } from "react";

function Main({ isLogin, hasGradCard, accessToken, setHasGradCard, setIsChatOpen }) {
  useEffect(() => {
    setIsChatOpen(false);
  });
  
  return (
    <div id="main-wrapper">
        <Description />
        {isLogin ? <MainContents hasGradCard={hasGradCard} accessToken={accessToken} setHasGradCard={setHasGradCard} setIsChatOpen={setIsChatOpen} /> 
        : <LoginBtn />}
    </div>
  );
}

export default Main;