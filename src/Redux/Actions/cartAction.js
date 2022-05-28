import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_ERRORS,
  REMOVE_ALL_CART_ITEM,
} from "../Constants/cartConstants";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `http://localhost:7000/api/r1/getitem/${id}`
  );
// console.log(data);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      item: data.Item._id,
      name: data.Item.name,
      image: data.Item.images[0].url,
      quantity,
      price : data.Item.price,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//Remove items from Cart
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// export const removeAllItemsFromCart = () => async (dispatch, getState) => {
//   dispatch({
//     type: REMOVE_ALL_CART_ITEM,
//   });
//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

//ClearError Action
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
