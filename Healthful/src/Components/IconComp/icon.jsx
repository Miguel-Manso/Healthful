import { IconFacebook, IconInstagram, IconTwitter} from "./styled.jsx";

export default function Icon({estilo, conteudo, onClick}) {
    if (estilo == 1){
        return(
            <IconFacebook onClick={onClick}>{conteudo}</IconFacebook>
        )

    } else if (estilo == 2){
        return(
            <IconInstagram onClick={onClick}>{conteudo}</IconInstagram>)

     } else {
        return(
            <IconTwitter onClick={onClick}>{conteudo}</IconTwitter>)

     }
   
}