import React from "react";

import {
  RightBarWeather,
  UVIndex,
  WindStatus,
  SunriseSunset,
  Humidity,
  Visibility,
  MinMaxTemp,
  Map
} from "./";

function RightBar() {
  return (
    <div className="right-bar">
      <div className="right-bar__container">
        <RightBarWeather />
          
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
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
