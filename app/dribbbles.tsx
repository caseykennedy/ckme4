import { type ResourceApiResponse } from "cloudinary/types";

import Img from "~/components/img";
import cloudinary from "~/lib/cloudinary";
import getBase64 from "~/lib/get-local-base64";
import { cn } from "~/util";

type SearchResponse = {
  total_count: number;
  time: number;
  resources: {
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
  }[];
};

type ImageProps = {
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].color = imagesWithBlurDataUrls[i];
  }

  console.log("reducedResults", reducedResults);

  return (
    <div className="grid grid-cols-4 gap-1">
      {reducedResults.map((resource) => (
        <Img
          key={resource.asset_id}
          src={resource.secure_url}
          alt="alt"
          width={800}
          height={530}
          // placeholder="blur"
          // blurDataURL={resource.blurDataUrl}
          style={{
            backgroundColor: resource.color?.hex,
            width: "100%",
            height: "auto",
          }}
          color="#fff"
          className={cn(`object-cover object-top`)}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
        />
      ))}
    </div>
  );
}
