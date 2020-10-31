import React from "react";

function WindStatus() {
  return (
    <div className="highlights__component">
      <span className="highlights__component__title">Wind Status</span>
      <div className="bottom-alignment">
        <span className="windStatus__value">7.70</span>
        <span className="windStatus__units">km/h</span>
      </div>
      <span className="highlights__component__title footer">Windy</span>
    </div>
  );
}

export default WindStatus;
