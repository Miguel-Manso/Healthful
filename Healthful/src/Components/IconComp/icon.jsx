import { IconFacebook, IconInstagram, IconTwitter, IconUser, IconDrop, IconEnter, IconLupa, IconArrow} from "./styled.jsx";

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
    else if (estilo == 5){
        return(
            <IconLupa onClick={onClick}>{conteudo}</IconLupa>)

    } else if (estilo == 6){
        return(
            <IconEnter onClick={onClick}>{conteudo}</IconEnter>)

    } else if (estilo == 7){
        return(
            <IconArrow onClick={onClick}>{conteudo}</IconArrow>)
        


    } else {
        return(
            <IconTwitter onClick={onClick}>{conteudo}</IconTwitter>)

     }
   
}