import { Content, ImagemFooter, Separador, Container, FooterDiv } from "./Style.jsx";
import Logo from "../../Assets/equipe_healtful.svg";
import Icon from "../../Components/IconComp/icon.jsx"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer(){
  return(
    <>
    <Container>
      <Content>
        <FooterDiv>
          <ImagemFooter src={Logo}/>
          <Icon estilo="1" conteudo={<FaFacebookF />}></Icon>
          <Separador/>
          <Link target="blank" href="https://www.instagram.com/healthful.oficial/"> <Icon estilo="2" conteudo={<FaInstagram />}></Icon></Link>
          <Separador/>
          <Icon conteudo={<FaTwitter />}></Icon>
        </FooterDiv>    
      </Content>
    </Container>
    </>
         

  )
}