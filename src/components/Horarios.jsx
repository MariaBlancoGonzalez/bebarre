import { motion } from "framer-motion";

export default function Horario() {
  const imagestyle = {
  height: "80vh",  
  width: "60vw",
  objectFit: "cover",
  display: "block",       // Para que respete margin auto
  margin: "0 auto",  
  alignItems: "center",
  };
  return (
    
    <div className="flex flex-col items-center justify-center p-6 w-full">

      {/* Imagen animada */}
      <motion.img
      style = {imagestyle}
  src="/Horarios.PNG"
  alt="Foto horarios"
  className="w-full max-w-md rounded-2xl shadow-lg"
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: false, amount: 0.4 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>
    </div>
  );
}

