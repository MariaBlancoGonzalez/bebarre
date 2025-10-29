import React from "react";

export default function Separator({ text = "", id }) {
  if (!text) return null;
  
  return (
    <div
      id={id}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "4rem 0 3rem 0",
        gap: "1rem"
      }}
    >
      <h2 style={{
        fontSize: "2.8rem",
        fontWeight: "700",
        color: "#795d4cff",
        margin: 0,
        letterSpacing: "0.02em",
        textAlign: "center"
      }}>
        {text}
      </h2>
      
      <hr style={{
        width: "70%",
        maxWidth: "600px",
        border: "none",
        borderTop: "2px solid #bbb",
        margin: 0
      }} />
    </div>
  );
}