import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  position: relative;
`;


export const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  min-height: 20%;
  position: absolute;
  background-color: #000;
  padding: 1.5rem 2rem;
  align-items: center;
  z-index: 10;
  justify-content: center;
  bottom: 0;
  left: 0;

`;

export const Content = styled.div`
  padding: 10%;
  padding-bottom: 10%;

`;

export const ImagemFooter = styled.img`
width: 10%;
margin-right:6%;
align-items:center;
justify-content: center;
margin-top:1%;
`;

export const Separador = styled.div`
width: 1%;

`;
