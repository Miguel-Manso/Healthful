import { ButtonLogin, ContainerLogin, InputLogin, LoginBox, ButtonCadastrar, TituloLogin, ImagemLogin, ParagraphLogin, LinhaHorizontal, IconsContainer} from "./style.jsx"
import Logo from "../../Assets/logo_small.svg"
import Input from "../../Components/Input/input.jsx"
import Button from "../../Components/Button/button.jsx"
import { Link, useNavigate } from "react-router-dom"
import Axios from 'axios'
import { useState } from "react";
import Icon from "../../Components/IconComp/icon.jsx"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";





export function Login(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };
    const navigate = useNavigate()

    const HandleClickButton = () =>{
        Axios.post("http://localhost:4000/usuario/login", {
                emailUser: values.email,
                senhaUser: values.senha
            }).then((response) =>{
                console.log(response)
                if (values.email == response.data[0].emailUser && values.senha ==  response.data[0].senhaUser){
                  navigate('/', {replace: true})
                }
            })
    }

    return(
        <ContainerLogin>
        <LoginBox>

        <Link to="/">
        <ImagemLogin src={Logo}> 
        </ImagemLogin>
        </Link>

        <TituloLogin>Bem Vindo</TituloLogin>  

        <InputLogin>
            <Input onChange={HandleChangeValues} Id="email" Name="email" type="text" placeholder="Email"/>
            <Input onChange={HandleChangeValues} Id="senha" Name="senha" type="password" placeholder="Senha"/>
        </InputLogin>

        <ButtonLogin>
        <Button onClick={()=>HandleClickButton()} conteudo="Entrar" estilo="2" type="button"/>
        <ParagraphLogin>Que Tal Criar Sua Conta?</ParagraphLogin>
        </ButtonLogin>
        <Link to="/cadastro" style={{ textDecoration: 'none', display: 'flex',width: '60%', justifyContent: 'center' }} >
        <ButtonCadastrar>
        <Button conteudo="Cadastre-se" estilo="1" type="button"/>
        </ButtonCadastrar>
        </Link>

        <LinhaHorizontal />

        <IconsContainer>
            <Icon estilo="1" conteudo={<FaFacebookF />}></Icon>
            <a target="blank" href="https://www.instagram.com/healthful.oficial/"> <Icon estilo="2" conteudo={<FaInstagram />}></Icon></a>
            <Icon conteudo={<FaTwitter />}></Icon>
            
            
        </IconsContainer>

        </LoginBox>
        </ContainerLogin>
    )
} 