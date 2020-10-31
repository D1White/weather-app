import React from "react";

import sunny from '../assets/img/sunny.svg'

function WeatherBlock() {
  return (
    <div className="weather__component">
      <span className="weather__component__day">Mon</span>
      <img
        src={sunny}
        alt="weather visualization"
        className="weather__component__ico"
      />
      <div className="weather__component__temp">
        <span className="temp__text">12°</span>
        <span className="temp__text min">3°</span>
      </div>
    </div>
  );
}

export default WeatherBlock;
