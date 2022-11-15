import Button from "../../Components/Button/button.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Artigo, Categorias, CategoriaTitulo, Container, CategoryTitle, ArtigoTitulo, ArtigoPreview } from "./style.jsx";

export function Artigos () {
    return (
        <>
               <Navbar />
        <Container>
 

        <Categorias>

        <CategoriaTitulo>Categorias</CategoriaTitulo>

        <Button estilo="4" conteudo="Saúde Mental"/>     
        <Button estilo="4" conteudo="Saúde Física"/>
        <Button estilo="4" conteudo="Musculação"/>
        <Button estilo="4" conteudo="Nutrição"/>     
        <Button estilo="4" conteudo="Calistenia"/>
        <Button estilo="4" conteudo="Esportes"/>
        <Button estilo="4" conteudo="Biking"/>     
        <Button estilo="4" conteudo="Yoga"/>

        </Categorias>

        <CategoryTitle>
          Mais Recentes
        </CategoryTitle>

        <Artigo>
            <ArtigoTitulo>
            Quer Saber Como Ganhar Dinheiro Na Internet?
            </ArtigoTitulo>
            <ArtigoPreview>
            Vou-me embora pra Pasárgada é um poema do escritor modernista brasileiro Manuel Bandeira. Este poema caiu no gosto dos intelectuais e também de pessoas comuns
            </ArtigoPreview>
          
        </Artigo>
        

        <CategoryTitle>
          Populares 
        </CategoryTitle>



        </Container>
        </>
    )
  }
  
  