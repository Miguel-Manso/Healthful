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
  z-index: -10;
  margin-top: 2.2%;
`;

export const ImageContainer = styled.img`
  width: 98%;
  height: 100%;
  object-fit: cover;
`;


export const NavButton = styled.button`
position: absolute;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  ${(props) => props.right === true ? css` right: 3%;` : css` left: 3%;`}
`;

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
/* _______________________________________________________________________________________________________ */