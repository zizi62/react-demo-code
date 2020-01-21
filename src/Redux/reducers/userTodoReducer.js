import { todoAPI } from "../../api/usersApi";


const SET_USER_TODOLISTS = 'userTodoReduser/SET_USER_TODOLISTS';


const initialState = {
  todoLists: []
 
}


const userTodoReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_TODOLISTS:
      return { ...state, todoLists: action.todoLists }
    default:
      return state;
  }

}

export const getTodoListsSuccess = (todoLists) => ({ type: SET_USER_TODOLISTS, todoLists: todoLists })


export const setTodoLists = (userId) => async (dispatch) => {
  let response = await todoAPI.getTodos(userId)
  dispatch(getTodoListsSuccess(response))
}


export default userTodoReducer;
