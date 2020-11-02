import  { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

// const visibilityScale = ['Dense fog', 'Thick fog', 'Fog', 'Moderate fog', 'Mist or thin fog', 'Poor visibility', 'Moderate visibility', 'Good visibility', 'Very good visibility', 'Exceptional visibility'];

function Visibility() {
  const weather = useSelector(({ weather }) => weather.weather);
  const weatherLoad = useSelector(({ weather }) => weather.isLoaded);

  const [visibilityStatus, setVisibilityStatus] = useState('');

  useEffect(() => {
    if (weatherLoad) {
      if (weather.current.visibility <= 45) {
        setVisibilityStatus('Dense fog')
      }
      if (weather.current.visibility > 45 && weather.current.visibility <= 275) {
        setVisibilityStatus('Thick fog')
      }
      if (weather.current.visibility > 275 && weather.current.visibility <= 550) {
        setVisibilityStatus('Fog')
      }
      if (weather.current.visibility > 550 && weather.current.visibility <= 805) {
        setVisibilityStatus('Moderate fog')
      }
      if (weather.current.visibility > 805 && weather.current.visibility <= 1610) {
        setVisibilityStatus('Mist or thin fog')
      }
      if (weather.current.visibility > 1610 && weather.current.visibility <= 3220) {
        setVisibilityStatus('Poor visibility')
      }
      if (weather.current.visibility > 3220 && weather.current.visibility <= 8050) {
        setVisibilityStatus('Moderate visibility')
      }
      if (weather.current.visibility > 8050 && weather.current.visibility <= 16100) {
        setVisibilityStatus('Good visibility')
      }
      if (weather.current.visibility > 16100 && weather.current.visibility <= 48300) {
        setVisibilityStatus('Very good visibility')
      }
      if (weather.current.visibility > 48300) {
        setVisibilityStatus('Exceptional visibility')
      }
    }
  }, [weatherLoad])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="highlights__component">
      <span className="highlights__component__title">Visibility</span>
      { weatherLoad && (
         <div className="bottom-alignment">
          <span className="windStatus__value">{weather.current.visibility / 1000}</span>
          <span className="windStatus__units">km/h</span>
        </div>
      )}
      <span className="highlights__component__title footer">{visibilityStatus}</span>
    </div>
  );
}

export default Visibility;
