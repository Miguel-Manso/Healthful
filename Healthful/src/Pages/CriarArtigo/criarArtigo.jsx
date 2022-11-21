
import { Container, But, Butt, Butto, Inputm, ContainerInput, Separador} from "./style.jsx"
import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { useState, useEffect } from "react";
import axios from 'axios';
import { TextEditor } from "../../Components/TextEditor/textEditor.jsx";
import { Jacoba } from "../../Components/Dropdown/Dropdown.jsx";









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
          
          
              
                
                <ContainerInput onSubmit={() => setRegister()}>
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