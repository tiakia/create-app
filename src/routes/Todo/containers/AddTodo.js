import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as todoActions } from 'src/models/Todo/actions';

const addTodo = todoActions.addTodo;

class AddTodo extends Component {
    handleClick(e,dispatch){
        const node = this.refs.input;
        const text = node.value.trim();
        if(text.length === 0 ){
            alert('please input');
            return;
        }
        dispatch(addTodo(text));
        node.value = '';
    }
    render(){
        const { dispatch } = this.props;
        return(
            <div className="addTodo">
            <input type='text' ref='input' />
            <button onClick={ (e)=> this.handleClick(e,dispatch)}
                    className="addButton"
            >
              Add
            </button>
            </div>
        );
    }
}

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired
};

//包装 component , 注/AddTodo入 dispatch 和 state 到其默认的 connect(select)(App)/TodoList中/Footer；

export default connect()(AddTodo);
