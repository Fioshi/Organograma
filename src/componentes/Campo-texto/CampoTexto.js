// import { useState } from 'react';
import './CampoTexto.css';

export const CampoTexto = (props) => {

    const placeholder = `${props.placeholder}`;
    
    const labelValue = `${props.label}`;

    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{labelValue}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholder}></input>
        </div>
    )
};
