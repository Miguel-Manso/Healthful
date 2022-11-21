/* _________________Parte da importação para o carrossel_________________ */
import React from "react";
import { useState } from "react";
import { Container, ImageContainer, NavButton, Title, DotContainer,
Dot } from "./Style.jsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
/* ______________________________________________________________________ */

export function Slide ({ config }) {
 const [imageCarrossel, setimageCarrossel] = useState(0)

 const next = () => {
   setimageCarrossel(state => state += 1);
   if (imageCarrossel === config.length -1) setimageCarrossel(0)
 }

 const prev = () => {
   setimageCarrossel(state => state -= 1);
   if (imageCarrossel === 0) setimageCarrossel(config.length -1)
 }

 /* ____________________________________________________________ */

  return (
    <Container>
      <ImageContainer src={config[imageCarrossel].image} />
      <Title>
        {config[imageCarrossel].title}
      </Title>

      <NavButton right onClick={next}>
        <AiOutlineArrowRight />
      </NavButton>

      <NavButton left onClick={prev}>
        <AiOutlineArrowLeft />
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
}