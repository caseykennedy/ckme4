import ProjectCard from "~/components/project-card";
import Section from "~/components/ui/section";
import projects from "~/data/projects";

export default function FeaturedProjects() {
  return (
    <Section className="w-full">
      {projects
        .filter((project) => project.featured === true)
        .map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
    </Section>
  );
}
