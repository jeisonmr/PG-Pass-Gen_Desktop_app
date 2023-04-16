// Importacion de funciones generadoras de contraseñas y pines.
import { mayusculasDebil, mayusculasMedio, mayusculasSegura, mayusculasMuySegura, pinMayusculas} from "./may.js";
import { minusculasDebil, minusculasMedio, minusculasSegura, minusculasMuySegura, pinMinusculas} from "./min.js";
import { numDebil, numMedio, numMuySeguro, numSeguro,pinNumeros } from "./num.js";
import {cararacteresDebil, caracteresMedio, caracteresSegura, caracteresMuySegura, pinCaracteres} from "./car.js";

// se muestra la contraseña.
let txt_password = document.querySelector(".txt-password");

// Select del tipo ( Contraseña, Pin).
let tipo_seguridad = document.querySelector(".tipo-seguridad");
// Boton para generar las combinaciones.
let btn_generar = document.querySelector(".generador-pass");
// Boton para copiar la contraseña generada.
let btn_copiar = document.querySelector(".copiar-pass");

// Select para elegir el nivel de la contraseña.
let nivel_seguridad = document.querySelector(".nivel-seguridad");

// CheckBox para seleccionar el tipo de contraseña o pin.
let chk_may = document.getElementById("may");
let chk_min = document.getElementById("min");
let chk_num = document.getElementById("num");
let chk_car = document.getElementById("car");

// Variables para combinaciones.
let globalMay, globalMin,globalNum, globalCar;



// CONTRASEÑA :::
function validarMayusculas(tipo, nivel){
  
    // Mayusculas Debil.
    const valPassMayDebil = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
        txt_password.value = mayusculasDebil();
        globalMay = mayusculasDebil();
      }
    }
    // Mayusculas Medio.
    const valPassMayMedia = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
        txt_password.value = mayusculasMedio();
        globalMay = mayusculasMedio();
      }
    };
     // Mayusculas Segura.
    const valPassMaySegura = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
        txt_password.value = mayusculasSegura();
        globalMay = mayusculasSegura();
      }
    };
     // Mayusculas Muy Segura.
    const valPassMayMuySegura = () => {
      if (chk_may.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
        txt_password.value = mayusculasMuySegura();
        globalMay = mayusculasMuySegura();
      }
    };
    valPassMayDebil(tipo, nivel);
    valPassMayMedia(tipo, nivel);
    valPassMaySegura(tipo, nivel);
    valPassMayMuySegura(tipo, nivel);
}
function validarMinusculas(tipo, nivel){

  // Minusculas Debil.
  const valPassMinDebil = () => {
    if (chk_min.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
      txt_password.value = minusculasDebil();
      globalMin = minusculasDebil();
    }
  };

  // Minusculas Medio.
  const valPassMinMedia = () => {
    if (chk_min.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
      txt_password.value = minusculasMedio();
      globalMin = minusculasMedio()
    }
  };

   // Minusculas Segura.
   const valPassMinSegura = () => {
    if (chk_min.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
      txt_password.value = minusculasSegura();
      globalMin = minusculasSegura();
    }
  };

   // Minusculas Muy Segura.
   const valPassMinMuySegura = () => {
    if (chk_min.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
      txt_password.value = minusculasMuySegura();
      globalMin = minusculasMuySegura();
    }
  };

  valPassMinDebil(tipo, nivel);
  valPassMinMedia(tipo, nivel);
  valPassMinSegura(tipo, nivel);
  valPassMinMuySegura(tipo, nivel);
}
function validarNumerico(tipo, nivel) {
  // Numerico Debil.
  const valPassNumDebil = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
      txt_password.value = numDebil();
      globalNum = numDebil();
    }
  };

  // Numerico Medio.
  const valPassNumMedia = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
      txt_password.value = numMedio();
      globalNum = numMedio();
    }
  };

   // Numerico Segura.
  const valPassNumSegura = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
      txt_password.value = numSeguro();
      globalNum = numSeguro();
    }
  };

   // Numerico Muy Segura.
  const valPassNumMuySegura = () => {
    if (chk_num.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
      txt_password.value = numMuySeguro();
      globalNum = numMuySeguro();
    }
  };
  
  valPassNumDebil(tipo, nivel);
  valPassNumMedia(tipo, nivel);
  valPassNumSegura(tipo, nivel);
  valPassNumMuySegura(tipo, nivel);
}
function validarCaracteres(tipo, nivel) {
  // Caracteres Debil.
  const valPassMinDebil = () => {
    if (chk_car.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "debil") {
      txt_password.value = cararacteresDebil();
      globalCar = cararacteresDebil();
    }
  };

  // Caracteres Medio.
  const valPassMinMedia = () => {
    if (chk_car.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "media") {
      txt_password.value = caracteresMedio();
      globalCar = caracteresMedio();
    }
  };

   // Caracteres Segura.
   const valPassMinSegura = () => {
    if (chk_car.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "segura") {
      txt_password.value = caracteresSegura();
      globalCar = caracteresSegura()
    }
  };

   // Caracteres Muy Segura.
   const valPassMinMuySegura = () => {
    if (chk_car.checked && tipo_seguridad.value == "pass" && nivel_seguridad.value == "msegura") {
      txt_password.value = caracteresMuySegura();
      globalCar = caracteresMuySegura();
    }
  };

  valPassMinDebil(tipo, nivel);
  valPassMinMedia(tipo, nivel);
  valPassMinSegura(tipo, nivel);
  valPassMinMuySegura(tipo, nivel);
}
function valCombinator(){

  const serie = (`${globalMay+globalCar+globalMin+globalNum}`);
  let password = "";
  globalMay="";
  globalMin="";
  globalNum="";
  globalCar="";

  switch (nivel_seguridad.value) {
    case "debil":
      for (let i = 0; i < 3; i++) {
        password += serie.charAt(Math.floor(Math.random() * serie.length));
      }
    txt_password.value = password;
    break;
    case "media":
      for (let i = 0; i < 6; i++) {
        password += serie.charAt(Math.floor(Math.random() * serie.length));
      }
    txt_password.value = password;
    break;
    case "segura":
      for (let i = 0; i < 13; i++) {
        password += serie.charAt(Math.floor(Math.random() * serie.length));
      }
    txt_password.value = password;
    break;
    case "msegura":
      for (let i = 0; i < 18; i++) {
        password += serie.charAt(Math.floor(Math.random() * serie.length));
      }
    txt_password.value = password;
    break;
  }
  return password;
}

