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
    width:170px;
    align-items: center;
    justify-content: center;
    background-color: #17e100;
    color: #ffffff;
    border-radius: 0.6rem;
    padding: 10%;
    margin-right:11%;
    text-align: center;

};

> ${DropdownContentNav}{
    
    position: absolute;
    top: auto;
    padding:15px;
    background: #fff;
    font-weight: bold;
    color: #333;
    width: auto;
    border-radius: 0.3rem;
    text-align: center;



    > ${DropdownItemNav}{
        padding: 10px;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.2s;
        border-radius: 0.5rem;
        text-align: left;
        overflow: auto;
        :hover {background: #ddd;}
        text-decoration: none;


    }
}

> ${DropdownContentCategoria}{
    position: absolute;
    top: auto;
    align-items: center;
    margin-top: 0.5%;
    text-align: center;
    -webkit-box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.46);
    -moz-box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.46);
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.46);
    width: 170px;
    cursor: pointer;


    > ${DropdownItemCategoria}{
        align-items: center;
        cursor: pointer;
        transition: all 0.2s;
        width: 100%;
        padding: 3%;
        text-decoration: none;

        
        :hover {background: #ffffff;}


    }
}


`;