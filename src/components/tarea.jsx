import React, { useState } from 'react';
import { useContexto } from './contexto';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button, TextField } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';



const Tarea = ({index, tarea}) => {

    const { dispatchTareas } = useContexto()
    const [modo, setModo] = useState('lista')
    const [nuevoTexto, setNuevoTexto] = useState('')
    
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

    const editar = (e) => {
        e.preventDefault()
        dispatchTareas ({
            type: 'EDIT', name: nuevoTexto, id: tarea.id
        })
        setModo('lista')
        setNuevoTexto('')
    }

    const pulsaEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            editar(e)
        } 
    }

    return (
        <TableRow key={index}>
        {
            modo === 'lista' ?    
            <>
        <TableCell>{tarea.name}</TableCell>
        <TableCell>
            <Button type='submit' size='small' variant={tarea.completa ? 'contained' : 'outlined'} color={tarea.completa ? 'success' : 'error'}
            onClick={clickar}>
            {tarea.completa ? 'COMPLETA' : 'INCOMPLETA'}
            </Button>
        </TableCell>
        <TableCell>
            {
                tarea.completa ? 
                <DeleteForeverIcon cursor='pointer' onClick={eliminar} /> 
                : <EditIcon cursor='pointer' onClick={() => setModo('edit')} />
            }
        </TableCell>
        </>
        : <>
          <TableCell><TextField sx={{width: '30rem'}}autoComplete='false' size='small' required id="nueva-tarea" label="Edita la tarea"
            value={nuevoTexto} onChange={e => setNuevoTexto(e.target.value)} onKeyDown={pulsaEnter}>
            </TextField></TableCell>
          <TableCell><Button className="EditTodoSave" onClick={editar} >Guardar</Button></TableCell>
          <TableCell><Button className="EditTodoCancel" onClick={() => setModo("lista")}>Cancelar</Button></TableCell>  
        </>
        }
        </TableRow>
    )

}

export default Tarea;