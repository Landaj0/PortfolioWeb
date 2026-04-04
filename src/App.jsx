import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Cargar preferencia guardada
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "light") {
      setDarkMode(false);
      document.body.classList.add("light");
    }
  }, []);

  // Aplicar cambios
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;