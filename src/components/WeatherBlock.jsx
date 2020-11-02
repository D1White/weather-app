import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { weatherImg } from '../utils/weatherImg'

function WeatherBlock({ weatherDate, tempMin, tempMax, weatherId, activeDateUnit }) {
  const date = new Date(weatherDate * 1000);

  const activeUnit = useSelector(({ units }) => units.unit);

  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);

  useEffect(() => { 
      if (activeUnit === 'C') {
        setMinTemp(Math.round(tempMin - 273.15));
        setMaxTemp(Math.round(tempMax - 273.15));
      }else {
        setMinTemp(Math.round(1.8*(tempMin - 273) + 32));
        setMaxTemp(Math.round(1.8*(tempMax - 273) + 32));
      }
  }, [activeUnit])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="weather__component">
      <span className="weather__component__day">
        { activeDateUnit === 'Week' ? date.toString().slice(0,4) : date.toLocaleTimeString().slice(0, 5)}
      </span>
      <img
        src={weatherImg(weatherId)}
        alt="weather visualization"
        className="weather__component__ico"
      />
      <div className="weather__component__temp">
        <span className="temp__text">{minTemp}°</span>
        { activeDateUnit === 'Week' && <span className="temp__text min">{maxTemp}°</span>}
      </div>
    </div>
  );
}

export default WeatherBlock;
