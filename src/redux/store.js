import { createStore } from "redux";
import { intialState, reducers } from "./reducers";

export const store = createStore(reducers, intialState);
