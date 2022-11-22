
import { Container, Buttons, InputTitle, ContainerInput, Separador} from "./style.jsx"
import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { useState, useEffect } from "react";
import axios from 'axios';
import { TextEditor } from "../../Components/TextEditor/textEditor.jsx";
import Button from "../../Components/Button/button.jsx";
import { DropdownComp } from "../../Components/Dropdown/dropdown.jsx";









export function CriarArtigo(){

  const [ register, setRegister ] = useState([])
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState("Categoria")

  useEffect(() => {
    axios.post("http://localhost:4000/postagem/novo")
    .then((response) => {
      setRegister(response.data)
    })
    .catch(() => {
        console.log("deu merda porra!!")
    })
}  )

    return(
    <>
    <Navbar />
        <Container>
          
          
              
                
                <ContainerInput>
                    <Inputm placeholder="Título"/>
                    <Separador/>
                    <TextEditor style={{}} setValue={setValue}/>
                </ContainerInput>
               

                <Buttons>
                    <DropdownComp link1='/login' link2='/cadastro' link3='/perfil' 
                conteudo1='Entrar' conteudo2='Cadastrar' conteudo3='Perfil'
                selected={selected} style={{ textDecoration: 'none' }} setSelected={setSelected}/> 
                <Button estilo="6" conteudo='Enviar para revisão'/>
                </Buttons>

                
              
          
          
        </Container>
        <Footer />

        </>
    )
} 