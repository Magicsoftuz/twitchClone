import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [state, setState] = useState("");
  const [kirganmi, setKirganmi] = useState(null);

  useEffect(() => {
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          client_id:
            "981717567391-bso3mhv9u0bju97m61p7hddfhht8emgs.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "TwitchClone",
        })
        .then(() => {
          setState(window.gapi.auth2.getAuthInstance());
          // console.log(state);
        });
    });
  }, []);

  const onAuthChange = () => {
    setKirganmi({ kirganYokiKirmagan: state.isSignedIn.get() });
  };

  const kirishFunc = () => {
    if (kirganmi === null) {
      <div>Kutishda</div>;
    }
    if (kirganmi === true) {
      <div>Kirgansiz</div>;
    }
    if (kirganmi === false) {
      <div>Kirmagansiz</div>;
    }
  };

  return <div>{kirishFunc()}</div>;
};
export default GoogleAuth;
