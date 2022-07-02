import React from 'react'
import { useData } from '../../Context/data-context';
import "./MapSelector.css"
const MapSelector = () => {
  const { mapType, setMapType } = useData();
  return (
    <div className="map-selector--container">
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "revenue" ? "#374151" : null }}
        onClick={() => setMapType("revenue")}
      >
        💵 Revenue Map
      </div>
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "user" ? "#374151" : null }}
        onClick={() => setMapType("user")}
      >
        💁 User Map
      </div>
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "male" ? "#374151" : null }}
        onClick={() => setMapType("male")}
      >
        👨 Male Map
      </div>
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "female" ? "#374151" : null }}
        onClick={() => setMapType("female")}
      >
        👩 Female Map
      </div>
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "match" ? "#374151" : null }}
        onClick={() => setMapType("match")}
      >
        💗 Matches Map
      </div>
    </div>
  );
}

export default MapSelector