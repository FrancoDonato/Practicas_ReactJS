import React, {useState}from 'react'

export const MiPrimerEstado = () => {


    let [nombre, setNombre] = useState("franco");

    const cambiarNombre = (e, nombreFijo) => { 
        setNombre(nombreFijo);
    };
  return (
    <div>
        <h3>components = MiPrimerEstado</h3>

        <strong>{nombre}</strong>
        &nbsp;
        <button onClick = { e => cambiarNombre(e, "francisco") }>Change</button>
        &nbsp;
        <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder="ingrese nombre"/>
        
        </div>
  )
}
