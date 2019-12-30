import { all } from 'redux-saga/effects';
import cityValueSaga from './city-value-saga';

export default function* rootSaga() {
    console.log('saga ulla entered');
    yield all ([
        cityValueSaga()
    ]);
}
