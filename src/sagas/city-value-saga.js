import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_CITY_VALUE} from '../actions/types';
import {weatherApiCall} from "../app/api/integration";
import {updateWeather} from "../actions";

export const cityValueUpdate = function* (action) {
    console.log("entered");
    try {
        console.log('saga api call');
        console.log('action.cityValue', action.cityValue);
        const weatherData = yield call (weatherApiCall, action.cityValue);
        console.log('weatherData', weatherData.data);
        yield put(updateWeather(weatherData.data));
    } catch (error) {
        console.log('error during the api call');
    }
};

export default function* cityValueSaga() {
    console.log('inside');
    yield takeEvery(GET_CITY_VALUE, cityValueUpdate);
}