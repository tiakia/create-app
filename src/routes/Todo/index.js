/*
 * Author: tiankai
 * Github: https://github.com/tiakia
 * Email: tiankai0426@sina.com
 * Page: Todo
 * Date: 05/15/18 13:25:02
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'src/assets/css/index.scss';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import Footer from './components/Footer';

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  componentDidMount(){

  }
  render(){
    const { search } = this.props.location;
    return(
        <div className="todo">
          <AddTodo/>
          <TodoList filter={search}/>
          <Footer filter={search}/>
        </div>
    );
  }
}

Todo.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string
  })
};
