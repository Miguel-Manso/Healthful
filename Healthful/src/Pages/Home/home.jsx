import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import loguinha from "../../Assets/logo.svg";
import { Container, Seção, Titulos, Titulo, Cartão, TextoCartão, TituloCartão, ImagemCartão} from "./style.jsx";


export function Home () {
  return (
    <>
      <Container>
        <Navbar />
            
          <Seção>
            <Titulos>
              <Titulo>
                “Que desgraça é para o
                  <br />  
                homem envelhecer sem
                  <br /> 
                nunca ver a beleza e a força
                  <br /> 
                do que o seu corpo é capaz”
              </Titulo>
              <span>Sócrates</span >
            </Titulos> 
          </Seção>

          <Cartão>
            <TextoCartão>
              Seja bem-vindo à plataforma de artigos voltado à saúde.

              <ImagemCartão 
                src={loguinha}>
              </ImagemCartão>
            </TextoCartão>

            <TituloCartão>
              O QUE É A HEALTHFUL ?
            </TituloCartão>

            <TextoCartão>
              A HEALTHFUL É UMA PLATAFORMA DE ARTIGOS VOLTADO AO SETOR DA SAÚDE, COM O FOCO EM MELHORIA DE VIDA. ACESSE ABAIXO PARA LER NOSSOS ARTIGOS OU CRIE UM ARTIGO.
            </TextoCartão>

            <TituloCartão>
              CRIE OU LEIE ARTIGOS
            </TituloCartão>

          </Cartão>
                    
        <Footer />
      </Container>
    </>
  )
}