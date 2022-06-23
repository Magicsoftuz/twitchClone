import { compose, applyMiddleware, createStore } from "redux";
import { intialState, reducers } from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  intialState,
  composeEnhancer(applyMiddleware())
);
