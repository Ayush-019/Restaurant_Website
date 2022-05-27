import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/userConstants";

export const userReducer = (
  state = {
    user: {},
  },
  action
) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isRegistered:action.isRegistered
      };

    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
        isRegistered:action.isRegistered
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
