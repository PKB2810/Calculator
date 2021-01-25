import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CalculatorParent from "./components/CalculatorParent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <section id="main">
        <CalculatorParent />
      </section>
    </ErrorBoundary>
  );
}

export default App;
