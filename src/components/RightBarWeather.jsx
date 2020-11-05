import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UnitsEllipse, WeatherBlock } from "./";
import { CSSTransition } from "react-transition-group";

const rightBarHeader = ["Today", "Week"];

function RightBarWeather() {
  const weather = useSelector(({ weather }) => weather.weather);
  const weatherLoad = useSelector(({ weather }) => weather.isLoaded);
  const [activeDateUnit, setActiveDateUnit] = useState("Week");
  const [transition, setTransition] = useState(false);

  useEffect(() => {
      setTransition(true);
  }, [activeDateUnit]);

  return (
    <div>
      <div className="right-bar__header">
        <div className="right-bar__header__interval">
          {rightBarHeader &&
            rightBarHeader.map((obj, index) => (
              <span
                className={`interval__text ${
                  obj === activeDateUnit ? "active" : ""
                }`}
                onClick={() => {
                  setActiveDateUnit(obj);
                  setTransition(false);
                }}
                key={`${obj}_${index}`}
              >
                {obj}
              </span>
            ))}
        </div>
        <div className="right-bar__header__scale">
          <UnitsEllipse unit="C" />
          <UnitsEllipse unit="F" />
        </div>
      </div>
      <CSSTransition
        in={transition}
        appear={true}
        timeout={0}  
        onExit={() => console.log('onExit')}
        onExiting={() => console.log('onExiting')}
        onExited={() => console.log('onExited')}
        classNames={'weather-transition'}
      >
      <div className="right-bar__weather">
       {activeDateUnit === "Week" &&
          weatherLoad &&
          weather.daily.map((obj, index) => {
            if (index === 0) return null;
            return (
                <WeatherBlock
                  weatherDate={obj.dt}
                  tempMin={obj.temp.min}
                  tempMax={obj.temp.max}
                  weatherId={obj.weather[0].id}
                  activeDateUnit={activeDateUnit}
                  key={`${obj.dt}_${index}`}
                />
            );
          })}

        {activeDateUnit === "Today" &&
          weatherLoad &&
          weather.hourly.slice(24).map((obj, index) => {
            if (index % 3 !== 0) return null;
            return (
              <WeatherBlock
                weatherDate={obj.dt}
                tempMin={obj.temp}
                weatherId={obj.weather[0].id}
                activeDateUnit={activeDateUnit}
                key={`${obj.dt}_${index}`}
              />
            );
          })}
      </div>
       </CSSTransition>
    </div>
  );
}

export default RightBarWeather;
