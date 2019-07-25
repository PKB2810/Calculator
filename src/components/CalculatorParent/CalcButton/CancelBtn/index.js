import React from "react";
function CancelButton({ onClickHandler, children }) {
  return (
    <button className="cnclBtnStyle" onClick={onClickHandler}>
      {children}
    </button>
  );
}
export default CancelButton;
