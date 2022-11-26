import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Footer } from "../../Components/Footer/footer.jsx";
import { Container, TituloLerArtigo, ConteudoArtigo,Tags, Content } from "./Styled.jsx";

export function LerArtigos () {
  return (
    <>
   

      <Container>
           <Navbar />
        <Content>
        <TituloLerArtigo>
            <p>Titulos</p>
        </TituloLerArtigo>
        
        <ConteudoArtigo>
            <p>VADG</p>
        </ConteudoArtigo>

        <Tags>
          <p>dsafs</p>
        </Tags>
        </Content>
        <Footer />
      </Container>
      
    </>
  )
}
