import { usersAPI } from "../../api/usersApi";

const SET_USER = 'addNewUserFormReducer/SET_USER';
const CLEAR_USER_DATA= 'addNewUserFormReducer/CLEAR_USER_DATA';


const initialState = {
    userData: null
}

const addNewUserFormReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:
            return { ...state, userData: action.user }
        case CLEAR_USER_DATA:
            return { ...state, userData: null }
        default:
            return state;
    }

}

const setNewUserDataSuccess = (user) => ({ type: SET_USER, user });
const clearUserDataSuccess = () => ({type: CLEAR_USER_DATA});


export const setNewUser = (user) => async (dispatch) => {
    let response = await usersAPI.setNewUser(user)
    dispatch(setNewUserDataSuccess(response))

}

export const clearUserData = ()=>(dispatch) => {
    dispatch(clearUserDataSuccess())
}


export default addNewUserFormReducer;
