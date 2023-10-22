import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import FeaturedSites from "./featured-sites";
import Hero from "./hero";

import ProjectCard from "~/components/project-card";
import ProjectLink from "~/components/project-link";
import TrippyArt from "~/components/trippy-art";
import projects from "~/data/projects";

const filteredProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

const FeaturedWork = () => {
  const projectZeda = filteredProject("zeda-inc");
  return (
    <section className="w-full">
      {projectZeda && <ProjectCard project={projectZeda} />}
    </section>
  );
};

export default function IndexPage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <FeaturedSites />
      {/* <TrippyArt /> */}
    </>
  );
}
