//Total Data Metrics
export const getTotalRevenue = (userData) => {
  return userData?.filter((user) => user.is_pro_user === true).length;
};

export const getAreaWithHighestRevenue = (userData, mapData) => {
  const value = mapData?.reduce(
    (acc, curr) =>
      userData.filter(
        (user) =>
          user?.area_id === curr?.properties?.area_id &&
          user?.is_pro_user === true
      ).length > acc.proUsers
        ? {
            area: curr?.properties?.name,
            proUsers: userData.filter(
              (user) =>
                user?.area_id === curr?.properties?.area_id &&
                user?.is_pro_user === true
            ).length,
          }
        : acc,
    { area: "", proUsers: 0 }
  );
  return value;
};

export const getAreaWithHighestProUsers = (userData, mapData) => {
  return mapData?.reduce(
    (acc, curr) =>
      userData.filter(
        (user) =>
          user?.area_id === curr?.properties?.area_id &&
          user.is_pro_user === true
      ).length > acc
        ? curr?.properties?.name
        : acc,
    ""
  );
};
export const getAreaWithHighestMatches = (userData, mapData) => {
  const value = mapData?.reduce(
    (acc, curr) =>
      userData
        .filter((user) => user?.area_id === curr?.properties?.area_id)
        .reduce((matches, current) => (matches += current.total_matches), 0) >
      acc.matches
        ? {
            area: curr?.properties?.name,
            matches: userData
              .filter((user) => user?.area_id === curr?.properties?.area_id)
              .reduce(
                (matches, current) => (matches += current.total_matches),
                0
              ),
          }
        : acc,
    { area: "", matches: 0 }
  );
  return value;
};
export const getAreaWithHighestMaleUsers = (userData, mapData) => {
  const value = mapData?.reduce(
    (acc, curr) =>
      userData.filter(
        (user) =>
          user?.area_id === curr?.properties?.area_id && user.gender === "M"
      ).length > acc.highestMale
        ? {
            area: curr?.properties?.name,
            highestMale: userData.filter(
              (user) =>
                user?.area_id === curr?.properties?.area_id &&
                user.gender === "M"
            ).length,
          }
        : acc,
    { area: "", highestMale: 0 }
  );
  return value;
};
export const getAreaWithHighestFemaleUsers = (userData, mapData) => {
  const value = mapData?.reduce(
    (acc, curr) =>
      userData.filter(
        (user) =>
          user?.area_id === curr?.properties?.area_id && user.gender === "F"
      ).length > acc.highestFemale
        ? {
            area: curr?.properties?.name,
            highestFemale: userData.filter(
              (user) =>
                user?.area_id === curr?.properties?.area_id &&
                user.gender === "F"
            ).length,
          }
        : acc,
    { area: "", highestFemale: 0 }
  );
  return value;
};
export const getAreaWithHighestConversionRate = (userData, mapData) => {
  const value = mapData.reduce(
    (acc, curr) =>
      getConversionRateInThisArea(userData, curr) > acc.conversionRate
        ? {
            area: curr?.properties?.name,
            conversionRate: getConversionRateInThisArea(userData, curr),
          }
        : acc,
    { area: "", conversionRate: 0 }
  );
  return value;
};

export const getTotalMatches = (userData) => {
  return userData?.reduce(
    (matches, curr) => (matches += curr.total_matches),
    0
  );
};

export const getTotalUsers = (userData) => {
  return userData?.length;
};

export const getTotalMale = (userData) => {
  return userData?.filter((user) => user.gender === "M").length;
};

export const getTotalFemale = (userData) => {
  return userData?.filter((user) => user.gender === "F").length;
};

//Data Metrics specific to Areas
export const getRevenueInThisArea = (userData, area) =>
  userData?.filter(
    (user) =>
      user?.area_id === area?.properties?.area_id && user?.is_pro_user === true
  ).length;

export const getUsersInThisArea = (userData, area) =>
  userData?.filter((user) => user?.area_id === area?.properties?.area_id)
    .length;

export const getFemaleUsersInThisArea = (userData, area) =>
  userData?.filter(
    (user) =>
      user?.area_id === area?.properties?.area_id && user?.gender === "F"
  ).length;

export const getMaleUsersInThisArea = (userData, area) =>
  userData?.filter(
    (user) => user?.area_id === area?.properties?.area_id && user.gender === "M"
  ).length;

export const getLeadingGenderInThisArea = (userData, area) => {
  if (
    getMaleUsersInThisArea(userData, area) >
    getFemaleUsersInThisArea(userData, area)
  )
    return "M";
  else if (
    getMaleUsersInThisArea(userData, area) <
    getFemaleUsersInThisArea(userData, area)
  )
    return "F";
  else return "";
};
export const getMatchesInThisArea = (userData, area) =>
  userData
    ?.filter((user) => user?.area_id === area?.properties?.area_id)
    .reduce((acc, curr) => {
      acc += curr.total_matches;
      return acc;
    }, 0);

export const getProUsersInThisArea = (userData, area) =>
  userData?.filter(
    (user) =>
      user?.area_id === area?.properties?.area_id && user?.is_pro_user === true
  ).length;

export const getConversionRateInThisArea = (userData, area) =>
  (
    (getProUsersInThisArea(userData, area) /
      getUsersInThisArea(userData, area)) *
    100
  ).toFixed(1);
