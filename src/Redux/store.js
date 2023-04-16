// Importación de Hook de Redux.
import { createStore } from "redux";

// Importación del ROOT-Reducer
import rootReducer from "./rootReducers";

// crea el store de Redux con los reducers.
const store = createStore(rootReducer);

export default store;
