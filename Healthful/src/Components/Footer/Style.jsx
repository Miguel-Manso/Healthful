import styled from "styled-components";

const ContainerFoot = styled.div`

`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background-color: #000;
  color: #fff;
  padding: 1.5rem 2rem;
  text-align: center;
  list-style-type: none;
  z-index: -10;

  > ${ContainerFoot}{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
  
    > span{
      margin-right: 2rem;    }
  }

`;



const ImagemFooter = styled.img`
    width: 10rem;
    height: 5rem;
    margin-left: 3rem;
`
export {Container, ImagemFooter, ContainerFoot}