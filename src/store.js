import { createStore, applyMiddleware, combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"

import {exampleReducer} from "./Redux/Reducers/exampleReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    example : exampleReducer
})


const middleware = [thunk];

const store = createStore(
  reducer,
//   inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;