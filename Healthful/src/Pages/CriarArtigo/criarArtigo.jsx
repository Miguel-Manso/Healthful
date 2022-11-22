
import { Container, But, Butt, Butto, Inputm, ContainerInput, Separador} from "./style.jsx"
import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { useState } from "react";
import { TextEditor } from "../../Components/TextEditor/textEditor.jsx";
import { Jacoba } from "../../Components/Dropdown/Dropdown.jsx";
import Button from "../../Components/Button/button.jsx";









export function CriarArtigo(){
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState("Categoria")

    return(
    <>
    <Navbar />
        <Container>
          
          
              
                
                <ContainerInput>
                    <Inputm placeholder="Título"/>
                    <Separador/>
                    <TextEditor style={{}} setValue={setValue}/>
                </ContainerInput>
               
                <Butto>
                    <Butt>
                    <Jacoba selected={selected} setSelected={setSelected}/> 
                    </Butt>
                    <Button estilo="6" conteudo='Enviar para revisão'/>
                </Butto>
                
              
          
          
        </Container>
        <Footer />

        </>
    )
} 