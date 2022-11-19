import { useState } from "react";

import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Container,  ImagemArtigo, CardsCategoria, LogoHealthful, Apresentacao, HomeTitulo, HomeTexto, CrieArtigo, SecaoArtigo, Separador, SeparadorCard } from "./style.jsx";
import Logo from "../../Assets/logo.svg";

/*PlaceHolder*/
import Bike from "../../Assets/Placeholder/Bike.svg";
import Caminhar from "../../Assets/Placeholder/Caminhar.svg";
import Abdomen from "../../Assets/Placeholder/Abdomen.svg";
import Comidas from "../../Assets/Placeholder/Comidas.svg";

import Escrita from "../../Assets/HomeImg/escritas.svg";
import Salvos from "../../Assets/HomeImg/artigos_salvos.svg";
import Perfil from "../../Assets/HomeImg/perfil.svg";
import Certificado from "../../Assets/HomeImg/certificados.svg";
import { CardComp } from "../../Components/Cards/cards.jsx";
import Button from "../../Components/Button/button.jsx";


export function Home () {
  const [value, setValue] = useState("")
  
  return (
    <>
      <Container>
        <Navbar />
          
          {/* Banner novo aqui */}

          
          <Apresentacao>
            <p>Bem-vindos à plataforma de artigos voltados à saúde.</p>
          </Apresentacao>

          <LogoHealthful>
            <img src={Logo} style={{width : '70% ', height : 'auto'}}/>
          </LogoHealthful>


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
        ACESSE ABAIXO PARA LER NOSSOS ARTIGOS OU  <CrieArtigo> ‎ Crie Um Artigo</CrieArtigo>
        </HomeTexto>

        <CardsCategoria>

          <CardComp background={Bike} titulo="Ciclismo" subtitulo="Quais os benefícios de andar de Bike?" texto="É importante porquê..."/>
          <SeparadorCard  />
          <CardComp background={Comidas} titulo="Alimentação" subtitulo="Importância da sua alimentação" texto="É importante porquê..."/>
          <SeparadorCard/>
          <CardComp background={Abdomen} titulo="Treinos" subtitulo="Treinamentos importantes!" texto="É importante porquê..."/>
          <SeparadorCard />
          <CardComp background={Caminhar} titulo="Caminhadas" subtitulo="Importância da caminhada" texto="É importante porquê..."/>

              
        </CardsCategoria> 

        <HomeTitulo style={{'margin-top': '10%', 'font-size': '3.5rem'}}>
          Crie Ou Leie Artigos
        </HomeTitulo>
         

        <SecaoArtigo>
          <HomeTexto>
          <ImagemArtigo src={Escrita} />
          <Separador />
            OS ARTIGOS SÃO SEPARADOS POR <br />
            CATEGORIAS, FACILITANDO SUA <br /> ORGANIZAÇÃO
            E CARACTERIZAÇÃO.
       
          </HomeTexto>
        </SecaoArtigo>


        <SecaoArtigo>
          <HomeTexto>

            VOCÊ TAMBÉM PODE SALVAR 
            <br/>
            ARTIGOS E COMENTAR SUA 
            <br/>
            OPINIÃO EM UM ARTIGO!
            <br/>

            <Separador />
            <ImagemArtigo src={Salvos} />
          </HomeTexto>
        </SecaoArtigo>


        <SecaoArtigo>
          <HomeTexto>
          <ImagemArtigo src={Perfil} style={{width : '25% ', height : 'auto'}} />
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
       
        
        <Footer />
      </Container>
    </>
  )
}

