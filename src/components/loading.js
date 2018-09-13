import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'src/assets/css/loading.scss';

const defaultStyles = {
    marginTop: '1rem',
    height: "2.5rem",
    backgroundColor: "#ddd",
    opacity: 0.5
}

export default class Loading extends Component {
    constructor(props){
        super(props);
        this.getRows = this.getRows.bind(this);
    }
    getRows(rows){
        const arrayRow = Array.apply(null,Array(rows));
        return arrayRow.map((_,idx) => {
            return (<TextRow key={idx}
            style={{
                ...defaultStyles,
                width: (Math.floor(Math.random() * (100-70+1)+70)) + "%"
            }}
            />)
        });
    }
    render(){
        //const { rows } = this.props;
        const rows = 10;
        return(
            <div className="loading-con">
            <header className="loading-header">
            <div className="loading-logo animation"></div>
            <TextRow style={{
                ...defaultStyles,
                width: "80%"
            }}/>
            </header>
            <main className="loading-main">
            {
                this.getRows(rows)
            }
            </main>
            </div>
        )
    }
}

Loading.propTypes = {
    rows: PropTypes.number
}

export class TextRow extends Component {
    render() {
        const { style } = this.props;
        return(
            <div className="loading-textRow animation"
            style={{...defaultStyles,...style}}
            ></div>
        )
    }
}

TextRow.propTypes = {
    style: PropTypes.object
}
