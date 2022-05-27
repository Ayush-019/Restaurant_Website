import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
} from "../Constants/cartConstants";

export const cartReducer = (
  state = {
    cartItems: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.item === item.item
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.item === isItemExist.item ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.item !== action.payload),
      };

    default:
      return state;
  }
};
