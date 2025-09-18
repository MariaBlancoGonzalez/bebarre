import React from "react";

export default function Separator({ text = "" }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "2.5rem 0"
      }}
    >
      <div
        style={{
          width: "70%",
          display: "flex",
          alignItems: "center"
        }}
      >
        <hr
          style={{
            flex: 1,
            border: "none",
            borderTop: "1.5px solid #bbb",
            margin: 0
          }}
        />
        {text && (
          <span
            style={{
              padding: "0 1.5rem",
              color: "#795d4cff",
              background: "var(--color-background)",
              fontWeight: "bold",
              fontSize: "2.3rem",
              whiteSpace: "nowrap"
            }}
          >
            {text}
          </span>
        )}
        <hr
          style={{
            flex: 1,
            border: "none",
            borderTop: "1.5px solid #bbb",
            margin: 0
          }}
        />
      </div>
    </div>
  );
}