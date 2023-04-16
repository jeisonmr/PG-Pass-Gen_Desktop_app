// ::::: CONTRASEÑA ::::::

// :::: Minusculas Debil, Medio, Segura, Muy Segura ::::

//  --- Minusculas, Nivel : Debil, Longitud : < 3.
const minusculasDebil = () => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let minDebil = "";
  for (let i = 0; i < 6; i++) {
    minDebil += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return minDebil;
};

//  --- Mayusculas, Nivel : Medio, Longitud : < 8.
const minusculasMedio = () => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let minMedio = "";
  for (let i = 0; i < 8; i++) {
    minMedio += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return minMedio;
};

//  --- Mayusculas, Nivel : Segura, Longitud : < 23.
const minusculasSegura = () => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let minSegura = "";
  for (let i = 0; i < 15; i++) {
    minSegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return minSegura;
};

//  --- Mayusculas, Nivel : Muy Segura, Longitud : < 23.
const minusculasMuySegura = () => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let minMuySegura = "";
  for (let i = 0; i < 20; i++) {
    minMuySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return minMuySegura;
};

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pinMinusculas = () => {
  const serie = "abcdefghijklmnopqrstuvwxyz";
  let pinMinusculas = "";
  for (let i = 0; i < 4 ; i++) {
    pinMinusculas += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return pinMinusculas;
};


export{
  pinMinusculas,
  minusculasDebil,
  minusculasMedio,
  minusculasSegura,
  minusculasMuySegura
}