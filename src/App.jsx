import React from "react";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

import store from "@redux";

import FormContainer from "@containers/Form";
import GraphsContainer from "@containers/Graphs";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <FormContainer />
        <GraphsContainer />
      </div>
    </Provider>
  );
}

export default App;
