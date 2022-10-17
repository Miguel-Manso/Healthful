import styled from "styled-components";
import img from '../../Assets/fundo_login.jpg'


const ContainerLogin = styled.div`
    height: 100vh;
    width: 100vw;
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${img} );
    background-size: cover;
    

`

const LoginBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background-color: rgba(255,255,255, 0.50);
    box-shadow: 0 8px 32px 0 rgba(20,188,4,0.15);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    
  
`
const ImagemLogin = styled.img`
    margin: 1.5rem;
    width: 9.5rem;
    height: auto;
`

const TituloLogin = styled.h2`
    margin: 2rem 0;
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
    margin: 1rem;
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
    

`



export {ContainerLogin, LoginBox, TituloLogin, InputLogin, ButtonLogin, ImagemLogin, ParagraphLogin, ButtonCadastrar}