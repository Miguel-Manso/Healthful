import React from "react";
import { useState } from "react";
import { Container, ImageContainer, NavButton, Title, DotContainer,Dot, CardCarousel, } from "./Style.jsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Carousel from '@itseasy21/react-elastic-carousel'
import Icon from "../IconComp/icon.jsx";
import { CardComp } from "../Cards/cards.jsx";

import card1 from '../../Assets/Card/card1.svg';
import card2 from '../../Assets/Card/card2.svg';
import card3 from '../../Assets/Card/card3.svg';
import card4 from '../../Assets/Card/card4.svg';
import card5 from '../../Assets/Card/card5.svg';
import card6 from '../../Assets/Card/card6.svg';
import card7 from '../../Assets/Card/card7.svg';




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
      <CardComp background={card1} titulo="Boa Alimentação" subtitulo="Quais os Benefícios de Comer Bem?" texto="A alimentação saudável traz benefícios para a saúde como melhor controle do peso, rendimento do trabalho, aumento da memória e da concentração, fortalecimento do sistema imunológico e prevenção de doenças."/>
      <CardComp background={card2} titulo="Esportes" subtitulo="Esportes Servem só pra Divertir?" texto="Além de melhorar a aptidão física, o exercício físico regular também pode melhorar a capacidade cognitiva e reduzir os níveis de ansiedade e estresse em geral. Os exercícios ajudam a melhorar a autoestima, a imagem corporal, a cognição e a função social de pacientes em risco de saúde mental."/>
      <CardComp background={card3} titulo="Yoga" subtitulo="Yoga Possui Algum Efeito em Nosso Corpo?" texto="Alivia doenças respiratórias, dor nas costas, auxilia na perda de peso, desordens do aparelho digestivo, melhora o sistema cardiovascular, o funcionamento das glândulas endócrinas e pode ser utilizada como terapia de apoio para inúmeras enfermidades."/>
      <CardComp background={card4} titulo="Nutrição" subtitulo="Importância da Nutrição em Nosso Corpo" texto="Quando consumimos os alimentos corretos, o nosso corpo recebe os nutrientes, vitaminas e minerais necessários para manter-se em pleno funcionamento, ajudando a prevenir diversas doenças, como a anemia, diabetes e a obesidade."/>
      <CardComp background={card5} titulo="Musculação" subtitulo="O Efeito Da Musculação no Organismo" texto="A musculação melhora o condicionamento cardiorrespiratório, diminui a quantidade de gordura, auxilia o emagrecimento, diminui o risco de diabetes, aumenta a autonomia em idosos e garante mais disposição física."/>
      <CardComp background={card6} titulo="Meditação" subtitulo="A Meditação é Boa Para a Mente?" texto="Para se ter uma ideia, a meditação chega a alterar a estrutura cerebral, tornando o cérebro mais espesso e fortalecendo as conexões de suas células. Na prática, isso significa benefícios cognitivos e psicológicos duradouros, como melhora da memória, aumento de empatia e redução de estresse."/>
      <CardComp background={card7} titulo="Calistenia" subtitulo="Calistenia E Sua Prática" texto="A Calistenia melhora a resistência muscular, cardiorrespiratória, melhora a mobilidade, aumenta a flexibilidade e oferece um equilíbrio corporal, além disso, não é necessário utilizar equipamentos para praticar."/>

      </Carousel>

      </CardCarousel>
      </>
    )

  }
}

