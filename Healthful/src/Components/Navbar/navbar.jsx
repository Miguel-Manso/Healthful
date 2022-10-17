import { Hamburger, MenuLink, Menu, Nav, ImagemNav, } from "./style.jsx";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg"
import { useState } from "react";



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
                <MenuLink><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></MenuLink>
                <MenuLink><Link to="/cadastro" style={{ textDecoration: 'none' }}>Cadastro</Link></MenuLink>
                
            </Menu>
        </Nav>
    ) 
}


