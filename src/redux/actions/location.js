import axios from 'axios';

import {fetchWeather} from './weather'

export const setGeolocation = (geolocation) => ({
  type: "SET_GEOLOCATION",
  payload: geolocation,
});

export const fetchLocation = () => (dispatch) => {

  if (localStorage.getItem('geolocation')) {
    const obj = JSON.parse(localStorage.getItem('geolocation'));
    dispatch(setGeolocation(obj));
    const loc = obj.loc.split(',');
    dispatch(fetchWeather(loc[0], loc[1]));
  }else {
    axios.get('https://api.ipify.org/?format=json').then(({data}) => {
      axios.get(`https://ipinfo.io/${data.ip}?token=0e931f7f1a875c`).then(({data}) => {
        dispatch(setGeolocation(data));
        localStorage.setItem('geolocation', JSON.stringify(data));
        const loc = data.loc.split(',');
        dispatch(fetchWeather(loc[0], loc[1]));
      })
    })
  }

  

}