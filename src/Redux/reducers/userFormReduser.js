import { usersAPI } from "../../api/usersApi";


const SET_USERS ='userFormReduser/SET-USER'
 
const initialState = {
    user:{},
    isLoding: false
}
 const userFormReduser = (state = initialState, action) => {

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

const setUserSuccess = (users)=>({type: SET_USERS, users})

 export const setUser = ()=> async (dispatch)=>{
    let response = await usersAPI.setUser()
    dispatch(setUsersSuccess(response))
}

export default userFormReduser;
