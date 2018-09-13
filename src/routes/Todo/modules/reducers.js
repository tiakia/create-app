/*
 *  功能：todoReducer
 *  create by tiankai on 05/15/18 16:08:43
 */
import { types } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type){
  case types.ADD_TODO:
    return [
      ...state,
      {
        text: action.text,
        completed: false
      }
    ];
  case types.COMPLETE_TODO:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index],{
        completed: !state[action.index].completed
      }),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
};
