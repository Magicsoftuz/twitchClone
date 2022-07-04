import React from "react";

class Login extends React.Component {
  kirdi = 0;

  renderHTML() {
    if (this.kirdi === 1) {
      return (
        <div style={{ display: "flex" }}>
          <h4 className="ui primary">Umid Rustamov</h4>
          <button className="ui button red">Logout</button>
        </div>
      );
    } else if (this.kirdi === 0) {
      return (
        <div>
          <button className="ui button green">Login</button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderHTML()}</div>;
  }
}

export default Login;
