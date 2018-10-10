/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: css-sping
 * Date: 2018-10-09 11:41
 */

import React, { Component } from 'react';
import spring, { toString } from 'css-spring';
import styled, { keyframes } from 'styled-components';

// 放大时的弹簧特效
const keyframesResult = spring(
    { scale: 0, opacity: 0 }, // from
    { scale: 1, opacity: 1 }, // to
    // precision 表示精度有俩位
    { damping: 14, stiffness: 170, precision: 2}
);

keyframesResult['100%'].visibility = 'visible';

const keyframeString = toString(keyframesResult);

let newKeyframeString = replaceScale(keyframeString);

// 处理 scale 参数
function replaceScale(keyframeString){
    return keyframeString.replace(/(scale):(\d\.?\d*)/ig,(match,$1,$2) => {
        return "transform:" + $1+"(" + $2 + ")";
    });
}

const Base = styled.div`
    width: 300px;
    height: 200px;
    position: absolute;
    border-radius: 5px;
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: green;
    color: #fff;
    overflow: hidden;
    visibility: hidden;
`;

// 缩小时的弹簧特效
/* const miniKeyframesResult = spring(
 *     { scale: 1, opacity: 1 }, // from
 *     { scale: 0, opacity: 0 }, // to
 *     // precision 表示精度有俩位
 *     { damping: 14, stiffness: 170, precision: 2}
 * );
 *
 * const miniKeyframeString = toString(miniKeyframesResult);
 *
 * let newMiniKeyframeString = replaceScale(miniKeyframeString); */

const StyledDiv = styled(Base)(props => {
    let { isShow } = props;
    if(isShow === 'show'){
        return{
            animation: `${keyframes`${newKeyframeString}`} 1s linear forwards;`,
        }
    }
});

const Button = styled.button`
    margin: 10px auto;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: ${props => props.bgColor || '#000'};
    padding: 5px 8px;
    color: #fff;
    outline: none;
`;

const MFooter = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default class Spring extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: null
        };
        this.play = this.play.bind(this);
    }
    componentDidMount(){

    }
    play(isShow){
        if(isShow){
            this.setState({
                isShow: isShow
            });
        }
        /* this.setState(prev => ({
         *     isShow: !prev.isShow
         * })); */
    }
    render(){
        let { isShow } = this.state;
        return(
            <React.Fragment>
               <Button onClick={() => this.play('show')}>play</Button>
               <StyledDiv isShow={isShow}>
                 <h3>弹簧动效。。。</h3>
                 <MFooter>
                   <Button bgColor="red" onClick={() => this.play('hide')}>cancel</Button>
                 </MFooter>
               </StyledDiv>
            </React.Fragment>
        );
    }
}
