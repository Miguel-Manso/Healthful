import { Container, FooterDiv, FooterUl, FooterLi, FooterP, FooterSpan } from "./Style.jsx";
import {FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer(){
  return(
    <Container>
      <FooterDiv>

        <FooterUl>
          <FooterLi>
            <FaTiktok />
          </FooterLi>

          <FooterLi>
            <FaTwitter />
          </FooterLi>

          <FooterLi>
            <FaInstagram />
          </FooterLi>
        </FooterUl>

        <FooterP>
          <FooterSpan>Healthful &copy; 2022</FooterSpan>
        </FooterP>

      </FooterDiv>
    </Container>
  )
}