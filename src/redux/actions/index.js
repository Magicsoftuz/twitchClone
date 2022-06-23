export const SING_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

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
