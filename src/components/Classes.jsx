import React, { useState, useEffect } from "react";

export default function Classes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      img: "/barre.jpg",
      title: "Clases barre",
      content: {
        intro: "Las clases de Barre duran 60 minutos y se estructuran en bloques:",
        blocks: [
          "Calentamiento: activación suave para preparar el cuerpo.",
          "Ejercicios en barra: movimientos inspirados en el ballet que desarrollan fuerza y control postural.",
          "Ejercicios en suelo: trabajo de fuerza, core y movilidad.",
          "Estiramientos: vuelta a la calma, liberación de tensiones y relajación final."
        ],
        extra: "Utilizamos materiales como gomas, aros, ladrillos de yoga o mancuernas, adaptando la intensidad a cada nivel.",
        benefitsTitle: "Beneficios:",
        benefits: [
          "Tonificación muscular.",
          "Corrección postural y mayor consciencia corporal.",
          "Flexibilidad y elasticidad.",
          "Incremento de la fuerza y resistencia física.",
          "Fortalecimiento del core."
        ]
      }
    },
    {
      img: "/Embarazo.JPG",
      title: "Clases postparto y embarazo",
      content: {
        intro: "El embarazo es una etapa única, y adaptar el movimiento es fundamental para cuidarte y sentirte bien en cada fase. El ejercicio durante el embarazo aporta bienestar a la madre y también beneficia al bebé y la recuperación postparto.",
        benefitsTitle: "Beneficios para la madre:",
        benefits: [
          "Prevención de la diabetes gestacional.",
          "Disminución del riesgo de hipertensión gestacional.",
          "Reducción de la depresión pre y postnatal.",
          "Prevención de la incontinencia urinaria.",
          "Mejor recuperación postparto."
        ],
        extra: "Las sesiones incluyen ejercicios de movilidad, fuerza y cardio suave, respetando tus necesidades y el momento del embarazo. Siempre se realiza una valoración fisioterapéutica inicial."
      }
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
      padding: "4rem 0 6rem 0",
      background: "var(--color-background)"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        padding: "0 2rem",
        position: "relative"
      }}>
        {/* Carousel container */}
        <div style={{
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Slides */}
          <div style={{
            display: "flex",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
            {slides.map((slide, idx) => (
              <div key={idx} style={{
                minWidth: "100%",
                display: "flex",
                flexDirection: "column"
              }}>
                {/* Card con layout horizontal */}
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  background: "var(--color-accent)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
                  minHeight: "500px",
                  border: "1px solid rgba(149, 104, 65, 0.15)",
                  overflow: "hidden"
                }}>
                  {/* Imagen - Lado izquierdo */}
                  <div style={{
                    flex: "0 0 45%",
                    minHeight: "500px",
                    overflow: "hidden",
                    background: "#f5f5f5",
                    borderRight: "3px solid var(--color-secondary)"
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

                  {/* Contenido - Lado derecho */}
                  <div style={{ 
                    flex: "1",
                    padding: "3rem 3.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}>
                    <h2 style={{
                      fontSize: "2.3rem",
                      fontWeight: "700",
                      marginBottom: "1.5rem",
                      color: "var(--color-dark)",
                      letterSpacing: "0.01em"
                    }}>
                      {slide.title}
                    </h2>

                    <p style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.7",
                      color: "var(--color-text)",
                      marginBottom: "1.5rem",
                      fontWeight: "400"
                    }}>
                      {slide.content.intro}
                    </p>

                    {slide.content.blocks && (
                      <ol style={{
                        paddingLeft: "1.8rem",
                        marginBottom: "1.5rem",
                        color: "var(--color-text)",
                        lineHeight: "1.7",
                        fontSize: "1.05rem"
                      }}>
                        {slide.content.blocks.map((item, i) => (
                          <li key={i} style={{ marginBottom: "0.6rem" }}>
                            {item}
                          </li>
                        ))}
                      </ol>
                    )}

                    {slide.content.extra && (
                      <p style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.7",
                        color: "var(--color-text)",
                        marginBottom: "1.5rem",
                        fontWeight: "400"
                      }}>
                        {slide.content.extra}
                      </p>
                    )}

                    <p style={{
                      fontSize: "1.15rem",
                      fontWeight: "600",
                      color: "var(--color-dark)",
                      marginTop: "1.5rem",
                      marginBottom: "0.8rem",
                      letterSpacing: "0.03em"
                    }}>
                      {slide.content.benefitsTitle}
                    </p>

                    <ul style={{
                      paddingLeft: "1.8rem",
                      color: "var(--color-text)",
                      lineHeight: "1.7",
                      fontSize: "1.05rem"
                    }}>
                      {slide.content.benefits.map((benefit, i) => (
                        <li key={i} style={{ marginBottom: "0.6rem" }}>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.95)",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-secondary)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            aria-label="Slide anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.95)",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-secondary)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            aria-label="Siguiente slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          marginTop: "3rem"
        }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: currentSlide === idx ? "36px" : "12px",
                height: "12px",
                borderRadius: "6px",
                border: "none",
                background: currentSlide === idx ? "var(--color-secondary)" : "var(--color-accent)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: currentSlide === idx ? 1 : 0.6,
                boxShadow: currentSlide === idx ? "0 2px 8px rgba(149, 104, 65, 0.3)" : "none"
              }}
              aria-label={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .classes-card-horizontal {
              flex-direction: column !important;
            }
            
            .classes-image-container {
              flex: 1 1 auto !important;
              min-height: 350px !important;
            }
          }
          
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