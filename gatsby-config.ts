import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Micrometer`,
    siteUrl: `https://micrometer.io/`,
    description:
      "Application observability facade for the most popular observability tools. Think SLF4J, but for observability.",
    keywords: [
      "Micrometer",
      "Java",
      "Observability",
      "Metrics",
      "Distributed Tracing",
      "CloudWatch",
      "Datadog",
      "Dynatrace",
      "Elastic",
      "Influx",
      "New Relic",
      "OpenTelemetry",
      "Prometheus",
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
