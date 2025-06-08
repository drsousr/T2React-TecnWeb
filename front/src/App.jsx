import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrevisaoClima from './components/PrevisaoClima';
import './styles/PrevisaoClima.css';

import Login from './components/Login';
import './styles/Login.css';


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/previsaoclima' element={<PrevisaoClima />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
