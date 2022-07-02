import './App.css';
import { useEffect, useState } from 'react';

import MapView from './Components/MapView/MapView';
import Sidebar from './Components/Sidebar/Sidebar';
import { useData } from './Context/data-context';

function App() {
  const { mapData, userData , position }=useData()
  return (
    <div className="App">
      <Sidebar/>
      <MapView position={position} userData={userData} mapData={mapData} />
    </div>
  );
}

export default App;
