import React from "react";
import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const items = [
  {
    icon: <FaPhoneAlt size={36} color="#fff" />,
    label: "Teléfono",
    value: "666 123 456",
    link: "tel:666123456"
  },
  {
    icon: <FaInstagram size={36} color="#fff" />,
    label: "Instagram",
    value: "@bebarrefit",
    link: "https://instagram.com/bebarrefit"
  },
  {
    icon: <FaMapMarkerAlt size={36} color="#fff" />,
    label: "Localización",
    value: "Calle Ejemplo 123, Ciudad",
    link: "https://maps.google.com/?q=Calle+Ejemplo+123,+Ciudad"
  }
];

// Color marrón de tu gama cromática
const brown = "#795d4cff";

export default function ContactInfo() {
  return (
    <section style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2.5rem 0"
    }}>
      <div style={{
        display: "flex",
        gap: "2.5rem",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        maxWidth: 900
      }}>
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: brown,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              padding: "2rem 2.2rem",
              minWidth: 220,
              maxWidth: 260,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {item.link && idx === 1 ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                {item.icon}
              </a>
            ) : item.link ? (
              <a href={item.link} style={{ textDecoration: "none" }}>
                {item.icon}
              </a>
            ) : (
              item.icon
            )}
            <div style={{ marginTop: "1.1rem", fontWeight: 600, color: "#fff", fontSize: "1.1rem" }}>
              {item.label}
            </div>
            <div style={{ marginTop: "0.5rem", color: "#fff", fontSize: "1.08rem", wordBreak: "break-word" }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}