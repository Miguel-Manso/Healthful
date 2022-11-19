import { useState } from "react";
import {Dropdownitem,Dropdown, Dropdownbtn, Dropdowncontent} from "./style"
export function NavDrop({ selected, setSelected }) { 
    const [isActive, setIsActive] = useState(false); 
    const options = [<a href="/login" style={{textDecoration:'none'}} >Login</a>, 
                     <a href="/cadastro" style={{textDecoration:'none'}} >Cadastre-se</a>,
                     <a href="/perfil" style={{textDecoration:'none'}} >Perfil</a>]; 
    return (
    <Dropdown>
        <Dropdownbtn onClick={(e) => 
            setIsActive(!isActive)}>
        {selected}
        <span ></span> 
        </Dropdownbtn>
        {isActive && (
            <Dropdowncontent>
            {options.map((option) => (
            <Dropdownitem onClick={(e) => {setSelected(option);setIsActive(false);}}>
                {option}
            </Dropdownitem>
            ))}
        </Dropdowncontent>
        )}
    </Dropdown>
    );
}