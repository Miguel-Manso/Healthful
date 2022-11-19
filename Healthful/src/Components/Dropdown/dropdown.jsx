import { useState } from "react";
import {Dropdownitem,Dropdown, Dropdownbtn, Dropdowncontent} from "./style"
export function Jacoba ({ selected, setSelected }) { 
    const [isActive, setIsActive] = useState(false); 
    const options = [<a href="/login" >Login</a>,
                     <a href="/cadastro" >Cadastre-se</a>, 
                     "suicida"]; 
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