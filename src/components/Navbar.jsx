import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <h1>BeBarreFit Studio</h1>
      <ul>
        <li>
          <button
            onClick={scrollToHero}
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              cursor: "pointer",
              padding: 0
            }}
          >
            Inicio
          </button>
        </li>
        <li><button
            onClick={() => {
              const footer = document.getElementById("clases");
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              cursor: "pointer",
              padding: 0
            }}
          >
            Clases
          </button></li>
        <li><Link to="/horarios">Horarios</Link></li>
        <li>
          <button
            onClick={() => {
              const footer = document.getElementById("footer");
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              cursor: "pointer",
              padding: 0
            }}
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
}