import * as React from "react";
import { Link, HeadFC, PageProps, Script } from "gatsby";
import Layout from "../components/layout/Layout";

const browser = typeof window !== "undefined" && window;
const isRedirectingDocs: boolean =
  browser && window.location.pathname.split("/")[1] === "docs";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    browser && (
      <Layout className="home">
        <div className="container content markdown py-6">
          <h1 className="is-size-2">{isRedirectingDocs ? "Redirecting" : "Page not found"}</h1>
          <Script id="redirect-docs-script">
            {`
            // Single Page Apps for GitHub Pages
            // MIT License
            // https://github.com/rafgraph/spa-github-pages
            // This script takes the current url and converts the path and query
            // string into just a query string, and then redirects the browser
            // to the new url with only a query string and hash fragment,
            // e.g. https://www.foo.tld/one/two?a=b&c=d#qwe, becomes
            // https://www.foo.tld/?/one/two&a=b~and~c=d#qwe
            // Note: this 404.html file must be at least 512 bytes for it to work
            // with Internet Explorer (it is currently > 512 bytes)

            // If you're creating a Project Pages site and NOT using a custom domain,
            // then set pathSegmentsToKeep to 1 (enterprise users may need to set it to > 1).
            // This way the code will only replace the route part of the path, and not
            // the real directory in which the app resides, for example:
            // https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
            // https://username.github.io/repo-name/?/one/two&a=b~and~c=d#qwe
            // Otherwise, leave pathSegmentsToKeep as 0.
            var pathSegmentsToKeep = 1;

            var l = window.location;
            if (l.pathname.split('/')[1] === 'docs') {
              l.replace(
                l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
                l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
                l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
                (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
                l.hash
              );
            }
          `}
          </Script>
          {!isRedirectingDocs ? (
            <p className="pb-4">
              Sorry, we couldn’t find what you were looking for.
              <br />
              <Link to="/">Go to the homepage</Link>.
            </p>
          ) : null}
        </div>
      </Layout>
    )
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
