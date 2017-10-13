import * as React from 'react';
import './Button.css';
export interface Props {
    label: string;

}

function Button({label}: Props) {
    return (
        <button>{label}</button>
    );
}

export default Button;