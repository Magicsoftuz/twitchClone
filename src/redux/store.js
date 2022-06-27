import { compose, applyMiddleware, createStore } from "redux";
import { intialState, allReducers } from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  allReducers,
  intialState,
  composeEnhancer(applyMiddleware())
);
