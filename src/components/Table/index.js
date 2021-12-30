/* eslint-disable react/no-array-index-key */
import React from 'react';
import Loader from '../Loader';
import { useMapContext } from '../../providers/MapProvider';
import getUsersData from '../../utils';

const Table = () => {
  const { users, area: areas } = useMapContext();
  return (
    <div className="my-4 md:my-0 py-4 rounded-sm md:ml-8 font-poppins">
      <h2 className="font-bold text-lg px-3 text-center bg-slate-500 py-6 text-yellow-50">
        USERS BY AREA
      </h2>
      <div className="">
        {areas && users ? (
          areas.features.map((area, idx) => {
            const { femaleUserCount, totalUserCount, maleUserCount, areaName } = getUsersData(
              area,
              users
            );
            return (
              <div
                key={idx}
                className={`py-1 px-2 sm:py-2 ${idx % 2 === 0 ? 'bg-slate-200' : 'bg-gray-50'}`}
              >
                <h3 className="font-semibold text-slate-500 text-sm sm:text-base">
                  {areaName.toUpperCase()}
                </h3>
                <div className="grid grid-cols-3">
                  <h4 className="text-center text-sm sm:text-base">
                    <span className="font-medium text-neutral-500">Total users</span>
                    <span className="block text-stone-600">{totalUserCount}</span>
                  </h4>
                  <h4 className="text-center text-sm sm:text-base">
                    <span className="font-medium text-neutral-500">Male</span>
                    <span className="block text-stone-600">{maleUserCount}</span>
                  </h4>
                  <h4 className="text-center text-sm sm:text-base">
                    <span className="font-medium text-neutral-500">Female</span>
                    <span className="block text-stone-600">{femaleUserCount}</span>
                  </h4>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Table;
