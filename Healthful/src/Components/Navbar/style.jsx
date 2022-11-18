import styled from "styled-components"

const MenuLink = styled.a`
  display: flex;
  font-size: 1.3rem !important;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #14bc04;
  font-weight: 700;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  width: 100%;
  a { color: inherit; } 
  &:hover {
    color: #0b8700;
  }
`;
const MenuNav = styled.div`

`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  font-family: 'Ubuntu', sans-serif;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ Aberto }) => (Aberto ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Nav = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  position: top;
  z-index: 9999;
`;
const ImagemNav = styled.img`
    height: 4.5rem;
`
const ImagemNavProfile = styled.img`
    height: 2.6rem;
`


const Hamburger = styled.div`
  display: none;
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


export {Nav, Hamburger, Menu, MenuLink, ImagemNav, ImagemNavProfile, MenuNav}