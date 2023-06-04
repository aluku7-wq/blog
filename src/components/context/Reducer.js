export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGLEON":
      return { ...state, toggle: true };
    case "TOGLEOFF":
      return { ...state, toggle: false };
    default:
      return state;
  }
};
