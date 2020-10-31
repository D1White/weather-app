import React from 'react'

import home from '../assets/img/home.svg'
import drizzle from '../assets/img/drizzle.svg'
import cloudy from '../assets/img/cloudy.svg'
import showers from '../assets/img/showers.svg'

function LeftBar() {
  return (
    <div className="left-bar">
    <div className="left-bar__container">
      <div className="left-bar__header">
        <input type="text" className="left-bar__header-search" placeholder="search for places ..." />
        <button className="left-bar__header-button">
          <img src={home} alt="home" />
        </button>
      </div>

      <img src={drizzle} alt="weather now" className="left-bar__img" />

      <div className="left-bar__info">
        <div className="top-alignment">
          <span className="degrees__num">12°</span>
          <span className="degrees__scale">C</span>
        </div>
        <div className="left-bar__info__region">
          <span className="region__text">Kyiv, Ukraine</span>
        </div>
        <div className="left-bar__info__date">
          <span className="date__dayOfWeek">Monday,</span>
          <span className="date__time">16:00</span>
        </div>
      </div>

      <hr className="left-bar__line" />

      <div className="left-bar__footer">
        <div className="left-bar__footer__feature">
          <img src={cloudy} alt="weather" className="feature__img" />
          <span className="feature__text">Mostly Cloudy</span>
        </div>
        <div className="left-bar__footer__feature">
          <img src={showers} alt="weather" className="feature__img" />
          <span className="feature__text">Rain - 30%</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftBar
