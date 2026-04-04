import perfilImg from "../assets/fotolinkedin.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      
      <div className="hero-content">
        <h1>
          Hola, soy <span>Alexander</span>
        </h1>

        <h2>Ingeniero informático · IA · RPA </h2>

        <p>
          Acualmente me encuentro terminando el grado de Ingeniería informática en Vitoria-Gasteiz. Al mismo tiempo me encuentro trabajando como RPA developer en NTTdata.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>Ver proyectos</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">Contacto</button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={perfilImg} alt="perfil" />
      </div>

    </section>
  );
}

export default Hero;