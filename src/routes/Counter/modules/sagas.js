import { delay } from 'redux-saga';
import { put, take } from 'redux-saga/effects';
import { types } from './actions.js';

export function* incrementAsync(){
    while(true){
        yield take(types.INCREMENTASYNC);
        yield delay(1000);
        yield put({type: types.INCREMENT2})
    }
}
