function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <img src={project.image} alt={project.name} style={{ width: "100%", borderRadius: "10px" }} />

        <h2 style={{ marginTop: "15px" }}>{project.name}</h2>
        
        <p>{project.details}</p>

        <p>
          <strong>Tecnologías:</strong> {project.technologies.join(", ")}
        </p>

        <a href={project.repo} target="_blank" rel="noreferrer">
          Ver repositorio
        </a>

        <br /><br />

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ProjectModal;