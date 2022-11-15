import { Hamburger, MenuLink, Menu, Nav, ImagemNav, ImagemNavProfile, } from "./style.jsx";
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

            </Hamburger>

            <Menu Aberto={Aberto}>
                <MenuLink><Link to="/artigos" style={{ textDecoration: 'none' }}>Artigos</Link></MenuLink>
                <MenuLink><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></MenuLink>
                <MenuLink><Link to="/cadastro" style={{ textDecoration: 'none' }}>Cadastro</Link></MenuLink>   
            <ImagemNavProfile
            src={profile}>    
            </ImagemNavProfile>
            </Menu>

       

        </Nav>
    ) 
}


