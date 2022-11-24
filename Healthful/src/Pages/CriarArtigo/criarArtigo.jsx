
import { Container, Buttons, InputTitle, ContainerInput, Separador} from "./style.jsx"
import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { useState } from "react";
import { TextEditor } from "../../Components/TextEditor/textEditor.jsx";
import Button from "../../Components/Button/button.jsx";
import { DropdownComp } from "../../Components/Dropdown/dropdown.jsx";
import Axios from 'axios'


export function CriarArtigo(){

    const[oi, setARtigo] = useState();
    const [values, setValue] = useState();
    const [selected, setSelected] = useState("Categoria")

   
    console.log(values)
    console.log(oi)
    const HandleChangeValues = (value) =>{
        setValue(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };
    
    const HandleClickButton = () =>{
        Axios.post("http://localhost:4000/postagem/novo/", {
            tituloPost: values.titulo,
            textPost: oi
       
        })
        
    } 

    return(
    <>
    
        <Container>
          <Navbar />
          
              
                
                <ContainerInput>
                    <InputTitle onChange={HandleChangeValues} name="titulo" placeholder="Título"/>
                    <Separador/>
                    <TextEditor onChange={HandleChangeValues}  style={{}} setValue={setARtigo}/>
                </ContainerInput>
               

                <Buttons>
                    <DropdownComp link1='/login' link2='/cadastro' link3='/perfil' 
                    conteudo1='Entrar' conteudo2='Cadastrar' conteudo3='Perfil'
                    selected={selected} style={{ textDecoration: 'none' }} setSelected={setSelected}/> 
                    <Button  onClick={()=>HandleClickButton()} estilo="6" conteudo='Enviar para revisão'/>
                </Buttons>

                
              
          
          <Footer />
        </Container>
   

        </>
    )
} 