import streams from "../../apis/streams";
export const SING_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_STREAM = "CREATE_STREAM";

export const signInAction = (id, name) => {
  return {
    type: SING_IN,
    payload: {
      id: id,
      name: name,
    },
  };
};
export const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async (dispatch, state) => {
    const response = await streams.post("/streams", formValues);
    dispatch({ type: CREATE_STREAM, payload: response.data });
  };
};
