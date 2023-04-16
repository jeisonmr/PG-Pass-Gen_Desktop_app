// Importación de componentes principales
import NavBar from "/src/Components/navbar/Navbar";
import Pass from "../View/home/homePass";
import Footer from "../View/footer/footer";
import store from "../Redux/store";
// Importación del Provider de Redux.
import { Provider } from "react-redux";

function App() {
  // Estilos del componente.
  const dimensiones = {
    width: "100%",
    height: "100%",
  };

  return (
    // Estado global de la App
    <Provider store={store}>
      <main style={dimensiones} className={"containerApp"}>

        {/* Componentes */}
        <NavBar />
        <Pass />
        <Footer />
      </main>
    </Provider>
  );
}

export default App;
