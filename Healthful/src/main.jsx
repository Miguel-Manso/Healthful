import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Pages/Home/home.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from './Styles/global.jsx'
import { Login } from './Pages/Login/login.jsx';
import { Cadastro } from './Pages/Cadastro/cadastro.jsx';
<<<<<<< HEAD
import { CriarArtigo } from './Pages/CriarArtigo/CriarArtigo.jsx'
=======
import { Artigos } from './Pages/Artigos/artigos.jsx';
import { Perfil } from './Pages/Perfil/perfil.jsx';

>>>>>>> 69fe798166c3b9603d3f920626bf42fb624c6bef




ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    <Router>
      <Routes>
<<<<<<< HEAD
        
=======
      <Route path="/perfil" element={ <Perfil />} />
        <Route path="/artigos" element={<Artigos />} />
>>>>>>> 69fe798166c3b9603d3f920626bf42fb624c6bef
        <Route path="/" element={<Home />} />
        <Route path="/CriarArtigo" element={<CriarArtigo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
    </Router>

    <GlobalStyle />
  </React.StrictMode>
)
