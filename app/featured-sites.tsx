import ProjectLink from "~/components/project-link";
import Section from "~/components/ui/section";
import projects from "~/data/projects";
import cloudinary from "~/lib/cloudinary";
import getBase64 from "~/lib/get-local-base64";

export type ResourceShape = {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  width: string;
  height: string;
  aspect_ratio: number;
  url: string;
  secure_url: string;
  predominant: object;
};

export type SearchResponse = ResourceShape & {
  total_count: number;
  time: number;
  resources: ResourceShape[];
};

export type ProjectLinkShape = {
  id: number;
  asset_id: string;
  secure_url: string;
  public_id: string;
  color: string;
  client: string;
  year: number;
  domain: string;
};

export default async function FeaturedSites() {
  const { resources }: SearchResponse = await cloudinary.v2.search
    .expression(`folder:${process.env.CDN_THUMBNAILS_FOLDER}`)
    .max_results(16)
    .execute();

  const reducedResults: ProjectLinkShape[] = [];

  let i = 0;
  for (const result of resources) {
    const { public_id, secure_url } = result;
    projects.filter((project) => {
      if (project.publicID === public_id) {
        reducedResults.push({
          id: i,
          asset_id: result.asset_id,
          secure_url,
          public_id,
          color: "",
          client: project.client,
          year: project.year,
          domain: project.domain,
        });
        i++;
      }
    });
  }

  console.log("reducedResults", reducedResults);

  // const blurImagePromises = resources.map((value: { secure_url: string }) => {
  //   return getBase64(value.secure_url);
  // });

  // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  // for (let i = 0; i < imagesWithBlurDataUrls.length; i++) {
  //   reducedResults[i].color = imagesWithBlurDataUrls[i]?.hex;
  //   console.log("imagesWithBlurDataUrls[i]?.hex", reducedResults[i]?.color);
  // }
  return (
    <Section>
      <div className="container">
        {reducedResults.map((project, i) => (
          <ProjectLink project={project} key={i} />
        ))}
      </div>
    </Section>
  );
}
