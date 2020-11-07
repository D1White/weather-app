import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useDebounce } from 'use-debounce';

import home from "../assets/img/home.svg";

import { fetchWeather } from '../redux/actions/weather'
import { setGeolocation, fetchLocation } from '../redux/actions/location'

function LeftBarHeader() {
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState("");
  const [debounceValue] = useDebounce(inpValue, 1000);
  const [searchData, setSearchData] = useState([]);

  const searchFetch = () => {
    axios.get(`https://rapidapi.p.rapidapi.com/v1/geo/cities?minPopulation=50000&namePrefix=${debounceValue}`, {
      headers: {
        'x-rapidapi-key': '58ad440e31msh0236048abb04924p1be107jsnb6f722599e7a',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
      }
    }).then(({data}) => {
      setSearchData(data.data);
    });
  }
  const setLocation = (obj) => {
    dispatch(setGeolocation({
      city: obj.city,
      country: obj.countryCode,
      loc: `${obj.latitude},${obj.longitude}`
    }));
    dispatch(fetchWeather(obj.latitude, obj.longitude));
    setSearchData([]);
  }

  const setMyGeolocation = () => {
    dispatch(fetchLocation());
  }

  useEffect(() => {
    if (debounceValue.trim()) {
      searchFetch();
    }
  }, [debounceValue]);// eslint-disable-line react-hooks/exhaustive-deps
 

  return (
    <div className="left-bar__header">
      <input
        type="text"
        className="left-bar__header-search"
        placeholder="search for places ..."
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      { searchData.length > 0 && (
        <ul className='header-search__data' >
          { searchData.slice(0,4).map((obj) => (
            <li
              className="header-search__data-value"
              onClick={() => setLocation(obj)}
              key={obj.id}
            >
              {obj.city}, <b>{obj.countryCode}</b><hr />
            </li>
          ))}
        </ul>
      )}
      <button className="left-bar__header-button" onClick={setMyGeolocation}>
        <img src={home} alt="home" />
      </button>
    </div>
  );
}

export default LeftBarHeader;
