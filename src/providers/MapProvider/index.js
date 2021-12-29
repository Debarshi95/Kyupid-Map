import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getAreas, getUsers } from '../../services/kyupidApi';

const MapContext = createContext();

export const useMapContext = () => {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error('Make sure you wrap your component with Provider');
  return ctx;
};
const MapProvider = ({ children }) => {
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

  const value = useMemo(() => ({ users, area }), [area, users]);

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export default MapProvider;
