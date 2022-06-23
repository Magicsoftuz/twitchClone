import { connect } from "react-redux";
import GoogleAuth from "../../components/GoogleAuth";
import { signInAction, signOutAction } from "../actions";

const getMyState = (state) => {
  return state;
};

export const GoogleAuthContainer = connect(getMyState, {
  signInAction,
  signOutAction,
})(GoogleAuth);
