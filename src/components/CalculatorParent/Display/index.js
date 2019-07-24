import React from "react";

function Display(props) {
  return (
    <input type="text" style={{ textAlign: "right" }} value={props.value} />
  );
}

export default Display;
