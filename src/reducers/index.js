import {combineReducers} from 'redux';
import dummy from './city-reducer';
import weatherArray from './weather-array-reducer';

export const reducers = {
    dummy,
    weatherArray
};

export default combineReducers(reducers);