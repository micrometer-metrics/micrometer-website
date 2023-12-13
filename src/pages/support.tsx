import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/main.scss";
import Layout from "../components/layout/Layout";
import { Releases } from "../components/support/Release";
import { getVersions } from "../components/support/Project";
import releases from "../../static/releases.json";


const SupportPage: React.FC<PageProps> = () => {
  const support = getVersions(releases);

  return (
    <Layout className="support">
      <div className="container content py-6">
        <h1>Micrometer Support Policy</h1>
        <p>
          Micrometer's open source support policy is defined as follows for
          different types of releases. Release versions follow a
          MAJOR.MINOR.PATCH convention, as defined in{" "}
          <a href="https://semver.org/">semantic versioning</a>.
        </p>
        <ul>
          <li>
            <strong>Major release lines</strong> (such as 1.x or 2.x) are
            supported with patch releases for a minimum of 3 years from the date
            the major release (such as 1.0.0 or 2.0.0) was made available for
            download.
          </li>
          <li>
            <strong>Minor release lines</strong> (such as 1.1.x or 1.2.x) are
            supported with patch releases for a minimum of 12 months from the
            date the minor release (such as 1.1.0 or 1.2.0) was made available
            for download.
          </li>
          <li>
            Any confirmed security vulnerabilities on supported release lines
            should result in a patch release to Maven Central.
          </li>
        </ul>
        <p>
          Commercial support that extends beyond the OSS support period
          described on this page is{" "}
          <a href="https://tanzu.vmware.com/spring-runtime">
            available from VMware
          </a>
          .
        </p>
        <p>
          We generally plan to release a new major or minor version every 6
          months (in May and November).
        </p>

        <h2>Released versions</h2>
        <p>The following releases are actively maintained:</p>
        <table className="table is-bordered">
          <caption>Supported minor releases</caption>
          <thead>
            <tr>
              <th>Minor release</th>
              <th>OSS Support Until</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.12.x</td>
              <td>November 2024</td>
            </tr>
            <tr>
              <td>1.11.x</td>
              <td>May 2024</td>
            </tr>
          </tbody>
        </table>

        <div className="calendar-releases">
          <div className="timeline">
            <Releases releases={support} />
          </div>
        </div>

        <p>The following releases are out of OSS support:</p>
        <table className="table is-bordered">
          <caption>Out of OSS support minor releases</caption>
          <thead>
            <tr>
              <th>Minor release</th>
              <th>Final patch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.10.x</td>
              <td>
                <code>1.10.13</code>
              </td>
            </tr>
            <tr>
              <td>1.9.x</td>
              <td>
                <code>1.9.17</code>
              </td>
            </tr>
            <tr>
              <td>1.8.x</td>
              <td>
                <code>1.8.13</code>
              </td>
            </tr>
            <tr>
              <td>1.7.x</td>
              <td>
                <code>1.7.12</code>
              </td>
            </tr>
            <tr>
              <td>1.6.x</td>
              <td>
                <code>1.6.13</code>
              </td>
            </tr>
            <tr>
              <td>1.5.x</td>
              <td>
                <code>1.5.17</code>
              </td>
            </tr>
            <tr>
              <td>1.4.x</td>
              <td>
                <code>1.4.2</code>
              </td>
            </tr>
            <tr>
              <td>1.3.x</td>
              <td>
                <code>1.3.20</code>
              </td>
            </tr>
            <tr>
              <td>1.2.x</td>
              <td>
                <code>1.2.2</code>
              </td>
            </tr>
            <tr>
              <td>1.1.x</td>
              <td>
                <code>1.1.19</code>
              </td>
            </tr>
            <tr>
              <td>1.0.x</td>
              <td>
                <code>1.0.11</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Examples</h2>
        <p>
          The following examples demonstrate how the support policy applies:
        </p>
        <ul>
          <li>
            Micrometer 1.0.0 was released in February 2018. At a minimum,
            support for the 1.x line extends through February 2021 (Major
            Releases statement). Practically, the Micrometer 1.x line is
            supported for at least as long as Spring Boot 2.x and major versions
            of other dependent web frameworks are supported.
          </li>
          <li>
            Micrometer 1.1.0 was released in October 2018, minimally extending
            support through October 2019 (Minor Releases statement).
            Practically, the Micrometer 1.1.x line is supported for at least as
            long as the Spring Boot 2.1.x line is supported.
          </li>

          <li>
            If Micrometer 1.2.x were to be released, support for the 1.x line
            would be extended another 12 months from the 1.2.x release date.
          </li>

          <li>
            Patch releases, such as Micrometer 1.0.7, do not increase the
            support obligations for the 1.0.x release line.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default SupportPage;

export const Head: HeadFC = () => (
  <title>Micrometer Application Observability</title>
);
