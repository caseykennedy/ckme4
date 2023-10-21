// import Link from "next/link";

import ProjectCard from "./project-card";

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
      {/* {projectZeda && <ProjectCard project={projectZeda} />}
      {projectZeda && <ProjectCard project={projectZeda} />}
      {projectZeda && <ProjectCard project={projectZeda} />} */}
    </section>
  );
};

export default function IndexPage() {
  return (
    <>
      <section className="w-full items-center pb-24 md:h-[60vh] md:max-h-[600px]">
        <div className="container grid grid-cols-6 gap-5">
          <div className="col-span-full pt-[6.25rem] md:col-span-3">
            <h2 className="max-w-[26ch] flex-1 text-2xl tracking-tight text-white">
              Web development and visual design for people, teams and
              visionaries
            </h2>
          </div>

          <div className="col-span-full flex flex-row flex-wrap gap-5 pt-4 leading-tight text-zinc-400 md:col-span-3">
            <ul className="flex-1">
              <li className="pb-16 text-white">Contact</li>
              <li className="pb-4 text-white">me@caseykennedy.me</li>
              <li>GitHub</li>
              <li>Dribbble</li>
              <li>LinkedIn</li>
            </ul>
            <ListItems title="Capabilities" items={capabilities} />
            <ListItems title="Clients" items={clients} />
          </div>
        </div>
      </section>
      <Separator className="border-b-[2px] border-dotted border-zinc-700" />
      <FeaturedProjects />
    </>
  );
}
