import { KakaoIcon } from "../../assets/main";
import './LoginBtn.css';

function LoginBtn() {
  return (
    <button id="login-btn">
      <div id="login-btn-contents">
        <KakaoIcon id="kakao-icon" />
        <div id="login-btn-title">카카오톡으로 로그인</div>
      </div>
    </button>
  );
}

export default LoginBtn;