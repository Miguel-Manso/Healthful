import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Footer } from "../../Components/Footer/footer.jsx";
import { Container, TituloLerArtigo, ConteudoArtigo,Tags, Content } from "./Styled.jsx";
import axios from 'axios'
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';

export function LerArtigos () {

  const params = useParams()

  const idint = parseInt(params.id)

  const [ post, setPost ] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4000/postagem/lerartigo/${idint}`)
    .then((response) => {
       setPost(response.data)
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
          {post.map((pos,key) => {
            return(
              <div key={key}>
                <TituloLerArtigo>
                  {pos.tituloPost}
                </TituloLerArtigo>

                <br/>

                <ConteudoArtigo dangerouslySetInnerHTML={{__html: pos.textPost}}></ConteudoArtigo>
        

                <Tags>
                
                </Tags>
              </div>
            )
          })}
          </Content>
        <Footer />
      </Container>
      
    </>
  )
}
