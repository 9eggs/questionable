import * as React from 'react';
import './Input.css';
export interface Props {
    type: string;
    id: string;
    name: string;
    value: string;
}

function Input({type, id, name, value}: Props) {
    return (
        <input type={type}  id={id} name={name} value={value} aria-required="true" required/>
    );
}

export default Input;

