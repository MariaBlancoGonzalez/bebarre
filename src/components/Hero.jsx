import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState(["", "", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const lines = [
    "En BeBarreFit Studio te invitamos a descubrir el poder transformador del ejercicio físico",
    "combinado con la elegancia del ballet y la serenidad del mindfulness.",
    "Únete a nuestra comunidad y comienza tu viaje hacia un bienestar completo hoy mismo."
  ];

  useEffect(() => {
    if (isComplete) return;

    if (currentLine >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentText = lines[currentLine];
    
    if (currentChar < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = currentText.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentChar, currentLine, isComplete, lines]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("barre");
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
        marginTop: "-64px",
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
          pointerEvents: "auto",
          marginBottom: "2.5rem"
        }}>
          Encuentra tu equilibrio con <span style={{ color: "#b89c8b" }}>BeBarre Fit</span>
        </h1>

        {/* Typewriter text */}
        <div style={{
          maxWidth: "900px",
          width: "90%",
          pointerEvents: "auto"
        }}>
          {displayedLines.map((line, index) => (
            <p key={index} style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              color: "#fff",
              margin: "0.3rem 0",
              fontWeight: "400",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7), 1px 1px 4px rgba(0,0,0,0.9)",
              minHeight: "2.5rem"
            }}>
              {line}
              {!isComplete && currentLine === index && (
                <span style={{
                  display: "inline-block",
                  width: "3px",
                  marginLeft: "4px",
                  background: "#b89c8b",
                  animation: "blink-cursor 0.8s infinite",
                  height: "1.3rem",
                  verticalAlign: "middle"
                }}>|</span>
              )}
            </p>
          ))}
        </div>
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
          transition: "transform 0.3s ease"
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
          style={{ filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.6))" }}
        >
          <path d="M12 20l12 12 12-12" />
        </svg>
      </div>
    </section>
  );
}