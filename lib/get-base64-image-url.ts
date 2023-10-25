import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

export type ImageProps = {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
};

const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl(
  image: ImageProps,
): Promise<string> {
  console.log("image", image);
  let url = cache.get(image);
  if (url) {
    return url;
  }
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`,
  );
  const buffer = await response.arrayBuffer();
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  url = `data:image/jpeg;base64,${Buffer.from(minified).toString("base64")}`;
  cache.set(image, url);
  return url;
}
