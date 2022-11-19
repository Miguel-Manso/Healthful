/* Chamando os componentes */
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Footer } from "../../Components/Footer/Footer.jsx";
import { Cabecalho, Secao, Title, Container, Texto, Biography, Icons, SecaoLower } from "./style.jsx";

import { AiOutlineShareAlt, AiOutlineUser } from "react-icons/ai"; /* Compartilhar */
import { FaBell } from "react-icons/fa"; /* Sino */
import Icon from "../../Components/IconComp/icon.jsx";
import Button from "../../Components/Button/button.jsx";
import { SearchBar } from "../../Components/SearchBar/searchbar.jsx";


export function Perfil () {
  return (
<>
    <Navbar />
    <Container>
      <Cabecalho>

      <Secao>
      <Icon estilo="3" conteudo={<AiOutlineUser/>}></Icon>
      </Secao>

      <Secao>
      <Title>Nome do Usuário</Title>
      <Texto>Insira a Descrição do Trabalho do Usuário</Texto>
      <Biography>Biografia do Usuario</Biography>

      <Icons>
        <FaBell /> <AiOutlineShareAlt />
      </Icons>
      </Secao>

      <SecaoLower>
        <Button estilo="5" conteudo="Meus Artigos" />
        <Button  estilo="5" conteudo="Artigos Salvos" />
        <Button estilo="5" conteudo="Criar Artigo" />

          <SearchBar />
     
        
      </SecaoLower>

        </Cabecalho>

      </Container>
    <Footer />
</>
  )
}