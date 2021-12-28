import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import MapView, { MyGeoJSON } from '../../components/MapView';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';
import { getAreas, getUsers } from '../../services/kyupidApi';

const position = [12.95399776, 77.63093975];
const App = () => {
  const [users, setUsers] = useState();
  const [area, setArea] = useState();

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data.data.users);
    });
  }, []);

  useEffect(() => {
    getAreas().then((data) => {
      setArea(data.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:w-4/5 mx-auto min-h-screen">
        <div className="w-full h-96 md:sticky top-1/4 md:h-4/5 md:border-slate-100 border-2 p-4 rounded-sm">
          <MapView position={position}>
            <MyGeoJSON area={area} />
          </MapView>
        </div>
        <div className="w-full md:max-w-md">
          <Table users={users} areas={area} />
        </div>
      </div>
    </>
  );
};

export default App;
