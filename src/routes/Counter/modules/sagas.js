import { delay } from 'redux-saga';
import { put, take } from 'redux-saga/effects';

export function* incrementAsync(){
    while(true){
        yield take('INCREMENTASYNC');
        yield delay(1000);
        yield put({type: 'INCREMENT2'})
    }
}
