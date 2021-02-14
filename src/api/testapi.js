//Province State

const url2 = "https://covid19.mathdro.id/api/confirmed";

export const fetchPSData = async (provinceState) => {
  let dynamicUrl = url;

  if (provinceState) {
    dynamicUrl = `${url2}${provinceState}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, active, lastUpdate },
    } = await axios.get(dynamicUrl);

    const modifiedPSData = {
      confirmed,
      recovered,
      deaths,
      active,
      lastUpdate,
    };

    return modifiedPSData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchConfirmedData = async () => {
  try {
    const { data } = await axios.get(`${url}/confirmed`);

    const modifiedPSData = data.map((confirmedData) => ({
      confirmed: confirmedData.confirmed.total,
      deaths: confirmedData.deaths.total,
      recovered: confirmedData.recovered.total,
      active: confirmedData.active.total,
      date: confirmedData.lastUpdate,
    }));

    return modifiedPSData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProvinceStates = async () => {
  try {
    const {
      data: { provinceStates },
    } = await axios.get(`${url}/confirmed/`);

    return provinceStates.map((provinceState) => provinceState.name);
  } catch (error) {
    return error;
  }
};