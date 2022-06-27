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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signInAction(
        this.auth.currentUser.get().getId(),
        this.auth.currentUser.get().getBasicProfile().getName()
      );
    } else {
      this.props.signOutAction();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <div>
          <button onClick={this.onSignOut} className="ui red google button">
            <i className="ui google icon" />
            Sign out
          </button>
          <h3>{this.props.info.name}</h3>
        </div>
      );
    } else if (this.props.isSignedIn === false) {
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
