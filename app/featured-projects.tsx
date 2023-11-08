import ProjectCard from "~/components/project-card";
import Section from "~/components/ui/section";
import projects from "~/data/projects";

export default function FeaturedProjects() {
  return (
    <Section className="border-t-[2px] border-dotted border-zinc-700">
      {projects
        .filter((project) => project.featured === true)
        .map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
    </Section>
  );
}
