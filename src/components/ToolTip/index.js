import React from 'react';
import { Tooltip as LeafTooltip } from 'react-leaflet';
import { useMapContext } from '../../providers/MapProvider';
import { getAreaRevenue } from '../../utils';

const position = [12.95399776, 77.63093975];
const ToolTip = ({ feature }) => {
  const { users } = useMapContext();
  const { proUserCount, revenuePercentage, totalUserCount } = getAreaRevenue(feature, users);
  return (
    <LeafTooltip
      position={position}
      direction="top"
      className="text-slate-600 font-poppins rounded-md"
      opacity={1}
    >
      <div className="p-2 text-center">
        <h2 className="text-base font-poppins text-white font-semibold my-1 bg-slate-400 px-4 py-2 rounded-sm">
          {feature.layer.feature.properties.name}
        </h2>
        <div>
          <h2 className="text-sm">
            Total Users: <span>{totalUserCount}</span>
          </h2>
          <h2 className="text-sm">
            Pro users: <span>{proUserCount}</span>
          </h2>
          <h2 className="text-sm">
            Revenue: <span>{revenuePercentage}%</span>
          </h2>
        </div>
      </div>
    </LeafTooltip>
  );
};

export default ToolTip;
