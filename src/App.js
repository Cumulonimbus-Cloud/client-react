import { Routes, Route } from 'react-router-dom';
import { Main } from './pages';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
