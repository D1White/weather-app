const initialState = {
  weather: {},
  isLoaded: false,
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        weather: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED_WEATHER":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default weather;