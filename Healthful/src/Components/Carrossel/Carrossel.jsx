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
      <CardComp background={card1} titulo="Boa Alimenta????o" subtitulo="Quais os Benef??cios de Comer Bem?" texto="A alimenta????o saud??vel traz benef??cios para a sa??de como melhor controle do peso, rendimento do trabalho, aumento da mem??ria e da concentra????o, fortalecimento do sistema imunol??gico e preven????o de doen??as."/>
      <CardComp background={card2} titulo="Esportes" subtitulo="Esportes Servem s?? pra Divertir?" texto="Al??m de melhorar a aptid??o f??sica, o exerc??cio f??sico regular tamb??m pode melhorar a capacidade cognitiva e reduzir os n??veis de ansiedade e estresse em geral. Os exerc??cios ajudam a melhorar a autoestima, a imagem corporal, a cogni????o e a fun????o social de pacientes em risco de sa??de mental."/>
      <CardComp background={card3} titulo="Yoga" subtitulo="Yoga Possui Algum Efeito em Nosso Corpo?" texto="Alivia doen??as respirat??rias, dor nas costas, auxilia na perda de peso, desordens do aparelho digestivo, melhora o sistema cardiovascular, o funcionamento das gl??ndulas end??crinas e pode ser utilizada como terapia de apoio para in??meras enfermidades."/>
      <CardComp background={card4} titulo="Nutri????o" subtitulo="Import??ncia da Nutri????o em Nosso Corpo" texto="Quando consumimos os alimentos corretos, o nosso corpo recebe os nutrientes, vitaminas e minerais necess??rios para manter-se em pleno funcionamento, ajudando a prevenir diversas doen??as, como a anemia, diabetes e a obesidade."/>
      <CardComp background={card5} titulo="Muscula????o" subtitulo="O Efeito Da Muscula????o no Organismo" texto="A muscula????o melhora o condicionamento cardiorrespirat??rio, diminui a quantidade de gordura, auxilia o emagrecimento, diminui o risco de diabetes, aumenta a autonomia em idosos e garante mais disposi????o f??sica."/>
      <CardComp background={card6} titulo="Medita????o" subtitulo="A Medita????o ?? Boa Para a Mente?" texto="Para se ter uma ideia, a medita????o chega a alterar a estrutura cerebral, tornando o c??rebro mais espesso e fortalecendo as conex??es de suas c??lulas. Na pr??tica, isso significa benef??cios cognitivos e psicol??gicos duradouros, como melhora da mem??ria, aumento de empatia e redu????o de estresse."/>
      <CardComp background={card7} titulo="Calistenia" subtitulo="Calistenia E Sua Pr??tica" texto="A Calistenia melhora a resist??ncia muscular, cardiorrespirat??ria, melhora a mobilidade, aumenta a flexibilidade e oferece um equil??brio corporal, al??m disso, n??o ?? necess??rio utilizar equipamentos para praticar."/>

      </Carousel>

      </CardCarousel>
      </>
    )

  }
}

