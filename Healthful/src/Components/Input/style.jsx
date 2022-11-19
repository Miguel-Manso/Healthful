import styled from "styled-components";
import { css } from "styled-components";

export const InputSign = styled.input`
    background: rgba(255,255,255,0.50);
    box-shadow: 0 8px 32px 0 #13bc0436;
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: #3d3b3b;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #13bc0436;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder {
        font-weight: 100;
        font-size: 1rem;
        color: #3d3b3b;
    }
`

export const InputAlter = styled.input`
    background: #ffffffc6;
    box-shadow: 0 8px 32px 0 #00000044;
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: #000000b8;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #0c0c0c53;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder {
        font-weight: 100;
        font-size: 1rem;
        color: #cfcfcf;
    }
`

export const InputSearch = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    border-radius: 50px;
    height: 3.5rem;
    border: 4px solid  #108a02;
    background: #ffffff;
    transition: all 0.5s;
    display: flex;
    line-height: 30px;
    font-size: 1.7rem;
  

    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
    border: 4px solid #108a02;

    @media (min-width: 768px) {
    width: 70%;
    }
`