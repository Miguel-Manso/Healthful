import { Hamburger, MenuLink, Menu, Nav, ImagemNav, MenuNav } from "./style.jsx";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo_small.svg";
import { useState } from "react";
import Icon from "../../Components/IconComp/icon.jsx";
import { FiUser } from 'react-icons/Fi';
import { DropdownComp } from "../Dropdown/dropdown.jsx";
import { IoMdAddCircleOutline } from 'react-icons/Io'
import { MdOutlineArticle } from 'react-icons/Md'




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
                <MenuLink><Icon estilo="8" conteudo={<MdOutlineArticle /> }/><Link to="/artigos" style={{ textDecoration: 'none' }}>Artigos</Link></MenuLink>
                <MenuLink><Icon estilo="8" conteudo={<IoMdAddCircleOutline /> }/><Link to="/criar-artigo" style={{ textDecoration: 'none' }}>Crie Artigos</Link></MenuLink>
            </Menu>
           
            <MenuNav>
            <DropdownComp link1='/login' link2='/cadastro' link3='/perfil' 
                conteudo1='Entrar' conteudo2='Cadastrar' conteudo3='Perfil'
                selected={selected} estilo='1' />
            </MenuNav>
       

        </Nav>
    ) 
}


