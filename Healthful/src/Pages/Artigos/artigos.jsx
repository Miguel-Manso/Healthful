import Button from "../../Components/Button/button.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Artigo, Bloco, Categorias, CategoriaTitulo, Container, CategoryTitle, ArtigoTitulo, ArtigoPreview } from "./style.jsx";

export function Artigos () {

  const [ user, setUser ] = useState([]) 

  useEffect(() => {
      axios.get("http://localhost:4000/postagem")
      .then((response) => {
          setUser(response.data)
      })
      .catch(() => {
          console.log("deu merda porra!!")
      })
  } )


    return (
        <>
               <Navbar />
        <Container>

        <Input estilo="2" placeholder="Pesquise Um Artigo"/>

 

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
          {user.map((use, key) => {
            return(
              <Bloco className="card" key={key}>
                <ArtigoTitulo>Titulo: {use.nomePost}</ArtigoTitulo>

                <ArtigoPreview><c>Preview:</c> {use.textPost}</ArtigoPreview>

                <br/>

              </Bloco>
          
            )
          } )}
            
           
          
        </Artigo>
        

        <CategoryTitle>
          Populares 
        </CategoryTitle>



        </Container>
        <Footer />
        </>
    )
  }
  
  