import React from "react";

export default function PhotoCard({ src, title, text }) {
    return (
        <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "40vw",
            height: "600px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.15)"
        }}>
            <img
                src={src}
                alt={title}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                }}
            />
            <div style={{
                position: "absolute",
                left: "5%",
                bottom: "-25%",   // ahora sí saldrá
                width: "85%",
                height: "60%",        // más alto
                background:"#C2B9A8",
                color: "#000000ff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "3rem",
                boxSizing: "border-box",
                boxShadow: "0 12px 32px rgba(0,0,0,0.30), 0 6px 16px rgba(0,0,0,0.20)",
                pointerEvents: "auto"
            }}>
                <h4 style={{
                    margin: 0,
                    fontSize: "1.7rem",
                    fontWeight: "bold"
                }}>{title}</h4>
                <p style={{
                    margin: "2rem 0 0 0",
                    fontSize: "1.3rem"
                }}>{text}</p>
            </div>
        </div>
    );
}