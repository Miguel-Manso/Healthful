import { Hamburger, MenuLink, Menu, Nav, ImagemNav, ImagemNavProfile, MenuNav } from "./style.jsx";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo_small.svg"
import profile from "../../Assets/Usuário.svg"
import { useState } from "react";
import Icon from "../../Components/IconComp/icon.jsx"
import { FiUser } from 'react-icons/Fi'
import { NavDrop } from "../Nav Dropdown/dropdown.jsx";




export function Navbar () {
    const ProfileImg = {
        'img': <Icon estilo="4" conteudo={<FiUser /> }/>

    }

    const [Aberto, SetAberto] = useState(false)
    const [selected, setSelected] = useState(ProfileImg.img)
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
                <MenuLink><Link to="/criarartigo" style={{ textDecoration: 'none' }}>Crie Artigos</Link></MenuLink>
                <MenuLink><Link to="/" style={{ textDecoration: 'none' }}>Pesquisar</Link></MenuLink>   
              
            </Menu>
            <MenuNav>
                <NavDrop selected={selected} />
            </MenuNav>
       

        </Nav>
    ) 
}


