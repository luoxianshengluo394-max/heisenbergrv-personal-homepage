import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      className={`projectCard${project.featured ? " featured" : ""}`}
      href={project.href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="cardTop">
        <span>{project.index}</span>
        <span aria-hidden="true">↗</span>
      </div>
      {project.featured && <span className="award">CHAMPION HKD 8000</span>}
      <p className="projectSubtitle">{project.subtitle}</p>
      <h3>{project.title}</h3>
      <p className="projectDescription">{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}
