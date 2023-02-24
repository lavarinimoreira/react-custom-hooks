import React from "react";
import Wait from "./components/Wait";
import WindowDimensions from "./components/WindowDimensions";

const App = () => {
  return (
    <div className="App">
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />

      <WindowDimensions />
    </div>
  );
};

export default App;
