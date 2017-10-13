import * as React from 'react';
import './Field.css';
export interface Props {
    label: string;
}

function Field({label}: Props) {
    return (
        <div className="field">{label}</div>
    );
}

export default Field;