/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: Layout
 * Date: 05/15/18 12:51:37
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import 'src/assets/css/layout.scss';

export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className="layout">
              <div className="header">
                <Header/>
              </div>
              <div className="nav">
                <Nav/>
              </div>
              <main className="main">
                {this.props.children}
              </main>
              <div className="footer">
                <Footer/>
              </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.any
}
