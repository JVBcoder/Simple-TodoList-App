import {
    v4 as uuidv4
} from 'uuid';


export function filtroReducer(state, action) {
    switch (action.type) {
        case 'VERTODO':
            return 'TODO';
        case 'VERCOMPLETAS':
            return 'COMPLETAS';
        case 'VERINCOMPLETAS':
            return 'INCOMPLETAS';
        default:
            throw new Error();
    }
};

export function tareaReducer(state, action) {
    switch (action.type) {
        case 'COMPLETAR':
            return state.map(tarea => {
                if (tarea.id === action.id) {
                    return {
                        ...tarea,
                        completa: true
                    };
                } else {
                    return tarea;
                }
            });
        case 'NOCOMPLETAR':
            return state.map(tarea => {
                if (tarea.id === action.id) {
                    return {
                        ...tarea,
                        completa: false
                    };
                } else {
                    return tarea;
                }
            });
        case 'ADDTAREA':
            return state.concat({
                name: action.name,
                id: uuidv4(),
                completa: false,
            });
        case 'BORRAR':
            return state.filter ((tarea) => tarea.id !== action.id);
        case 'EDIT':
            return state.map(tarea => {
                if (tarea.id === action.id) {
                    tarea.name = action.name
                }
                return tarea
            })


        default :
            throw new Error();
    }
};