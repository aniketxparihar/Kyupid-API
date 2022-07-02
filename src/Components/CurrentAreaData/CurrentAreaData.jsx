import React from 'react'
import { useData } from '../../Context/data-context';
import "./CurrentAreaData.css"

const CurrentAreaData = () => {
  const {
    currentArea,
    position,
    mapType,
    currentAreaData,
    showCurrentData
  } = useData();
  if (showCurrentData) {
    switch (mapType) {
      case "user":
        return (
          <div className="current-area-data--container">
            <div className="current-area-data area">
              {currentArea?.properties?.name}
            </div>
            <div className="current-area-data">
              Users{" "}
              <span>
                {currentAreaData?.usersInThisArea}{" "}
                <span className="material-symbols-outlined">person</span>
              </span>
            </div>
            <div className="current-area-data">
              Male Users{" "}
              <span>
                {currentAreaData?.maleUsersInThisArea}{" "}
                <span className="material-symbols-outlined">male</span>
              </span>
            </div>
            <div className="current-area-data">
              Female Users{" "}
              <span>
                {currentAreaData?.femaleUsersInThisArea}{" "}
                <span className="material-symbols-outlined">female</span>
              </span>
            </div>
            <div className="current-area-data">
              Matches{" "}
              <span>
                {currentAreaData?.matchesInThisArea}{" "}
                <span className="material-symbols-outlined">favorite</span>
              </span>
            </div>
            <div className="current-area-data">
              Leading Gender{" "}
              <span>
                {currentAreaData?.leadingGender === "F" ? (
                  <span className="material-symbols-outlined">female</span>
                ) : (
                  <span className="material-symbols-outlined">male</span>
                )}
              </span>
            </div>
            <div className="current-area-data">
              Gender Ratio (M/F) <span>{currentAreaData?.genderRatio} %</span>
            </div>
          </div>
        );
      case "revenue":
        return (
          <div className="current-area-data--container">
            <div className="current-area-data area">
              {currentArea?.properties.name}
            </div>
            <div className="current-area-data">
              Users{" "}
              <span>
                {currentAreaData?.usersInThisArea}{" "}
                <span className="material-symbols-outlined">person</span>
              </span>
            </div>
            <div className="current-area-data">
              Pro Users{" "}
              <span>
                {currentAreaData?.proUsersInThisArea}{" "}
                <span className="material-symbols-outlined">mood</span>
              </span>
            </div>
            <div className="current-area-data">
              Revenue <span>${currentAreaData?.revenueInThisArea} </span>
            </div>
            <div className="current-area-data">
              Conversion Rate <span>{currentAreaData?.conversionRate} %</span>
            </div>
          </div>
        );
      case "male":
        return (
          <div className="current-area-data--container">
            <div className="current-area-data area">
              {currentArea?.properties?.name}
            </div>
            <div className="current-area-data">
              Male Users{" "}
              <span>
                {currentAreaData?.maleUsersInThisArea}{" "}
                <span className="material-symbols-outlined">male</span>
              </span>
            </div>
          </div>
        );
      case "female":
        return (
          <div className="current-area-data--container">
            <div className="current-area-data area">
              {currentArea?.properties?.name}
            </div>
            <div className="current-area-data">
              Female Users
              <span>
                {currentAreaData?.femaleUsersInThisArea}{" "}
                <span className="material-symbols-outlined">female</span>
              </span>
            </div>
          </div>
        );
      case "match":
        return (
          <div className="current-area-data--container">
            <div className="current-area-data area">
              {currentArea?.properties?.name}
            </div>
            <div className="current-area-data">
              Matches{" "}
              <span>
                {currentAreaData?.matchesInThisArea}{" "}
                <span className="material-symbols-outlined">favorite</span>
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

export default CurrentAreaData