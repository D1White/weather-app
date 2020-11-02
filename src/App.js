import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { LeftBar, RightBar } from "./components";

import { fetchLocation } from "./redux/actions/location";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchLocation());
    // if(navigator.geolocation) {
    //   console.log('Geolocation is supported!');
    //   navigator.geolocation.getCurrentPosition((position) => {

    //     dispatch(fetchWeather(position.coords.latitude, position.coords.longitude));

    //   })
    // } else {
    //   console.log('Geolocation is not supported by your browser');
    // }
  })

  return (
    <main>
      <LeftBar />
      <RightBar />
    </main>
  );
}

export default App;
