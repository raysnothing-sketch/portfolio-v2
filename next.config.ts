import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* Cache Components hangs on the Workers runtime (Next 16 + OpenNext);
     the app still streams through regular Suspense boundaries. */
  cacheComponents: false,
  partialPrefetching: false,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
