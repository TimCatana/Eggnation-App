import {SET_USER, SET_SELECTED_SKIN} from "./actions";


const egg = require('../../assets/egg.png')

const userState = {
  user: null
}

const skinState = {
  selectedSkin: egg
}


function userReducer(state = userState, action) {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload}
    default:
      return state;
  }
}

function gameReducer(state = skinState, action) {
  switch (action.type) {
    case SET_SELECTED_SKIN:
      return {...state, selectedSkin: action.payload}
    default:
      return state;
  }
}

export {userReducer, gameReducer}