import React from 'react';
import '../styles/Boton.css';

function Boton({ texto, esBotonDeClick, manejarClick }) {
    return(
        <button
            className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
            // Función manejarClick en EventListener onClick
            onClick={ manejarClick }>
            { texto }
        </button>
    );
}

export default Boton;