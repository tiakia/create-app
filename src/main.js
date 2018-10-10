/*
 *  功能：程序启动和渲染
 *  create by tiankai on 05/15/18 11:05:52
 */

//import { hot, AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './routes/index';

let rootElement = document.getElementById('root');

/* if (process.env.NODE_ENV !== 'production') {
 *
 *     render(
 *         <AppContainer>
 *         <App/>
 *         </AppContainer>,
 *         rootElement
 *     );
 *
 *     if(module.hot){
 *         module.hot.accept('./routes/index',() => {
 *             const NewApp = require('./routes/index').default;
 *             render(
 *                 <NewApp/>,
 *                 rootElement
 *             );
 *         });
 *     }
 * } else {
 *     render(
 *         <App/>,
 *         rootElement
 *     )
 * } */

render(
    <App/>,
    rootElement
);
