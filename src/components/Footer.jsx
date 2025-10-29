import React, { useState } from "react";

export default function Footer() {
  return (
    <footer id="footer" style={{
      background: "#181818",
      color: "#fff",
      padding: "3rem 0 1rem 0",
      fontSize: "1rem"
    }}>
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 2rem"
      }}>
        <h2 style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          ¿Dónde encontrarnos?
        </h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
          justifyContent: "center"
        }}>
          <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
            <iframe
              title="Ubicación BeBarreFit"
              src="https://www.google.com/maps?q=Calle+Luis+Ruiz+Valdepeñas+8,+Daimiel+13250&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div style={{
            flex: "1 1 250px",
            padding: "1.5rem 0",
            color: "#fff",
            minWidth: "220px",
            fontSize: "1.1rem"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              <span role="img" aria-label="ubicación">📍</span> <strong>Dirección:</strong><br />
              Calle Luis Ruiz Valdepeñas 8<br />
              Daimiel, 13250
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <span role="img" aria-label="teléfono">📞</span> <strong>Teléfono:</strong><br />
              <a href="tel:+34672721153" style={{ color: "#fff", textDecoration: "none" }}>+34 672 72 11 53</a>
            </p>
            <p>
              <span role="img" aria-label="email">✉️</span> <strong>Email:</strong><br />
              <a href="mailto:bebarrefitness@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>bebarrefitness@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
      <p style={{ marginTop: "2rem", color: "#aaa", textAlign: "center" }}>
        © {new Date().getFullYear()} BeBarre Fit · Todos los derechos reservados
      </p>
    </footer>
  );
}