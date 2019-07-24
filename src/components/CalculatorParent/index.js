import React from "react";
import Display from "./Display";
class CalculatorParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: ""
    };
  }

  setDisplayValue = e => {
    this.setState({
      displayValue: this.state.displayValue.toString() + e.target.innerHTML
    });
  };

  clearDisplayValue = () => {
    this.setState({
      displayValue: ""
    });
  };

  evaluatePostfixExpression = postfixExpr => {
    let stack = [];
    for (let i = 0; i < postfixExpr.length; i++) {
      if (!isNaN(parseFloat(postfixExpr[i]))) {
        stack.push(parseFloat(postfixExpr[i]));
      } else {
        let num1 = stack.pop();
        let num2 = stack.pop();
        switch (postfixExpr[i]) {
          case "+":
            stack.push(num1 + num2);
            break;
          case "-":
            stack.push(num1 - num2);
            break;
          case "*":
            stack.push(num1 * num2);
            break;
          case "/":
            stack.push(num2 / num1);
            break;
        }
      }
    }
    this.setState({ displayValue: !isNaN(stack.pop()) ? stack.pop() : "" });
  };

  convertToPostfix = () => {
    let postfixExpr = [];
    let stack = [];
    let j = 0;
    for (let i = 0; i < this.state.displayValue.length; i++) {
      if (
        this.state.displayValue.charAt(i) >= "0" &&
        this.state.displayValue.charAt(i) <= "9"
      ) {
        postfixExpr = postfixExpr + this.state.displayValue.charAt(i);
      } else {
        if (
          this.state.displayValue.charAt(i) === "+" ||
          this.state.displayValue.charAt(i) === "-" ||
          this.state.displayValue.charAt(i) === "*" ||
          this.state.displayValue.charAt(i) === "/"
        ) {
          if (stack.length === 0) {
            stack.push(this.state.displayValue.charAt(i));
          } else {
            if (
              this.getPrecedence(this.state.displayValue.charAt(i)) >=
              this.getPrecedence(stack[stack.length - 1])
            ) {
              stack.push(this.state.displayValue.charAt(i));
            } else {
              while (stack.length !== 0) {
                if (
                  this.getPrecedence(this.state.displayValue.charAt(i)) <
                  this.getPrecedence(stack[stack.length - 1])
                ) {
                  postfixExpr = postfixExpr + stack.pop();
                }
              }
              stack.push(this.state.displayValue.charAt(i));
            }
          }
        }
      }
    }
    while (stack.length !== 0) {
      postfixExpr = postfixExpr + stack.pop();
    }
    this.evaluatePostfixExpression(postfixExpr);
  };

  getPrecedence = operator => {
    switch (operator) {
      case "*":
      case "/":
        return 2;
      case "+":
      case "-":
        return 1;
    }
  };
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
          <Display value={this.state.displayValue} />
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button onClick={this.setDisplayValue}>7</button>

          <button onClick={this.setDisplayValue}>8</button>

          <button onClick={this.setDisplayValue}>9</button>

          <button onClick={this.setDisplayValue}>-</button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button onClick={this.setDisplayValue}>4</button>

          <button onClick={this.setDisplayValue}>5</button>

          <button onClick={this.setDisplayValue}>6</button>

          <button onClick={this.setDisplayValue}>/</button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button onClick={this.setDisplayValue}> 1</button>

          <button onClick={this.setDisplayValue}>2</button>

          <button onClick={this.setDisplayValue}>3</button>

          <button onClick={this.setDisplayValue}>*</button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button onClick={this.setDisplayValue}>0</button>

          <button onClick={this.setDisplayValue}>.</button>

          <button onClick={this.convertToPostfix}>=</button>

          <button onClick={this.setDisplayValue}>+</button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button onClick={this.clearDisplayValue} style={{ flexGrow: "4" }}>
            C
          </button>
        </section>
      </section>
    );
  }
}

export default CalculatorParent;
