/* Chamando os componentes */
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Footer } from "../../Components/Footer/Footer.jsx";
import { Cabecalho, Container, Botão } from "./Style.jsx";
/*__________________________________________________________*/

/* Importando os icones */
import { AiOutlineShareAlt } from "react-icons/ai"; /* Compartilhar */
import { FaBell } from "react-icons/fa"; /* Sino */
import { HiUserCircle } from "react-icons/hi"; /* Usuario */
import { FiSearch } from "react-icons/fi"; /* Pesquisa */
/*__________________________________________________________*/

/* Miguel pode me xingar depois, essa semana foi corrida pra gente, e principalmente pra mim,
   tive que ajudar a organizar o acapamento da minha Igreja e isso consumiu muito tempo meu.
   Mano a ultima coisa que eu te peço mano, quebra só mais essa vez pra mim vey.
   Eu sei que estou te pedindo pra fazer uma coisa que não é obrigação sua, mas me ajuda
   a ultima vez ai mano, por favor.
   Assim mano:
   - Eu não sei aonde tenho que fazer o Link do usuario
   - Eu tô completamente perdido já
   - E meio que deixei tudo pra ultima hora
   Sinto muito por isso, e eu sei que errei */

export function Usuario () {
  return (
    <>
      <Container>
        <Navbar />
          <Cabecalho>
            
            {/* O que tem aqui
                -Nome do Usuario
                -Descrição
                -3 botões
                -E os icones */}

            <h1>Nome do Usuário</h1>
            <h3>Descrição do usuário</h3>

            <Botão>Meus Artigos</Botão>
            <Botão>Artigos Salvos</Botão>
            <Botão>Criar Artigos</Botão>
          </Cabecalho>

          <PostagemDeArtigo>

            {/* O que tem aqui
                -Os Artigos */}

          </PostagemDeArtigo>
        <Footer />
      </Container>
    </>
  )
}