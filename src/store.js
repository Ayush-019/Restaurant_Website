import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { allUsersReducer, userReducer } from "./Redux/Reducers/userReducer";

import thunk from "redux-thunk";
import { cartReducer } from "./Redux/Reducers/cartReducer";
import { itemDetailsReducer, itemReducer, itemsReducer, newItemReducer } from "./Redux/Reducers/itemReducer";
import { allOrdersReducer, newOrderReducer } from "./Redux/Reducers/orderReducer";


const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  items:itemsReducer,
  itemDetails:itemDetailsReducer,
  item:itemReducer,
  newitem:newItemReducer,
  users:allUsersReducer,
  neworder:newOrderReducer,
  order:allOrdersReducer

});

const middleware = [thunk];

const store = createStore(
  reducer,
  //   inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
