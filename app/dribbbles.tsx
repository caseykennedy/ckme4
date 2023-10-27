import { type ResourceApiResponse } from "cloudinary/types";

import Drib from "~/components/drib";
import Img from "~/components/img";
import cloudinary from "~/lib/cloudinary";
import getBase64 from "~/lib/get-local-base64";
import { cn } from "~/util";
import { staggerChild, staggerContainer } from "~/util/variants";

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
  color: {
    hex: string;
  };
};

export type SearchResponse = ResourceShape & {
  total_count: number;
  time: number;
  resources: ResourceShape[];
};

export type ImageProps = {
  id: number;
  asset_id: string;
  secure_url: string;
  blurDataUrl?: string;
  color?: {
    r: number;
    g: number;
    b: number;
    hex: string;
  };
};

export default async function Dribbbles() {
  const { resources }: SearchResponse = await cloudinary.v2.search
    .expression(`folder:${process.env.CDN_FOLDER}`)
    .sort_by("public_id", "asc")
    .max_results(400)
    .execute();
  const reducedResults: ImageProps[] = [];

  let i = 0;
  for (const result of resources) {
    reducedResults.push({
      id: i,
      asset_id: result.asset_id,
      secure_url: result.secure_url,
    });
    i++;
  }

  const blurImagePromises = resources.map((value: { secure_url: string }) => {
    return getBase64(value.secure_url);
  });

  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (
    let i = 0;
    i < reducedResults.length && i < imagesWithBlurDataUrls.length;
    i++
  ) {
    reducedResults[i].color = imagesWithBlurDataUrls[i];
  }

  console.log("reducedResults", reducedResults);

  return (
    <div className="grid grid-cols-4 gap-1">
      {reducedResults.map((resource) => (
        <Drib resource={resource} key={resource.asset_id} />
      ))}
    </div>
  );
}
