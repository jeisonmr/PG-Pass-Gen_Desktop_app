// ::::: CONTRASEÑA ::::::

// :::: Caracteres Debil, Medio, Segura, Muy Segura ::::

//  --- Caracteres, Nivel : Debil, Longitud : < 8.
const cararacteresDebil = (nivel) => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carDebil = "";
  for (let i = 0; i < 6 ; i++) {
    carDebil += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return carDebil;
};

//  --- Caracteres, Nivel : Medio, Longitud : < 15.
const caracteresMedio = () => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carMedio = "";
  for (let i = 0; i < 8; i++) {
    carMedio += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return carMedio;
};

//  --- Caracteres, Nivel : Segura, Longitud : < 23.
const caracteresSegura = () => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carSegura = "";
  for (let i = 0; i < 15; i++) {
    carSegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return carSegura;
};

//  --- Caracteres, Nivel : Muy Segura, Longitud : < 23.
const caracteresMuySegura = () => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let carMuySegura = "";
  for (let i = 0; i < 20; i++) {
    carMuySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return carMuySegura;
};

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pinCaracteres = () => {
  const serie = "!#$%&/(=?)¡¿'-_[+}:{";
  let pinCaracteres = "";
  for (let i = 0; i < 4; i++) {
    pinCaracteres += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return pinCaracteres;
};

export {
  pinCaracteres,
  cararacteresDebil,
  caracteresMedio,
  caracteresSegura,
  caracteresMuySegura,
};
