import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/main.scss";
import Layout from "../components/layout/Layout";
import { Releases } from "../components/support/Release";
import { getVersions } from "../components/support/Project";
import releases from "../../static/releases.json";
import { DateTime } from "luxon"

const isPast = (date: DateTime): boolean => date < DateTime.now()

const Item = ({ version }: any) => {
  return (
    <tr>
      <td>
        <span className={`status mr-3 ${version.status}`}></span>
        {version.branch}
      </td>
      <td className={`${isPast(version.initialRelease) ? "past" : ""}`}>
        {version.initialReleaseDate}
      </td>
      <td className={`${isPast(version.endOfSupport) ? "past" : ""}`}>
        {version.endOfSupportDate}
      </td>
      <td className={`${isPast(version.endCommercialSupport) ? "past" : ""}`}>
        {version.endCommercialSupportDate}
      </td>
    </tr>
  );
};

interface SupportedProjectProps {
  name: string;
  releases: Array<any>;
}

const SupportedProject = ({ name, releases }: SupportedProjectProps) => {
  const id = name.toLowerCase().replaceAll(' ', '-');
  return (
    <div id={id}>
      <h1>{name} Support</h1>
      <table
        className="table project-support is-fullwidth mt-4 mb-0"
        aria-label={`${name} Support`}
      >
        <thead>
        <tr>
          <th>Branch</th>
          <th>Initial Release</th>
          <th>End of Support</th>
          <th>End Enterprise Support *</th>
        </tr>
        </thead>
        <tbody>
        {releases.map((version: any, index: number) => (
          <Item version={version} key={`item-${index}`}/>
        ))}
        </tbody>
      </table>

      <div className="calendar-releases mt-6">
        <div id={`${id}-timeline`} className="timeline" aria-label={`${name} Timeline`}>
          <Releases releases={releases}/>
        </div>
      </div>
    </div>
  );
};

const SupportPage: React.FC<PageProps> = () => {
  const micrometerReleases = getVersions(releases.micrometer);
  const micrometerTracingReleases = getVersions(releases.micrometerTracing);
  const contextPropagationReleases = getVersions(releases.contextPropagation);
  return (
    <Layout className="support">
      <div className="container content py-6">
        <SupportedProject name="Micrometer" releases={micrometerReleases} />
        <SupportedProject name="Micrometer Tracing" releases={micrometerTracingReleases} />
        <SupportedProject name="Context Propagation" releases={contextPropagationReleases} />

        <div className="release-legend has-bigest-border-light px-6 py-4 mb-6">
          <div className="legend-block oss my-3">
            <h3 className="is-size-6 has-text-weight-bold">OSS support</h3>
            <p>
              Free security updates and bugfixes with support from the Micrometer
              community. See{" "}
              <a href="https://tanzu.vmware.com/support/oss">
                VMware Tanzu OSS support policy
              </a>
              .
            </p>
          </div>

          <div className="legend-block commercial my-3">
            <h3 className="is-size-6 has-text-weight-bold">
              Enterprise support
            </h3>
            <p>
              Enterprise support from Micrometer experts during the OSS timeline, plus
              extended support after OSS End-Of-Life.
              <br/>
              See <a href="https://spring.io/support">
              Tanzu Spring Runtime
            </a>{" "}
              for more details.
            </p>
          </div>
          <div className="legend-block future my-3">
            <h3 className="is-size-6 has-text-weight-bold">Future release</h3>
            <p>Generation not yet released, timeline is subject to changes.</p>
          </div>
        </div>

        <p>Older release lines not included in the above table or chart are already end of life.</p>

        <div className="has-background-light has-text-centered p-6 mb-6 commercial-support">
          <h2 className="is-size-4 has-text-weight-bold mb-3">
            About enterprise support (*)
          </h2>
          <div>
            This page shows the current state of project releases and does not
            define the enterprise support policy. Please refer to the official
            support policy for more information.
          </div>
          <div className="mt-3">
            <a
              className="button is-spring"
              href="https://tanzu.vmware.com/spring-runtime"
            >
              Learn more <span className="is-hidden-mobile">about enterprise support.</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;

export const Head: HeadFC = () => (
  <title>Micrometer Application Observability</title>
);
