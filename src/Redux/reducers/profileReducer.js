import { usersAPI } from "../../api/usersApi";

const SET_PROFILE = 'profileReduser/SET-PROFILE';
const CLOSE_PROFILE = 'profileReduser/CLOSE-PROFILE';
const IS_LOADING = 'profileReduser/IS_LOADING';


const initialState = {
  profile: null,
  isLoading: false
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.profile }
    case CLOSE_PROFILE:
      return { ...state, profile: null }
    case IS_LOADING:
      return { ...state, isLoading: action.loading }

    default:
      return state;
  }

}

export const getProfileSuccess = (profile) => ({ type: SET_PROFILE, profile })
const closeUserProfile = () => ({ type: CLOSE_PROFILE })
const setLoading = (loading) => ({ type: IS_LOADING, loading })

export const setProfile = (id) => async (dispatch) => {
  dispatch(setLoading(false))
  let response = await usersAPI.getProfile(id)
  dispatch(getProfileSuccess(response))
  dispatch(setLoading(true))
}
export const closeProfile = () => (dispatch) => {
  dispatch(closeUserProfile())
}

export default profileReducer;
