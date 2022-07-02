import React, { useEffect, useState } from "react";

import { useData } from "../../Context/data-context";
import { getFemaleUsersInThisArea, getMaleUsersInThisArea, getMatchesInThisArea, getRevenueInThisArea, getUsersInThisArea } from "../../Utils";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polygon,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import Map from "react-map-gl";
import "./MapView.css";
import MapSelector from "../MapSelector/MapSelector";
import CurrentAreaData from "../CurrentAreaData/CurrentAreaData";
import ColorScale from "../ColorScale/ColorScale";
import SearchAreas from "../SearchAreas/SearchAreas";



const MapView = () => {
  const { currentArea, currentAreaHandler,currentAreaName, position, mapData, userData, mapType,currentAreaData,setShowCurrentData } = useData();
  const [mapStyleObject, setMapStyleObject] = useState({});
  const [dominantUserGender, setDominantUserGender] = useState("");
  const [currentMapData, setCurrentMapData] = useState();
  useEffect(() => {
    if (currentAreaName !== "") {
      setCurrentMapData(
        mapData.filter((area) => area.properties.name === currentAreaName)
      );
    } else {
      setCurrentMapData(mapData);
    }
  }, [currentAreaName,mapData]);
  useEffect(() => {
    switch (mapType) {
      case "user":
        setMapStyleObject({
          max: "#581c87",
          uppermed: "#7e22ce",
          med: "#a855f7",
          lowermed: "#d8b4fe",
          lower: "#f3e8ff",
        });
        break;
      case "revenue":
        setMapStyleObject({
          max: "#064e3b",
          uppermed: "#047857",
          med: "#10b981",
          lowermed: "#6ee7b7",
          lower: "#d1fae5",
        });
        break;
      case "male":
        setMapStyleObject({
          max: "#365314",
          uppermed: "#4d7c0f",
          med: "#84cc16",
          lowermed: "#bef264",
          lower: "#d9f99d",
        });
        break;
      case "female":
        setMapStyleObject({
          max: "#0c4a6e",
          uppermed: "#0369a1",
          med: "#0ea5e9",
          lowermed: "#7dd3fc",
          lower: "#bae6fd",
        });
        break;
      case "match":
        setMapStyleObject({
          max: "#db2777",
          uppermed: "#ec4899",
          med: "#f472b6",
          lowermed: "#f9a8d4",
          lower: "#fbcfe8",
        });
        break;
      default:
        return;
    }}
    , [mapType]);
  
  
  
  const currentColor = (area) => {
    switch (mapType) {
      case "user":
        let usersInThisArea = getUsersInThisArea(userData, area);
        if (currentArea?.properties?.name === area?.properties?.name) {
          if (currentAreaData.leadingGender === "M") {
            return "#a3e635";
          } else if (currentAreaData.leadingGender === "F") {
            return "#F4B583";
          }
          else
            return "";
        } else {
          if (usersInThisArea > 260) return mapStyleObject.max;
          else if (usersInThisArea > 220) return mapStyleObject.uppermed;
          else if (usersInThisArea > 180) return mapStyleObject.med;
          else if (usersInThisArea > 140) return mapStyleObject.lowermed;
          else if (usersInThisArea >= 0) return mapStyleObject.lower;
        }
        break;
      case "revenue":
        let revenueInThisArea = getRevenueInThisArea(userData, area);
        if (currentArea?.properties?.name === area?.properties?.name) {
          return "#1f2937";
        } else {
          if (revenueInThisArea > 130) return mapStyleObject.max;
          else if (revenueInThisArea > 110) return mapStyleObject.uppermed;
          else if (revenueInThisArea > 90) return mapStyleObject.med;
          else if (revenueInThisArea > 70) return mapStyleObject.lowermed;
          else if (revenueInThisArea >= 0) return mapStyleObject.lower;
        }
        break;
      case "male":
        let malesInThisArea = getMaleUsersInThisArea(userData, area);
        if (currentArea?.properties?.name === area?.properties?.name) {
          return "#1f2937";
        } else {
          if (malesInThisArea > 160) return mapStyleObject.max;
          else if (malesInThisArea > 120) return mapStyleObject.uppermed;
          else if (malesInThisArea > 80) return mapStyleObject.med;
          else if (malesInThisArea > 40) return mapStyleObject.lowermed;
          else if (malesInThisArea >= 0) return mapStyleObject.lower;
        }
        break;
      case "female":
        let femalesInThisArea = getFemaleUsersInThisArea(userData, area);
        if (currentArea?.properties?.name === area?.properties?.name) {
          return "#1f2937";
        } else {
          if (femalesInThisArea > 160) return mapStyleObject.max;
          else if (femalesInThisArea > 120) return mapStyleObject.uppermed;
          else if (femalesInThisArea > 80) return mapStyleObject.med;
          else if (femalesInThisArea > 40) return mapStyleObject.lowermed;
          else if (femalesInThisArea >= 0) return mapStyleObject.lower;
        }
        break;
      case "match":
        let matchesInThisArea = getMatchesInThisArea(userData, area);
        if (currentArea?.properties?.name === area?.properties?.name) {
          return "#1f2937";
        } else {
          if (matchesInThisArea > 1600) return mapStyleObject.max;
          else if (matchesInThisArea > 1200) return mapStyleObject.uppermed;
          else if (matchesInThisArea > 800) return mapStyleObject.med;
          else if (matchesInThisArea > 400) return mapStyleObject.lowermed;
          else if (matchesInThisArea >= 0) return mapStyleObject.lower;
        }
        break;
      default:
        return;
    }
  }
  return (
    <>
      <ColorScale/>
      <MapSelector />
      <CurrentAreaData />
      <SearchAreas/>
      <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentMapData?.map((area) => {
          return (
            <Polygon
              pathOptions={{
                fillOpacity: 5,
                weight: 5,
                color: "",
                fillColor: currentColor(area, currentArea),
              }}
              key={area.properties.area_id}
              positions={area.geometry.coordinates}
              eventHandlers={{
                mouseover: () => {
                  currentAreaHandler(area);
                  setShowCurrentData(true);
                },
                mouseout: () => {
                  setShowCurrentData(false);
                  currentAreaHandler({});
                },
              }}
            ></Polygon>
          );
        })}
      </MapContainer>
    </>
  );
     
};

export default MapView;
