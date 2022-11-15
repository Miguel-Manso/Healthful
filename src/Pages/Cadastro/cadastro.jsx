import { ButtonCadastro, ContainerCadastro, InputCadastro, CadastroBox, TituloCadastro, ButtonEntrar, ImagemCadastro, ParagraphCadastro, LinhaHorizontal, IconsContainer} from "./style.jsx"
import Logo from "../../Assets/logo_small.svg"
import Input from "../../Components/Input/input.jsx"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../Components/Button/button.jsx"
import Axios from 'axios'
import { useState } from "react";
import Icon from "../../Components/IconComp/icon.jsx"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"


export function Cadastro(){

    const[values, setValues] = useState();
    const navigate = useNavigate()
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () =>{
        Axios.post("http://localhost:4000/usuario/novo", {
            emailUser: values.email,
            senhaUser: values.senha,
            nomeUser: values.nome
                
                
            }).then(navigate('/login', {replace: true}))
    }

    return(
        <ContainerCadastro>
        <CadastroBox>

        <Link to="/">
        <ImagemCadastro src={Logo}> 
        </ImagemCadastro>
        </Link>

        <TituloCadastro>Crie Sua Conta!</TituloCadastro>  

        <InputCadastro>
            <Input onChange={HandleChangeValues} Id="nome" Name="nome" type="text" placeholder="Nome"/>
            <Input onChange={HandleChangeValues} Id="senha" Name="senha" type="password" placeholder="Senha"/>
            <Input onChange={HandleChangeValues} Id="email" Name="email" type="text" placeholder="Email"/>
        </InputCadastro>

        <ButtonCadastro>
        <Button onClick={()=>HandleClickButton()} conteudo="Cadastrar" estilo="2" type="button"/>
        <ParagraphCadastro>Já Tem Uma Conta?</ParagraphCadastro>
        <Link to="/login"  style={{ textDecoration: 'none', display: 'flex',width: '60%', justifyContent: 'center' }}>
        <ButtonEntrar>
        <Button onClick={()=>HandleClickButton()} conteudo="Entre" estilo="1" type="button"/>
        </ButtonEntrar>
        </Link>
        </ButtonCadastro>
        
        <LinhaHorizontal />
        <IconsContainer>
            <Icon estilo="1" conteudo={<FaFacebookF />}></Icon>
            <a target="blank" href="https://www.instagram.com/healthful.oficial/"> <Icon estilo="2" conteudo={<FaInstagram />}></Icon></a>
            <Icon conteudo={<FaTwitter />}></Icon>
        </IconsContainer>
       
        

        </CadastroBox>
        </ContainerCadastro>
    )
}