import { ButtonCompAlter, ButtonCompGreen, ButtonCompDelete, ButtonCompWhite, ButtonCompCategoria, ButtonUser } from "./style.jsx";

export default function Button({onClick, conteudo, estilo}) { 
        if (estilo == 1){
            return(
                <ButtonCompGreen onClick={onClick}>{conteudo}</ButtonCompGreen>
            )

        } else if (estilo == 2){
            return(
                <ButtonCompWhite onClick={onClick}>{conteudo}</ButtonCompWhite>)

         } if (estilo == 3){
            return(
                <ButtonCompDelete onClick={onClick}>{conteudo}</ButtonCompDelete>
            )
        
        } else if (estilo == 4){
            return(
                <ButtonCompCategoria onClick={onClick}>{conteudo}</ButtonCompCategoria>)

        } else if (estilo == 5){
            return(
                <ButtonUser onClick={onClick}>{conteudo}</ButtonUser>)
    

        }else {
            return(
                <ButtonCompAlter onClick={onClick}>{conteudo}</ButtonCompAlter>)

         }
       
    }