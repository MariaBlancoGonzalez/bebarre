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
    link: "https://instagram.com/be.barrefit"
  },
  {
    icon: <FaMapMarkerAlt size={36} color="#fff" />,
    label: "Localización",
    value: "C. Luis Ruiz Valdepeñas, 8, 13250 Daimiel, Ciudad Real",
    link: "https://www.google.com/maps/place/C.+Luis+Ruiz+Valdepe%C3%B1as,+8,+13250+Daimiel,+Ciudad+Real/@39.0695828,-3.6136049,17z/data=!3m1!4b1!4m6!3m5!1s0xd6965107b324ebb:0x75248716ae07b7ed!8m2!3d39.0695828!4d-3.61103!16s%2Fg%2F11crx2kz78?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
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