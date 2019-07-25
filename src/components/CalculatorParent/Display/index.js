import React from "react";

function Display(props) {
  return <input type="text" className="displayPanel" value={props.value} />;
}

export default React.memo(Display);
