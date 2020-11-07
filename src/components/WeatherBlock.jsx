import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { CSSTransition } from "react-transition-group";

import { weatherImg } from '../utils/weatherImg'

function WeatherBlock({ weatherDate, tempMin, tempMax, weatherId, activeDateUnit }) {
  const date = new Date(weatherDate * 1000);

  const activeUnit = useSelector(({ units }) => units.unit);

  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);

  const [transition, setTransition] = useState(false);
  
  useEffect(() => { 
      if (activeUnit === 'C') {
        setMinTemp(Math.round(tempMin - 273.15));
        setMaxTemp(Math.round(tempMax - 273.15));
      }else {
        setMinTemp(Math.round(1.8*(tempMin - 273) + 32));
        setMaxTemp(Math.round(1.8*(tempMax - 273) + 32));
      }
      
      setTransition(true);

      return () => setTransition(false);
  }, [activeUnit])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <CSSTransition
      in={transition}
      appear={true}
      timeout={300}
      onExit={() => console.log('onExit')}
      onExiting={() => console.log('onExiting')}
      onExited={() => console.log('onExited')}
      classNames={'weather-transition'}
    >
      <div className='weather__component'>
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
    </CSSTransition>
  );
}

export default WeatherBlock;
