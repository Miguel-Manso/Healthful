import { InputComp } from "./style.jsx";

export default function Input({onChange, Id, Name, type, placeholder}) {
    return(
        <InputComp  onChange={onChange} id={Id} name={Name} type={type} placeholder={placeholder}></InputComp>
    )
}

