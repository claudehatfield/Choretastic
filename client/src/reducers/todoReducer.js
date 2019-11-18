import {GET_TODOS, ADD_TODO, DELETE_TODO} from '../actions/types';

const initialState = {
  todos: [
    {todoTitle: 'Mow',
    todoDescription: 'afdafdcaef',
    todoValue: '5'
    }
  ]
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_TODOS:
      return {
        ...state
      };
    case DELETE_TODO:
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.payload)
    };
    default:
      return state;
  }
}