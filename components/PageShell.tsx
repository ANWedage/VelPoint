"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScriptInitializer from "./ScriptInitializer";

interface Props {
  extraScripts?: string[];
  children: React.ReactNode;
}

export default function PageShell({
  extraScripts = [],
  children,
}: Props) {
  return (
    <>
      <div id="wrapper">
        <div className="float-text show-on-scroll">
          <span><a href="#">Scroll to top</a></span>
        </div>
        <div className="scrollbar-v show-on-scroll"></div>

        {/* preloader */}
        <div id="de-loader"></div>

        <Navbar />

        {children}

        <Footer />
      </div>

      <ScriptInitializer extraScripts={extraScripts} />
    </>
  );
}
