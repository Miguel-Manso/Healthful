import { useState } from "react";
import {Dropdownitem,Dropdown, Dropdownbtn, Dropdowncontent} from "./style"
export function Jacoba ({ selected, setSelected }) { 
    const [isActive, setIsActive] = useState(false); 
    const options = [   <a href="" style={{'textDecoration':'none'}} >Categoria</a>,
                        <a href="" style={{'textDecoration':'none'}} >Categoria</a>, 
                        <a href="" style={{'textDecoration':'none'}} >Categoria</a>,]; 
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