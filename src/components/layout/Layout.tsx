import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useSiteMetadata from "../utils/SiteMetadata";
import { ReactNode } from "react";
import "../../styles/main.scss";
import { Seo } from "../utils/Seo";

interface Seo {
  title?: string;
  description?: string;
  keywords?: Array<string>;
  image?: string;
  siteUrl?: string;
  hasNoSpring?: boolean;
}
interface Props {
  children: ReactNode;
  className?: string;
  seo?: any;
  hideNewsletter?: boolean;
}

const mergeMetadata = (generic: any, specific?: any): Seo => {
  const meta = { ...generic };
  if (!specific) {
    return meta;
  }
  if (specific?.title) {
    meta.title = specific.title;
  }
  if (specific?.description) {
    meta.description = specific?.description;
  }
  if (specific?.keywords && specific?.keywords?.length > 0) {
    meta.keywords = specific.keywords;
  }
  if (specific?.hasNoSpring) {
    meta.hasNoSpring = true;
  }
  return meta;
};

const Layout = ({ children, className, seo, hideNewsletter }: Props) => {
  const metadata = mergeMetadata(useSiteMetadata(), seo);
  return (
    <div>
      <a href="#main" className="skip-to-main-content">
        Skip to main content
      </a>
      <Seo metadata={metadata} />
      {/* <SpringOne /> */}
      <Header />
      <div className={`main ${className}`} id="main" role="main">
        {children}
      </div>
      <Footer hideNewsletter={hideNewsletter} />
    </div>
  );
};

export default Layout;
