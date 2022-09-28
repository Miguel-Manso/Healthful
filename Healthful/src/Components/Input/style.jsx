import styled from "styled-components";

const InputComp = styled.input`
    background: rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 #4408081d;
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
        box-shadow: 0 0 0 0.2rem #4408081d;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder {
        font-weight: 100;
        font-size: 1rem;
        color: #2f2f2f;
    }
`

export { InputComp }