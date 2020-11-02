import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import sunrise_sunset from '../assets/img/sunrise.png'

function SunriseSunset() {
  const weather = useSelector(({ weather }) => weather.weather);
  const weatherLoad = useSelector(({ weather }) => weather.isLoaded);

  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  useEffect(() => {
    if (weatherLoad) {
      let dateObj = new Date(weather.current.sunrise * 1000);
      setSunrise(dateObj.toLocaleTimeString().slice(0, 5));
      dateObj = new Date(weather.current.sunset * 1000);
      setSunset(dateObj.toLocaleTimeString().slice(0, 5));
    }
  }, [weatherLoad])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="highlights__component">
    <span className="highlights__component__title">Sunrise & Sunset</span>
    <div className="highlights__sunrise">
      <div className="sunrise__block">
        <img src={sunrise_sunset} alt="sunrise" className="sunrise__ico" />
        <span className="sunrise__time">{sunrise}</span>
      </div>
      <div className="sunrise__block">
        <img src={sunrise_sunset} alt="sunset" className="sunrise__ico invert" />
        <span className="sunrise__time">{sunset}</span>
      </div>
    </div>
  </div>
  )
}

export default SunriseSunset
