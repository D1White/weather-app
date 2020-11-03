import React from "react";
import { useSelector } from "react-redux";

import { MapContainer, TileLayer } from "react-leaflet";

function WeatherMap() {
  const geolocation = useSelector(({ location }) => location.geolocation);
  return (
    <div>
      {geolocation.longitude && (     
        <MapContainer
          center={[geolocation.latitude, geolocation.longitude]}
          zoom={11}
          scrollWheelZoom={false}
          className="highlights__map"
        >
           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            attribution='<a href="https://openweathermap.org/">Openweathermap</a>'
            url="https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=68e0afb55f84682ae49f209717878748"
          />
        </MapContainer>
      )}
    </div>
  );
}

export default WeatherMap;
