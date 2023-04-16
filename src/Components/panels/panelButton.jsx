// Importacion del Hook de React.
import { useEffect, useState } from "react";

// Importancion de los Hooks de Redux.
import { useDispatch, useSelector } from "react-redux";

// Importacion de la
import sendPassFunction from "../hooks/usePassword";

function PanelButton() {
  // Declaración del dispatch.
  const dispatch = useDispatch();

  // Estados de por cada tipo de contraseña.
  const [mayPass, setMayPass] = useState();
  const [minPass, setMinPass] = useState();
  const [numPass, setNumPass] = useState();
  const [carPass, setCarPass] = useState();

  // Valor por cada tipo de contraseña obtenido.
  const may = useSelector((state) => state.mayusculas.data);
  const min = useSelector((state) => state.minusculas.data);
  const num = useSelector((state) => state.numeros.data);
  const car = useSelector((state) => state.caracteres.data);
  // Valor del rango del nivel obtenido.
  const range = useSelector((state) => state.rango.data);

  // Desectruturación de la funcion importada.
  const { sendPass } = sendPassFunction;

  useEffect(() => {
    setMayPass(may ? sendPass(0, range) : "");
    setMinPass(min ? sendPass(1, range) : "");
    setNumPass(num ? sendPass(2, range) : "");
    setCarPass(car ? sendPass(3, range) : "");
  }, [may, min, num, car]);

  // Array Function que genera la contraseña con la combinacion de tipos y rango seleccionado.
  const genPass = (long) => {
    const random = mayPass + minPass + numPass + carPass;
    
    let password = "";
    if (random) {
      for (let i = 0; i < long; i++) {
        password += random.charAt(Math.floor(Math.random() * random.length));
      }
    }

    dispatch({ type: "SET_SEARCH", payload: password });
  };

  // Funcion que captura los tipos y rango y cambia el valor del estado.
  function getValue() {
    genPass(range);
  }

  // Estilos del componente PanelButton.
  const panelConf = {
    width: "28rem",
    height: "70px",
    backgroundColor: "var(--cl-4)",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-Around",
    alignItems: "center",
  };
  const buttonStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    border: "none",
    background: "var(--cl-6)",
    fontFamily: "var(--font-1)",
    fontSize: "20px",
    color: "var(--cl-3)",
  };

  return (
    <>
      <div style={panelConf} className={"configLength"}>
        <button style={buttonStyle} onClick={getValue}>
          Go!
        </button>
      </div>
    </>
  );
}

export default PanelButton;
