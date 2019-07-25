import React from "react";

function CalcButton({ onClickHandler, children }) {
  return (
    <button className="btnComponent" onClick={onClickHandler}>
      {children}
    </button>
  );
}
export default CalcButton;
