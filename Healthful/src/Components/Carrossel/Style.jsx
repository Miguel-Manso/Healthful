/* __________Importações Basicas__________ */
import styled from "styled-components";
import { css } from "styled-components";

/* Organizando o Steled do Carrossel */
export const Container = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.2%;
  
`;

export const ImageContainer = styled.img`
  width: 98%;
  margin-left: 10%;
  margin-right: 10%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
  z-index: -10;
`;


export const NavButton = styled.button`
position: absolute;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
  cursor: pointer;
  
  ${(props) => props.right === true ? css` right: 3%;` : css` left: 3%;`}
`;

export const CardCarousel = styled.div`

  margin-top: 2.5%;
  margin-bottom: 2.5%;
  
.rec.rec-arrow-left:hover:enabled,
.rec.rec-arrow-right:hover:enabled{
   background-color:  rgba(0, 121, 14, 0.5);
}

.rec.rec-container {
  margin-top: 5%;
}

button.rec-dot{
  background-color: rgb(237, 237, 237);
  box-shadow: 0 0 1px 3px rgba(136, 136, 136, 0.5);
}

.rec.rec-arrow {
  margin-left: 1%;
  margin-right: 1%;
}

button.rec-dot:hover, button.rec-dot:focus  {
  box-shadow: 0 0 1px 3px #10700b8a;
}

button.rec-dot:active {
  color: #0bb40289;
}









`


export const Title = styled.h3`
  font-size: 18px;
  display: flex;
  color: white;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0px 4px 10px 15px rgba(3,3,3,0.9), inset 0 --3em rgba(3,3,3,0.5);
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3%;
  margin-left: 1%;
  transform: translate(-50%, 0);
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  color: black;
  border-radius: 2rem;
  cursor: pointer;
  ${(props) => props.active === true ? css`background-color: white` : css`background-color: gray;`}
`;

