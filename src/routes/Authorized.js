/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: Authorized
 * Date: 2018-07-19 15:51
 */

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Authorized extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { component: Component, token, noMatch, ...rest } = this.props;
        return(
            <Route {...rest} render={ props => {
                return  token !== null
                     ? <Component {...props} />
                     : <Redirect to={noMatch} />
            }}/>
        );
    }
}

Authorized.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]),
    token: PropTypes.string,
    noMatch: PropTypes.string
}
