import React, { useEffect } from "react";
import { LogoIcon } from "../../assets/header";
import { Navigate } from "react-router-dom";
import './KakaoRedirect.css';

function KakaoRedirect({ setIsLogin, setAccessToken, isLogin }) {
    //const [isKakaoRedirect, setIsKakaoRedirect] = React.useState(false);

    const socialType = "kakao";
    const code = new URLSearchParams(window.location.search).get("code");
    //const code = ""
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }

    useEffect(() => {
        fetch(`http://47.128.3.240:8080/api/v1/auth/${socialType}/login?code=${code}`, {
            method: "POST",
            headers: headers,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setAccessToken(data.result.accessToken);
            setIsLogin(true);

        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    return (
        <>
            {isLogin?
                <Navigate to="/" />
            : <div id="login-loading">
                <LogoIcon id="login-loadin-icon" />
                <div id="login-loading-content">카카오 로그인 중입니다<br/>잠시만 기다려주세요</div>
              </div>}
        </>
    );
}

export default KakaoRedirect;