import { lazy } from "react";

import About from "./about";
import Employment from "./employment";
import FeaturedProjects from "./featured-projects";
import FeaturedSites from "./featured-sites";
import Hero from "./hero";

import TrippyArt from "~/components/trippy-art";

const Dribbbles = lazy(() => import("./dribbbles"));

export default function IndexPage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <FeaturedSites />
      <TrippyArt />
      <About />
      <Employment />
      <Dribbbles />
    </>
  );
}
