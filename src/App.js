import React, { Component } from "react";
import { Provider } from "mobx-react";
import { Home } from "./pages";
import store from "../src/store";
import "./styles/global.css";

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
