
import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Container, Content,  ImagemArtigo, CardsCategoria, LogoHealthful, Apresentacao, HomeTitulo, HomeTexto, CrieArtigo, SecaoArtigo, Separador, SeparadorCard } from "./style.jsx";
import Logo from "../../Assets/logo.svg";
import { Slide } from "../../Components/Carrossel/Carrossel.jsx";
import { Link } from "react-router-dom";

import carousel1 from '../../Assets/Carousel/carousel1.png'
import carousel2 from '../../Assets/Carousel/carousel2.png'
import carousel3 from '../../Assets/Carousel/carousel3.png'
import carousel4 from '../../Assets/Carousel/carousel4.png'
import carousel5 from '../../Assets/Carousel/carousel5.png'
import carousel6 from '../../Assets/Carousel/carousel6.png'




import Escrita from "../../Assets/HomeImg/escritas.svg";
import Salvos from "../../Assets/HomeImg/artigos_salvos.svg";
import Perfil from "../../Assets/HomeImg/perfil.svg";
import Certificado from "../../Assets/HomeImg/certificados.svg";


const config = [
  {
    image: carousel1
  },
  {
    image: carousel2
  },
  {
    image: carousel3
  },
  {
    image: carousel4
  },
  {
    image: carousel5
  },
  {
    image: carousel6
  },
]

export function Home () { 
  return (
    <>
      <Container>
        <Navbar />
        <Content>
          <Apresentacao>
            <p>Bem-vindos à plataforma de artigos voltados à saúde.</p>
          </Apresentacao>

          <LogoHealthful>
            <img src={Logo} style={{width : '70% ', height : 'auto'}}/>
          </LogoHealthful>

              <Slide estilo='1' config={config} />

         <HomeTitulo>
          O Que É A Healthful?
        </HomeTitulo>
    
        <HomeTexto style={{  'margin-top': '2%'}}>
        A HEALTHFUL É UMA PLATAFORMA DE ARTIGOS VOLTADO AO 
        </HomeTexto>

        <HomeTexto>
        SETOR DA SAÚDE, COM O FOCO EM MELHORIA DE VIDA. 
        </HomeTexto>

        <HomeTexto>
        ACESSE ABAIXO PARA LER NOSSOS ARTIGOS OU  <CrieArtigo><Link to="/artigos" style={{ textDecoration: 'none' }}>‎ Crie Um Artigo</Link></CrieArtigo>
        </HomeTexto>

        <CardsCategoria>

         <Slide/>

              
        </CardsCategoria> 

        <HomeTitulo style={{ 'font-size': '3.5rem'}}>
          Crie Ou Leia Artigos
        </HomeTitulo>
         

        <SecaoArtigo>
          <HomeTexto>
          <ImagemArtigo src={Escrita} />
          <Separador />
            OS ARTIGOS SÃO SEPARADOS POR <br />
            CATEGORIAS, FACILITANDO SUA <br /> 
            ORGANIZAÇÃO E CARACTERIZAÇÃO.
       
          </HomeTexto>
        </SecaoArtigo>


        <SecaoArtigo>
          <HomeTexto>

            VOCÊ TAMBÉM PODE SALVAR 
            <br/>
            ARTIGOS PARA OS LER
            <br/>
            POSTERIORMENTE!
            <br/>

            <Separador />
            <ImagemArtigo src={Salvos} />
          </HomeTexto>
        </SecaoArtigo>


        <SecaoArtigo>
          <HomeTexto>
          <ImagemArtigo src={Perfil} />
          <Separador />
         
            QUALQUER UM PODE ESCREVER ARTIGOS,
            <br/>
            PORÉM, SERÃO AVALIADOS POR NOSSA EQUIPE
            <br/>
            A FIM DE GARANTIR A QUALIDADE E A VALIDEZ 
            <br/>
            DOS NOSSOS ARTIGOS.
            <br/>
            
          </HomeTexto>
      </SecaoArtigo>
          
      <SecaoArtigo>
          <HomeTexto>
            PARA CRIAR UM ARTIGO, É NECESSÁRIO TER UMA 
            <br/> 
            CONTA NO SITE E DEFINIR O SETOR DA 
            <br/> 
            SAÚDE QUE DIZ RESPEITO AO ARTIGO.
            <br/> 
            DEPOIS, SÓ ESCREVER!
   
            <Separador />
            <ImagemArtigo src={Certificado}></ImagemArtigo>
          </HomeTexto>
        </SecaoArtigo>
        </Content>
         <Footer/>
      </Container>
       

    </>
  )
}

