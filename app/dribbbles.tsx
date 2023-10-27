import Drib from "~/components/drib";
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

export type ImageShape = {
  id: number;
  asset_id: string;
  secure_url: string;
  color: string;
};

export default async function Dribbbles() {
  const { resources }: SearchResponse = await cloudinary.v2.search
    .expression(`folder:${process.env.CDN_FOLDER}`)
    .sort_by("public_id", "asc")
    .max_results(400)
    .execute();

  const reducedResults: ImageShape[] = [];

  let i = 0;
  for (const result of resources) {
    reducedResults.push({
      id: i,
      asset_id: result.asset_id,
      secure_url: result.secure_url,
      color: "",
    });
    i++;
  }

  const blurImagePromises = resources.map((value: { secure_url: string }) => {
    return getBase64(value.secure_url);
  });

  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < imagesWithBlurDataUrls.length; i++) {
    // reducedResults[i].color = imagesWithBlurDataUrls[i]?.hex;
    // console.log("imagesWithBlurDataUrls[i]?.hex", reducedResults[i]?.color);
  }

  // console.log("reducedResults", reducedResults);

  return (
    <div className="grid grid-cols-4 gap-1">
      {reducedResults.map((resource) => (
        <Drib resource={resource} key={resource.asset_id} />
      ))}
    </div>
  );
}
