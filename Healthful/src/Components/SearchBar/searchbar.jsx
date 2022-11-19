import { useEffect, useRef, useState } from "react";
import {AiOutlineArrowRight, AiOutlineSearch} from 'react-icons/ai'
import Icon from "../IconComp/icon.jsx";
import {SearchContainer, SearchInput} from "./style.jsx";

export function SearchBar() {

    const targetRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const showSearchInput = isHovered || isFocused;
  
    useEffect(() => {
      targetRef.current.value = "";
    }, [showSearchInput]);
  
    return (
      <SearchContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hover={showSearchInput}>
            
        <SearchInput ref={targetRef} showSearchInput={showSearchInput} />
        {showSearchInput ? <Icon estilo='6' conteudo={<AiOutlineArrowRight />}/> : <Icon estilo='5' conteudo={<AiOutlineSearch />}/> }        
      </SearchContainer>
    );
  }
    