import React from "react";
import { useSelector } from "react-redux";

import home from "../assets/img/home.svg";

/* Weather IMG */
import cloudy from "../assets/img/cloudy.svg";
import radioFilled from "../assets/img/radio_filled.svg";

import { weatherImg } from '../utils/weatherImg';

const dayOfWeekArr = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function LeftBar() {
  const date = new Date();

  const activeUnit = useSelector(({ units }) => units.unit);
  const weather = useSelector(({ weather }) => weather.weather);
  const weatherLoad = useSelector(({ weather }) => weather.isLoaded);
  const location = useSelector(({ location }) => location.geolocation);

  const [temp, setTemp] = React.useState(null);

  // const [date, setDate] = React.useState(null)

  React.useEffect(() => {
    if (weatherLoad) {

      if (activeUnit === 'C') {
        setTemp(Math.round(weather.current.temp - 273.15));
      }else {
        setTemp(Math.round(1.8*(weather.current.temp - 273) + 32));
      }
      
    }
  }, [weatherLoad, activeUnit]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="left-bar">
      {weatherLoad && (
        <div className="left-bar__container">
          <div className="left-bar__header">
            <input
              type="text"
              className="left-bar__header-search"
              placeholder="search for places ..."
            />
            <button className="left-bar__header-button">
              <img src={home} alt="home" />
            </button>
          </div>

          <img src={weatherImg(weather.current.weather[0].id)} alt="weather now" className="left-bar__img" />

          <div className="left-bar__info">
            <div className="top-alignment">
              <span className="degrees__num">{`${temp}°`}</span>
              <span className="degrees__scale">{activeUnit}</span>
            </div>
            <div className="left-bar__info__region">
              <span className="region__text">{`${location.city}, ${location.country_name}`}</span>
            </div>
            <div className="left-bar__info__date">
              <span className="date__dayOfWeek">{`${dayOfWeekArr[date.getDay()]},`}</span>
              <span className="date__time">{date.toTimeString().slice(0,5)}</span>
            </div>
          </div>

          <hr className="left-bar__line" />

          <div className="left-bar__footer">
            <div className="left-bar__footer__feature">
              <img src={cloudy} alt="weather" className="feature__img" />
              <span className="feature__text">{`Clouds - ${weather.current.clouds}%`}</span>
            </div>
            <div className="left-bar__footer__feature">
              <img src={radioFilled} alt="weather" className="feature__img" />
              <span className="feature__text">{weather.current.weather[0].description}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftBar;
