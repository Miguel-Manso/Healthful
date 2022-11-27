import Button from "../../Components/Button/button.jsx";
import { Footer } from "../../Components/Footer/footer.jsx";
import Input from "../../Components/Input/input.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Artigo, Categorias, CategoriaTitulo, Container, CategoryTitle1,CategoryTitle2, ArtigoTitulo, ArtigoPreview,Content } from "./style.jsx";
import axios from 'axios'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


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
       
        <Container>
           <Navbar />
          <Content>
        <Input estilo="2" placeholder="Pesquise Um Artigo"/>

 

        <Categorias>

        <CategoriaTitulo>Categorias</CategoriaTitulo>

          {cat.map((cats,key) => {
            return(
              <Button estilo="4" conteudo={cats.nomeCategoria}/>
          )
          })}


        </Categorias>

        <CategoryTitle1>
          Mais Recentes
        </CategoryTitle1>

        <Artigo>
          {post.map((pos,key) => {
            return(
              
              <div key={key}>
                <Link to={{pathname: `/lerartigos/${pos.idPost}`}}>
                  <ArtigoTitulo>
                    {pos.tituloPost}
                  </ArtigoTitulo>
                  <ArtigoPreview>
                    <div dangerouslySetInnerHTML={{__html: pos.textPost}}></div>
                  </ArtigoPreview>
                </Link>
                <br/>
              </div>             
            )
          })}
          
        </Artigo>
        

        <CategoryTitle2>
          Populares 
        </CategoryTitle2>

          </Content>
          <Footer />
        </Container>
        
        </>
    )
  }
  
  