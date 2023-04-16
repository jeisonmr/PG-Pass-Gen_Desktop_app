
const numReducer = (state = { data: false }, action) => {
  // Maneja las acciones y actualiza el estado en consecuencia
  switch (action.type) {
    case "SET_NUM":
      return { ...state, data: !action.payload };
    default:
      return state;
  }
};

export default  numReducer ;
