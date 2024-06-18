import { KakaoIcon } from "../../assets/main";
import './LoginBtn.css';

const kakaoURL = `kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_K_REST_API}&redirect_uri=http://inha-team-04-s3.s3-website-ap-southeast-1.amazonaws.com/kakao-redirect&response_type=code`

function LoginBtn() {
    const handleKakaoLogin = () => {
        window.location.href = `https://${kakaoURL}`;
    }

    return (
        <button id="login-btn" onClick={handleKakaoLogin}>
            <div id="login-btn-contents">
                <KakaoIcon id="kakao-icon" />
                <div id="login-btn-title">카카오톡으로 로그인</div>
            </div>
        </button>
    );
}

export default LoginBtn;