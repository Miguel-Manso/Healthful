import { ButtonCompBlue, ButtonCompWhite } from "./style.jsx";

export default function Button({conteudo, estilo}) { 
        if (estilo == 1){
            return(
                <ButtonCompBlue>{conteudo}</ButtonCompBlue>
            )
        }else{
            return(
            <ButtonCompWhite>{conteudo}</ButtonCompWhite>)
        }
    }        
