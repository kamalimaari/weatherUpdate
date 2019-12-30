const axios = require('axios');
const express = require('express');
const router = express.Router();
router.get('/weather', async (req, res) => {
    try {
        let city = req.query.data;
        const apiKey = '04ac9637ce9b18da89dad97840ffdd87';
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
        const consolidatedList = [];
        const temperatureList= [];
        const date = [];
        const axiosData = await axios.get(url);
        const parsedAxiosData = axiosData.data.list;
        parsedAxiosData.map((rows, i) => temperatureList.push(rows.main.temp));
        parsedAxiosData.map((rows,i) => date.push(rows.dt_txt));
        let i = 0;
        for( i; i < temperatureList.length;i++){
            if (date[i].includes('00:00:00')) {
                let splitedDate = date[i].split(' ');
                let celciusConversion = (temperatureList[i] - 32) * 5/9;
                consolidatedList.push([splitedDate[0], Math.floor(celciusConversion)]);
            }
        }
        return res.status(200).send(consolidatedList);
    }
    catch (err) {
        let status = 500;
        return res.status(status).send('An error ocurred while retrieving weather data');
    }
});
module.exports = router;