import axios from 'axios';

export const setLoadedWeather = (payload) => ({
  type: "SET_LOADED_WEATHER",
  payload,
});

export const setWeather = (weather) => ({
  type: "SET_WEATHER",
  payload: weather,
});

export const fetchWeather = (lat, lon) => (dispatch) => {
  setLoadedWeather(false);
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=68e0afb55f84682ae49f209717878748`).then(({ data }) => {
    // console.log(data);
    dispatch(setWeather(data));
  });
}