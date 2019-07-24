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
      displayValue: this.state.displayValue + e.target.innerHTML
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
    const ans = stack.pop();
    this.setState({ displayValue: isNaN(ans) ? "" : ans });
  };

  convertToPostfix = () => {
    let postfixExpr = [];
    let stack = [];
    let j = 0;
    let expr = this.state.displayValue.trim();
    for (let i = 0; i < expr.length; i++) {
      if (expr.charAt(i) >= "0" && expr.charAt(i) <= "9") {
        postfixExpr = postfixExpr + expr.charAt(i);
      } else {
        if (
          expr.charAt(i) === "+" ||
          expr.charAt(i) === "-" ||
          expr.charAt(i) === "*" ||
          expr.charAt(i) === "/"
        ) {
          if (stack.length === 0) {
            stack.push(expr.charAt(i));
          } else {
            if (
              this.getPrecedence(expr.charAt(i)) >=
              this.getPrecedence(stack[stack.length - 1])
            ) {
              stack.push(expr.charAt(i));
            } else {
              while (stack.length !== 0) {
                if (
                  this.getPrecedence(expr.charAt(i)) <
                  this.getPrecedence(stack[stack.length - 1])
                ) {
                  postfixExpr = postfixExpr + stack.pop();
                }
              }
              stack.push(expr.charAt(i));
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
          width: "100%",
          height: "90%",
          alignItems: "center"
        }}
      >
        <section style={{ height: "20%", width: "80%" }}>
          <Display value={this.state.displayValue} />
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            height: "16%",
            alignItems: "center"
          }}
        >
          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            7
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            8
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            9
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            -
          </button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            height: "16%",
            alignItems: "center"
          }}
        >
          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            4
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            5
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            6
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            /
          </button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            height: "16%",
            alignItems: "center"
          }}
        >
          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            {" "}
            1
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            2
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            3
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            *
          </button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            height: "16%",
            alignItems: "center"
          }}
        >
          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            0
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            .
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.convertToPostfix}
          >
            =
          </button>

          <button
            style={{
              height: "50%",
              width: "10%",
              fontSize: "30px",
              borderRadius: "10px"
            }}
            onClick={this.setDisplayValue}
          >
            +
          </button>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            height: "16%"
          }}
        >
          <button
            onClick={this.clearDisplayValue}
            style={{ flexGrow: "4", fontSize: "30px", borderRadius: "10px" }}
          >
            C
          </button>
        </section>
      </section>
    );
  }
}

export default CalculatorParent;
