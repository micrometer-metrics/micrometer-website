import React from "react";
import { Helmet } from "react-helmet";
import { Location } from "@reach/router";

interface ImageProps {
  image?: string;
}

const ImageSeo = ({ image }: ImageProps) => (
  <Helmet>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="523" />
  </Helmet>
);

interface Props {
  metadata: {
    hasNoSpring?: boolean;
    title?: string;
    description?: string;
    keywords?: Array<string>;
    siteUrl?: string;
    image?: string;
  };
}

export const Seo = ({ metadata }: Props) => {
  return (
    <Location>
      {({ location }) => {
        const pageUrl = `${metadata.siteUrl}${location.pathname}`;
        return (
          <>
            <Helmet>
              <html lang="en" />
              <title>{metadata.title}</title>
              <html lang="en" className="f-dataflow" />
              <meta name="description" content={metadata.description} />
              <link rel="canonical" href={pageUrl} />
              <meta property="og:site_name" content={metadata.title} />
              <meta name="og:type" content="article" />
              <meta name="og:title" content={metadata.title} />
              <meta name="og:description" content={metadata.description} />
              <meta property="og:url" content={pageUrl} />
              {metadata.keywords && metadata.keywords.length
                ? metadata.keywords.map((keyword, i) => (
                    <meta property="article:tag" content={keyword} key={i} />
                  ))
                : null}
              <meta name="twitter:title" content={metadata.title} />
              <meta name="twitter:description" content={metadata.description} />
              <meta name="twitter:url" content={pageUrl} />
              <meta name="twitter:site" content="@micrometerio" />
              <meta name="twitter:creator" content="@micrometerio" />
            </Helmet>
            <ImageSeo image={metadata.image} />
          </>
        );
      }}
    </Location>
  );
};
