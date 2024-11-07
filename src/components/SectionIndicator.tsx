import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

const SectionIndicator = ({ className }: Props) => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const options = {
      rootMargin: "-10% 0px -45% 0px",
    };

    const callback: IntersectionObserverCallback = (entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);

      if (visibleSections.length > 0) {
        const mostVisibleSection = visibleSections.reduce((prev, current) => {
          return prev.intersectionRatio > current.intersectionRatio
            ? prev
            : current;
        });

        setActiveSection(mostVisibleSection.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const sections = [
    { id: "about", label: "About" },
    { id: "academic", label: "Academic Projects" },
    { id: "personal", label: "Personal Projects" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = isMobile ? 20 : 100; // Smaller offset for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // If mobile, render a horizontal version at the top
  if (isMobile) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 px-4 py-2 flex justify-center gap-4 border-b border-slate-800">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`text-xs font-medium transition-all duration-200 ${
              activeSection === id
                ? "text-teal-300"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <span>{label}</span>
              <div
                className={`h-0.5 transition-all duration-200 ${
                  activeSection === id ? "w-full bg-teal-300" : "w-0"
                }`}
              />
            </div>
          </button>
        ))}
      </nav>
    );
  }

  // Desktop version
  return (
    <nav className={`${className} space-y-4 hidden lg:block`}>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`block text-sm font-medium transition-all duration-200 ${
            activeSection === id
              ? "text-teal-300"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`h-px transition-all duration-200 ${
                activeSection === id ? "w-16 bg-teal-300" : "w-8 bg-slate-500"
              }`}
            />
            {label}
          </div>
        </button>
      ))}
    </nav>
  );
};

export default SectionIndicator;
