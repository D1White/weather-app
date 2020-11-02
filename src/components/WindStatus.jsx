import  { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const BeaufortScale = ['Calm', 'Light air', 'Light breeze', 'Gentle breeze', 'Moderate breeze', 'Fresh breeze', 'Strong breeze', 'High wind', 'Fresh gale', 'Strong gale', 'Storm', 'Violent storm', 'Hurricane'];

function WindStatus() {
  const weather = useSelector(({ weather }) => weather.weather);
  const weatherLoad = useSelector(({ weather }) => weather.isLoaded);

  const [windStatus, setWindStatus] = useState('');

  useEffect(() => {
    if (weatherLoad) {      
      if (weather.current.wind_speed >= 0 && weather.current.wind_speed <= 12) {
        setWindStatus(BeaufortScale[Math.round(weather.current.wind_speed)]);
      }else {
        if (weather.current.wind_speed > 12) {
          setWindStatus(BeaufortScale[12]);
        }
        if (weather.current.wind_speed < 0) {
          setWindStatus(BeaufortScale[0]);
        }
      }
    }
  }, [weatherLoad])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="highlights__component">
      <span className="highlights__component__title">Wind Status</span>
      {weatherLoad && (
        <div className="bottom-alignment">
          <span className="windStatus__value">{weather.current.wind_speed}</span>
          <span className="windStatus__units">km/h</span>
        </div>
      )}
      <span className="highlights__component__title footer">{windStatus}</span>
    </div>
  );
}

export default WindStatus;
