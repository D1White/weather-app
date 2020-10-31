import React from 'react'

function Humidity() {
  return (
    <div className="highlights__component">
    <span className="highlights__component__title">Humidity</span>
    <div className="highlights__humidity">
      <div className="top-alignment">
        <span className="humidity__value">12</span>
        <span className="humidity__proc">%</span>
      </div>

      <div className="vizualization">
        <div className="vizualization__round"></div>
      </div>
    </div>
    <span className="highlights__component__title footer">Normal</span>
  </div>
  )
}

export default Humidity
