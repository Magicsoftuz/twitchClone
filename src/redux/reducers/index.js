import { SIGN_OUT, SING_IN } from "../actions";
import { reducer as formReduecers } from "redux-form";
import { combineReducers } from "redux";

export const intialState = { isSignedIn: null, info: { id: null, name: null } };

const authReducers = (state = intialState, action) => {
  if (action.type === SING_IN) {
    return {
      ...state,
      isSignedIn: true,
      info: { ...state.info, id: action.payload.id, name: action.payload.name },
    };
  }
  if (action.type === SIGN_OUT) {
    return {
      ...state,
      isSignedIn: false,
      info: { ...state.info, id: null, name: null },
    };
  }
  return state;
};

export const allReducers = combineReducers({
  auth: authReducers,
  form: formReduecers,
});
