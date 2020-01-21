import {createStore, combineReducers ,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import usersReducer from "./reducers/usersReducer";
import tasksReducer from './reducers/tasksReducer';
import profileReducer from './reducers/profileReducer';
import userTodoReducer from "./reducers/userTodoReducer";
import { reducer as reduxFormReducer } from 'redux-form';
import todosReducer from "./reducers/todosReducer";
import addNewUserFormReducer from "./reducers/addNewUserFormReducer";


let reducers = combineReducers({
    weatherPage: weatherReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    userTodoListsPage: userTodoReducer, 
    addUserForm: addNewUserFormReducer,
    todoPage: todosReducer,
    tasksList: tasksReducer,
    form: reduxFormReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;