import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Horarios from "./components/Horarios";
import Separator from "./components/Separator";
import Method from "./components/Method";
import Classes from "./components/Classes";
import Team from "./components/Team";
import WelcomeSection from "./components/WelcomeSection";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function Home() {
  return (
    <>
      <Hero />
      {/*<WelcomeSection id="bienvenida" />*/}
      <Separator text="Dos métodos" id="clases" />
      <Method id="barre" />
      <Separator showBarre={true} text="Nuestras Clases" id="clases" />
      <Classes />
      <Separator showBarre={true} text="Horario" id="horarios" />
      <Horarios />
      <Separator showBarre={true} text="Equipo" id="team" />
      <Team />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
        <NavBar />
        <main style={{ flexGrow: 1, paddingTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}