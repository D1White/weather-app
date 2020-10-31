import React from "react";

function UVIndex() {
  return (
    <div className="highlights__component">
      <span className="highlights__component__title">UV Index</span>
      <div className="highlights__UVIndex">
        <span className="UVIndex__title">5</span>
        <span className="UVIndex__face six">6</span>
        <span className="UVIndex__face nine">9</span>
        <span className="UVIndex__face twelve">12</span>

        <div className="highlights__UVIndex__diagrams">
          <canvas className="UVIndex__diagram-main"></canvas>
          <canvas className="UVIndex__diagram"></canvas>
        </div>
      </div>
    </div>
  );
}

export default UVIndex;
