import styled from "styled-components";
import img from '../../Assets/fundo_login.jpg'


const ContainerLogin = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${img} );
    background-size: cover;
    padding:1%;

  

   

`

const LoginBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 500px;
    min-width: 400px;
    max-height: 800px;
    max-width: 500px;
    background-color: rgba(255,255,255, 0.50);
    box-shadow: 0 8px 32px 0 rgba(20,188,4,0.15);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    margin-top: 2%;

    
    input {
        margin: 1%;
    }
    

`
const ImagemLogin = styled.img`
    margin-top:8%; 
    width: 9.5rem;
    height: auto;
`

const TituloLogin = styled.h2`
    margin: 2%;
    margin-top: 0;
`

const InputLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
  

`

const ParagraphLogin = styled.div`
    color: white;
    text-transform: uppercase;
    margin-top: 1rem;
`

const ButtonLogin = styled.button`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    text-decoration: none;
    a { color: inherit; } 
`

const ButtonCadastrar = styled.button`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    text-decoration: none;
    a { width: 60% } 
    margin:5%;
    

`
const LinhaHorizontal = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    background: linear-gradient(90deg, rgba(15,123,5,1) 0%, rgba(18,161,3,1) 30%, rgba(20,188,2,1) 50%, rgba(23,216,1,1) 70%, rgba(25,244,0,1) 100%);
  
`
const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin:2%;
    
    width: 80%;

`

export {ContainerLogin, LoginBox, TituloLogin, InputLogin, ButtonLogin, ImagemLogin, ParagraphLogin, ButtonCadastrar, LinhaHorizontal, IconsContainer}