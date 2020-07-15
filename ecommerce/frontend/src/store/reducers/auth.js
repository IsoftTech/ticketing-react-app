import * as actionTypes from "../actions/actionTypes";
import isEmpty from "../../validation/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        user: action.payload,
      };
      break;
    case actionTypes.REGISTER_START:
      return {
        ...state,
        user: action.payload,
      };
      break;
    case actionTypes.SET_CURRENT_USER:
      console.log(action);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
