import React, { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    window.location.href = `mailto:bebarrefitness@gmail.com?subject=Contacto%20desde%20web&body=Nombre:%20${form.nombre}%0AEmail:%20${form.email}%0AMensaje:%20${form.mensaje}`;
  };

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
        padding: "0 2rem",
        fontFamily: "arial, sans-serif",
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
          <div style={{ flex: "1 1 500px", minWidth: "400px" }}>
            <iframe
              title="Ubicación BeBarreFit"
              src="https://www.google.com/maps?q=Calle+Luis+Ruiz+Valdepeñas+8,+Daimiel+13250&output=embed"
              width="100%"
              height="300"
              /*style={{ border: "0" , borderRadius: "12px" }}*/
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div style={{
            flex: "1 1 250px",
            padding: "1.5rem 0",
            color: "#fff",
            minWidth: "220px",
            fontSize: "1.1rem"
          }}>
            <p>
              <span role="img" aria-label="ubicación">📍</span> <strong>Dirección:</strong><br />
              Calle Luis Ruiz Valdepeñas 8<br />
              Daimiel, 13250
            </p>
            <p>
              <span role="img" aria-label="teléfono">📞</span> <strong>Teléfono:</strong><br />
              <a href="tel:+34123456789" style={{ color: "#fff" }}>+34 672 72 11 53</a>
            </p>
            <p>
              <span role="img" aria-label="email">✉️</span> <strong>Email:</strong><br />
              <a href="mailto:bebarrefitness@gmail.com" style={{ color: "#fff" }}>bebarrefitness@gmail.com</a>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{
          marginTop: "2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "1100px"
        }}>
          <div style={{
            display: "flex",
            gap: "2rem",       // espacio entre columnas
            flexWrap: "wrap"
          }}>
            
          </div>
        </form>

      </section>
      <p style={{ marginTop: "2rem", color: "#aaa" }}>
        © {new Date().getFullYear()} Barre Studio · Todos los derechos reservados
      </p>
    </footer>
  );
}