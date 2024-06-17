import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages';
import { KakaoRedirect } from './components/login';
import Header from './components/header/Header';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main isLogin={isLogin} />} />
        <Route path="/kakao-redirect"
          element={<KakaoRedirect
                    setIsLogin={setIsLogin}
                    setAccessToken={setAccessToken}
                    isLogin={isLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
