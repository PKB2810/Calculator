import React from "react";
function ButtonGroup({ grpId, children }) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        height: "16%",
        alignItems: "center"
      }}
      id={grpId}
    >
      {children}
    </section>
  );
}
export default ButtonGroup;
