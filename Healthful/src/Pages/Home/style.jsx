import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 100%;

`;
export const Content = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom:5%;
`;

export const Apresentacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 6%;
  font-size: 150%;
`

export const LogoHealthful = styled.div`
    width: 70%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    display: flex;
    justify-items: center;
    justify-content: center;

`

export const HomeTitulo = styled.div`
  font-family: 'Alata', sans-serif;
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 2%;
  justify-content: center;
  font-weight: bold;
  font-size: 4rem;
  text-transform: uppercase;
`
export const HomeTexto = styled.div`

  font-family: 'Alata', sans-serif;
  display: flex;
  text-align: justify;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }


 
`
export const CrieArtigo = styled.div`
  font-family: 'Alata', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  font-weight: bold;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(0deg, rgba(15,123,5,1) 0%, #19f100 100%);

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

export const SecaoArtigo = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  display: flex;
`

export const SeparadorCard = styled.span`
  margin-left: 3px;
  margin-right: 3px;
`

export const Separador = styled.span`
  margin-left: 35px;
  margin-right: 35px;
`

export const CardsCategoria = styled.div`
  margin-top: 1%;
  margin-bottom: 1%;
`

export const TextoArtigos = styled.p`
  width: 50%;
  margin: 2.5rem;
  color: black;
  text-align: left;
  font-size: 1.1rem;
  font-weight: lighter;
  flex-direction: row;

  
`;

export const ImagemArtigo = styled.img`
 width: 35%;
 height: auto;
`;

