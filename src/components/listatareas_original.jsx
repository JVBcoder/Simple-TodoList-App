import React from 'react';
import Tarea from './tarea';
import { useContexto } from './contexto';


const Listatareas = () => {

    const { filtrarTareas } = useContexto()

    return (
        <div>
            <ul>
                {
                    filtrarTareas.map(tarea =>  <Tarea key={tarea.id} tarea={tarea}></Tarea>)
                }
            </ul>
        </div>
    );
}

export default Listatareas;
