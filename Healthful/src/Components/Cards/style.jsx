import styled from "styled-components";
import leite from "../../Assets/Placeholder/comidas.svg"


export const Card = styled.div`
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(#333, #333);
    transition: all .5s;

    :hover {background-image: linear-gradient(0deg, rgba(15,123,5,1) 0%, rgba(25,241,0,1) 100%)};
    :hover .img{width: 430px; opacity: 1} /* IMG */
    :hover .content {height: 260px; padding: 20px; opacity: 1; transform: translateY(0);} /* Content */
    :hover .seta {transform: rotate(0);} /* Seta */
    .img{

    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-image: url(${leite});
    background-size: cover;
    background-position: center;
    transition: all .5s;
    z-index: 2;
    position: relative;
    opacity: .8;

    :hover .titulo{font-size: 28px;} /* Image Span */

    .titulo{
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 100;
    font-style: italic;
    transition: all .5s;
    color: green;
    

}

    
}

    .content{
    padding: 0px 20px;
    height: 0;
    opacity: 0;
    transition: all .5s;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    transform: translateY(30px);

    .descricao{
    font-size: 14px;
    font-weight: 100;
    opacity: .8;
    margin-top: 8px;
    margin: 0;
    }

    .subtitulo{
    font-size: 20px;
    font-weight: 600;
    }}

    .seta{
    padding: 15px;
    transform: rotate(-180deg);
    transition: all .5s;

    .sseta{
        font-size: 24px;
    }
    }




`
