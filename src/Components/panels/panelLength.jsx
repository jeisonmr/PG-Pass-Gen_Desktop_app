// Importación de los Hooks de React y Redux .
import { useState } from "react";
import { useDispatch } from "react-redux";




function PanelLength({title}) {

  // Desectructuración del prop.
  // const { title } = props;

  // Valor de Range por defecto de nivel 10
  const  [valueRange, setValueRange] =  useState(10);
  
  // Declaración del dispatch.
  const dispatch = useDispatch();

// Función que captura el valor actualiza el valor del estado.
  const eventRange = (e) =>{
    return setValueRange( e.target.value);
  }

  // se envia el tipo y valor del estado a nivel global.
  dispatch({type: "SET_RANGE", payload: valueRange})

  // Estilos del componente PanelLength.
  const panelConf = {
    width: "28rem",
    height: "70px",
    backgroundColor: "var(--cl-4)",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-Around",
    fontSize: "10px",
  };
  const rangeConf = {
    width: "80%",
    margin: "0 auto",
  };
  const value = {
    margin: "0 20px",
  };
// End Estilos
  return (
    <>
      <div style={panelConf} className={"configLength"}>
        
        {/* Render del input range */}
        <input
          type="range"
          style={rangeConf}
          onChange={eventRange}
          min={4}
          max={20}
        />
        {/* Render de la descripción del nivel */}
        <p style={value}>{title  + valueRange}</p>
      </div>
    </>
  );
}

export default PanelLength;
