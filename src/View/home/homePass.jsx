// Importación del Hook useState
import { useState } from "react";

// Importación de los commponentes.
import PanelSwitch from "../../Components/panels/panelSwitch"; //Switch.
import PanelButton from "../../Components/panels/panelButton"; //Boton Go!
import PanelLength from "../../Components/panels/panelLength"; //Range Nivel.

// Importación de la información del objeto.
import Data from "../../Components/Json/data";

// Importación de subcomponentes.
import Search from "/src/Components/search/search"; //Input Text
import imgDown from "/public/img/download.webp"; //Imagen sección descargar app.

// Importación de estilos.
import "/src/Styles/root.css";
import "./homePass.css";

function Pass() {
  return (
    <>
      <section className={"homePass"}>
        <div>
          <h1 className={"title"}>{Data.title}</h1> {/* Renderiza el titulo */}
          <Search /> {/* Input: Se renderiza la contraseña generada */}
          <main className={"panelContainer"}>
            {/* Renderiza un conjunto de componentes Switch */}
            <div className={"panelColumnLeft"}>
              {Data.opciones.map((i) => (
                <PanelSwitch
                  key={i.title}
                  title={i.title}
                  color={"primary"}
                  tipo={i.case}
                />
              ))}
            </div>

            {/* Renderiza los componentes (Rango de niveles y el Boton Go!) */}
            <div className={"panelColumnRight"}>
              <PanelLength title={"Nivel "} />
              <PanelButton />
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default Pass;
