import { Container, ImagemFooter } from "./Style.jsx";
import Logo from "../../Assets/equipe_healtful.svg";
import Icon from "../../Components/IconComp/icon.jsx"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer(){
  return(
    
      <Container>
       
            <ImagemFooter src={Logo}/>
            <span><Icon estilo="1" conteudo={<FaFacebookF />}></Icon></span>
            <span><a target="blank" href="https://www.instagram.com/healthful.oficial/"> <Icon estilo="2" conteudo={<FaInstagram />}></Icon></a></span>
           <span> <Icon conteudo={<FaTwitter />}></Icon></span>
          </Container>

         

  )
}