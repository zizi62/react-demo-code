import {createStore, combineReducers ,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import usersReducer from "./reducers/usersReducer";
import profileReducer from './reducers/profileReducer';
import userTodoReducer from "./reducers/userTodoReducer";
import { reducer as reduxFormReducer } from 'redux-form';
import addNewUserFormReducer from "./reducers/addNewUserFormReducer";


let reducers = combineReducers({
    weatherPage: weatherReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    userTodoListsPage: userTodoReducer, 
    addUserForm: addNewUserFormReducer,
    form: reduxFormReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;