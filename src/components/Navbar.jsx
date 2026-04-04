function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav>
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <button onClick={toggleTheme} style={{ marginLeft: "20px" }}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;