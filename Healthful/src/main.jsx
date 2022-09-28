import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Cadastro } from './Pages/Cadastro/home.jsx'
import { Home } from './Pages/Home/home.jsx'
import { Login } from './Pages/Login/login.jsx'
import GlobalStyle from './Styles/global.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalStyle />

    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/sign-up" element={<Cadastro />} /> 
      </Routes>
    </Router>

  </React.StrictMode>
)
