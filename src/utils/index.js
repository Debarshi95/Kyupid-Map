const getUsersData = (feature, users) => {
  const { properties } = feature;
  const userData = { totalUserCount: 0, femaleUserCount: 0 };
  users.forEach((user) => {
    if (user.area_id === properties.area_id) {
      userData.totalUserCount += 1;
      if (user.gender === 'F') {
        userData.femaleUserCount += 1;
      }
    }
  });

  return {
    ...userData,
    maleUserCount: userData.totalUserCount - userData.femaleUserCount,
    areaName: properties.name,
  };
};

export default getUsersData;

export const getAreaRevenue = (feature, users) => {
  const { properties } = feature.layer.feature;

  let proUserCount = 0;
  let totalUserCount = 0;
  users.forEach((user) => {
    if (user.area_id === properties.area_id) {
      totalUserCount += 1;
      if (user.is_pro_user) {
        proUserCount += 1;
      }
    }
  });

  const revenuePercentage = Math.ceil((proUserCount / totalUserCount) * 100);
  return {
    proUserCount,
    totalUserCount,
    revenuePercentage,
  };
};
