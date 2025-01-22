import * as React from "react";
import Logo from "./Logo"
import Social from "./Social";

interface Props {
  hideNewsletter?: boolean;
}

const Footer = ({ hideNewsletter }: Props) => {
  return (
    <>
      <footer className="footer has-background-white">
        <div className="content has-text-left">
          <div className="container more">
            <div className="columns">
              <div className="column">
                <p><Logo /></p>
                <p className="has-text-grey6">
                  Copyright © 2005 - {new Date().getFullYear()} Broadcom. All Rights Reserved. The term “Broadcom” refers to Broadcom Inc. and/or its subsidiaries.{" "}
                  <a
                    href="https://www.broadcom.com/company/legal/terms-of-use"
                    className="footer-link"
                  >
                    Terms of Use
                  </a>{" "}
                  •{" "}
                  <a
                    href="https://www.broadcom.com/company/legal/privacy"
                    className="footer-link"
                  >
                    Privacy Policy
                  </a>{" "}
                  •{" "}
                  <a
                    href="/security-policy/"
                    className="footer-link"
                  >
                    Security Policy
                  </a>
                </p>
              </div>
              <div className="social-links column is-2">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
