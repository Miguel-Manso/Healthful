import { InputSign, InputAlter, InputSearch } from "./style.jsx";

export default function Input({onChange, Id, Name, type, placeholder, estilo}) {
    if (estilo == 1){
        return(
            <InputAlter  onChange={onChange} id={Id} name={Name} type={type} placeholder={placeholder}></InputAlter>
        )
    } else if (estilo == 2) {
        return(
            <InputSearch  onChange={onChange} id={Id} name={Name} type={type} placeholder={placeholder}></InputSearch>
        )
    } 
    else {
        return(
            <InputSign  onChange={onChange} id={Id} name={Name} type={type} placeholder={placeholder}></InputSign>
        )
    }

}