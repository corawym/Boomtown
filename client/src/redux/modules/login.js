// Action types
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'


// Action
export const loginSuccess = (user) => ({
  type: LOGIN,
  user: user
});

export const logoutSuccess = () => ({
  type: LOGOUT
});

const initialState = {
  user: null
}

// Reducer
export default (state=initialState, action) => {
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        user: action.user
      }
    case LOGOUT:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}