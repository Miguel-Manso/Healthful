import styled from "styled-components"
import banner from "../../Assets/banner_home.svg"

const Container = styled.div`
    display: block;
    overflow: auto;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #414141;
    height: 100%;

`;

const Secao = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    align-content:center;
    width: 100%;
    height: 88%;
    background-image: url(${banner});
    background-size: cover;
    box-shadow: 0px 4px 4px 2px rgba(0,0,0,0.1);
    

`;

const Titulos = styled.div`
    display:flex;
    flex-direction:column;
    height: 20%;
    text-align: center;
    margin-right: 3%;
    margin-left: auto;

    & span {
        margin: 3%;
        font-size: 23px;
        font-family: 'Alata', sans-serif;
        color: white;
    }
    

`;


const Titulo = styled.p`
    font-family: 'Alegreya SC', serif;
    font-size: 45px;        
    color: white;
    justify-content: center;

`;




const Paragrafos = styled.div`
    display: flex;
    justify-content:center;
    text-align: right;
    align-items: right;
    width: 100%;
    

`;


const Texto = styled.p`
    font-family: 'Abyssinica', Georgia, 'Times New Roman', Times, serif;
    font-size: 1rem;
    color: white;
    font-weight: lighter;
    text-align: justify;
    width: 50%;
    margin: 3rem;
    font-size: 1.1rem;
`;

export { Container, Secao, Titulo, Titulos, Paragrafos, Texto} 