/*
 *  功能：创建和使用 redux store
 *  create by tiankai on 05/15/18 11:14:01
 */
import { applyMiddleware, createStore, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import appReducer from './reducers';
import rootSaga from './sagas';

/**
 * 记录所有被发起的 action 以及产生的新的 state。
 */
const logger = store => next => action => {
    console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
}
/**
 * 让你可以发起一个函数来替代 action。
 * 这个函数接收 `dispatch` 和 `getState` 作为参数。
 *
 * 对于（根据 `getState()` 的情况）提前退出，或者异步控制流（ `dispatch()` 一些其他东西）来说，这非常有用。
 *
 * `dispatch` 会返回被发起函数的返回值。
 */
const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
      : next(action);

export const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = compose(applyMiddleware(
  thunk,
  sagaMiddleware,
  routerMiddleware(history)
));

let store = createStore(
  connectRouter(history)(appReducer),
  middleware
);

sagaMiddleware.run(rootSaga);

export default store;
