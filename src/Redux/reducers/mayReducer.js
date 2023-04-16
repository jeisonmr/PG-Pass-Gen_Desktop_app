
const mayReducer = (state = { data: false }, action) => {
  // Maneja las acciones y actualiza el estado en consecuencia
  switch (action.type) {
    case "SET_MAY":
      console.log(!action.payload)
      return { ...state, data: !action.payload };
    default:
      return state;
  }
};

export default mayReducer;
