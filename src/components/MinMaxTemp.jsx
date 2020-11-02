import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import cold from "../assets/img/cold.svg";
import hot from "../assets/img/hot.svg";

function MinMaxTemp() {
  const weather = useSelector(({ weather }) => weather.weather);
  const weatherLoad = useSelector(({ weather }) => weather.isLoaded);
  const activeUnit = useSelector(({ units }) => units.unit);

  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);

  useEffect(() => {
    if (weatherLoad) {   
      if (activeUnit === 'C') {
        setMinTemp(Math.round(weather.daily[0].temp.min - 273.15));
        setMaxTemp(Math.round(weather.daily[0].temp.max - 273.15));
      }else {
        setMinTemp(Math.round(1.8*(weather.daily[0].temp.min - 273) + 32));
        setMaxTemp(Math.round(1.8*(weather.daily[0].temp.max - 273) + 32));
      }
    }
  }, [weatherLoad, activeUnit])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="highlights__component">
      <span className="highlights__component__title">Min & Max temperature</span>
      {weatherLoad && (
        <div className="highlights__minmaxtemp">
          <div className="minmaxtemp__block">
            <img src={cold} alt="min temperature" className="minmaxtemp__ico" />
            <span className="minmaxtemp__temp">{`${minTemp}°`}</span>
          </div>
          <div className="minmaxtemp__block">
            <img src={hot} alt="max temperature" className="minmaxtemp__ico" />
            <span className="minmaxtemp__temp">{`${maxTemp}°`}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MinMaxTemp;
