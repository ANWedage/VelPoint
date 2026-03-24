"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Props {
  extraScripts?: string[];
}

const BASE_SCRIPTS = ["/js/vendors.js", "/js/designesia.js"];
const ALWAYS_SCRIPTS = ["/js/countdown-custom.js", "/js/custom-marquee.js"];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    // Remove old instance so jQuery plugins re-run cleanly
    const existing = document.querySelector(`script[data-src="${src}"]`);
    if (existing) existing.remove();

    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.setAttribute("data-src", src);
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

export default function ScriptInitializer({ extraScripts = [] }: Props) {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    // Handle AbortError from video playback (browser pauses video-only media for power saving)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      // Catch any AbortError related to video playback
      if (reason?.name === "AbortError" || 
          (reason instanceof DOMException && reason.name === "AbortError" && reason.message?.includes("play()"))) {
        event.preventDefault(); // Suppress the error
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    return () => window.removeEventListener("unhandledrejection", handleUnhandledRejection);
  }, []);

  useEffect(() => {
    // Always re-run on pathname change (SPA navigation)
    initialized.current = false;

    const allScripts = [...BASE_SCRIPTS, ...ALWAYS_SCRIPTS, ...extraScripts];

    const run = async () => {
      // Vendor scripts only need to load once (they define jQuery etc.)
      const vendorLoaded = !!document.querySelector('script[data-src="/js/vendors.js"]');

      if (!vendorLoaded) {
        // First load: load everything sequentially
        for (const src of allScripts) {
          await loadScript(src);
        }
      } else {
        // Re-navigation: reload only the page-specific init scripts
        const reinit = ["/js/designesia.js", ...ALWAYS_SCRIPTS, ...extraScripts];
        for (const src of reinit) {
          await loadScript(src);
        }
      }
      
      // Ensure preloader is hidden after scripts load
      // (in case window.load event already fired before designesia.js registered its handler)
      setTimeout(() => {
        const loader = document.getElementById("de-loader");
        if (loader) {
          loader.style.display = "none";
        }
      }, 100);

      // Ensure background videos autoplay and play continuously
      setTimeout(() => {
        const videos = document.querySelectorAll("video");
        videos.forEach((video) => {
          // Force autoplay attributes for background video elements
          video.autoplay = true;
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          
          // Attempt to play immediately
          video.play()?.catch(() => {
            // Silently ignore errors
          });
        });
      }, 500);
      
      initialized.current = true;
    };

    // Small delay so DOM is fully rendered before plugins query it
    const timer = setTimeout(run, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
