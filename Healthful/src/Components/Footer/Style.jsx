import styled from "styled-components";


const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: #000;
  color: #fff;
  padding: 1.5rem 2rem;
  text-align: center;
  list-style-type: none;
  z-index: -10;
  

`;

const FooterP = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

`;

const FooterList = styled.div`
  display: flex;
  flex-direction: column;

`;

const FooterSpan = styled.li`
  font-family:'Advent Pro';
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  

  `;

const ImagemFooter = styled.img`
    width: 10rem;
    height: 5rem;
`
export {FooterSpan, FooterList, FooterDiv, FooterP, ImagemFooter}