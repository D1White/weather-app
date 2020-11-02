import React from "react";

import MapExample from "../assets/img/MapExample.png";

import {
  WeatherBlock,
  UVIndex,
  WindStatus,
  SunriseSunset,
  Humidity,
  Visibility,
  MinMaxTemp,
  UnitsEllipse,
} from "./";

function RightBar() {
  return (
    <div className="right-bar">
      <div className="right-bar__container">
        <div className="right-bar__header">
          <div className="right-bar__header__interval">
            <span className="interval__text">Today</span>
            <span className="interval__text active">Week</span>
          </div>
          <div className="right-bar__header__scale">
            <UnitsEllipse unit='C' />
            <UnitsEllipse unit='F' />
          </div>
        </div>

        <div className="right-bar__weather">
          <WeatherBlock dayofWeek='Mon' tempMin={3} tempMax={12} />
          <WeatherBlock dayofWeek='Mon' tempMin={3} tempMax={12} />
          <WeatherBlock dayofWeek='Mon' tempMin={3} tempMax={12} />
          <WeatherBlock dayofWeek='Mon' tempMin={3} tempMax={12} />
          <WeatherBlock dayofWeek='Mon' tempMin={3} tempMax={12} />
          <WeatherBlock dayofWeek='Mon' tempMin={3} tempMax={12} />
          <WeatherBlock dayofWeek='Mon' tempMin={3} tempMax={12} />
        </div>

        <div className="right-bar__highlights">
          <h3 className="highlights__title">Today’s Highlights</h3>

          <div className="highlights__main">
            <div className="highlights__blocks">
              <div className="highlights__row">
                <UVIndex />
                <WindStatus />
                <SunriseSunset />
              </div>
              <div className="highlights__row">
                <Humidity />
                <Visibility />
                <MinMaxTemp />
              </div>
            </div>
            <img src={MapExample} alt="map" className="highlights__map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
