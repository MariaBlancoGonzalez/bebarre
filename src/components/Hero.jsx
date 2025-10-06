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
        backgroundImage: 'url("/header.PNG")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        overflow: "hidden",
        padding: "0 2rem"
      }}
    >
      {/* Overlay oscuro sutil */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.25)",
          zIndex: 1
        }}
      />

      {/* Contenido principal sin recuadro */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            letterSpacing: "0.15em",
            marginBottom: "1.5rem",
            color: "#fff",
            textShadow: "3px 3px 10px rgba(0,0,0,0.6), 1px 1px 4px rgba(0,0,0,0.8)",
            fontWeight: 400
          }}
        >
          • DOS MÉTODOS, UNA ESENCIA •
        </h2>
        <h1
          style={{
            fontSize: "3.8rem",
            fontWeight: "bold",
            lineHeight: 1.2,
            marginBottom: "3rem",
            color: "#fff",
            textShadow: "3px 3px 10px rgba(0,0,0,0.6), 1px 1px 4px rgba(0,0,0,0.8)"
          }}
        >
          Encuentra tu equilibrio con{" "}
          <span 
            style={{ 
              color: "#b89c8b",
              textShadow: "3px 3px 10px rgba(0,0,0,0.6), 1px 1px 4px rgba(0,0,0,0.8)"
            }}
          >
            BeBarreFit
          </span>
        </h1>
      </div>

      {/* Recuadro "Primera clase GRATIS" sin esquinas redondeadas */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "1.2rem 3rem",
          background: "#ede8d0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          border: "2px solid #b89c8b",
          marginTop: "2rem"
        }}
      >
        <span
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "#795d4cff",
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}
        >
          Primera clase GRATIS
        </span>
      </div>

      {/* Flecha de scroll */}
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