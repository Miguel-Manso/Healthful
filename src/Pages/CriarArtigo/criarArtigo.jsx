
import { Container, But, Butt, Butto, Inputm, ContainerInput, Separador} from "./style.jsx"
import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { useState } from "react";
import { TextEditor } from "../../Components/TextEditor/textEditor.jsx";
import { Jacoba } from "../../Components/Dropdown/Dropdown.jsx";









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

                    <But>
                      Enviar para revisão
                    </But>
                </Butto>
                
              
          
          
        </Container>
        <Footer />

        </>
    )
} 