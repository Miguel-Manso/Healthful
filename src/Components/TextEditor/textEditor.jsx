import React, {  useRef } from 'react';
import JoditEditor from 'jodit-react';

export const TextEditor = ({setValue}) => {
    const editor = useRef(null);

    return (
        <JoditEditor ref={editor} onChange={content => setValue(content)}/>
    );
};