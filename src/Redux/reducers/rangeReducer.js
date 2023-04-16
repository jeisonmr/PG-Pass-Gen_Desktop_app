
const rangeReducer = (state = { data: 10 }, action) => {
  switch (action.type) {
    case "SET_RANGE":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default rangeReducer;