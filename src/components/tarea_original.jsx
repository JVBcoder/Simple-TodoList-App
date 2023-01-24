import React from 'react';
import { useContexto } from './contexto';

const Tarea = ({index, tarea}) => {

    const { dispatchTareas } = useContexto()
    
    const clickar = (e) => {
        e.preventDefault()
        dispatchTareas({
            type: tarea.completa ? 'NOCOMPLETAR' : 'COMPLETAR',
            id: tarea.id,})
    }

    const eliminar = (e) => {
        e.preventDefault()
        dispatchTareas ({
            type: 'BORRAR',
            id: tarea.id,
        })
    }

    return (
        <li style={{listStyle: 'none'}}>
        <label>{tarea.name}</label><label style={{margin: "5px"}}>
        <button 
        style={{color:'white', backgroundColor: tarea.completa ? 'green' : 'red' }}
        onClick={clickar}
        >
        {tarea.completa ? 'COMPLETA' : 'INCOMPLETA'}
        </button>
        </label>
        <label>
        
        {tarea.completa 
        ? <button 
        style={{color:'blue'}}
        onClick={eliminar}
        >
        ELIMINAR TAREA
        </button>
        : null }
        </label>
        </li>
    );
}

export default Tarea;
