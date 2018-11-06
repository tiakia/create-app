import React, { PureComponent } from "react";
import { ThemeContext, themes } from "../modules/ThemeContext";
import PropTypes from "prop-types";

const { Consumer } = ThemeContext;

export default class Tool extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Consumer>
        {value => (
          <div
            style={{
              backgroundColor: value.background,
              width: "100%",
              height: "100%"
            }}
          >
            <p
              style={{
                color: "red",
                width: "100%",
                textAlign: "center",
                marginTop: "20px"
              }}
            >
              生命周期调用见控制台
            </p>
            <button
              style={{
                backgroundColor: value.foreground,
                color: value.background,
                outline: "none",
                padding: "5px 8px",
                borderRadius: "5px",
                border: 0,
                margin: "20px"
              }}
              onClick={this.props.changeTheme}
            >
              Toggle - Theme -{" "}
              {value.background === themes.dark.background ? "dark" : "light"}
            </button>
            <button
              style={{
                backgroundColor: value.foreground,
                color: value.background,
                outline: "none",
                padding: "5px 8px",
                borderRadius: "5px",
                border: 0,
                margin: "20px"
              }}
              onClick={this.props.errorAction}
            >
              Error - Action
            </button>
          </div>
        )}
      </Consumer>
    );
  }
}

Tool.propTypes = {
  changeTheme: PropTypes.func,
  errorAction: PropTypes.func
};
