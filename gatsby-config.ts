import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Micrometer`,
    siteUrl: `https://micrometer.io/`,
    description:
      "Level up your Java code and explore what Spring can do for you.",
    keywords: [
      `spring`,
      `java`,
      `cloud`,
      `boot`,
      `microservices`,
      `web applications`,
      `serverless`,
      `batch`,
      `event driven`,
      `reactive`,
    ],
    image: `https://micrometer.io/img/og-micrometer.png`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
