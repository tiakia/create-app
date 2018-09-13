/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: Counter
 * Date: 2018-09-11 15:58
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { types } from './modules/actions';
import PropTypes from 'prop-types';
import 'src/assets/css/counter.scss';

class Counter extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){

    }
    handleClick(type){
        const { dispatch } = this.props;
        dispatch({type: type});
    }
    render(){
        console.log(this.props);
        return(
            <div id="counter">
            <button className="increBtn" onClick={() => this.handleClick('INCREMENT')}>Increment</button>
            <button className="decreBtn" onClick={() => this.handleClick('DECREMENT')}>decrement</button>
            <div className="countResult">count1: {this.props.count.count1}</div>
            <button className="increAsyncBtn" onClick={() => this.handleClick('INCREMENTASYNC')}>IncrementAsync after 1s</button>
            <div className="countResult">count2: {this.props.count.count2}</div>
            </div>
        );
    }
}

Counter.propTypes = {
    dispatch: PropTypes.func,
    count: PropTypes.object
}

export default connect(({count}) => ({count}))(Counter);
