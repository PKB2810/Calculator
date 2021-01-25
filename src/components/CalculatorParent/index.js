import React from "react";
import Display from "./Display";
import CalcButton from "./CalcButton";
import CancelButton from "./CalcButton/CancelBtn";
import ButtonGroup from "./ButtonGroup";
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

  evaluateExpression = () => {
    try {
      if (this.state.displayValue === "") {
        return;
      }
      const expression = this.state.displayValue;
      const memoizedExpr = this.checkMemoizedExpression(expression);
      if (memoizedExpr) {
        this.setState({ displayValue: memoizedExpr.split("=")[1] });
      } else {
        this.setState({ displayValue: eval(this.state.displayValue) }, () => {
          this.updateMemoizedCalculations(expression, this.state.displayValue);
        });
      }
    } catch (e) {
      this.setState({ displayValue: "Bad expression" });
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
      <section id="calculator">
        <section id="displayParent">
          <Display value={this.state.displayValue} />
        </section>
        <ButtonGroup grpId="btnGrp1">
          <CalcButton onClickHandler={this.setDisplayValue}>7</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>8</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>9</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>-</CalcButton>
        </ButtonGroup>
        <ButtonGroup grpId="btnGrp2">
          <CalcButton onClickHandler={this.setDisplayValue}>4</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>5</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>6</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>/</CalcButton>
        </ButtonGroup>
        <ButtonGroup grpId="btnGrp3">
          <CalcButton onClickHandler={this.setDisplayValue}>1</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>2</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>3</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>*</CalcButton>
        </ButtonGroup>
        <ButtonGroup grpId="btnGrp4">
          <CalcButton onClickHandler={this.setDisplayValue}>0</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>.</CalcButton>
          <CalcButton onClickHandler={this.evaluateExpression}>=</CalcButton>
          <CalcButton onClickHandler={this.setDisplayValue}>+</CalcButton>
        </ButtonGroup>
        <section id="cnclBtnParent">
          <CancelButton onClickHandler={this.clearDisplayValue}>C</CancelButton>
        </section>
      </section>
    );
  }
}

export default CalculatorParent;
