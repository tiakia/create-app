export const types = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const actions = {
  completeTodo: (index) => ({type: types.COMPLETE_TODO, index}),
  addTodo: (text) => ({type: types.ADD_TODO, text})
};
