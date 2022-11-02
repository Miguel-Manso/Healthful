/* Importações de Componentes*/
import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Container, Seção, Titulos, Titulo, 
Cartão, TextoCartão, TituloCartão, ImagemCartão, ImagemCategoria, 
Artigos, TextoArtigos, TextoArtigos2, ImagemArtigo, Botão } from "./style.jsx";
/*______________________________________________________________*/

/* Importação das Imagens | Utilizadas na Healthful*/
import loguinha from "../../Assets/logo.svg";
import Bike from "../../Assets/Bike.svg";
import Caminhar from "../../Assets/Caminhada.svg";
import Flexão from "../../Assets/Flexão.svg";
import Medico from "../../Assets/Medico.svg";
import Alimento from "../../Assets/Alimento.svg";
/*_______________________________________________*/

/* Importação das Imagens | Utilizadas no Artigo*/
import Escrever from "../../Assets/Escrevendo.svg";
import Artigo from "../../Assets/Artigos-favoritos.svg";
import Perfil from "../../Assets/Perfil_do_criador.svg";
import Certificado from "../../Assets/Certificados.svg";
/*_______________________________________________*/

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
              A HEALTHFUL É UMA PLATAFORMA DE ARTIGOS VOLTADO AO
               <br/>
              SETOR DA SAÚDE, COM O FOCO EM MELHORIA DE VIDA.
               <br/>
              ACESSE ABAIXO PARA LER NOSSOS ARTIGOS OU CRIE UM ARTIGO.
              <br/>
              
              <ImagemCategoria src={Bike} />
              <ImagemCategoria src={Caminhar} />
              <ImagemCategoria src={Flexão} />
              <ImagemCategoria src={Medico} />
              <ImagemCategoria src={Alimento} />

            </TextoCartão>

            <TituloCartão>
              CRIE OU LEIE ARTIGOS
            </TituloCartão>

            <Artigos>

                <TextoArtigos2>
                  OS ARTIGOS SERÃO SEPARADOS POR 
                  <br/>
                  CATEGORIAS. DESSE MODO FICA MAIS 
                  <br/>
                  FÁCIL DE ACHO-LÓS ATRAVÉS DA ABA DE 
                  <br/>
                  CATEGORIAS.
                  <ImagemArtigo src={Escrever} />
                </TextoArtigos2>

                <TextoArtigos>
                  VOCÊ TAMBÉM PODE SALVAR 
                  <br/>
                  ARTIGOS E DAR SUA 
                  <br/>
                  OPINIÃO NUM ARTIGO.
                  <ImagemArtigo src={Artigo} />
                </TextoArtigos>

                <TextoArtigos2>
                  SOMENTE PROFISSIONAIS DA SAÚDE PODEM
                  <br/>
                  ESCREVER E PUBLICAR ARTIGOS, COM ISSO
                  <br/>
                  PODEMOS GARANTIR A QUALIDADE E A VALIDEZ 
                  <br/>
                  DOS NOSSOS ARTIGOS.
                  <ImagemArtigo src={Perfil} />
                </TextoArtigos2>

                <TextoArtigos>
                  PARA CRIAR UM ARTIGO VOCÊ DEVE TER UMA <br/> CONTA NO NOSSO SITE E DEFINIR O SETOR DA <br/> SAÚDE ONDE ATUA ALÉM DE COMPROVAR O <br/> CERTIFICADO PARA QUE TENHAMOS UMA VALIDEZ E UMA <br/> SEGURANÇA DOS ARTIGOS EM <br/> NOSSO SITE.
                  <ImagemArtigo src={Certificado} />
                </TextoArtigos>

                <Botão onClick={()=>HandleClickButton()} type="button">CRIAR ARTIGOS</Botão>

            </Artigos>

          </Cartão>
                    
        <Footer />
      </Container>
    </>
  )
}

