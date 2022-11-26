import styled from "styled-components"

export const MenuLink = styled.a`
  display: flex;
  font-size: 1.1rem !important;
  padding: 1rem;
  margin-top: auto;
  text-transform: uppercase;
  margin-bottom: auto;
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
export const MenuNav = styled.div`
  margin-right: 10%;
  display: flex;
  margin-left: auto;  
  margin-top: auto;
  margin-bottom: auto;

`;


export const Menu = styled.div`
  display:flex; 
  justify-content: space-between;
  align-items: center;
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

export const Nav = styled.div`
  display: flex;
  padding: 0.6rem ;
  background: white;
  width: 100%;
  position: top;
  margin-bottom: 2%;
  max-height: 16.3%;

  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.265);
`;
export const ImagemNav = styled.img`
    width: 4.7rem;
    margin-top: 0.7rem;
    margin-left: 6rem;
`


export const Hamburger = styled.div`
  flex-direction: column;
  justify-content: center;
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
    margin-left: 5%;
  }
`;