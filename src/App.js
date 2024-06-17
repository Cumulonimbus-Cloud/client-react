import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages';
import Header from './components/header/Header';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = React.useState(false);

  console.log(isLogin);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main isLogin={isLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
