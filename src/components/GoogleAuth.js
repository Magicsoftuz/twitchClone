import React, { useEffect, useState } from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "981717567391-bso3mhv9u0bju97m61p7hddfhht8emgs.apps.googleusercontent.com",

          plugin_name: "App Name that you used in google developer console API",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderButton() {
    console.log(this.state);
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn === true) {
      return (
        <div>
          <button onClick={this.onSignOut} className="ui red google button">
            <i className="ui google icon" />
            Sign out
          </button>
          <h3>{this.auth.currentUser.get().getBasicProfile().getName()}</h3>
        </div>
      );
    } else if (this.state.isSignedIn === false) {
      return (
        <button onClick={this.onSignIn} className="ui green google button">
          <i className="ui google icon" />
          Sign in
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderButton()} </div>;
  }
}
export default GoogleAuth;
