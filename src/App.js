import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Chat } from './pages';
import { KakaoRedirect } from './components/login';
import Header from './components/header/Header';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [hasGradCard, setHasGradCard] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState("");

  console.log(process.env.REACT_APP_K_REST_API);

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
                    isLogin={isLogin} />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='*'
          element={<KakaoRedirect
            setIsLogin={setIsLogin}
            setAccessToken={setAccessToken}
            isLogin={isLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
