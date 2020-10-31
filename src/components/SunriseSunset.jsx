import React from 'react'

import sunrise from '../assets/img/sunrise.png'

function SunriseSunset() {
  return (
    <div className="highlights__component">
    <span className="highlights__component__title">Sunrise & Sunset</span>
    <div className="highlights__sunrise">
      <div className="sunrise__block">
        <img src={sunrise} alt="sunrise" className="sunrise__ico" />
        <span className="sunrise__time">6:35 AM</span>
      </div>
      <div className="sunrise__block">
        <img src={sunrise} alt="sunrise" className="sunrise__ico invert" />
        <span className="sunrise__time">5:42 PM</span>
      </div>
    </div>
  </div>
  )
}

export default SunriseSunset
