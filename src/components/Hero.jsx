export default function Hero() {
  const scrollToMetodo = () => {
    const metodoSection = document.getElementById("metodo");
    if (metodoSection) {
      metodoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Color beige claro recomendado
  const beige = "#ede8d0";

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
        color: "#181818",
        overflow: "hidden"
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.18)",
          zIndex: 1
        }}
      />

      {/* Recuadro principal */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "2.5rem 3.5rem",
          background: beige,
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          maxWidth: 900,
          width: "90%",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            letterSpacing: "0.15em",
            marginBottom: "1rem",
            color: "#181818"
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
            color: "#b89c8b"
          }}
        >
          Encuentra tu equilibrio con <span style={{ color: "#795d4cff" }}>BeBarreFit</span>
        </h1>
      </div>

      {/* Recuadro para "Primera clase GRATIS" */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "calc(60% + 120px)",
          transform: "translateX(-50%)",
          zIndex: 2,
          padding: "1.1rem 2.5rem",
          background: beige,
          boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
          maxWidth: 420,
          width: "80%",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#795d4cff",
            letterSpacing: "0.03em"
          }}
        >
          ¡Primera clase GRATIS!
        </span>
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
          zIndex: 3
        }}
        aria-label="Ir a la siguiente sección"
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === "Enter" || e.key === " ") scrollToMetodo();
        }}
      >
        <svg
          className="blink-arrow"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#795d4cff"
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