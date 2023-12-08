import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/main.scss";
import Layout from "../components/layout/Layout";

const SecurityPolicyPage: React.FC<PageProps> = () => {
  return (
    <Layout className="security-policy">
      <div className="container content py-6">
        <h1>Security Policy</h1>
        <h2 id="how-to-report">How to Report Potential Security Vulnerabilities</h2>
        <p>
          Any potential security vulnerabilities should be reported through
          the <a href="https://github.com/micrometer-metrics/security-advisories/security/advisories/new">Security Advisories</a> page.
        </p>
        <p>
          The Micrometer team needs to receive reports of potential security vulnerabilities through GitHub’s ability
          to <a href="https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability">privately report a security vulnerability</a>.
          To simplify the process, the <a href="https://github.com/micrometer-metrics/security-advisories">micrometer-metrics/security-advisories</a> repository
          is used to report potential vulnerabilities for any project within the Micrometer org.
        </p>

        <h2>Viewing Security Vulnerabilities</h2>
        <p>
          All security vulnerabilities are posted to <a href="https://github.com/micrometer-metrics/security-advisories">micrometer-metrics/security-advisories</a>.
        </p>

        <h2>Guidelines for Reporting a Vulnerability</h2>
        <p>
          If you believe you have found a security vulnerability, please report it as described
          in <a href="#how-to-report">How to Report Potential Security Vulnerabilities</a>.
          Below, you can see examples of <a href="#examples-of-non-vulnerabilities">non-vulnerabilities</a>.
        </p>
        <h3 id="examples-of-non-vulnerabilities">Examples of Non-vulnerabilities</h3>
        <h4>Vulnerabilities in Dependencies</h4>
        <p>
          Vulnerabilities in Micrometer’s dependencies should be reported to the respective project and not to
          the Micrometer team.
        </p>
        <h4>Vulnerable Dependency Versions</h4>
        <p>
          The Micrometer team does its best to keep its dependencies up to date regardless of whether a
          dependency contains a vulnerability. However, we do not consider it a vulnerability in Micrometer
          when Micrometer defines a vulnerable dependency version, because developers can override these
          versions and because releasing for any transitive dependency would become unmanageable for Micrometer.
        </p>
        <p>
          It is up to the developer of the dependency to release a compatible version with the security
          fix. If this is made available, Micrometer will be updated to that dependency version
          prior to releasing the next version of Micrometer.
        </p>
        <p>
          Typically, there is not a special release for updating dependency versions. Instead, the Micrometer
          team encourages developers to override the version until the next Micrometer release.
        </p>
      </div>
    </Layout>
  );
};

export default SecurityPolicyPage;

export const Head: HeadFC = () => (
  <title>Micrometer Application Observability</title>
);
