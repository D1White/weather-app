import React from "react";

function AirQuality() {
  return (
    <div className="highlights__component">
      <span className="highlights__component__title">Air Quality</span>
      <div className="highlights__humidity">
        <span className="humidity__value">105</span>

        <div className="vizualization">
          <div className="vizualization__round"></div>
        </div>
      </div>
      <span className="highlights__component__title footer">Avarage</span>
    </div>
  );
}

export default AirQuality;
