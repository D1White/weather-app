import React from "react";

import sunny from '../assets/img/sunny.svg'

function WeatherBlock({ dayofWeek, tempMin, tempMax }) {
  return (
    <div className="weather__component">
      <span className="weather__component__day">{dayofWeek}</span>
      <img
        src={sunny}
        alt="weather visualization"
        className="weather__component__ico"
      />
      <div className="weather__component__temp">
        <span className="temp__text">{tempMin}°</span>
        <span className="temp__text min">{tempMax}°</span>
      </div>
    </div>
  );
}

export default WeatherBlock;
