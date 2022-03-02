import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { systemReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  systemReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
