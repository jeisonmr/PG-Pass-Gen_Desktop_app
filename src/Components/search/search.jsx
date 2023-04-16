//
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import '/src/styles/index.css'

function Search() {
  // Estado inicial de intput.
  const [inputValue, setInputValue] = useState();
  
  // Se almacena el valor global en la variable "searchPass"
  const searchPass = useSelector((state) => state.search.data);
  
  useEffect(() => {
    setInputValue(searchPass);
  }, [searchPass]);
  
  const pass = useRef(null);
  
  // Función para copiar el contenido del input.
  const copyPass = () => {
    pass.current.select();
    document.execCommand("copy");
  };
  // Estilos del componente Search.
  const search = {
    fontSize: "35px",
    color: "var(--cl-3)",
    background: "var(--cl-4)",

    width: "57rem",
    height: "80px",
    borderStyle: "dashed",
    border: "1px dashed var(--cl-1)",

    textAlign: "center",
  };
  const containerSearch = {
    margin: "40px 0 15px 0",
    padding: " 0 10px",
  };

  return (
    <div onClick={copyPass} style={containerSearch} >
      {/* Input tipo text */}
      <input
      className={"configSearch"}
        style={search}
        // className="search"
        type="text"
        value={inputValue} // se le asigna el valor del estado.
        ref={pass}
      />
    </div>
  );
}

export default Search;
