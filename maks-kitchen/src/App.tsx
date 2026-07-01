import { useEffect, useState } from "react";
import { SvgDefs } from "./components/ui";
import Loader from "./components/Loader";
import Atmosphere from "./components/Atmosphere";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Signatures from "./components/Signatures";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import MapSection from "./components/MapSection";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <SvgDefs />
      <Loader done={ready} />
      <Atmosphere />
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Signatures />
        <MenuSection />
        <Gallery />
        <Experience />
        <Stats />
        <Reviews />
        <Visit />
        <MapSection />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
