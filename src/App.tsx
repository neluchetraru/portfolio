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

  const [width, setWidth] = useState<number>(window.innerWidth);

  const [isLoading, setIsLoading] = useState(true);

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
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Simulate loading time or actual data fetching
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-900">
        <div className="text-teal-300 text-2xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
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
          <section id="about">
            <About className="lg:py-24 md:py-20 py-10" />
          </section>
          <section id="academic">
            <Section
              className="pb-24"
              name="Academic Projects"
              data={academicProjects}
            />
          </section>
          <section id="personal">
            <Section
              className="pb-20"
              name="Personal Projects"
              data={personalProjects}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
