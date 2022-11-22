import styled from "styled-components";

export const ButtonCompGreen = styled.button`
    background-color:#14bc04;
    text-transform: uppercase;
    letter-spacing: 0.2 rem;
    width: 65%;
    height: 3rem;
    border: none ;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;
    &:hover{
    background-color: #0b8700; /* Green */
    color: white;
    transition-duration: 0.4s
    }
`

export const ButtonCompWhite = styled.button`
    color: #14bc04;
    background-color:#ffffff;
    border: 1px #212121 ;
    text-transform: uppercase;
    letter-spacing: 0.2 rem;
    width: 65%;
    height: 3rem;
    border: none ;
    border-radius: 2rem;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;
    &:hover{
    background-color: #dbdbdb; /* Green */
    color: #14bc04;
    transition-duration: 0.4s
    }
`
export const ButtonCompDelete = styled.button`
    color: #ffffff;
    background-color:#af2727;
    border: 1px #212121 ;
    text-transform: uppercase;
    letter-spacing: 0.2 rem;
    width: 50%;
    height: 3rem;
    border: none ;
    border-radius: 2rem;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;
    &:hover{
    background-color: #761b1b; /* Green */
    color: white;
    transition-duration: 0.4s
    }
`
export const ButtonCompAlter = styled.button`
    color: #ffffff;
    background-color:#2DABD3;
    border: 1px #212121 ;
    text-transform: uppercase;
    letter-spacing: 0.2 rem;
    width: 50%;
    height: 3rem;
    border: none ;
    border-radius: 2rem;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;
    &:hover{
    background-color: #257b98; /* Green */
    color: white;
    transition-duration: 0.4s
    }

`

export const ButtonCompCategoria = styled.button`
    margin-right: 1%;
    margin-top: 1%;
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 1.125rem;
    padding: 3px 20px;
    text-transform: uppercase;
    font-family: 'Alata', sans-serif;
    background-color: rgb(23, 225, 0);
    border: none;
    border-radius: 50px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;
    color: white;
    
    &:hover{
    background-color: rgba(20, 180, 2, 0.984);
    color: white;
    transition-duration: 0.4s
    }
`


export const ButtonUser = styled.button`
    margin: 1%;
    margin-left: 0;
    background-color: white;
    font-family: 'Alata', sans-serif;
    text-align: center;
    position: relative;
    white-space: normal;
    word-wrap: break-word;
    font-size: 1.125rem;
    padding: 3px 20px;
    text-transform: uppercase;
    border: none;
    border-radius: .5rem;
    font-weight: bold;

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;


    &:hover{
    background-color: #dbdbdb; /* Green */
    color: #14bc04;
    transition-duration: 0.4s
    }
`

export const ButtonDropCategoria = styled.button`
    color: #ffffff;
    padding: 3%;
    background-color:#3765cb;
    border: 1px #212121 ;
    text-transform: uppercase;
    letter-spacing: 0.2 rem;
    width: 200px;
    height: auto;
    padding: 3%;
    border: none ;
    border-radius: 0.6rem;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;

`