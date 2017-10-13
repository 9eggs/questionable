import * as React from 'react';
import './Field.css';
export interface Props {
    heading: string;
    label: string;
}

function Field({heading, label}: Props) {
    return (
        <div className="field">
            <h3>{heading}</h3>
            {label}
        </div>
    );
}

export default Field;