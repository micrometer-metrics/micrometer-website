import * as React from "react";
import {
  faSlack,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <>
      <a
        aria-label="Slack"
        href="https://slack.micrometer.io/"
        className="button is-black is-rounded"
      >
        <FontAwesomeIcon icon={faSlack} />
      </a>
      <a
        aria-label="Github"
        href="https://github.com/micrometer-metrics/micrometer"
        className="button is-black is-rounded"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        aria-label="Twitter"
        href="https://twitter.com/micrometerio"
        className="button is-black is-rounded"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
    </>
  );
};

export default Social;
