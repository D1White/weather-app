import  { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';

function UVIndex() {
  const weather = useSelector(({ weather }) => weather.weather);
  const weatherLoad = useSelector(({ weather }) => weather.isLoaded);

  const uvid = useRef();
  const uvid2 = useRef();

  // const [context, setContext] = useState(null)

  useEffect(() => {  
    if (uvid2.current) {
      const ctx2 = uvid2.current.getContext('2d');

      ctx2.beginPath()
      ctx2.arc(150, 145, 130, 3.14, 0, false);
      ctx2.strokeStyle = '#F3F3F3';
      ctx2.lineWidth = 15;
      ctx2.stroke()
    }
  })

  useEffect(() => {
    if (uvid.current) {
      const ctx = uvid.current.getContext('2d');

      const calculation = -3.14-((weather.current.uvi * 100 / 15) * (-3.14) / 100);

      ctx.beginPath()
      ctx.arc(150, 145, 130, 3.14, calculation.toFixed(2), false);
      ctx.strokeStyle = "#FFB900";
      ctx.lineWidth = 30;
      ctx.stroke()
    }
  }, [weatherLoad])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="highlights__component">
      <span className="highlights__component__title">UV Index</span>
      { weatherLoad && (
        <div className="highlights__UVIndex">
          <span className="UVIndex__title">{Math.round(weather.current.uvi)}</span>
          <span className="UVIndex__face six">6</span>
          <span className="UVIndex__face nine">9</span>
          <span className="UVIndex__face twelve">12</span>

          <div className="highlights__UVIndex__diagrams">
            <canvas className="UVIndex__diagram-main" ref={uvid}></canvas>
            <canvas className="UVIndex__diagram" ref={uvid2}></canvas>
          </div>
        </div>
      )}
    </div>
  );
}

export default UVIndex;
