import axios from 'axios';

import {fetchWeather} from './weather'

export const setGeolocation = (geolocation) => ({
  type: "SET_GEOLOCATION",
  payload: geolocation,
});

export const fetchLocation = () => (dispatch) => {

  axios.get('http://api.ipify.org/?format=json').then(({data}) => {
    axios.get(`http://api.ipapi.com/${data.ip}?access_key=e066403b0eab7de6d71255fc4a6d398c`).then(({data}) => {
      dispatch(setGeolocation(data));
      dispatch(fetchWeather(data.latitude, data.longitude));
    })
  })

}