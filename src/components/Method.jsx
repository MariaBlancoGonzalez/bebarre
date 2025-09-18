import React from "react";
import PhotoCard from "./Photocard";
import { motion } from "framer-motion";
import HalfSeparator from "./Separator";

// 🎨 Estilos reutilizables
const sectionStyle = {
  width: "100%",
  padding: "1rem 0 8rem 0",
  position: "relative",
  overflow: "visible",
  marginBottom : "3rem",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "3rem",
  color: "#181818",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "4rem",
  flexWrap: "wrap",
  textAlign: "center",
};

// 📦 Datos de cada bloque
const metodoCards = [
  {
    src: "/pilates.jpg",
    title: "Pilates",
    text: "El pilates combina fuerza, flexibilidad y control del cuerpo mediante movimientos de bajo impacto tanto orientales como occidentales. Adecuado para cualquier nivel y edad, ayuda tanto a mejorar la condición física como a prevenir y rehabilitar lesiones. Un método que fortalece el cuerpo sin estrés innecesario.",
    animation: { initial: { x: -150, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
  },
  {
    src: "/yoga.JPG",
    title: "Yoga",
    text: "El yoga aporta la dimensión consciente y meditativa al Barre, conectando cuerpo y mente. La práctica de respiración y movimiento fluido ayuda a equilibrar la energía, favorecer la calma mental y mejorar el bienestar general. Yoga en Barre es armonía, concentración y cuidado integral del cuerpo.",
    animation: { initial: { x: 150, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
  },
];

const esenciaCards = [
  {
    src: "/ballet.jpg",
    title: "Ballet",
    text: "Ballet, la base del Barre. Su técnica potencia la alineación del cuerpo y la verticalidad del torso, mejorando la postura y previniendo lesiones. Cada movimiento trabaja coordinación, equilibrio y distribución del peso, haciendo que los movimientos sean más fluidos y seguros. Además, bailar libera hormonas de la felicidad, aportando bienestar y alegría.",
    animation: { initial: { y: 150, opacity: 0 }, whileInView: { y: 0, opacity: 1 } },
  },
];

export default function Metodo() {
  return (
    <>
      {/* Sección 1 */}
      <section style={sectionStyle}>
        <HalfSeparator text="Dos metodos" side="left" />
        <div style={containerStyle}>
          {metodoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={card.animation.initial}
              whileInView={card.animation.withinView}
              whileInView={card.animation.whileInView}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <PhotoCard {...card} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección 2 */}
      <section style={sectionStyle}>
        <HalfSeparator text="Una Esencia" side="left" />
        <div style={containerStyle}>
          {esenciaCards.map((card, index) => (
            <motion.div
              key={index}
              initial={card.animation.initial}
              whileInView={card.animation.whileInView}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <PhotoCard {...card} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
