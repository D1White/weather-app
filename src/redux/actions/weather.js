import axios from 'axios';

export const setLoadedWeather = (payload) => ({
  type: "SET_LOADED_WEATHER",
  payload,
});

export const fetchWeather = () => (dispatch) => {

}

export const setWeather = (weather) => ({
  type: "SET_WEATHER",
  payload: weather,
});