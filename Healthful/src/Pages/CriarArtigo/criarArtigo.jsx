
import { Container, Buttons, InputTitle, ContainerInput, Separador,Content} from "./style.jsx"
import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { useState } from "react";
import { TextEditor } from "../../Components/TextEditor/textEditor.jsx";
import Button from "../../Components/Button/button.jsx";
import { DropdownComp } from "../../Components/Dropdown/dropdown.jsx";
import Axios from 'axios'
import { Link } from "react-router-dom";



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

                <Content>
              
                
                <ContainerInput>
                    <InputTitle onChange={HandleChangeValues} name="titulo" placeholder="Título"/>
                    <Separador/>
                    <TextEditor onChange={HandleChangeValues}  style={{}} setValue={setARtigo}/>
                </ContainerInput>
               

                <Buttons>
                    <DropdownComp 
                    conteudo1='Boa Alimentação' conteudo2='Esportes' conteudo3='Yoga' conteudo4='Nutrição'
                    conteudo5='Musculação' conteudo6='Meditação' conteudo7='Calistenia'
                    selected={selected} style={{ textDecoration: 'none' }} setSelected={setSelected}/>
                    
                        <Button onClick={()=>HandleClickButton()} estilo="6" 
                        conteudo={<Link to={{pathname: `/` }} style={{ textDecoration: 'none' }}>Enviar para revisão</Link>}>
                        </Button>
                   
                </Buttons>

                </Content>
              
          <Footer />
        </Container>
   

        </>
    )
} 