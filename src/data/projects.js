import webImg from "../assets/portfolioweb.png";
import iaImg from "../assets/appia.png";

const projects = [
  {
    id: 1,
    name: "Portfolio Web",
    description: "Web personal desarrollada con React",
    technologies: ["React", "CSS"],
    image: webImg,
    repo: "https://github.com/Landaj0/PortfolioWeb",
    details: "Proyecto completo con componentes, hooks, modal y diseño responsive."
  },
  {
    id: 2,
    name: "App IA",
    description: "Aplicación usando inteligencia artificial",
    technologies: ["Python", "AI"],
    image: iaImg,
    repo: "https://github.com/Landaj0/TFG",
    details: "Modelo de machine learning aplicado a datos reales."
  }
];

export default projects;