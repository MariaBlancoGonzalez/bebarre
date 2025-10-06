import React from "react";
import { motion } from "framer-motion";

export default function WelcomeSection({ id }) {
  return (
    <section
      id={id}
      style={{
        width: "100%",
        padding: "2.5rem 0 2rem 0",
        background: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        style={{
          maxWidth: 800,
          width: "92%",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#795d4cff",
            marginBottom: "1.2rem",
            letterSpacing: "0.01em",
            textAlign: "left",
          }}
        >
          Bienvenida a BeBarreFit Studio
        </h2>
        <p
          style={{
            fontSize: "1.18rem",
            lineHeight: "1.7",
            color: "#0c0c0cff",
            margin: 0,
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          En BeBarreFit Studio te invitamos a descubrir el poder transformador del ejercicio físico combinado con la elegancia del ballet y la serenidad del mindfulness.<br /><br />
          Nuestro enfoque integral está diseñado para fortalecer tu cuerpo, mejorar tu postura y aumentar tu flexibilidad, todo mientras cultivas una mente tranquila y enfocada.<br /><br />
          Únete a nuestra comunidad y comienza tu viaje hacia un bienestar completo hoy mismo.
        </p>
      </motion.div>
    </section>
  );
}