import { Footer } from "../../Components/Footer/footer.jsx"
import { Navbar } from "../../Components/Navbar/navbar.jsx"
import { Users } from "../../Components/Users/users.jsx"
import { Container, Titulo, Paragrafos, Secao, Titulos, Texto} from "./style.jsx"


export function Home () {
    return (
<>
        <Container>
            <Navbar />
            
            <Secao>
                <Titulos>
                    <Titulo>“Que desgraça é para o  <br />  homem envelhecer sem <br /> nunca ver a beleza e a força <br /> do que o seu corpo é capaz”</Titulo>
                    <span>Sócrates</span >
                </Titulos> 
            </Secao>
                    <Paragrafos>
                        <Texto>
                        O mergulho é a atividade de submergir dentro da d'água que pode ser praticado com ou sem o
                        auxílio de um aparelho de respiração. Ele pode ser realizado de forma autônoma, livre 
                        (controlando a respiração) ou dependente. 
                        </Texto>
                        <Texto>
                        Infelizmente o homem não tem a capacidade de sobreviver em ambiente aquático. Para superar 
                        essa limitação, foram desenvolvidas técnicas denominadas de mergulho, que tal entrar na Grand Blue?
                        </Texto>
                    </Paragrafos>
                
                    <Users />
                    <Footer />
        </Container>
</>
    )
}