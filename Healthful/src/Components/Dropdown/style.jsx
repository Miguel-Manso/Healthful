import styled from "styled-components";

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
    margin: auto;
    
> ${Dropdownbtn}{
    padding: 10px;
    background: #00FF00;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    text-align: center;

}

> ${Dropdowncontent}{
    position: absolute;
    top: auto;
    padding:15px;
    background: #00FF00;
    font-weight: bold;
    color: #333;
    width: auto;
    border-radius: 1rem;
    text-align: center;


    > ${Dropdownitem}{
        padding: 10px;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 1rem;
        text-align: center;
        overflow: auto;
        :hover {background: #147014;}

    }
}


`;