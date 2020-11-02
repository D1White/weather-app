import  { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

function Humidity() {
  const weather = useSelector(({ weather }) => weather.weather);
  const weatherLoad = useSelector(({ weather }) => weather.isLoaded);

  const [humidityStatus, setHumidityStatus] = useState('');
  const [vizHeight, setVizHeight] = useState(16);

  useEffect(() => {
    if (weatherLoad) {
      if (weather.current.humidity <= 50) {
        setHumidityStatus('Dry');
      }
      if (weather.current.humidity > 50 && weather.current.humidity <= 55) {
        setHumidityStatus('Pleasant');
      }
      if (weather.current.humidity > 55 && weather.current.humidity <= 60) {
        setHumidityStatus('Comfortable');
      }
      if (weather.current.humidity > 60 && weather.current.humidity <= 65) {
        setHumidityStatus('Sticky');
      }
      if (weather.current.humidity > 65 && weather.current.humidity <= 70) {
        setHumidityStatus('Uncomfortable');
      }
      if (weather.current.humidity > 70 && weather.current.humidity <= 75) {
        setHumidityStatus('Oppressive');
      }
      if (weather.current.humidity > 75) {
        setHumidityStatus('Miserable');
      }

      if (weather.current.humidity >= 22) {
        setVizHeight(parseInt((weather.current.humidity * 0.76).toFixed(1)))
      }

    }
  }, [weatherLoad])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="highlights__component">
    <span className="highlights__component__title">Humidity</span>
    { weatherLoad && (
      <div className="highlights__humidity">
        <div className="top-alignment">
          <span className="humidity__value">{weather.current.humidity}</span>
          <span className="humidity__proc">%</span>
        </div>

        <div className="vizualization">
          <div className="vizualization__round" style={{height:`${vizHeight}px`}}></div>
        </div>
      </div>
    )}
    <span className="highlights__component__title footer">{humidityStatus}</span>
  </div>
  )
}

export default Humidity
