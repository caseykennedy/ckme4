import About from "./about";
import Dribbbles from "./dribbbles";
import Employment from "./employment";
import FeaturedProjects from "./featured-projects";
import FeaturedSites from "./featured-sites";
import Hero from "./hero";
import Manifesto from "./manifesto";
import TrippyArt from "./trippy-art";

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
      <Manifesto />
    </>
  );
}
