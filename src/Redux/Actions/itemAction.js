import axios from "axios";
import {
  ALL_ITEM_FAIL,
  ALL_ITEM_REQUEST,
  ALL_ITEM_SUCCESS,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_FAIL,
  ITEM_DETAILS_SUCCESS,
  NEW_ITEM_REQUEST,
  NEW_ITEM_SUCCESS,
  NEW_ITEM_FAIL,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  CLEAR_ERRORS,
} from "../Constants/itemConstant";

export const getItems = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_ITEM_REQUEST,
    });

    const { data } = await axios.get(
      "https://risendine.azurewebsites.net/api/r1/getallitems"
    );

    dispatch({
      type: ALL_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ITEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://risendine.azurewebsites.net/api/r1/getitem/${id}`
    );

    dispatch({
      type: ITEM_DETAILS_SUCCESS,
      payload: data.item,
    });
  } catch (error) {
    dispatch({
      type: ITEM_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createItem = (itemData) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_ITEM_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "https://risendine.azurewebsites.net/api/r1/createitem",
      itemData,
      config
    );
    dispatch({
      type: NEW_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_ITEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ITEM_REQUEST,
    });

    const { data } = await axios.delete(
      `https://risendine.azurewebsites.net/api/r1/deleteitem/${id}`
    );
    dispatch({
      type: DELETE_ITEM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ITEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateItem = (id, itemData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ITEM_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `https://risendine.azurewebsites.net/api/r1/updateitem/${id}`,
      itemData,
      config
    );
    dispatch({
      type: UPDATE_ITEM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ITEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clear Error Action
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
