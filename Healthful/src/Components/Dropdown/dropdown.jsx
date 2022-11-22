import { useState } from "react";
import Button from "../Button/button";
import {Dropdownitem, Dropdown, Dropdownbtn, Dropdowncontent} from "./style"

export function DropdownComp ({ selected, setSelected, link1, link2, link3, link4,
     conteudo1, conteudo2, conteudo3, conteudo4, estilo}) { 

    const [isActive, setIsActive] = useState(false); 
    const options = [<a href={link1} style={{textDecoration:'none'}}>{conteudo1}</a>,
                     <a href={link2} style={{textDecoration:'none'}}>{conteudo2}</a>, 
                      <a href={link3} style={{textDecoration:'none'}}>{conteudo3}</a>]; 

    if (estilo == 1){
            return (

                //Dropdown do Lucas
                <Dropdown>
                
                {/* Lucas, esse Button aqui em baixo é do componente button. Vai nele e cria um else
                novo. Do jeito que tava antes era muito ruim. Vou mandar Pro pablo fazer tbm */}
                <Button estilo='' onClick={(e) => 
                    setIsActive(!isActive)}>
                {selected}
                <span ></span> 

                </Button>
                
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
            )

    } else {
        return (
                //Dropdown do Pablo

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
        )
    }
}