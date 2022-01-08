import { SET_USER, SET_LOCAL_TAPS} from "./actions";

const initialState = {
  user: null,
  count: 0,
  // adsWatched: 0
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload}
    case SET_LOCAL_TAPS:
      return {...state, count: action.payload}
    default:
      return state;
  }
}

export default userReducer