// PIN
function validarPin(tipo){
  const valPinMay = () => {
    if (chk_may.checked && tipo_seguridad.value == "passpin") {
      txt_password.value = pinMayusculas();
    }
  };
  const valPinMin = () => {
    if (chk_min.checked && tipo_seguridad.value == "passpin") {
      txt_password.value = pinMinusculas();
    }
  };
  const valPinNum = () => {
    if (chk_num.checked && tipo_seguridad.value == "passpin") {
      txt_password.value = pinNumeros();
    }
  };
  const valPinCar = () => {
    if (chk_car.checked && tipo_seguridad.value == "passpin") {
      txt_password.value = pinCaracteres();
    }
  };
  // const hideNivelSecurity = () =>{
  //   if (tipo_seguridad.value == 'passpin'){
  //     nivel_seguridad.style = "visibility: hidden;";
  //   }else{
  //     nivel_seguridad.style = "visibility: visible";
  //   }
  // };
  valPinMay(tipo);
  valPinMin(tipo);
  valPinNum(tipo);
  valPinCar(tipo);
  hideNivelSecurity(tipo);
}


txt_password.value = "";

btn_generar.addEventListener("click", () => {
  
  txt_password.value = "";
  // Pass
  validarMayusculas(tipo_seguridad, nivel_seguridad);
  validarMinusculas(tipo_seguridad, nivel_seguridad);
  validarNumerico(tipo_seguridad, nivel_seguridad);
  validarCaracteres(tipo_seguridad, nivel_seguridad);
  valCombinator();
  // Pin
  validarPin(tipo_seguridad);    
});

btn_copiar.addEventListener('click', function(){

  txt_password.select();
  document.execCommand('copy');
});
