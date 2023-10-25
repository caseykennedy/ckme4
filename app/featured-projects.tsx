import ProjectCard from "~/components/project-card";
import projects from "~/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="w-full">
      {projects
        .filter((project) => project.featured === true)
        .map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
    </section>
  );
}
