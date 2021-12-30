import React, { useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { useMapContext } from '../../providers/MapProvider';
import ToolTip from '../ToolTip';
import Loader from '../Loader';

const layoutStyle = { color: '#64748B', fillOpacity: 0.1, weight: 1.35 };

const GeoLayout = () => {
  const [feature, setFeature] = useState();
  const { area } = useMapContext();

  const handleMouseOver = (layer) => {
    setFeature(layer);
  };
  if (!area) {
    return <Loader />;
  }

  return (
    <GeoJSON
      data={area}
      style={layoutStyle}
      eventHandlers={{
        mouseover: handleMouseOver,
      }}
    >
      {feature && <ToolTip feature={feature} />}
    </GeoJSON>
  );
};

export default GeoLayout;
