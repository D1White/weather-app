import drizzle from "../assets/img/drizzle.svg";
import cloudy from "../assets/img/cloudy.svg";
import showers from "../assets/img/showers.svg";
import clearCloudy from "../assets/img/clear-cloudy.svg";
import foggy from "../assets/img/foggy.svg";
import thunderstroms from "../assets/img/isolated-thunderstroms.svg";
import mostlyCloudy from "../assets/img/mostly-cloudy.svg";
import sleet from "../assets/img/sleet.svg";
import snow from "../assets/img/snow.svg";
import snowFlurries from "../assets/img/snow-flurries.svg";
import sunny from "../assets/img/sunny.svg";
import tornado from "../assets/img/tornado.svg";
import windy from "../assets/img/windy.svg";

export const weatherImg = (weatherId) => {
  
  if (weatherId >= 200 &&  weatherId <= 232) {
    return thunderstroms;
  }

  if (weatherId >= 300 &&  weatherId <= 321) {
    return showers;
  }
  if (weatherId >= 520 && weatherId <= 531) {
    return showers;
  }

  if (weatherId >= 500 && weatherId <= 504) {
    return drizzle;
  }

  if (weatherId === 511 || weatherId === 621) {
    return sleet;
  }
  if (weatherId >= 611 && weatherId <= 616) {
    return sleet;
  }


  if ( weatherId === 600 || weatherId === 620) {
    return snowFlurries;
  }
  if (weatherId >= 600 && weatherId <= 622) {
    return snow;
  }
  
  if (weatherId >= 701 && weatherId <= 762) {
    return foggy;
  }

  if (weatherId === 771) {
    return windy;
  }

  if (weatherId === 781) {
    return tornado;
  }

  if (weatherId === 800) {
    return sunny;
  }

  if (weatherId === 801) {
    return clearCloudy;
  }
  if (weatherId === 802) {
    return cloudy;
  }

  if (weatherId === 803 || weatherId === 804) {
    return mostlyCloudy;
  }

}


