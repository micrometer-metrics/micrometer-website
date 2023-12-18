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
                  Micrometer provides a facade for the most popular
                  observability systems, allowing you to instrument your
                  JVM-based application code without vendor lock-in. Think
                  SLF4J, but for observability.
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
              <img className="icon-img" src={`/img/icon-1.svg`} alt="" />
              <h1 className="h2-special">Integrated into Frameworks</h1>
              <p>
                Popular frameworks that integrate with Micrometer include <a
                href="https://helidon.io/docs/v2/#/se/metrics/02_micrometer">Helidon</a>, <a
                href="https://micronaut-projects.github.io/micronaut-micrometer/latest/guide/">Micronaut</a>, <a
                href="https://quarkus.io/guides/telemetry-micrometer">Quarkus</a>, and <a
                href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#actuator.observability">Spring</a>.
                You can use the idioms and configuration model native to your application framework to get started with
                Micrometer.
              </p>
            </article>
            <article className="column has-text-centered">
              <img className="icon-img" src={`/img/icon-2.svg`} alt=""/>
              <h1 className="h2-special">Instrumentation Provided</h1>
              <p>
                Out-of-the-box instrumentation is available in micrometer-core and in libraries. You do not need to
                write your own instrumentation for many common components.
              </p>
            </article>
            <article className="column has-text-centered">
              <img className="icon-img" src={`/img/icon-3.svg`} alt=""/>
              <h1 className="h2-special">Works in your Environment</h1>
              <p>
                Micrometer can directly publish to most backends for storing your observability data. You can use what
                you have or switch. Micrometer makes it easy. See below and the documentation for supported backends.
              </p>
            </article>
          </div>
          <div className="columns">
            <article className="column has-text-centered">
              <img className="icon-img" src={`/img/icon-3.svg`} alt=""/>
              <h1 className="h2-special">Dimensional Metrics</h1>
              <p>
                Vendor-neutral abstractions for timers, gauges, counters, distribution summaries, and long task timers
                are provided with a dimensional data model. You can publish to a backend that supports dimensional
                metrics for efficient access to named metrics where you can drill down across its dimensions.
              </p>
            </article>
            <article className="column has-text-centered">
              <img className="icon-img" src={`/img/icon-3.svg`} alt=""/>
              <h1 className="h2-special">Distributed Tracing</h1>
              <p>
                Micrometer Tracing is a facade over the Brave and OpenTelemetry tracers that gives insight into complex
                distributed systems at the level of an individual user request. Identify the root cause of issues faster
                with distributed tracing. Micrometer Tracing is the successor to the Spring Cloud Sleuth project.
              </p>
            </article>
            <article className="column has-text-centered">
              <img className="icon-img" src={`/img/icon-3.svg`} alt=""/>
              <h1 className="h2-special">Unified Observability</h1>
              <p>
                You can instrument with the Micrometer Observation API, a single abstraction that can produce metrics,
                tracing, logs and more. You can instrument once, get multiple benefits, and keep metadata consistent
                across your observability data.
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
            As an instrumentation facade, Micrometer lets you instrument your code with a vendor-neutral interface and
            decide on the observability system as a last step. Instrumenting a library with Micrometer lets it be used
            in applications that ship data to different backends or even multiple backends at the same time.
          </p>
          <p>
            Micrometer supports publishing metrics to <strong>AppOptics</strong>,{" "}
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
