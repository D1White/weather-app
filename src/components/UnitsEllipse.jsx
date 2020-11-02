import {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUnit } from "../redux/actions/units";

function UnitsEllipse({unit}) {
  const dispatch = useDispatch();

  const activeUnit = useSelector(({ units }) => units.unit);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (unit === activeUnit) {
      setActive(true);
    }else{
      setActive(false);
    }
  }, [activeUnit, unit])

  const unitClick = () => {
    dispatch(setUnit(unit));
  }

  return (
    <div className={`scale__elipse ${active ? 'active' : ''}`} onClick={unitClick} >
      <div className={`scale__elipse__text ${active ? 'active' : ''}`}>{`°${unit}`}</div>
    </div>
  );
}

export default UnitsEllipse;
