// Importanción del subComponente Switch Toggle.
import  Toggle  from "/src/Components/switch/Switch";


function PanelSwitch({title, tipo}) {
  
  // Estilos del Componente PanelSwitch.
  const panelConf = {
    width: "28rem",
    height: "70px",
    backgroundColor: "var(--cl-4)",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-Around",
    alignItems: "center",
    fontSize: "10px",
  };

  return (
    <>
      <div style={panelConf} className={"configLength"}>
        {title} {/* Parametro titulo */}

        {/* Render del Switch enviando como parametro el tipo contraseña*/}
        <Toggle tipo={tipo}/>
      </div>
    </>
  );
}

export default PanelSwitch;
