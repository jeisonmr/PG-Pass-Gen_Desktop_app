
const searchReducer = (state = { data: "" }, action) => {
      // Maneja las acciones y actualiza el estado en consecuencia
      switch (action.type) {
        case "SET_SEARCH":
          return { ...state, data: action.payload };
        default:
          return state;
      }
    };
    
    export default  searchReducer ;