import About from "./components/About";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="flex min-h-screen font-sans lg:px-24 lg:py-0 bg-slate-900 text-teal-50">
      <Header className="flex-1 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24"/>
      <div className="flex-1">
        <About className="min-h-screen lg:py-24" />
        <Section className="min-h-screen" name="Academic Projects"/>
        <Section className="min-h-screen" name="Personal Projects"/>
      </div>
    </div>
  );
}

export default App;
