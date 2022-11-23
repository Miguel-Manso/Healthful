import { useState } from "react";
import {Dropdownitem, Dropdown, ButtonNav, ButtonCategoria, DropdownContentCategoria, DropdownContentNav, DropdownItemNav, DropdownItemCategoria} from "./style"

export function DropdownComp ({ selected, setSelected, link1, link2, link3, link4,
     conteudo1, conteudo2, conteudo3, conteudo4, estilo}) { 

    const [isActive, setIsActive] = useState(false); 
    const options = [<a href={link1} style={{textDecoration:'none'}}>{conteudo1}</a>,
                     <a href={link2} style={{textDecoration:'none'}}>{conteudo2}</a>, 
                      <a href={link3} style={{textDecoration:'none'}}>{conteudo3}</a>]; 

    if (estilo == 1){
            return (

                <Dropdown>
                
                <ButtonNav onClick={(e) => 
                    setIsActive(!isActive)}>
                {selected}
                <span ></span> 

                </ButtonNav>
                
                {isActive && (
                    <DropdownContentNav>
                    {options.map((option) => (
                    <DropdownItemNav onClick={(e) => {setSelected(option);setIsActive(false);}}>
                        {option}
                    </DropdownItemNav>
                    ))}
                </DropdownContentNav>
                )}
            </Dropdown>
            )

    } else {
        return (
                //Dropdown do Pablo

            <Dropdown>
                <ButtonCategoria onClick={(e) => 
                    setIsActive(!isActive)}>
                {selected}
                <span ></span> 
                </ButtonCategoria>
                {isActive && (
                    <DropdownContentCategoria>
                    {options.map((option) => (
                    <DropdownItemCategoria onClick={(e) => {setSelected(option);setIsActive(false);}}>
                        {option}
                    </DropdownItemCategoria>
                    ))}
                </DropdownContentCategoria>
                )}
            </Dropdown>
        )
    }
}