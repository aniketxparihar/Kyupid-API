import React, { useEffect, useState } from "react";
import { useData } from "../../Context/data-context";
import "./SearchAreas.css";
const SearchAreas = () => {
  const { mapData, setCurrentAreaName } = useData();
  const [searchText, setSearchText] = useState("");
  const [searchResultVisible, setSearchResultVisible] = useState(false);
  useEffect(() => {
    if (searchText !== "") setSearchResultVisible(true);
    else setSearchResultVisible(false);
  }, [searchText]);
  return (
    <div className="search--wrapper">
      <div className="search-input--container">
        <input
          className="search-input"
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
          placeholder="Search areas in Bangalore"
        />
        <span
          className="search-result-visible--toggle material-symbols-outlined"
          onClick={() => setSearchResultVisible((prev) => !prev)}
        >
          {searchResultVisible ? "expand_more" : "expand_less"}
        </span>
      </div>
      <div className="search-result--container">
        {searchResultVisible &&
          mapData
            .filter((area) =>
              area.properties.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            )
            .map((area) => {
              return (
                <div
                  className="search-result"
                  onClick={() => {
                    setCurrentAreaName(area.properties.name);
                    setSearchResultVisible(false);
                  }}
                  key={area.properties.area_id}
                >
                  {area.properties.name}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SearchAreas;
