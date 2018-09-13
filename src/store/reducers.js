/*
 *  功能：Recducer注册和注入
 *  create by tiankai on 05/15/18 11:14:34
 */

import { combineReducers } from 'redux';
import todoReducer from 'src/routes/Todo/modules/reducers';
import countReducer from 'src/routes/Counter/modules/reducers';

const appReducer = combineReducers({
    todo: todoReducer,
    count: countReducer
});

export default appReducer;
