import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Router />
    </div>
    // </Provider>
  );
}

export default App;
