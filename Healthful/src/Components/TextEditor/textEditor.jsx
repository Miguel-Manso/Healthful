import React, {  useRef } from 'react';
import JoditEditor from 'jodit-react';
import {Edit} from "./style.jsx"

export const TextEditor = ({setValue}) => {
    const editor = useRef(null);

    return (
        <Edit>
        <JoditEditor ref={editor} onChange={content => setValue(content)}/>
        </Edit>
    );
};