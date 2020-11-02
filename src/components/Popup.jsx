import React from "react";

import locationIco from '../assets/img/location_outline.svg';
import checkIco from '../assets/img/check.svg';
import closeIco from '../assets/img/close.svg';

function Popup({ visible, popupConfirmBtn, popupCancelmBtn, geolocation }) {
  return (
    <div className={`popup ${visible ? 'visible' : ''}`}>
      <div className="popup__content">
        <img src={locationIco} alt="location" />
        { geolocation && (
          <span className="popup__text">
            Is your current location <b>{geolocation.city}</b>, <b>{geolocation.country_name}</b>?
          </span>
        )}
      </div>
      <div className="popup__buttons">
        <button className="popup__button confirm" onClick={popupConfirmBtn} >
          <img src={checkIco} alt="yes" />
        </button>
        <button className="popup__button cancel" onClick={popupCancelmBtn} >
          <img src={closeIco} alt="no" />
        </button>
      </div>
    </div>
  );
}

export default Popup;
