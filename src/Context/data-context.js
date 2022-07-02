import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import {
  getTotalFemale,
  getTotalMale,
  getTotalMatches,
  getTotalRevenue,
  getTotalUsers,
  totalMatches,
  getFemaleUsersInThisArea,
  getMaleUsersInThisArea,
  getMatchesInThisArea,
  getRevenueInThisArea,
  getUsersInThisArea,
  getConversionRateInThisArea,
  getProUsersInThisArea,
  getAreaWithHighestRevenue,
  getAreaWithHighestProUsers,
  getAreaWithHighestMatches,
  getAreaWithHighestConversionRate,
  getAreaWithHighestMaleUsers,
  getAreaWithHighestFemaleUsers,
  getLeadingGenderInThisArea,
} from "../Utils";
import axios from "axios";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  //Map centre
  const position = [12.972442, 77.580643];
  //States
  const [mapData, setMapData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showCurrentData, setShowCurrentData] = useState(false);
  const [mapType, setMapType] = useState("revenue");
  const [currentAreaName, setCurrentAreaName] = useState("");
  const [currentArea, setCurrentArea] = useState({});
  const [totalAreaData, setTotalAreaData] = useState({
    totalRevenue: 0,
    totalUsers: 0,
    totalMatch: 0,
    totalMale: 0,
    totalFemale: 0,
  });
  const [currentAreaData, setCurrentAreaData] = useState({
    revenueInThisArea: 0,
    usersInThisArea: 0,
    femaleUsersInThisArea: 0,
    maleUsersInThisArea: 0,
    matchesInThisArea: 0,
    leadingGender: "",
    genderRatio: 0,
  });

  //Swap the GeoJSON Data Lat,Long Arrays
  const swapLatLong = (data) => {
    for (let area of data) {
      area.geometry.coordinates[0].forEach((coordinate) =>
        coordinate.reverse()
      );
    }
    setMapData(data);
  };

  const getMapData = async () => {
    const response = await axios.get("https://kyupid-api.vercel.app/api/areas");
    swapLatLong(response.data.features);
  };
  const getUserData = async () => {
    const response = await axios.get("https://kyupid-api.vercel.app/api/users");
    setUserData(response.data.users);
  };

  //useEffects
  useEffect(() => {
    getMapData();
    getUserData();
  }, []);

  useEffect(() => {
    if (userData !== []) {
      setTotalAreaData({
        totalRevenue: getTotalRevenue(userData),
        totalUsers: getTotalUsers(userData),
        totalMatch: getTotalMatches(userData),
        totalMale: getTotalMale(userData),
        totalFemale: getTotalFemale(userData),
        highestRevenue: getAreaWithHighestRevenue(userData, mapData).area,
        highestProUser: getAreaWithHighestProUsers(userData, mapData),
        highestMatches: getAreaWithHighestMatches(userData, mapData).area,
        highestConversion: getAreaWithHighestConversionRate(userData, mapData)
          .area,
        highestMale: getAreaWithHighestMaleUsers(userData, mapData).area,
        highestFemale: getAreaWithHighestFemaleUsers(userData, mapData).area,
      });
    }
  }, [userData]);

  // Current Area Data
  const currentAreaHandler = (area) => {
    setCurrentArea(area);
  };

  useEffect(() => {
    if (currentArea !== {}) {
      setCurrentAreaData(() => ({
        revenueInThisArea: getRevenueInThisArea(userData, currentArea) * 50,
        usersInThisArea: getUsersInThisArea(userData, currentArea),
        femaleUsersInThisArea: getFemaleUsersInThisArea(userData, currentArea),
        maleUsersInThisArea: getMaleUsersInThisArea(userData, currentArea),
        matchesInThisArea: getMatchesInThisArea(userData, currentArea),
        leadingGender: getLeadingGenderInThisArea(userData, currentArea),
        genderRatio: (
          (getMaleUsersInThisArea(userData, currentArea) /
            getFemaleUsersInThisArea(userData, currentArea)) *
          100
        ).toFixed(1),
        conversionRate: getConversionRateInThisArea(userData, currentArea),
        proUsersInThisArea: getProUsersInThisArea(userData, currentArea),
      }));
    }
  }, [currentArea]);

  return (
    <DataContext.Provider
      value={{
        mapData,
        userData,
        position,
        totalAreaData,
        currentArea,
        currentAreaHandler,
        currentAreaData,
        mapType,
        setMapType,
        setShowCurrentData,
        showCurrentData,
        currentAreaName,
        setCurrentAreaName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };
