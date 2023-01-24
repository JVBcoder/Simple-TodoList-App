import { createContext, useContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';
import { filtroReducer, tareaReducer } from "./reducers"


const Contexto2 = createContext()
export const useContexto = () => useContext(Contexto2)

const initialTareas = [
    {
        id: uuidv4(),
        name: 'Hacer la comida',
        completa: false
    },
    {
        id: uuidv4(),
        name: 'Estudiar inglés', 
        completa: false
    }
]

export default function MiProvider ({children}) {

const [filtro, dispatchFiltro] = useReducer(filtroReducer, 'TODO')
const [tareas, dispatchTareas] = useReducer(tareaReducer, initialTareas)

const filtrarTareas = tareas.filter(tarea => {
    if (filtro === 'TODO') {
      return true;
    }

    if (filtro === 'COMPLETAS' && tarea.completa) {
      return true;
    }

    if (filtro === 'INCOMPLETAS' && !tarea.completa) {
      return true;
    }
    return false;
  });



    return (
        <Contexto2.Provider value= {{ tareas, dispatchTareas, dispatchFiltro, filtrarTareas}}>
             { children }
        </Contexto2.Provider>
    );

}