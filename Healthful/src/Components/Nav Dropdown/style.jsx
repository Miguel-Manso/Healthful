import styled from "styled-components";
import user from "../../Assets/Usuário.svg";

export const Container = styled.div`

    height: 100vh;
    

`;
export const Dropdownbtn = styled.div`


`;
export const Dropdowncontent = styled.div`


`;
export const Dropdownitem = styled.div`


`;


export const Dropdown = styled.div`

    width: auto;
    
> ${Dropdownbtn}{
    font-weight: bold;
    align-items: center;
    border-radius: 0.5rem;
    text-align: center;
    margin-top:50%;
    justify-content: center;

}

> ${Dropdowncontent}{
    position: absolute;
    top: auto;
    padding:15px;
    background: #fff;
    font-weight: bold;
    color: #000;
    width: auto;
    border-radius: 0.5rem;
    text-align: center;
    
    a{
            color:#14bc04;
        }

    > ${Dropdownitem}{
        padding: 20px;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 0.5rem;
        text-align: center;
        overflow: auto;
        :hover {background: #f9f9f9; color: #19FF00;}
        
    }
}


`;