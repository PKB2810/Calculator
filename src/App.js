import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CalculatorParent from "./components/CalculatorParent";

function App() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <header>Calculator</header>
      <CalculatorParent />
    </section>
  );
}

export default App;
