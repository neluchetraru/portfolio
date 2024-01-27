import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Section from "./components/Section";
import { academicProjects, personalProjects } from "./data";

interface MousePos {
  x: number;
  y: number;
}

function App() {
  const [mousePos, setMousePos] = useState({} as MousePos);

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
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 "
        style={{
          background: `radial-gradient(1200px at ${mousePos.x}px ${mousePos.y}px, rgba(23, 78, 216, 0.25), transparent 80%)`,
        }}
      ></div>
      <div className="flex min-h-screen font-sans lg:px-24 lg:py-0 bg-slate-900 text-teal-50">
        <Header className="flex-1 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24" />
        <div className="flex-1">
          <About className="lg:py-24" />
          {/* <Section className="min-h-screen" name="Academic Projects" data={academicProjects} /> */}
          <Section
            className="min-h-screen"
            name="Personal Projects"
            data={personalProjects}
          />
        </div>
      </div>
    </>
  );
}

export default App;
