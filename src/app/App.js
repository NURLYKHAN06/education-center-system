import React from "react";
import { Route } from "react-router-dom";

import Start from "../pages/start/Start";
import "./styles.scss";

function App() {
  return (
    <div>
      <Route path="/" exact component={Start} />
    </div>
  );
}

export default App;
