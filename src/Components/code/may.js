// ::::: CONTRASEÑA ::::::

// :::: MAYUSCULAS Debil, Medio, Segura, Muy Segura ::::

//  --- Mayusculas, Nivel : Debil, Longitud : < 8.
const mayusculasDebil = () => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mayDebil = "";
  for (let i = 0; i < 3; i++) {
    mayDebil += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return mayDebil;
};
// mayusculasDebil(8);

//  --- Mayusculas, Nivel : Medio, Longitud : < 15.
const mayusculasMedio = () => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mayMedio = "";
  for (let i = 0; i < 8; i++) {
    mayMedio += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  console.log(mayMedio)
  return mayMedio;
};
mayusculasMedio(10);

//  --- Mayusculas, Nivel : Segura, Longitud : < 23.
const mayusculasSegura = () => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let maySegura = "";
  for (let i = 0; i < 15; i++) {
    maySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return maySegura;
};
// mayusculasSegura(23);

//  --- Mayusculas, Nivel : Muy Segura, Longitud : < 23.
const mayusculasMuySegura = () => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mayMuySegura = "";
  for (let i = 0; i < 20; i++) {
    mayMuySegura += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return mayMuySegura;
};
// mayusculasMuySegura(35);

//   :::::: PIN ::::::

//  Tipo: PIN ****, Nivel: Debil, Longitud: < 4.
const pinMayusculas = () => {
  const serie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pinMayusculas = "";
  for (let i = 0; i < 4; i++) {
    pinMayusculas += serie.charAt(Math.floor(Math.random() * serie.length));
  }
  return pinMayusculas;
};

export {
  pinMayusculas,
  mayusculasDebil,
  mayusculasMedio,
  mayusculasSegura,
  mayusculasMuySegura,
};