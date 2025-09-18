import React from "react";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section style={{ width: "100%", padding: "4rem 2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Fila superior: texto e imagen */}
        <div style={{
          display: "flex",
          width: "100%",
          gap: "3rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <div style={{ flex: "1 1 400px", minWidth: 320 }}>
            <h2 style={{ fontSize: "2.3rem", marginBottom: "1rem", color: "#181818" }}>
              Inés González-Mohíno Muñoz
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
              Fundadora de Be Barre Fit, apasionada de la danza clásica y el movimiento desde la infancia. Mi formación en Ciencias de la Actividad Física y del Deporte, junto a un Máster en Medicina Deportiva, me permite unir ciencia y arte en cada sesión. Especializada en Ballet Barre, ejercicio en embarazo y postparto, y readaptación de lesiones, he trabajado en clubes, clínicas y proyectos de salud. Mi objetivo es ayudarte a sentirte más fuerte, consciente y feliz a través del movimiento.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              flex: "1 1 300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 260,
            }}
          >
            <img
              src="/Foto_corporativa.jpg"
              alt="Inés González-Mohíno Muñoz"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                border: "5px solid #fff",
              }}
            />
          </motion.div>
        </div>
        {/* Tarjeta única con dos columnas */}
        <div
          style={{
            background: "#fff",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            padding: "2rem 2.5rem",
            marginTop: "2.5rem",
            width: "100%",
            maxWidth: 900,
            display: "flex",
            gap: "2.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Columna 1: Formación */}
          <div style={{ flex: "1 1 340px", minWidth: 220 }}>
            <h3
              style={{
                fontSize: "1.15rem",
                color: "#795d4cff",
                margin: "0 0 0.7rem 0",
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              Formación y especialización
            </h3>
            <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#555", fontSize: "1.05rem", lineHeight: 1.7 }}>
              <li>Grado en Ciencias de la Actividad Física y del Deporte</li>
              <li>Máster en Medicina Deportiva (UCLM)</li>
              <li>Instructora certificada de Ballet Barre</li>
              <li>Especialista en ejercicio durante embarazo y postparto</li>
              <li>Readaptación de lesiones deportivas</li>
              <li>Entrenamiento para pacientes oncológicos</li>
            </ul>
          </div>
          {/* Columna 2: Experiencia */}
          <div style={{ flex: "1 1 340px", minWidth: 220 }}>
            <h3
              style={{
                fontSize: "1.15rem",
                color: "#795d4cff",
                margin: "0 0 0.7rem 0",
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              Experiencia
            </h3>
            <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#555", fontSize: "1.05rem", lineHeight: 1.7 }}>
              <li>Clubes de gimnasia rítmica</li>
              <li>Clínicas especializadas</li>
              <li>Proyectos de arte y salud</li>
              <li>Fundadora de Be Barre Fit</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}