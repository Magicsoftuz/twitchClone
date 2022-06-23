import { SIGN_OUT, SING_IN } from "../actions";

export const intialState = { isSignedIn: null, info: { id: null, name: null } };

export const reducers = (state = intialState, action) => {
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
};
