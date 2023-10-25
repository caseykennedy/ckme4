import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CDN_CLOUD_NAME,
  api_key: process.env.CDN_API_KEY,
  api_secret: process.env.CDN_API_SECRET,
  secure: true,
});

export default cloudinary;
