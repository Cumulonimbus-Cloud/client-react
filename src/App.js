import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Chat } from './pages';
import { KakaoRedirect } from './components/login';
import Header from './components/header/Header';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [hasGradCard, setHasGradCard] = React.useState(localStorage.getItem('hasGradCard') || false);
  const [accessToken, setAccessToken] = React.useState(localStorage.getItem('kakaoToken') || '');

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
      localStorage.setItem('kakaoToken', accessToken);
    } else {
      localStorage.removeItem('kakaoToken');
    }
  }, [accessToken]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main 
          isLogin={isLogin}
          hasGradCard={hasGradCard}
          accessToken={accessToken}
          setHasGradCard={setHasGradCard}/>} />
        <Route path="/kakao-redirect"
          element={<KakaoRedirect
                    setIsLogin={setIsLogin}
                    setAccessToken={setAccessToken}
                    isLogin={isLogin}
                    setHasGradCard={setHasGradCard} />} />
        <Route path="/chat" element={<Chat accessToken={accessToken} />} />
        <Route path='*'
          element={<KakaoRedirect
            setIsLogin={setIsLogin}
            setAccessToken={setAccessToken}
            isLogin={isLogin}
            setHasGradCard={setHasGradCard} />} />
      </Routes>
    </div>
  );
}

export default App;
