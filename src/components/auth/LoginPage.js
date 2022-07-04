import { message } from "antd";
import React from "react";

import { Field } from "redux-form";
import GoogleAuthContainer from "../../redux/containers/GoogleAuthContainer";

class LoginPage extends React.Component {
  state = { kirdimi: null, message: "" };

  componentDidMount() {
    this.props.getAllUsersAction();
  }

  renderInput = ({ input, meta, label, placeholder }) => {
    return (
      <div className="ui field">
        <label>{label}</label>
        <input
          {...input}
          type={input.name === "parol" ? "password" : "text"}
          placeholder={placeholder}
        />
        <h4 className="ui error message">{meta.touched ? meta.error : ""}</h4>
      </div>
    );
  };

  onSubmitForm = (values) => {
    this.props.users.map((val) => {
      if (val.login === values.login && val.password === values.parol) {
        console.log("Tizimga xush kelibsiz");
        this.setState({ kirdimi: true, message: "Tizimga Xush kelibsiz" });
        return <h1>Tizimga xush kelibsiz</h1>;
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <h1>
          {this.state.kirdimi ? "Tizimga Xush kelibsiz" : "Parol login xato"}
        </h1>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmitForm)}
          className="ui form error"
        >
          <Field
            name="login"
            label="Login"
            placeholder="Loginni kiriting!"
            component={this.renderInput}
          />
          <Field
            name="parol"
            label="Parol"
            placeholder="Parolni kiriting!"
            component={this.renderInput}
          />
          <button
            style={{ marginBottom: "20px" }}
            className="ui button primary"
          >
            Tizimga kirish
          </button>
        </form>
        <div style={{ display: "flex" }}>
          <button style={{ marginBottom: "20px" }} className="ui button yellow">
            Register
          </button>
          <GoogleAuthContainer />
        </div>
      </div>
    );
  }
}

export default LoginPage;
