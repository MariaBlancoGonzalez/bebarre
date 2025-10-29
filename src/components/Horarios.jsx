import { motion } from "framer-motion";

export default function Horario() {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      padding: "3rem 2rem", 
      width: "100%" 
    }}>
      <motion.img
        src="/Horarios.PNG"
        alt="Horarios BeBarreFit"
        style={{
          height: "auto",
          width: "100%",
          maxWidth: "800px",
          objectFit: "contain",
          display: "block"
        }}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}