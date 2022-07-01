import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { FORM_SAVE, SIGN_IN, SIGN_OUT } from "../actions/action";

export const initialStateAuth = {
  kirganmi: null,
  info: { id: null, name: "", imgUrl: "" },
};

export const initialStateForm = {};

const authReducers = (state = initialStateAuth, action) => {
  if (action.type === SIGN_IN) {
    return {
      ...state,
      kirganmi: true,
      info: {
        ...state.info,
        id: action.payload.id,
        name: action.payload.name,
        imgUrl: action.payload.img,
      },
    };
  } else if (action.type === SIGN_OUT) {
    return {
      ...state,
      kirganmi: false,
      info: {
        ...state.info,
      },
    };
  }
  return state;
};

const allReducers = combineReducers({
  auth: authReducers,
  form: formReducer,
});

export default allReducers;
