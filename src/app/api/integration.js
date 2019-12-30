const axios = require('axios');

export const weatherApiCall = async (city) => {
    console.log('integrations page city value',city);
    let url = `http://localhost:5000/weather`;
    const axiosData = await axios.get(url,{params:{data:city}});
    console.log('axiosData',axiosData);
    return axiosData
};
