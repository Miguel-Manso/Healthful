import { Hamburger, MenuLink, Menu, Nav, ImagemNav, ImagemNavProfile, } from "./style.jsx";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo_small.svg"
import profile from "../../Assets/Usuário.svg"
import { useState } from "react";
import { Jacoba } from "../Dropdown/dropdown.jsx";
import Icon from "../../Components/IconComp/icon.jsx"
import { AiOutlineUser } from 'react-icons/ai'




export function Navbar () {
    const ProfileImg = {
        'img': <Icon estilo="2" conteudo={<AiOutlineUser /> }/>

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
                <MenuLink><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></MenuLink>
                <MenuLink><Link to="/cadastro" style={{ textDecoration: 'none' }}>Cadastro</Link></MenuLink>   
                <Jacoba selected={selected} setSelected={setSelected}/>
            <ImagemNavProfile
            src={profile}>    
            </ImagemNavProfile>
            </Menu>

       

        </Nav>
    ) 
}


