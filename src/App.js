

import './App.css';
import Filtro from './components/filtro';
import Formulario from './components/formulario';
import Listatareas from './components/listatareas';


function App() {
  return (
    <div className="App">
      <h1>Lista de tareas por hacer</h1>
    
      <Listatareas></Listatareas>
      <Filtro></Filtro>
      <Formulario></Formulario>  
     
    </div>
  );
}

export default App;
