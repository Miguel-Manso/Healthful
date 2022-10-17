import styled from "styled-components";


const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: #222;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
  bottom: 0;
  list-style-type: none;
  overflow: hidden;

`;


const FooterP = styled.li`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const FooterSpan = styled.li`
  font-weight: bold;
  color: #3ec0eb;

  `;

const ImagemFooter = styled.img`
    width: 10rem;
    height: 5rem;
`
export {FooterSpan, FooterDiv, FooterP, ImagemFooter}