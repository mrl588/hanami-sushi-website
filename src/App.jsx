import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import IntroOverlay from "./components/IntroOverlay.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/Home.jsx";
import HoursLocation from "./pages/HoursLocation.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const introDurationMs = 3500;
    const timer = setTimeout(() => setIntroDone(true), introDurationMs);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0e7] text-slate-900">
      {!introDone && <IntroOverlay />}
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hours" element={<HoursLocation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
