import React from 'react'
import { useData } from '../../Context/data-context';
import "./ColorScale.css"

const ColorScale = () => {
  const { mapType } = useData();
  switch (mapType) {
    case "user":
      return (
        <div className="user-color-scale">
          <div className="color-scale--container">
            <span className="range">Above 260</span>
            <div className="color user-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">220-260</span>
            <div className="color user-med-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">180-220</span>
            <div className="color user-med"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">140-180</span>
            <div className="color user-med-low"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">100-140</span>
            <div className="color user-low"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">👨 Dom.</span>
            <div className="color male"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">👩 Dom.</span>
            <div className="color female"></div>
          </div>
        </div>
      );
    case "revenue":
      return (
        <div className="color-scale">
          <div className="color-scale--container">
            <span className="range">Above 130</span>
            <div className="color revenue-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">110-130</span>
            <div className="color revenue-med-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">90-110</span>
            <div className="color revenue-med"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">70-90</span>
            <div className="color revenue-med-low"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">50-70</span>
            <div className="color revenue-low"></div>
          </div>
        </div>
      );
    case "male":
      return (
        <div className="color-scale">
          <div className="color-scale--container">
            <span className="range">Above 130</span>
            <div className="color male-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">110-130</span>
            <div className="color male-med-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">90-110</span>
            <div className="color male-med"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">70-90</span>
            <div className="color male-med-low"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">50-70</span>
            <div className="color male-low"></div>
          </div>
        </div>
      );
    case "female":
      return (
        <div className="color-scale">
          <div className="color-scale--container">
            <span className="range">Above 130</span>
            <div className="color female-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">110-130</span>
            <div className="color female-med-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">90-110</span>
            <div className="color female-med"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">70-90</span>
            <div className="color female-med-low"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">50-70</span>
            <div className="color female-low"></div>
          </div>
        </div>
      );
    case "match":
      return (
        <div className="color-scale">
          <div className="color-scale--container">
            <span className="range">Above 130</span>
            <div className="color match-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">110-130</span>
            <div className="color match-med-high"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">90-110</span>
            <div className="color match-med"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">70-90</span>
            <div className="color match-med-low"></div>
          </div>
          <div className="color-scale--container">
            <span className="range">50-70</span>
            <div className="color match-low"></div>
          </div>
        </div>
      )
    default:
      return;
  }
}

export default ColorScale