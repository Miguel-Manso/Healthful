import { Hamburger, MenuLink, Menu, Nav, ImagemNav, Imagemlogin } from "./style.jsx";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo_small.svg"
import profile from "../../Assets/Usuário.svg"
import { useState } from "react";
import { ButtonCompAlter } from "../Button/style.jsx";



export function Navbar () {
    const [Aberto, SetAberto] = useState(false)
    return (
        <Nav>

            <Link to="/">
            <ImagemNav 
            src={logo}>
            </ImagemNav>
            </Link>
           

            <Hamburger onClick={() => SetAberto(!Aberto)}>
            <span />
            <span />
            <span />

<<<<<<< HEAD
           
=======
            </Hamburger>

            <Menu Aberto={Aberto}>
                <MenuLink><Link to="/artigos" style={{ textDecoration: 'none' }}>Artigos</Link></MenuLink>
                <MenuLink><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></MenuLink>
                <MenuLink><Link to="/cadastro" style={{ textDecoration: 'none' }}>Cadastro</Link></MenuLink>   
            <ImagemNavProfile
            src={profile}>    
            </ImagemNavProfile>
            </Menu>
>>>>>>> 69fe798166c3b9603d3f920626bf42fb624c6bef

       

<<<<<<< HEAD
            <Hamburger onClick={() => SetAberto(!Aberto)}>
            <span />
            <span />
            <span />
            </Hamburger>
            <Menu Aberto={Aberto}>
                <MenuLink><Link to="/CriarArtigo" style={{ textDecoration: 'none' }}>Criar artigo</Link></MenuLink>
                <MenuLink><Link  to="/login" ><Imagemlogin src={profile}></Imagemlogin></Link></MenuLink>
            </Menu>
=======
>>>>>>> 69fe798166c3b9603d3f920626bf42fb624c6bef
        </Nav>
    ) 
}


