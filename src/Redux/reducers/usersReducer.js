import { usersAPI } from "../../api/usersApi";


const SET_USERS ='usersReduser/SET-USERS'
 
const initialState = {
    usersList:[],
    isLoding: false
}
 const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
          return {
            ...state,
            usersList : action.users
          }
         
    
        default:
            return state;
    }
    
}

const getUsersSuccess = (users)=>({type: SET_USERS, users})

 export const setUsers = ()=> async (dispatch)=>{
    let response = await usersAPI.getUsers()
    dispatch(getUsersSuccess(response))
}

export default usersReducer;
