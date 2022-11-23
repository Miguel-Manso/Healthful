import Button from "../../Components/Button/button.jsx";
import { Footer } from "../../Components/Footer/footer.jsx";
import Input from "../../Components/Input/input.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Artigo, Categorias, Categoriaspace, CategoriaTitulo, Container, CategoryTitle, ArtigoTitulo, ArtigoPreview } from "./style.jsx";
import axios from 'axios'
import {useEffect, useState} from 'react';


export function Artigos () {

  const [ post, setPost ] = useState([])
  const [ cat, setCat ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/postagem")
        .then((response) => {
           setPost(response.data)
        })
        .catch(() => {
            console.log("deu merda porra!!")
        })
    } )

    useEffect(() => {
      axios.get("http://localhost:4000/categoria")
      .then((response) => {
         setCat(response.data)
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

        <Categoriaspace>
          {cat.map((cats,key) => {
            return(<div  key={key}>
              <Button estilo="4" conteudo={cats.nomeCategoria}/>
            </div>)
          })}
        </Categoriaspace>

        </Categorias>

        <CategoryTitle>
          Mais Recentes
        </CategoryTitle>

        <Artigo>
          {post.map((pos,key) => {
            return(
              <div key={key}>
                <ArtigoTitulo>
                  {pos.tituloPost}
                </ArtigoTitulo>
                <ArtigoPreview>
                  {pos.textPost}
                </ArtigoPreview>
                <br/>
              </div>

            )
          })}
            
          
        </Artigo>
        

        <CategoryTitle>
          Populares 
        </CategoryTitle>


    
        </Container>
        <Footer />
        </>
    )
  }
  
  