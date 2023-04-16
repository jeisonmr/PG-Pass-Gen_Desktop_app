// Importación del Hook de React.
import { useEffect, useState } from "react";

// Importación del componente Switch del Framework Material UI.
import Switch from "@mui/material/Switch";

// Importación del Hook de Redux.
import { useDispatch } from "react-redux";


const Toggle = ({ tipo }) => {
  
// Estado inicial valor y tipo del toggle switch.
  const [check, setCheck] = useState(false);
  const [mod, setMod] = useState(tipo);

  // Declaración del dispatch.
  const dispatch = useDispatch();

  // Función que captura los cambios del stich toggle y los  setea en el estado.
  function toggleChange(e) {
    e.preventDefault();
    setCheck(e.target.checked);
    actualizarValor({ check, mod });
    console.log(check, mod)
  }



  // Función que dispara el dispatch por cada switch toggle enviando el tipo y el valor del estado.
  const actualizarValor = ({ check, mod }) => {
    switch (mod) {
      case "MAY":
        dispatch({ type: "SET_MAY", payload: check });
        break;
      case "MIN":
        dispatch({ type: "SET_MIN", payload: check });
        break;
      case "NUM":
        dispatch({ type: "SET_NUM", payload: check });
        break;
      case "CAR":
        dispatch({ type: "SET_CAR", payload: check });
        break;

      default:
        break;
    }
  };

  return (
    <>
    {/* Render del Switch Toggle */}
      <Switch
        checked={check}
        onChange={toggleChange}
        // onClick={sendData}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
};

export default Toggle;
