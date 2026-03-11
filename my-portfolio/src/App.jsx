import COLORS from "./data/colors";
import DevCursor from "./components/DevCursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;700&family=Space+Mono:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: ${COLORS.soil};
          color: ${COLORS.cream};
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          overflow-x: hidden;
          cursor: none;
        }

        a, button, [data-hover] { cursor: none !important; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes lineGrow {
          0%, 100% { transform: scaleY(1);    opacity: 0.6; }
          50%       { transform: scaleY(1.35); opacity: 1;   }
        }

        ::-webkit-scrollbar       { width: 4px; }
        ::-webkit-scrollbar-track { background: ${COLORS.soil}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.sunflower}; border-radius: 2px; }
      `}</style>

      <DevCursor />
      <Nav />

      <main style={{ background: COLORS.soil }}>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
