/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: Header
 * Date: 05/15/18 09:32:53
 */

import React, { Component } from 'react';
import logo from 'src/assets/images/logo.svg';
import 'src/assets/css/app.scss';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  componentDidMount(){

  }
  render(){
    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    );
  }
}
