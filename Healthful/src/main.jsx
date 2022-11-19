import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Pages/Home/home.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from './Styles/global.jsx'
import { Login } from './Pages/Login/login.jsx';
import { Cadastro } from './Pages/Cadastro/cadastro.jsx';
import { Artigos } from './Pages/Artigos/artigos.jsx';
import { Perfil } from './Pages/Perfil/perfil.jsx';
import { CriarArtigo } from './Pages/CriarArtigo/criarArtigo.jsx';
import { Pesquisa } from './Pages/Pesquisa/pesquisa.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/criar-artigo" element={ <CriarArtigo/>} />
        <Route path="/perfil" element={ <Perfil />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pesquisar" element={<Pesquisa />} />

      </Routes>
    </Router>

    <GlobalStyle />
  </React.StrictMode>
)
