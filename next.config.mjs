/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    // Set this to false if you want production builds to abort if there are type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there are lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  swcMinify: true,
  experimental: {
    mdxRs: true,
  },
};

export default config;
