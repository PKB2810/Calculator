import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CalculatorParent from "./components/CalculatorParent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "60%",
          backgroundColor: "#f0e1cc"
        }}
      >
        <CalculatorParent />
      </section>
    </ErrorBoundary>
  );
}

export default App;
