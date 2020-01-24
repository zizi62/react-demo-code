import { usersAPI } from "../../api/usersApi";


const SET_USERS = 'usersReduser/SET-USERS'
const IS_LOADING = 'usersReduser/IS_LODING';

const initialState = {
  usersList: [],
  isUsersLoading: true
}
const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        usersList: action.users
      }
      case IS_LOADING:
        return { ...state, isUsersLoading: action.loading }


    default:
      return state;
  }

}

const getUsersSuccess = (users) => ({ type: SET_USERS, users })
const setLoading = (loading) => ({ type: IS_LOADING, loading })

export const setUsers = () => async (dispatch) => {
  dispatch(setLoading(false))
  let response = await usersAPI.getUsers()
  dispatch(getUsersSuccess(response))
  dispatch(setLoading(true))
}

export default usersReducer;
