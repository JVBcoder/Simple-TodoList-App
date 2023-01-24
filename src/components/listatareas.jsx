import React, { useState } from 'react';
import Tarea from './tarea';
import { useContexto } from './contexto';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Typography} from '@mui/material';


const Listatareas = () => {

    const { filtrarTareas } = useContexto()
    const [pagina, setPagina] = useState(0)
    const [filasporPagina, setFilasporPagina] = useState(5)

    const cambioPagina = (e, newpage) => {
            setPagina(newpage)
    }

    const handleChangeRowsPerPage = (event) => {
        setFilasporPagina(parseInt(event.target.value, 10));
        setPagina(0);
      };

    return (
        <div style={{width: '50rem', margin: '0 auto'}}>
            <TableContainer component={Paper}>
            {
                filtrarTareas.length === 0 ?
                <Typography variant='h3'>No hay tareas que mostrar </Typography>
            :
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell><span style={{fontWeight: 'bolder'}}>Tarea</span></TableCell>
                            <TableCell><span style={{fontWeight: 'bolder'}}>Estado</span></TableCell>
                            <TableCell></TableCell>
                        </TableRow>            
                    </TableHead>
                    <TableBody>
                        {
                        filtrarTareas.slice(pagina * filasporPagina, pagina * filasporPagina + filasporPagina)
                        .map(tarea =>  <Tarea key={tarea.id} tarea={tarea}></Tarea>)
                        }
                    </TableBody>
                </Table>
            }
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5]}
                component="div"
                count={filtrarTareas.length}
                rowsPerPage={filasporPagina}
                page={pagina}
                onPageChange={cambioPagina}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            
        </div>
    );
}

export default Listatareas