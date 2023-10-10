import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/main.scss";
import Layout from "../components/layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout className="home">
      <div className="banner">
        <section className="container">
          <div className="content markdown py-6">
            <div className="py-5 my-5 has-text-centered">
              <img className="logo mb-4" src="/img/logo-no-title.svg" alt="" />
              <div className="banner-content">
                <h1 className="m-0 py-0 is-size-2">
                  Vendor-neutral application observability facade
                </h1>
                <p className="m-0 pt-2 is-size-5">
                  Micrometer provides a simple facade over the instrumentation
                  clients for the most popular observability systems, allowing
                  you to instrument your JVM-based application code without
                  vendor lock-in. Think SLF4J, but for observability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="has-background-light py-6">
        <div className="container content markdown py-4">
          <div className="columns">
            <article className="column has-text-centered">
              <img className="icon-img" src={`/img/icon-3.svg`} alt="" />
              <h1 className="h2-special">Dimensional Metrics</h1>
              <p>
                Micrometer provides vendor-neutral interfaces for{" "}
                <strong>timers</strong>, <strong>gauges</strong>,{" "}
                <strong>counters</strong>,{" "}
                <strong>distribution summaries</strong>, and{" "}
                <strong>long task timers</strong> with a dimensional data model
                that, when paired with a dimensional monitoring system, allows
                for efficient access to a particular named metric with the
                ability to drill down across its dimensions.
              </p>
            </article>
            <article className="column has-text-centered">
              <img className="icon-img" src={`/img/icon-2.svg`} alt="" />
              <h1 className="h2-special">Pre-configured Bindings</h1>
              <p>
                Out-of-the-box instrumentation of caches, the class loader,
                garbage collection, processor utilization, thread pools, and
                more tailored to actionable insight.
              </p>
            </article>
            <article className="column has-text-centered">
              <img className="icon-img" src={`/img/icon-1.svg`} alt="" />
              <h1 className="h2-special">Integrated into Spring</h1>
              <p>
                Micrometer is the instrumentation library powering the delivery
                of application observability from Spring Boot applications.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="container content markdown py-6">
        <div className="px-6 sm-no-padding">
          <h2 className="is-size-2">
            Support for popular observability systems
          </h2>
          <p>
            As an instrumentation facade, Micrometer allows you to instrument
            your code with dimensional metrics, spans with a vendor-neutral
            interface and decide on the observability system as a last step.
            Instrumenting your core library code with Micrometer allows the
            libraries to be included in applications that ship data to different
            backends.
          </p>
          <p>
            Contains built-in support for <strong>AppOptics</strong>,{" "}
            <strong>Azure Monitor</strong>, Netflix <strong>Atlas</strong>,{" "}
            <strong>CloudWatch</strong>, <strong>Datadog</strong>,{" "}
            <strong>Dynatrace</strong>, <strong>Elastic</strong>,{" "}
            <strong>Ganglia</strong>, <strong>Graphite</strong>,{" "}
            <strong>Humio</strong>, <strong>Influx/Telegraf</strong>,{" "}
            <strong>JMX</strong>, <strong>KairosDB</strong>,{" "}
            <strong>New Relic</strong>, <strong>OpenTelemetry</strong> Protocol
            (OTLP), <strong>Prometheus</strong>, <strong>SignalFx</strong>,
            Google <strong>Stackdriver</strong>, <strong>StatsD</strong>, and{" "}
            <strong>Wavefront</strong>.
          </p>
          <p>
            Through <strong>Micrometer Observation</strong> and{" "}
            <strong>Micrometer Tracing</strong> you can ship your spans via{" "}
            <strong>OpenZipkin Brave</strong> or <strong>OpenTelemetry</strong>{" "}
            tracers to different backends (e.g. <strong>OpenZipkin</strong> or{" "}
            <strong>Wavefront</strong>).
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Micrometer Application Observability</title>
);
