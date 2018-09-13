/*
 *  功能：所有路由的集合
 *  create by tiankai on 05/15/18 11:57:34
 */

import React from 'react';
import Layout from 'src/layouts/layout';
import routerConfig from 'src/common/router';
import { renderRoutes } from 'react-router-config';

const Routes = () => {
    return (
        <Layout>
          { renderRoutes(routerConfig) }
        </Layout>
    );
};

export default Routes;
