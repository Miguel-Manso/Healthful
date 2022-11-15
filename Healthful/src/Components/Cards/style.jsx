import styled from "styled-components";


export const CardContent = styled.div`
    padding: 0px 20px;
    height: 0;
    opacity: 0;
    transition: all .5s;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    transform: translateY(30px);
`

export const CardImage = styled.div`
    width: 360px;
    border-top-left-radius: 15px;
  border-top-right-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    background-position: center;
    transition: all .5s;
    z-index: 2;
    position: relative;
    opacity: .8;

`

export const CardSeta = styled.div`
    padding: 15px;
    transform: rotate(-180deg);
    transition: all .5s;
`

export const Card = styled.div`
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(0deg, rgba(15,123,5,1) 0%, #333333c0 100%);
    transition: all .5s;

    :hover {background-image: linear-gradient(0deg, rgba(15,123,5,1) 0%, rgba(25,241,0,1) 100%)};
    :hover > ${CardImage} {width: 430px; opacity: 1} /* IMG */
    :hover ${CardImage} {span{font-size: 28px;}} /* Titulo */
    :hover > ${CardContent} {height: 260px; padding: 20px; opacity: 1; transform: translateY(0);} /* Content */
    :hover > ${CardSeta}{transform: rotate(0);} /* Seta */
   
  
> ${CardImage} {
    span {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 100;
    font-style: italic;
    transition: all .5s;
    color: green;

}
}

> ${CardContent} {
    span{
    font-size: 20px;
    font-weight: 600;
    }
    
    p{
    font-size: 14px;
    font-weight: 100;
    opacity: .8;
    margin-top: 8px;

    }
}


> ${CardSeta} {
    span{
        font-size: 24px;
    }
}
`

