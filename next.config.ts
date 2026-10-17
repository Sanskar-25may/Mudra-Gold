import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.aspx",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.aspx",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/services.aspx",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/Gallery.aspx",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/contact.aspx",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/testimonial.aspx",
        destination: "/testimonials",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
