const INCREMENT = "increment";
const DECREMENT = "decrement";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

const initialState = {
  count: 0,
};

const actionSwitch = (prevState = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...prevState, count: prevState.count + 1 };
    case DECREMENT:
      return { ...prevState, count: prevState.count - 1 };
    default:
      return prevState;
  }
};

export default actionSwitch;
