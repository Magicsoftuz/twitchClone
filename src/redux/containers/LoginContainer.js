import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginPage from "../../components/auth/LoginPage";
import { getAllUsersAction } from "../actions/action";

const validateForm = (values) => {
  const objError = {};
  if (!values.login) {
    objError.login = "Login kiritishingiz shart!";
  }
  if (!values.parol) {
    objError.parol = "Siz parolni kiritishingiz shart!";
  }
  return objError;
};
const getMyState = (state) => {
  return state;
};

const connectLogin = connect(getMyState, { getAllUsersAction })(LoginPage);

const LoginContainer = reduxForm({ form: "loginForm", validate: validateForm })(
  connectLogin
);

export default LoginContainer;
