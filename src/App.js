import './App.css';
import freeCodeCampLogo from './img/fcc_primary_large.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [ numClicks, setNumClicks ] = useState(0);

  const manejarClick = () => {
    // console.log('Click');
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    // console.log('Reiniciar')
    setNumClicks(0);
  };

  return (
    <div className='App'>
      {/* freeCodeCamp Logo */}
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      {/* Contenedor Principal */}
      <div className='contenedor-principal'>
        {/* Contador */}
        <Contador numClicks={ numClicks }/>
        {/* Botón Click */}
        <Boton
          texto='Click'
          esBotonDeClick={ true }
          manejarClick={ manejarClick }
        />
        {/* Botón Reiniciar */}
        <Boton
          texto='Reiniciar'
          esBotonDeClick={ false }
          manejarClick={ reiniciarContador }
        />
      </div>
    </div>
  );
}

export default App;
