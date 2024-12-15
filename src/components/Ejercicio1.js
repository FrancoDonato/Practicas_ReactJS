import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const Ejercicio1 = ({year}) => {

    const [fecha, setFecha] = useState(year);
    
    const cambiarAño = (e, añoActual) => {
        añoActual = parseInt(añoActual);
        if(isNaN(añoActual)){
            añoActual = 0;
        }
        setFecha(añoActual);
    }
    const añoSiguiente = (e, añoActual) => {
        setFecha(añoActual+1);
    }
    const añoAnterior = (e, añoActual) => {
        setFecha(añoActual-1);
    }
    
  return (
    <div>
        <h3>Ejercicio 1</h3>
        <button onClick = {e => añoAnterior(e, fecha)} >Año anterior</button>
        &nbsp;
        &nbsp;
        <button onClick = {e => añoSiguiente(e, fecha)} >Año siguiente</button>
        &nbsp;
        &nbsp;
        <strong>año actual: {fecha}</strong>

        <input type="text" onChange= {e => cambiarAño(e, e.target.value)} placeholder="ingrese el año"></input>
    </div>
  )
}

Ejercicio1.propTypes = {
    fecha : PropTypes.number.isRequired,
    añoActual : PropTypes.number.isRequired
}

