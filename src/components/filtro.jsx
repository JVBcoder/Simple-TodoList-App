import { Button } from '@mui/material';
import React from 'react';
import { useContexto } from './contexto';

const Filtro = () => {

    const { dispatchFiltro } = useContexto()

    const vertodas = (e) => {
        e.preventDefault()
        dispatchFiltro ({type: 'VERTODO'})
    }

    
    const vercompletas = (e) => {
        e.preventDefault()
        dispatchFiltro ({type: 'VERCOMPLETAS'})
    }

    
    const verincompletas = (e) => {
        e.preventDefault()
        dispatchFiltro ({type: 'VERINCOMPLETAS'})
    }

    return (
        <div>
        <h3>Filtrar:</h3>
        <Button variant="outlined" color='success' onClick={vercompletas}>
        VER COMPLETAS
        </Button>
        <Button variant='outlined' size='large' color='info' onClick={vertodas}>
        VER TODO
        </Button>
        <Button variant='outlined' color='error' onClick={verincompletas}>
        VER INCOMPLETAS
        </Button>
        </div>
    );
}

export default Filtro;
