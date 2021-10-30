const reducer = (prevState = 0, action) => {
  switch (action.type) {
    case "deposit":
      return prevState + action.payload;
    case "withdraw":
      return prevState - action.payload;
    default:
      return prevState;
  }
};

export default reducer;
