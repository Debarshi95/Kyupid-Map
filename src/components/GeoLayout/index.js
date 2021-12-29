import React, { useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { useMapContext } from '../../providers/MapProvider';
import ToolTip from '../ToolTip';

const GeoLayout = () => {
  const [feature, setFeature] = useState();
  const { area } = useMapContext();

  const handleMouseOver = (layer) => {
    setFeature(layer);
  };
  if (!area) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-poppins">Loading....</h1>
      </div>
    );
  }

  return (
    <GeoJSON
      data={area}
      eventHandlers={{
        mouseover: handleMouseOver,
      }}
    >
      {feature && <ToolTip feature={feature} />}
    </GeoJSON>
  );
};

export default GeoLayout;
