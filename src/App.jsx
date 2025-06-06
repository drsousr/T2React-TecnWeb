
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import PrevisaoClima from './components/PrevisaoClima';
import Login from './components/Login';

import './styles/Header.css';
import './styles/Section.css';
import './styles/PrevisaoClima.css';
import './styles/login.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/previsaoclima' element={<PrevisaoClima />} />
        <Route path='/home' element={
          <>
            <Header />
            <Section />
          </>
        } />
        <Route path='/' element={<Navigate to="/previsaoclima" replace />} />
        <Route path='*' element={<h1>Rota não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;