import styled, { keyframes } from "styled-components";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

 const IconFacebook = styled.div `
    height: 3.5rem;
    width: 3.5rem;
    background: linear-gradient(to right, #0546A0 0%, #663FB6 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

const IconInstagram = styled.div `
    height: 3.5rem;
    width: 3.5rem;
    background: linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

 export const IconUser = styled.div`
    height: 7rem;
    width: 7rem;
    background: linear-gradient(0deg, rgba(15,123,5,1) 0%, rgba(25,241,0,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    color: white;
    cursor: pointer;
    svg {
        width: 6rem;
        height: auto;
    }

`

const IconTwitter = styled.div `
    height: 3.5rem;
    width: 3.5rem;
    background: linear-gradient(to right, #56C1E1 0%, #35A9CE 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`
export const IconDrop = styled.div`
    height: 3rem;
    width: 3rem;
    background: linear-gradient(0deg, #4D4D4D 0%, #9A9A9A 100%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    cursor: pointer;
    svg {
        width: 3.4rem;
        height: auto;
    }

`;


export const IconLupa = styled.div`
  svg {
    height: 1.25rem;
    width: 1.25rem;
    fill: #0e7a05;
    z-index: 10;
    animation: ${fadeIn} 1s linear;
    }
    cursor: pointer;


`

export const IconEnter = styled.div`
  svg{
    position: relative;
    height: 1.25rem;
  width: 1.25rem;
  fill: #0e7a05;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
  &:hover {
    fill: #393e46;
  }
  }
   align-self: flex-end;
  cursor: pointer;
  
 
`

export { IconFacebook, IconInstagram, IconTwitter}