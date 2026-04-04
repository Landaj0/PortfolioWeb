function About() {
  return (
    <section id="about">
      <h2>Sobre mí</h2>

      <div className="card">
        <p>
          Soy estudiante de ingeniería informática con interés en la inteligencia artificial. Me gusta crear proyectos prácticos y
          aprender tecnologías que tengan impacto real.
        </p>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>HTML & CSS</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Intereses</h3>
        <p>
          Inteligencia Artificial, desarrollo de productos digitales,
          inversión en tecnología y creación de proyectos escalables.
        </p>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Formación</h3>
        <p>
          Grado en Ingeniería Informática (en curso).
        </p>
      </div>
    </section>
  );
}

export default About;