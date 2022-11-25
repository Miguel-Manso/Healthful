import React from "react";
import { useState } from "react";
import { Container, ImageContainer, NavButton, Title, DotContainer,Dot, CardCarousel, } from "./Style.jsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Carousel from '@itseasy21/react-elastic-carousel'
import Icon from "../IconComp/icon.jsx";
import { CardComp } from "../Cards/cards.jsx";



/*PlaceHolder*/
import Bike from "../../Assets/Placeholder/Bike.svg";
import Caminhar from "../../Assets/Placeholder/Caminhar.svg";
import Abdomen from "../../Assets/Placeholder/Abdomen.svg";
import Comidas from "../../Assets/Placeholder/Comidas.svg";

export function Slide ({ config, estilo}) {
 const [imageCarrossel, setimageCarrossel] = useState(0)

 const next = () => {
   setimageCarrossel(state => state += 1);
   if (imageCarrossel === config.length -1) setimageCarrossel(0)
 }

 const prev = () => {
   setimageCarrossel(state => state -= 1);
   if (imageCarrossel === 0) setimageCarrossel(config.length -1)
 }

 const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},

 ]

 if (estilo == 1){
  return (
    <Container>
      
      <ImageContainer src={config[imageCarrossel].image} />
      <Title>
        {config[imageCarrossel].title}
        
      </Title>
      
            <NavButton right onClick={next}>
              <Icon estilo='7' conteudo={<AiOutlineArrowRight />}/>
            </NavButton>

            <NavButton left onClick={prev}>
              <Icon estilo='7' conteudo={<AiOutlineArrowLeft />}/>
            </NavButton>
      

      <DotContainer>
        {
          config.map((dot, index) => (
            <Dot key={index} active={(index === imageCarrossel)} />
          ))
        }
      </DotContainer>

    </Container>
  )

  } else {
    return(
      <>

      <CardCarousel>

      <Carousel itemPadding={[5]} breakPoints={breakPoints}>
      <CardComp background={Bike} titulo="Ciclismo" subtitulo="Quais os benefícios de andar de Bike?" texto="É importante porquê..."/>
      <CardComp background={Comidas} titulo="Alimentação" subtitulo="Importância da sua alimentação" texto="É importante porquê..."/>
      <CardComp background={Abdomen} titulo="Treinos" subtitulo="Treinamentos importantes!" texto="É importante porquê..."/>
      <CardComp background={Caminhar} titulo="Caminhadas" subtitulo="Importância da caminhada" texto="É importante porquê..."/>
      </Carousel>

      </CardCarousel>
      </>
    )

  }
}

