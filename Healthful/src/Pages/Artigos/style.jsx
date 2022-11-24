import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60%;
    margin-bottom: 5%;

`
export const Content = styled.div`
    margin-left: 10%;
    margin-right: 10%;
`;
export const Categorias = styled.div`
    height: 30%;
    line-break: strict;

`

export const CategoryTitle1 = styled.div`
  font-family: 'Alata', sans-serif;
  font-weight: 1000;
  margin-top: 8%;
  font-size: 3rem;
  text-transform: uppercase;

`
export const CategoryTitle2 = styled.div`
  font-family: 'Alata', sans-serif;
  font-weight: 1000;
  margin-top: 8%;
  font-size: 3rem;
  text-transform: uppercase;

`

export const Artigo = styled.div`
  margin-top: 1%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  font-size: 1.2rem;


`
export const ArtigoTitulo = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-style: italic;
  display: flex;
  text-align: justify;
  text-transform: uppercase;
  font-size: 1.2rem;


`

export const ArtigoPreview = styled.div`
  font-family: 'Open Sans', sans-serif;
  width: 50%;
  overflow: auto;
  margin-top: 0;
  margin-left: 1%;
  display: flex;
  text-transform: uppercase;
  font-size: 1.0rem;
  word-break: break-all;
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 2; // Quantidade de linhas
  -webkit-box-orient: vertical; 




`

export const CategoriaTitulo = styled.div`
  font-family: 'Alata', sans-serif;
  margin-bottom: 1%;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
`

