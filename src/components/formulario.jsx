import { Divider, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useContexto } from './contexto';

const Formulario = () => {

    const { dispatchTareas } = useContexto()

    const [newtarea, setNewTarea] = useState('')

    const submit = (e) => {
        e.preventDefault()
        if (newtarea) {
            dispatchTareas({ type: 'ADDTAREA', name: newtarea });
          }
        setNewTarea('')
    }

    const pulsaEnter = (e) => {
        if (e.key === 'Enter') 
        {
            e.preventDefault()
            submit(e)        
        }
    }

    return (
        <div style={{paddingTop: '0.5rem'}}>
            <Divider sx={{ margin: '0 auto', width: '50rem', paddingTop: '0.1rem',bgcolor: "secondary.light" }}></Divider>
            <div><h3>Añade más tareas</h3></div>
            <form onSubmit={submit}>
            <TextField sx={{width: '30rem'}}autoComplete='false' size='small' required id="nueva-tarea" label="Introduce la nueva tarea"
            value={newtarea} onChange={e => setNewTarea(e.target.value)} onKeyDown={pulsaEnter}>
            </TextField><br></br>
            <Button color='primary' variant='contained' type='submit' disableElevation>AÑADIR NUEVA TAREA</Button>
        </form>
        </div>
    );
}

export default Formulario;
