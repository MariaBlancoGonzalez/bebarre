import React, { useState, useEffect } from "react";

export default function Classes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const barreBlocks = [
    "Calentamiento: activación suave para preparar el cuerpo.",
    "Ejercicios en barra: movimientos inspirados en el ballet que desarrollan fuerza y control postural.",
    "Ejercicios en suelo: trabajo de fuerza, core y movilidad.",
    "Estiramientos: vuelta a la calma, liberación de tensiones y relajación final."
  ];

  const barreBenefits = [
    "Tonificación muscular.",
    "Corrección postural y mayor consciencia corporal.",
    "Flexibilidad y elasticidad.",
    "Incremento de la fuerza y resistencia física.",
    "Fortalecimiento del core."
  ];

  const postPartoBenefits = [
    "Prevención de la diabetes gestacional.",
    "Disminución del riesgo de hipertensión gestacional.",
    "Reducción de la depresión pre y postnatal.",
    "Prevención de la incontinencia urinaria.",
    "Mejor recuperación postparto."
  ];

  const slides = [
    {
      img: "/barre.jpg",
      title: "Clases barre",
      intro: "Las clases de Barre duran 60 minutos y se estructuran en bloques:",
      blocks: barreBlocks,
      extraText: "Utilizamos materiales como gomas, aros, ladrillos de yoga o mancuernas, adaptando la intensidad a cada nivel.",
      benefits: barreBenefits
    },
    {
      img: "/Embarazo.JPG",
      title: "Clases postparto y embarazo",
      intro: "El embarazo es una etapa única, y adaptar el movimiento es fundamental para cuidarte y sentirte bien en cada fase. El ejercicio durante el embarazo aporta bienestar a la madre y también beneficia al bebé y la recuperación postparto.",
      subtitle: "Beneficios para la madre:",
      benefits: postPartoBenefits,
      extraText: "Las sesiones incluyen ejercicios de movilidad, fuerza y cardio suave, respetando tus necesidades y el momento del embarazo. Siempre se realiza una valoración fisioterapéutica inicial."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <section style={{ 
      width: "100%", 
      padding: "4rem 0",
      background: "#ffffff"
    }}>
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto",
        padding: "0 2rem",
        position: "relative"
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Slides container */}
          <div style={{
            display: "flex",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
            {slides.map((slide, idx) => (
              <div key={idx} style={{
                minWidth: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem"
              }}>
                {/* Imagen */}
                <div style={{
                  width: "100%",
                  height: "400px",
                  overflow: "hidden",
                  background: "#f5f5f5"
                }}>
                  <img 
                    src={slide.img} 
                    alt={slide.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </div>

                {/* Contenido */}
                <div style={{ padding: "0 1rem" }}>
                  <h2 style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                    marginBottom: "1.5rem",
                    color: "#181818",
                    letterSpacing: "0.02em"
                  }}>
                    {slide.title}
                  </h2>

                  <p style={{
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    color: "#4a4a4a",
                    marginBottom: "1.5rem"
                  }}>
                    {slide.intro}
                  </p>

                  {slide.blocks && (
                    <ol style={{
                      paddingLeft: "1.5rem",
                      marginBottom: "1.5rem",
                      color: "#4a4a4a",
                      lineHeight: "1.7"
                    }}>
                      {slide.blocks.map((item, i) => (
                        <li key={i} style={{ marginBottom: "0.5rem" }}>
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}

                  {slide.extraText && (
                    <p style={{
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      color: "#4a4a4a",
                      marginBottom: "1.5rem"
                    }}>
                      {slide.extraText}
                    </p>
                  )}

                  <p style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#181818",
                    marginTop: "1.5rem",
                    marginBottom: "0.75rem"
                  }}>
                    {slide.subtitle || "Beneficios:"}
                  </p>

                  <ul style={{
                    paddingLeft: "1.5rem",
                    color: "#4a4a4a",
                    lineHeight: "1.7"
                  }}>
                    {slide.benefits.map((benefit, i) => (
                      <li key={i} style={{ marginBottom: "0.5rem" }}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "16px",
              top: "200px",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#b89c8b";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            aria-label="Slide anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "16px",
              top: "200px",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#b89c8b";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            aria-label="Siguiente slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "3rem"
        }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: currentSlide === idx ? "32px" : "10px",
                height: "10px",
                borderRadius: "5px",
                border: "none",
                background: currentSlide === idx ? "#b89c8b" : "#d1c4b8",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: currentSlide === idx ? 1 : 0.5
              }}
              aria-label={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            button[aria-label="Slide anterior"],
            button[aria-label="Siguiente slide"] {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}