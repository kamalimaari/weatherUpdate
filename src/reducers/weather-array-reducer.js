import {TEMPERATURE_ARRAY} from "../actions/types";
const intialState = [];

export default function (state = intialState, action) {
    switch (action.type) {
        case TEMPERATURE_ARRAY: {
            console.log('action.weather',action.weather );
            let newState = {...state};
            newState = action.weather;
            return newState;
        }
        default:
            return state;
    }
}