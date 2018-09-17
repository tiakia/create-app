/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: Welcome
 * Date: Wed May 16 10:19:18 2018
 */

import React, { Component } from 'react';
import 'src/assets/css/welcome.css';
import PropTypes from 'prop-types';
import { debounce } from 'src/utils/debounce';
import { history } from 'src/store/createStore';

export default class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            uname: null,
            pwd: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    componentDidMount(){

    }
    handleClick() {
        let { uname, pwd } = this.state;
        if(uname === 'admin' && pwd === "123456") {
            sessionStorage.setItem('token',"admin");
            history.push("/");
        }else {
            alert("用户名密码不正确");
        }
    }
    handleInput(e){
        let { type, value } = e.target;
        let uname,pwd;
        if(type === "text"){
            uname = value;
            this.setState({
                uname
            });

        }else if(type === "password"){
            pwd = value;
            this.setState({
                pwd
            });

        }
    }
    render(){
        return(
            <div className="welcome">
            <div className="welcome-con">
            <h1>
            首页展示页面
            </h1>
            <div className="form-con">
            <input type="text" name="uname" placeholder="admin" onInput={ e => debounce(this.handleInput(e)) }/>
            <input type="password" name="pwd" placeholder="123456" onInput={ e => debounce(this.handleInput(e))}/>
            <button onClick={this.handleClick}>Login</button>
            </div>
            </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    history: PropTypes.shape({
        go: PropTypes.func
    })

}
