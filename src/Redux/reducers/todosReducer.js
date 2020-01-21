import { localStorageTodoData,localStorageTaskData } from "../../api/localStorageData";
import {getTasksSuccess} from '../reducers/tasksReducer'
const uuidv4 = require('uuid/v4')

const SET_TODOLISTS = 'todosReducer/SET_USER_TODOLISTS';
const ADD_TODO = 'todosReducer/ADD_TODO';
const DEL_TODO = 'todosReducer/DEL_TODO';

const initialState = {
  todoLists: []
}


const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOLISTS:
      return { ...state, todoLists: action.todoLists }
    case ADD_TODO:
      let newTodo = {
        id: uuidv4(),
        title: action.title
      }
      return { ...state, todoLists: [...state.todoLists, newTodo] }
    case DEL_TODO:
      return { ...state, todoLists: action.todoLists }
    default:
      return state;
  }

}

export const getTodoListsSuccess = (todoLists) => ({ type: SET_TODOLISTS, todoLists: todoLists });
export const setTodoSuccess = (title) => ({ type: ADD_TODO, title: title })


export const setTodoLists = () => async (dispatch) => {
  let response = await localStorageTodoData.getTodos()
  dispatch(getTodoListsSuccess(response))
}

export const setTodo = (title) => async (dispatch, getState) => {
  dispatch(setTodoSuccess(title))
  let response = await localStorageTodoData.saveTodo(getState().todoPage.todoLists)
  dispatch(setTodoLists())
}

export const delTodo = (todoId) => async (dispatch, getState) => {
  let newTodos = getState().todoPage.todoLists.filter(todo => todo.id != todoId)
  let newTasks = getState().tasksList.tasks.filter(task => task.todoId != todoId)
  let responseTask = await localStorageTaskData.saveTask(newTasks)
  dispatch(getTasksSuccess(newTasks))
  let response = await localStorageTodoData.saveTodo(newTodos);
  dispatch(getTodoListsSuccess(newTodos))
}



export default todosReducer;
