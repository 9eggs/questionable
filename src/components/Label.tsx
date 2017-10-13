import * as React from 'react';
import './Label.css';

export interface Props {
    label: string;
    htmlFor?: string;
}

function Label({htmlFor, label}: Props) {
    return (
        <label htmlFor={htmlFor}>{label}</label>
    );
}

export default Label;