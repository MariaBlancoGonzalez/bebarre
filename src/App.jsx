import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Horarios from "./components/Horarios";
import Separator from "./components/Separator";
import Method from "./components/Method";
import Classes from "./components/Classes";
import Team from "./components/Team";
import WelcomeSection from "./components/WelcomeSection";
import Contact from "./components/Contact";

/* import GoogleReviewsWidget from 'google-reviews-widget'; */
function Home() {

  return (
    <>
      <Hero />
      <WelcomeSection id="bienvenida" />
      <Method id="metodo" />
      <Separator text="Nuestras Clases" id="clases"/>
      <Classes />
      <Separator text="Horario"/>
      <Horarios />
      <Separator text="Equipo" />
      <Team />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
        {/*<Navbar />*/}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


