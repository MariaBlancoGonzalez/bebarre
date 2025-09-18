// InstagramButton
import React from "react";

export default function InstagramButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "35px",
        height: "35px",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      <img
        src={"logotipo-de-instagram.png"}
        alt="Instagram"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "20%",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      />
    </a>
  );
}
