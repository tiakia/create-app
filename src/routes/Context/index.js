import React, { PureComponent } from "react";
import Tool from "./components/Tool";
import { ThemeContext, themes } from "./modules/ThemeContext";

const { Provider } = ThemeContext;

class Context extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
    this.changeTheme = this.changeTheme.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("生命周期函数: getDerivedStateFromProps 被调用。");
    console.log(nextProps, nextState);
    return null;
  }
  componentDidMount() {
    console.log("生命周期函数: componentDidMount 被调用。");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("生命周期函数: shouldComponentUpdate 被调用。");
    console.log(nextProps, nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("生命周期函数: getSnapshotBeforeUpdate 被调用。");
    console.log(prevProps, prevState);
    return "chuizi";
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("生命周期函数: componentDidUpdate 被调用。");
    console.log(prevProps, prevState, snapShot);
  }
  componentWillUnmount() {
    console.log("生命周期函数: componentWillUnmount 被调用。");
  }
  componentDidCatch(error, info) {
    console.log("生命周期函数: componentDidCatch 被调用。");
    console.log(error, info);
    alert("出现一些错误，将会调用组件强制更新");
    this.forceUpdate();
  }
  changeTheme() {
    this.setState(prev => ({
      theme: prev.theme === themes.dark ? themes.light : themes.dark
    }));
  }
  toggleError() {
    this.setState({
      theme: themes.dark[0]
    });
  }
  render() {
    console.log("render");
    return (
      <Provider value={this.state.theme}>
        <Tool changeTheme={this.changeTheme} errorAction={this.toggleError} />
      </Provider>
    );
  }
}

export default Context;
