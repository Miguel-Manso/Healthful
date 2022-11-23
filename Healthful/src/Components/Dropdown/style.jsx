import styled from "styled-components";
export const Dropdownitem = styled.div`


`;

export const DropdownContentNav = styled.div`


`;

export const Container = styled.div`

    

`;
export const ButtonNav = styled.div`


`;

export const ButtonCategoria = styled.div`

`;

export const DropdownItemCategoria = styled.div`

`;

export const DropdownItemNav = styled.div`

`;

export const DropdownContentCategoria = styled.div`

`;


export const Dropdown = styled.div`

    width: auto;
    margin: auto;
    text-decoration: none;

    
> ${ButtonNav}{
    padding: 10px;
    background: none;
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    text-align: center;
    text-decoration: none;

}

> ${ButtonCategoria}{
    color: #ffffff;
    padding: 1%;
    display: flex;
    flex-direction: column;
    background-color:#19f100;
    border: 1px #212121 ;
    text-transform: uppercase;
    letter-spacing: 0.2 rem;
    height: auto;
    border: none ;
    padding:1rem;
    border-radius: 0.6rem;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;
    display: flex;
    align-items:center;

};

> ${DropdownContentNav}{
    position: absolute;
    top: auto;
    padding:15px;
    background: #ce2cff;
    font-weight: bold;
    color: #333;
    width: auto;
    border-radius: 0.3rem;
    text-align: center;


    > ${DropdownItemNav}{
        padding: 10px;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 1rem;
        text-align: center;
        overflow: auto;
        :hover {background: #147014;}
        text-decoration: none;


    }
}

> ${DropdownContentCategoria}{
    position: absolute;
    top: auto;
    padding:15px;
    background: #9900ff;
    font-weight: bold;
    color: #333;
    width: auto;
    border-radius: 0.3rem;
    text-align: center;


    > ${DropdownItemCategoria}{
        padding: 10px;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 1rem;
        text-align: center;
        overflow: auto;
        :hover {background: #147014;}
        text-decoration: none;


    }
}


`;