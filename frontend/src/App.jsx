import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import NovaViagem from './pages/NovaViagem';
import RoteiroViagem from './pages/RoteiroViagem';
import Destinos from './pages/Destinos';
import DetalheDestino from './pages/DetalhesDestino';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-viagem" element={<NovaViagem />} />
        <Route path="/roteiro/:id" element={<RoteiroViagem />} />
        <Route path="/viagem/:id/destinos" element={<Destinos />}/>
        <Route path="destino/:id" element={<DetalheDestino />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;