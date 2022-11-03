import styled from "styled-components";
import banner from "../../Assets/banner_home.svg";

const Container = styled.div`
  display: block;
  overflow: auto;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #414141;
  height: 100vh;
  width: 100vw;
`;

const Seção = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 88%;
  max-height: fit-content;
  background-image: url(${banner});
  background-size: cover;
  box-shadow: 0px 4px 4px 2px rgba(0,0,0,0.1);
  word-wrap: break-word;
`;

const Titulos = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  text-align: center;
  margin-right: 3%;
  margin-left: auto;

  & span {
    margin: 3%;
    font-size: 23px;
    color: white;
  }
`;


const Titulo = styled.p`
  font-size: 45px;        
  color: white;
  justify-content: center;
  position: relative;
`;

const Cartão = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: white;
  flex-direction: column;
`;

const TituloCartão = styled.h1`
width: 50%;
font-size: 2.5rem;
font-weight: lighter;
`;

const TextoCartão = styled.p`
  width: 50%;
  margin: 2.5rem;
  color: black;
  text-align: center;
  font-size: 1.1rem;
  font-weight: lighter;
`;

const ImagemCartão = styled.img`
  height: 8rem;
`;

const ImagemCategoria = styled.img`
  height: 10rem;
  margin: 0.3rem;
`;

const Artigos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  flex-direction: column;
`;

const TextoArtigos = styled.p`
  width: 50%;
  margin: 2.5rem;
  color: black;
  text-align: left;
  font-size: 1.1rem;
  font-weight: lighter;
  flex-direction: row;
  text-align: left;
  
`;

const ImagemArtigo = styled.img`
  height: 10rem;
  margin: 0.3rem;
`;

export { Container, Seção, Titulo, Titulos,
Cartão, TextoCartão, TituloCartão, ImagemCartão, ImagemCategoria, 
Artigos, TextoArtigos, ImagemArtigo } 