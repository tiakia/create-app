import { delay } from 'redux-saga';
import { put, take, select, all } from 'redux-saga/effects';

import { incrementAsync } from 'src/routes/Counter/modules/sagas';

export function* helloSaga(){
    yield console.log('wait for 2s');
    yield delay(2000);
    yield console.log('Hello Saga');
}

export function* logger(){
    while(true){
        const action = yield take('*');
        const state = yield select();
        console.log('action: ');
        console.dir(action);
        console.log('state after: ')
        console.dir(state);
    }
}

export default function* rootSaga(){
    yield all([
        helloSaga(),
        logger(),
        incrementAsync()
    ]);
}
