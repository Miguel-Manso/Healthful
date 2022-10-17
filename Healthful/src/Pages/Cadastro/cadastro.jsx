import { ButtonCadastro, ContainerCadastro, InputCadastro, CadastroBox, TituloCadastro, ButtonEntrar, ImagemCadastro, ParagraphCadastro} from "./style.jsx"
import Logo from "../../Assets/logo_small.svg"
import Input from "../../Components/Input/input.jsx"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../Components/Button/button.jsx"
import Axios from 'axios'
import { useState } from "react";


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
        Axios.post("http://localhost:3001/usuario/insert", {
                email: values.email,
                senha: values.senha,
                nome: values.nome
                
                
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
            <Input onChange={HandleChangeValues} Id="email" Name="email" type="text" placeholder="Email"/>
            <Input onChange={HandleChangeValues} Id="senha" Name="senha" type="password" placeholder="Senha"/>
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
        
       
        

        </CadastroBox>
        </ContainerCadastro>
    )
}