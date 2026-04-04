import { useState } from "react";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  // Sacar tecnologías únicas
  const technologies = [
    "All",
    ...new Set(projects.flatMap((p) => p.technologies)),
  ];

  // Filtrado
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <section id="projects">
      <h2>Proyectos</h2>

      {/* FILTROS */}
      <div className="filters">
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={filter === tech ? "active-filter" : ""}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* PROYECTOS */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            className="card project-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.name} />

            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;