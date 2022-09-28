import {Container, Navbar, Image,  Links, BotaoContato, Apresentacao, BotaoLogin, BotaoCadastro, BotaoArtigo, BotaoPerfil } from "./style.jsx"
import Logo from "../../Assets/logo-texto.png"
import Banner from "../../Assets/apresentacao.svg"
import { Link } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md";

export function Header (){
    return(
      <Container>
        <Navbar>
          <Image src={Logo} />
            <Links>

                <BotaoLogin>
                <Link to="/login">Entrar</Link>
                </BotaoLogin>

                <BotaoCadastro>
                <Link to="/sign-up">Cadastrar</Link>
                </BotaoCadastro>

                <BotaoContato>
                    Contato
                </BotaoContato>

                <BotaoArtigo>
                    Artigo
                </BotaoArtigo>

                <BotaoPerfil>
                  <MdAccountCircle>
                  </MdAccountCircle>
                </BotaoPerfil>
                
            </Links>

            </Navbar>

            <Apresentacao src={Banner}>

            </Apresentacao>

      </Container>
    )
}
