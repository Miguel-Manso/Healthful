import styled from "styled-components";
import img from '../../Assets/fundo-login.jpg'


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
    background-color: rgba(255,255,255, 0.15);
    box-shadow: 0 8px 32px 0 #1b64115e;
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    
  
`
const ImagemLogin = styled.img`
    width: 8rem;
    height: 8rem;
    margin: 1rem;
`

const TituloLogin = styled.h2`
    margin: 2rem 0;
    margin-top: 0;
    color: white;
    text-shadow: 2px 3px 4px #000000;




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
`

const ButtonCadastrar = styled.button`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    
`



export {ContainerLogin, LoginBox, TituloLogin, InputLogin, ButtonLogin, ImagemLogin, ParagraphLogin, ButtonCadastrar}