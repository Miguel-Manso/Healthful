import styled from "styled-components";

const UsersContainer = styled.div`
    overflow: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    
`

const UsersBox = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;
    min-width: 30vw;
    background-color: #ffffffcf;
    box-shadow: 0 8px 32px 0 #000000bb;
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: black;
    text-transform: uppercase;
    margin: 3%;
    

`

const TituloUsers = styled.h2`
    margin: 2rem 0;
    margin-top: 8%;
    letter-spacing: 0.4rem;
    
`
const InputUsers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    
`

const TodosUsers =styled.div`
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const NomeUser =styled.div`
    font-weight: 400;
    display: flex;   
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    gap: 0.7rem;
    font-size: 1.1rem;

`


export {UsersBox, UsersContainer, TituloUsers, NomeUser, TodosUsers, InputUsers}