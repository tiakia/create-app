/*
 *  功能：用store启动主程序路由
 *  create by tiankai on 05/15/18 11:54:43
 */

import React from 'react';
import Root from './root';
import store from './../store/createStore';
import { hot } from 'react-hot-loader';

const App = () => <Root store={store}/>;

export default hot(module)(App);
