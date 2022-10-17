import styled from "styled-components";

const ButtonCompGreen = styled.button`
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

const ButtonCompWhite = styled.button`
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
const ButtonCompDelete = styled.button`
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
const ButtonCompAlter = styled.button`
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
export {ButtonCompWhite, ButtonCompGreen, ButtonCompAlter, ButtonCompDelete}