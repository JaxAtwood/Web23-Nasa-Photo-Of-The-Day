import React from "react";
import Grid from "./Components/Grid";
import { IntoApp, TextFont } from "./Components/Styles";

import "./App.css";

function App() {
  return (
    <IntoApp className="App">
      <TextFont>
      <Grid />
      <h1>
        Come back daily for a new image 🚀!
      </h1>
      </TextFont>
    </IntoApp>
  );
}

export default App;


