import moon from "/public/img/moon.webp";
import sun from "/public/img/sun.webp";
import down from "/public/img/download.webp";
import github from "/public/img/github.webp";

const data = {
  title: "Password Generator",
  subtitle: "Descargar",
  description:
    "Password generator en su versión desktop compatible con Windows y macOS.",
  opciones: [
    {
      title: "Incluye Mayusculas",
      case: "MAY",
    },
    {
      title: "Incluye Minusculas",
      case: "MIN",
    },
    {
      title: "Incluye Numeros",
      case: "NUM",
    },
    {
      title: "Incluye Caracteres",
      case: "CAR",
    },
  ],
  copyright: "Copyright © 2023 - Desarrollado por Jeison Muñoz  @jeisonmr",
  images: [moon, sun, down, github],
  git: "https://github.com/jeisonmr",
};

export default data;
