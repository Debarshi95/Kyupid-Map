const getUsersData = (feature, users) => {
  const userList = users.filter((user) => user.area_id === feature.properties.area_id);
  const femaleUserCount = userList.filter((areaUsers) => areaUsers.gender === 'F').length;
  const maleUserCount = userList.length - femaleUserCount;
  return {
    totalUserCount: userList.length,
    femaleUserCount,
    maleUserCount,
    areaName: feature.properties.name,
  };
};

export default getUsersData;
