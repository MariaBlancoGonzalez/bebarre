import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("bienvenida");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#181818",
        overflow: "hidden",
        padding: "0 2rem"
      }}
    >
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={1800}
        loop
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1
        }}
      >
        <SwiperSlide>
          <img src="/2.JPG" style={{ width: "100%", height: "100vh", objectFit: "cover" }} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/3.JPG" style={{ width: "100%", height: "100vh", objectFit: "cover" }} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/4.JPG" style={{ width: "100%", height: "100vh", objectFit: "cover" }} alt="slide3" />
        </SwiperSlide>
      </Swiper>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          pointerEvents: "none"
        }}>
        <h2 style={{
          fontSize: "2.2rem",
          letterSpacing: "0.15em",
          marginBottom: "1.5rem",
          color: "#fff",
          textShadow: "3px 3px 10px rgba(0,0,0,0.6), 1px 1px 4px rgba(0,0,0,0.8)",
          fontWeight: 400,
          pointerEvents: "auto"
        }}>
          • DOS MÉTODOS, UNA ESENCIA •
        </h2>
        <h1 style={{
          fontSize: "3.8rem",
          fontWeight: "bold",
          lineHeight: 1.2,
          color: "#fff",
          textShadow: "3px 3px 10px rgba(0,0,0,0.6), 1px 1px 4px rgba(0,0,0,0.8)",
          pointerEvents: "auto"
        }}>
          Encuentra tu equilibrio con <span style={{ color: "#b89c8b" }}>BeBarre Fit</span>
        </h1>
      </div>
      <div
        onClick={scrollToNext}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "32px",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 3,
          transition: "transform 0.3s ease, opacity 0.3s ease"
        }}
        aria-label="Ir a la siguiente sección"
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === "Enter" || e.key === " ") scrollToNext();
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateX(-50%) scale(1.1)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateX(-50%) scale(1)";
        }}
      >
        <svg
          className="blink-arrow"
          width="64"
          height="64"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.6))"
          }}
        >
          <path d="M12 20l12 12 12-12" />
        </svg>
      </div>
    </section>
  );
}