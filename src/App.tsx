import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Section from "./components/Section";
import { academicProjects, personalProjects } from "./data";
import Footer from "./components/Footer";

interface MousePos {
  x: number;
  y: number;
}

function App() {
  const [mousePos, setMousePos] = useState({} as MousePos);

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.x, y: event.y } as MousePos);
      // console.log(event);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(1200px at ${mousePos.x}px ${mousePos.y}px, rgba(23, 78, 216, 0.25), transparent 80%)`,
          }}
        />
      )}

      <div className="flex min-h-screen font-sans px-10 xl:px-32 lg:px-20 md:px-20 sm:px-11 bg-slate-900 text-teal-50 flex-col lg:flex-row">
        <Header className="flex-1 lg:sticky md:top-0 lg:flex md:max-h-screen lg:flex-col lg:justify-between lg:py-24 md:py-20 py-10" />
        <div className="flex-1">
          <About className="lg:py-24 md:py-20 py-10" />
          <Section
            className="pb-24"
            name="Academic Projects"
            data={academicProjects}
          />
          <Section
            className="pb-20"
            name="Personal Projects"
            data={personalProjects}
          />
          <Footer className="text-slate-500 font-mono text-sm pb-5" />
        </div>
      </div>
    </>
  );
}

export default App;
