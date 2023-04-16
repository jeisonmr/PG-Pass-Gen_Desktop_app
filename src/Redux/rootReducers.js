// Importación del Hook combinador de reducers de Redux.
import { combineReducers } from "redux";

// Importación de Reducers
import mayReducer from "./reducers/mayReducer";
import minReducer from "./reducers/minReducer";
import numReducer from "./reducers/numReducer";
import carReducer from "./reducers/carReducer";
import rangeReducer from "./reducers/rangeReducer";
import searchReducer from "./reducers/searchreducer";

// Combina los reducers individuales en un rootReducer
const rootReducer = combineReducers({
  mayusculas: mayReducer,
  minusculas: minReducer,
  numeros: numReducer,
  caracteres: carReducer,
  rango: rangeReducer,
  search: searchReducer,
});


export default rootReducer;
