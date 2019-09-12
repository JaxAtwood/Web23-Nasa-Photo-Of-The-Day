import React from "react";
import Grid from "./Components/Grid";
import { Button } from "./Components/Styles";

import "./App.css";

function App() {
  return (
    // <Styles>
    <Button className="App">
      <Grid />
      <p>
        Come back daily for a new image 🚀!
      </p>
    </Button>
    // </Styles>
  );
}

export default App;


