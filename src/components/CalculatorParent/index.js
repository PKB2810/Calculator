import React from "react";
import Display from "./Display";
class CalculatorParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "",
      memoizedCalculations: []
    };
  }

  setDisplayValue = e => {
    this.setState({
      displayValue: this.state.displayValue + e.target.innerHTML
    });
  };

  clearDisplayValue = () => {
    this.setState({
      displayValue: this.state.displayValue
        .toString()
        .substr(0, this.state.displayValue.length - 1)
    });
  };

  evaluatePostfixExpression = () => {
    const expression = this.state.displayValue.toString();
    const memoizedExpr = this.checkMemoizedExpression(expression);
    if (memoizedExpr) {
      this.setState({ displayValue: memoizedExpr.split("=")[1] });
    } else {
      this.setState({ displayValue: eval(this.state.displayValue) }, () => {
        this.updateMemoizedCalculations(expression, this.state.displayValue);
      });
    }
  };

  checkMemoizedExpression = expression => {
    const { memoizedCalculations } = this.state;
    const expr = memoizedCalculations.find(
      calcuation => calcuation.split("=")[0] === expression
    );

    return expr;
  };
  updateMemoizedCalculations = (expression, evaluaiton) => {
    const memoizedCalculation = expression + "=" + evaluaiton;
    this.setState({
      memoizedCalculations: this.state.memoizedCalculations.concat(
        memoizedCalculation
      )
    });
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
            onClick={this.evaluatePostfixExpression}
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
