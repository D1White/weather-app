const initialState = {
  geolocation: {},
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GEOLOCATION":
      return {
        ...state,
        geolocation: action.payload,
      };
    default:
      return state;
  }
};

export default location;