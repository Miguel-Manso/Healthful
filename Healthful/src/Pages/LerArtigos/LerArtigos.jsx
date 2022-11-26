import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Footer } from "../../Components/Footer/footer.jsx";
import { Container, TituloLerArtigo, ConteudoArtigo } from "./Styled.jsx";

export function LerArtigos () {
  return (
    <>
      <Navbar />

      <Container>
        <TituloLerArtigo>

        </TituloLerArtigo>
        
        <ConteudoArtigo>

        </ConteudoArtigo>
      </Container>

      <Footer />
    </>
  )
}
