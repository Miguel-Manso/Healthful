import { ButtonCadastro, ContainerCadastro, InputCadastro, CadastroBox, TituloCadastro, ButtonEntrar, ImagemCadastro, ParagraphCadastro} from "./style.jsx"
import Logo from "../../Assets/logo.svg"
import Input from "../../Components/Input/input.jsx"
import Button from "../../Components/Button/button.jsx"
import Axios from 'axios'
import { useState } from "react";


export function Cadastro(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () =>{
        Axios.post("http://localhost:3001/usuario/cadastro", {
                email: values.email,
                senha: values.senha
            }).then((response) =>{
                console.log(response)
                if (values.email == response.data[0].email && values.senha ==  response.data[0].senha){
                //  navigate('/generos', {replace: true})
                console.log('deu certo')
                }
            })
    }

    return(
        <ContainerCadastro>
        <CadastroBox>

        <ImagemCadastro src={Logo}> 
        </ImagemCadastro>

        <TituloCadastro>Crie Sua Conta!</TituloCadastro>  

        <InputCadastro>
            <Input onChange={HandleChangeValues} Id="email" Name="email" type="text" placeholder="Email"/>
            <Input onChange={HandleChangeValues} Id="senha" Name="senha" type="password" placeholder="Senha"/>
        </InputCadastro>

        <ButtonCadastro>
        <Button onClick={()=>HandleClickButton()} conteudo="Cadastrar"  type="button"/>
        <ParagraphCadastro>Já Tem Uma Conta?</ParagraphCadastro>
        </ButtonCadastro>
        
        <ButtonEntrar>
        <Button onClick={()=>HandleClickButton()} conteudo="Entre" estilo="1" type="button"/>
        </ButtonEntrar>
        

        </CadastroBox>
        </ContainerCadastro>
    )
}