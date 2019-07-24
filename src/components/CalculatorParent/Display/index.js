import React from "react";

function Display(props) {
  return (
    <input
      type="text"
      style={{
        textAlign: "right",
        width: "100%",
        height: "100%",
        fontSize: "30px"
      }}
      value={props.value}
    />
  );
}

export default React.memo(Display);
