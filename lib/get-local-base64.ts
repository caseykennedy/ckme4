import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64, color } = await getPlaiceholder(Buffer.from(buffer));

    // console.log(`base64:`, base64);

    // console.log(`color:`, color);

    return color;

    // return imageUrl;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
