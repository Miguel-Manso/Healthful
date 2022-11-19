import { Footer } from "../../Components/Footer/footer";
import Input from "../../Components/Input/input";
import { Navbar } from "../../Components/Navbar/navbar";
import { Container } from "./style";

export function Pesquisa () {
    return (
        <>
        <Navbar />
        <Container>

        <Input estilo="2" placeholder="Pesquise Um Artigo"/>

        </Container>
        <Footer />
        </>

    )
}