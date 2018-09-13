import React, { Component  } from 'react';
import { connect } from 'react-redux';
import Todo from './../components/Todo';
import PropTypes from 'prop-types';
import { actions as todoActions } from 'src/models/Todo/actions';
import { types as todoTypes } from 'src/models/Todo/actions';

const completeTodo = todoActions.completeTodo;

class TodoList extends Component {
  render(){
    const { dispatch } = this.props;console.log(this.props);
    return(
          <ul className="todoList">
          {this.props.todo.map((todo, index)=>
              <Todo {...todo}
                key={index}
                onClick={() => dispatch(completeTodo(index))} />
             )}
       </ul>
    );
    }
}

TodoList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    todo: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};

const onShow= (todos,visibilityFilter) => {
  switch(visibilityFilter){
  case todoTypes.SHOW_ALL:
    return todos;
  case todoTypes.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  case todoTypes.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  default:
    return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo: onShow(state.todo, ownProps.filter.split('?')[1])
  }
}

export default connect(mapStateToProps)(TodoList);
