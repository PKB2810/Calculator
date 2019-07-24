import React from "react";
import Display from "./Display";
class CalculatorParent extends React.Component {
  render() {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "100%"
        }}
      >
        <section style={{ width: "100%" }}>
          <Display />
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button>7</button>

          <button>8</button>

          <button>9</button>

          <button>-</button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button>4</button>

          <button>5</button>

          <button>6</button>

          <button>/</button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button>1</button>

          <button>2</button>

          <button>3</button>

          <button>*</button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button>0</button>

          <button>.</button>

          <button>=</button>

          <button>+</button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button style={{ flexGrow: "4" }}>C</button>
        </section>
      </section>
    );
  }
}

export default CalculatorParent;
