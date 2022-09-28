import styled from 'styled-components'

export const Container = styled.div`
    
    
    display: flex;
    flex-direction: column;
    max-height: 100%;
    min-height: 100%;


    @media (min-widht: 600px) {
        #root{
            display: flex;
        }
        
    }

`;

export const Navbar = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    background-color: gray;
 
`;


export const Image = styled.img`
    width: 23%;
    height: 23%;

`;

export const Apresentacao = styled.img`
    width: 100%;
    height: 100%;

`;

export const Title = styled.h2`
    font-size: 2rem;

`;

export const Links = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    color: black;
    text-decoration: none;

`;


export const BotaoContato = styled.button`
margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border:none;
cursor: pointer;
background: none;


`;

export const BotaoLogin = styled.button`
margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border:none;
cursor: pointer;
text-decoration: none;
background: none;
`;

export const BotaoCadastro = styled.button`
margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border:none;
cursor: pointer;
text-decoration: none;
background: none;
`;

export const BotaoArtigo = styled.button`
margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border-radius:10px;
cursor: pointer;

`;

export const BotaoPerfil = styled.button`

margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border:none;
cursor: pointer;
background: none;


`; 
