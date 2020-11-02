import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LeftBar, RightBar, Popup } from "./components";

import { fetchLocation } from "./redux/actions/location";

function App() {
  const dispatch = useDispatch();

  const [popupVisible, setPopupvisible] = useState(false);
  const [geolocCorrect, setGeolocCorrect] = useState(false);

  useEffect(() => {
    dispatch(fetchLocation());

    if (localStorage.getItem("geolocation") && !geolocCorrect) {
      setPopupvisible(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const popupConfirmBtn = () => {
    setGeolocCorrect(true);
    setPopupvisible(false);
  };
  const popupCancelmBtn = () => {
    localStorage.removeItem("geolocation");
    setPopupvisible(false);
    dispatch(fetchLocation());
  };

  return (
    <main>
      <Popup
        visible={popupVisible}
        popupConfirmBtn={popupConfirmBtn}
        popupCancelmBtn={popupCancelmBtn}
        geolocation={JSON.parse(localStorage.getItem('geolocation'))}
      />
      <LeftBar />
      <RightBar />
    </main>
  );
}

export default App;
