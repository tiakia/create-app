/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: 404
 * Date: 05/15/18 09:44:50
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'static/css/404.css';
import notFoundImg from 'static/images/404.svg';

export default class NoMatch extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  componentDidMount(){

  }
  render(){
    return(
            <div className="errMain">
                <div className="errPic">
                    <div className="pic"
                        style={{ backgroundImage: `url(${notFoundImg})`}}/>
                </div>
                <div className="errContent">
                    <h1 className="errTitle">404</h1>
                    <div className="errMsg">抱歉，你访问的页面不存在</div>
        {
            sessionStorage.getItem('token') !== null ?
            <Link to="/home">
            <span>返回首页</span>
            </Link> :
            <Link to="/login">
            <span>返回首页</span>
            </Link>

        }
        </div>
        </div>

    );
  }
}
