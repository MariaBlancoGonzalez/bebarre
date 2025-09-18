export default function Hero() {
  const scrollToMetodo = () => {
    const metodoSection = document.getElementById("metodo");
    if (metodoSection) {
      metodoSection.scrollIntoView({ behavior: "smooth" });
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
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: 'url("/header.PNG")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        overflow: "hidden"
      }}
    >
      {/* Overlay oscuro */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)", // oscurece la imagen
          zIndex: 1
        }}
      />

      {/* Contenido centrado */}
      <div style={{ position: "relative", zIndex: 2, padding: "0 1rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            letterSpacing: "0.15em",
            marginBottom: "1rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)"
          }}
        >
          • DOS MÉTODOS, UNA ESENCIA •
        </h2>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            lineHeight: 1.2,
            marginBottom: "2rem",
            textShadow: "3px 3px 12px rgba(0,0,0,0.7)"
          }}
        >
          Encuentra tu equilibrio con <span style={{ color: "#E2E3DD" }}>BeBarreFit</span>
        </h1>
        <button
          style={{
            padding: "0.8rem 2rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#E2E3DD",
            color: "#181818",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          Primera clase GRATIS
        </button>
      </div>

      {/* Flecha de scroll */}
      <div
        onClick={scrollToMetodo}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "32px",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 2
        }}
      >
        <svg
          className="blink-arrow"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20l12 12 12-12" />
        </svg>
      </div>
    </section>
  );
}
