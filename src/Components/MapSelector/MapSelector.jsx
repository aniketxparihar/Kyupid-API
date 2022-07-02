import React from "react";
import { useData } from "../../Context/data-context";
import "./MapSelector.css";
const MapSelector = () => {
  const { mapType, setMapType } = useData();
  return (
    <div className="map-selector--container">
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "revenue" ? "#374151" : null }}
        onClick={() => setMapType("revenue")}
      >
        <span className="material-symbols-outlined">attach_money</span>
        Revenue Map
      </div>
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "user" ? "#374151" : null }}
        onClick={() => setMapType("user")}
      >
        <span className="material-symbols-outlined">person</span>
        User Map
      </div>
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "male" ? "#374151" : null }}
        onClick={() => setMapType("male")}
      >
        <span className="material-symbols-outlined">male</span>
        Male Map
      </div>
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "female" ? "#374151" : null }}
        onClick={() => setMapType("female")}
      >
        <span className="material-symbols-outlined">female</span>
        Female Map
      </div>
      <div
        className="map-selector"
        style={{ backgroundColor: mapType === "match" ? "#374151" : null }}
        onClick={() => setMapType("match")}
      >
        <span className="material-symbols-outlined">favorite</span>
        Matches Map
      </div>
    </div>
  );
};

export default MapSelector;
