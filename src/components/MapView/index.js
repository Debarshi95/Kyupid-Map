import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapView = ({ position, children }) => {
  return (
    <MapContainer
      center={position}
      zoom={10}
      doubleClickZoom={false}
      maxZoom={12}
      minZoom={10}
      className="h-96"
    >
      {children}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapView;
