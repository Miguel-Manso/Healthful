import { FooterDiv, FooterList, FooterP, FooterSpan, ImagemFooter } from "./Style.jsx";
import Logo from "../../Assets/equipe_healtful.svg";

export function Footer(){
  return(
    
      <FooterDiv>
        <FooterP>
        <ImagemFooter src={Logo}> 
        </ImagemFooter>

        <FooterList>
          <FooterSpan> Contato </FooterSpan>
          <FooterSpan> Link </FooterSpan>
        </FooterList>
        <FooterList>
          <FooterSpan> Redes Sociais </FooterSpan>
        </FooterList>
         
        </FooterP>

      </FooterDiv>

  )
}