import React from 'react';
import MapView from '../../components/MapView';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';
import GeoLayout from '../../components/GeoLayout';
import 'leaflet/dist/leaflet.css';

const position = [12.95399776, 77.63093975];
const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:w-4/5 mx-auto min-h-screen">
        <div className="w-full h-96 md:sticky top-1/4 md:h-4/5 md:border-slate-100 border-2 p-4 rounded-sm">
          <MapView position={position}>
            <GeoLayout />
          </MapView>
        </div>
        <div className="w-full md:max-w-md">
          <Table />
        </div>
      </div>
    </>
  );
};

export default App;
