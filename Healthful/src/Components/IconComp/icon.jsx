import { IconFacebook, IconInstagram, IconTwitter, IconUser} from "./styled.jsx";

export default function Icon({estilo, conteudo, onClick}) {
    if (estilo == 1){
        return(
            <IconFacebook onClick={onClick}>{conteudo}</IconFacebook>
        )

    } else if (estilo == 2){
        return(
            <IconInstagram onClick={onClick}>{conteudo}</IconInstagram>)

    } else if (estilo == 3){
        return(
            <IconUser onClick={onClick}>{conteudo}</IconUser>)

     }
     else if (estilo == 4){
        return(
            <IconDrop onClick={onClick}>{conteudo}</IconDrop>)

     }    
     else {
        return(
            <IconTwitter onClick={onClick}>{conteudo}</IconTwitter>)

     }
   
}