import React from "react";
import { useData } from "../../Context/data-context";
import "./Sidebar.css";
const Sidebar = () => {
  const { totalAreaData, setCurrentAreaName } = useData();
  return (
    <div className="sidebar--container">
      <div className="sidebar--data">
        Total Revenue
        <span>
          {totalAreaData.totalRevenue !== 0
            ? `$${totalAreaData.totalRevenue * 50} `
            : "Loading..."}
        </span>
      </div>
      <div className="sidebar--data">
        Total users
        <span>
          {totalAreaData.totalUsers !== 0
            ? totalAreaData.totalUsers
            : "Loading..."}
        </span>
      </div>
      <div className="sidebar--data">
        Total Male Users
        <span>
          {totalAreaData.totalMale !== 0
            ? totalAreaData.totalMale
            : "Loading..."}
        </span>
      </div>
      <div className="sidebar--data">
        Total Female Users
        <span>
          {totalAreaData.totalFemale !== 0
            ? totalAreaData.totalFemale
            : "Loading..."}
        </span>
      </div>

      <div
        className="sidebar--data button"
        onClick={() => setCurrentAreaName(totalAreaData.highestMatches)}
      >
        Area with highest matches
        <span>
          {totalAreaData.highestMatches !== ""
            ? totalAreaData.highestMatches
            : "Loading..."}
        </span>
      </div>
      <div
        className="sidebar--data button"
        onClick={() => setCurrentAreaName(totalAreaData.highestConversion)}
      >
        Area with highest conversion
        <span>
          {totalAreaData.highestConversion !== ""
            ? totalAreaData.highestConversion
            : "Loading..."}
        </span>
      </div>
      <div
        className="sidebar--data button"
        onClick={() => setCurrentAreaName(totalAreaData.highestRevenue)}
      >
        Area with highest revenue
        <span>
          {totalAreaData.highestRevenue !== ""
            ? totalAreaData.highestRevenue
            : "Loading..."}
        </span>
      </div>
      <div
        className="sidebar--data button"
        onClick={() => setCurrentAreaName(totalAreaData.highestMale)}
      >
        Area with highest males
        <span>
          {totalAreaData.highestMale !== ""
            ? totalAreaData.highestMale
            : "Loading..."}
        </span>
      </div>
      <div
        className="sidebar--data button"
        onClick={() => setCurrentAreaName(totalAreaData.highestFemale)}
      >
        Area with highest females
        <span>
          {totalAreaData.highestFemale !== ""
            ? totalAreaData.highestFemale
            : "Loading..."}
        </span>
      </div>
      <div
        className="reset-current-map-data"
        onClick={() => setCurrentAreaName("")}
      >
        View all areas
      </div>
    </div>
  );
};

export default Sidebar;
