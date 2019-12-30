const axios = require('axios');
const express = require('express');
const router = express.Router();
router.get('/weather', async (req, res) => {
    try {
        console.log('>>>>req',typeof (req.query.data));
        console.log('>>>>backend');
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
            consolidatedList.push([date[i],temperatureList[i]])
        }
        console.log(consolidatedList);
        return res.status(200).send(consolidatedList);
    }
    catch (err) {
        let status = 500;
        return res.status(status).send('An error ocurred while retrieving weather data');
    }
});
module.exports = router;