function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>

      <div className="card">
        <p>
          Si quieres contactar conmigo para colaborar, trabajar juntos o
          cualquier otra cosa, aquí tienes mis datos:
        </p>

        <ul style={{ marginTop: "15px" }}>
          <li><strong>Email:</strong> alexanderlandajo@gmail.com</li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Landaj0?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              github.com/AlexanderLandajo
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;