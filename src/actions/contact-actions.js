import {
    GET_CITY_VALUE,
    TEMPERATURE_ARRAY,
} from './types';

export const getCityValue = (cityValue) => ({type: GET_CITY_VALUE, cityValue});
export const updateWeather = (weather) => ({type: TEMPERATURE_ARRAY, weather});