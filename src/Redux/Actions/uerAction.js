import axios from "axios";
import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  CLEAR_ERRORS,
} from "../Constants/userConstants";

export const register = (userdata) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    

    const { data } = await axios.post(
      `http://localhost:7000/api/r1/register`,
      userdata,
      config
    );


    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
      isRegistered:data.isRegistered
    });

    console.log(data);
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_USERS_REQUEST,
    });
    const { data } = await axios.get(
      "http://localhost:7000/api/r1/getallusers"
    );
    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//ClearError Action
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};