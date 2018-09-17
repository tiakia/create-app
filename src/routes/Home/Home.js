/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: Home
 * Date: 05/15/18 13:23:04
 */

import React, { Component } from 'react';
//import axios from 'axios';
import 'src/assets/css/home.scss';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      home: '',
      category: ''
    };
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }
  componentDidMount(){

  }
  async handleHomeClick(){
    try {
      //let responseData = await axios.get('/home');
      let responseData = {
          data: "res"
      }
      console.log(responseData);
      this.setState({
        home: responseData.data
      });
    } catch(e) {
      console.log(e);
    }
  }
  render(){
    return(
      <div id="homePage">
        <h1>Home Page</h1>
        <button onClick={this.handleHomeClick}>get response</button>
      </div>
    );
  }
}
