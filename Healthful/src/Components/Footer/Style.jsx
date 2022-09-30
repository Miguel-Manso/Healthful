import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  max-height: 100%;
  min-height: 100%;
  @media (min-widht: 600px) {
    #root{
      display: flex;
    }
  }
`;

export const FooterDiv = styled.div`
  width: 100%;
  height: 15%;
  background-color: #222;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  list-style-type: none;
`;

export const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const FooterLi = styled.li`
margin: 0 1rem;
font-size: 1.5rem;
cursor: pointer;
`;

export const FooterP = styled.li`
  margin-top: 2rem;
`;

export const FooterSpan = styled.li`
  font-weight: bold;
  color: #ffbb33;
`;