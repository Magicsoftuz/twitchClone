import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./404";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import { StreamCreateContainer } from "../redux/containers/StreamCreateContainer";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams" exact component={StreamShow} />
          <Route path="/streams/new" exact component={StreamCreateContainer} />
          {/* <Route path="*" exact component={NotFound} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
