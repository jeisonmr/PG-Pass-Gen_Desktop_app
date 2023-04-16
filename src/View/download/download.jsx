//Importación de la información del objeto
import Data from "/src/Components/Json/data";

// Importación de subcomponentes.
import imageTop from "/public/img/ondaTop.svg"; //Curva top
import imageBottom from "/public/img/ondaBottom.svg"; //Curva bottom
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

//Importación de estilos.
import './download.css';

function Download() {


  return (
    <>
    {/* Renderizado de la sección Descargar */}
      <section className={"downView"} id="download">
        <img className={"svgTop"} src={imageTop} alt="" /> {/* Imagen top */}
        <h2 className={"title_2"}>{Data.subtitle}</h2> {/* Renderizado del titulo */}
        <p className={"subtitle"}>{Data.description}</p> {/* Render del subtitulo */}
        <div>
          {/* Renderizado de los botones */}
          <button className={"btnDown"}>
            <DownloadForOfflineIcon fontSize="large" color={""}/>
          </button>
        </div>
        <img className={"svgBottom"} src={imageBottom} alt="" /> {/* Imagen bottom */}
      </section>
    </>
  );
}

export default Download;
