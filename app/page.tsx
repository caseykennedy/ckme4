import Hero from "./hero";
import TrippyArt from "./TrippyArt";

import ProjectCard from "~/components/project-card";
import TextReveal from "~/components/text-reveal";
import { Separator } from "~/components/ui";
import projects from "~/data/projects";

const capabilities = [
  "Full-stack dev",
  "Visual design",
  "ui + ux",
  "Wireframing",
  "Prototyping",
  "Strategy",
  "Ongoing support",
];

const clients = [
  "Zeda, Inc.",
  "enCirca",
  "Valeo",
  "Cahuilla Casino",
  "Fidira",
  "Orthopaedic Implant Co.",
  "Fresh Bakin'",
  "The Life Change Center",
];

const filteredProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

const ListItems = ({ title, items }: { title: string; items: string[] }) => (
  <ul className="flex-1">
    <li className="pb-16">{title}</li>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const FeaturedProjects = () => {
  const projectZeda = filteredProject("zeda-inc");
  return (
    <section className="w-full">
      {projectZeda && <ProjectCard project={projectZeda} />}
      {projectZeda && <ProjectCard project={projectZeda} />}
    </section>
  );
};

export default function IndexPage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TrippyArt />
    </>
  );
}
