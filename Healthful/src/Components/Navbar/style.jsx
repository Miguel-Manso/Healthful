import styled from "styled-components";

const MenuLink = styled.a`
  display: flex;
  font-size: 1.3rem !important;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  color: #14bc04;
  font-weight: 700;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  width: 100%;
  justify-items: right;
 
  a { color: inherit; } 
  &:hover {
    color: #0b8700;
    
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: right;
  text-transform: uppercase;
  font-family: 'Ubuntu', sans-serif;
  margin-left:83%;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ Aberto }) => (Aberto ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    
  }
`;

const Nav = styled.div`
  display: flex;
<<<<<<< HEAD
  width: 100%;
=======
  align-items: center;
  flex-wrap: wrap;
>>>>>>> 69fe798166c3b9603d3f920626bf42fb624c6bef
  background: white;
  position: top;
  border: 1px solid;
  padding: 10px;
  box-shadow: 0.1px 1px #888888; 
`;
const ImagemNav = styled.img`
<<<<<<< HEAD
    height: 50px;
    width:auto;
    align-items:left;
      
`
const Imagemlogin = styled.img`
    width:auto, fit-content;
=======
    height: 4.5rem;
`
const ImagemNavProfile = styled.img`
>>>>>>> 69fe798166c3b9603d3f920626bf42fb624c6bef
    height: 2.6rem;
`


const Hamburger = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #038db9;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;


export {Nav, Hamburger, Menu, MenuLink, ImagemNav, Imagemlogin}