"use client";

import { useEffect } from "react";
import CompareBlock from "../../components/CompareBlock";

const GSAP_CDN_SRC = "https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js";
const GSAP_SCRIPT_ATTR = "data-artan-gsap";

const heroCtas = [
  { href: "/en/shop", label: "Explore the shop" },
  { href: "/en/ai", label: "AI design studio" },
  { href: "/en/projects", label: "View projects" },
];

export default function PageEN() {
  useEffect(() => {
    let ctx;
    let cancelled = false;
    let trackedScript;
    let loadHandler;
    let errorHandler;

    const loadGSAP = () => {
      if (typeof window === "undefined") return Promise.resolve(null);
      if (window.gsap) return Promise.resolve(window.gsap);

      const scriptEl =
        document.querySelector(`script[${GSAP_SCRIPT_ATTR}="true"]`) ??
        document.createElement("script");

      const needsAppend = !scriptEl.hasAttribute(GSAP_SCRIPT_ATTR);
      trackedScript = scriptEl;

      if (scriptEl.getAttribute("data-loaded") === "true") {
        return Promise.resolve(window.gsap ?? null);
      }

      return new Promise((resolve, reject) => {
        loadHandler = () => {
          scriptEl.removeEventListener("load", loadHandler);
          scriptEl.removeEventListener("error", errorHandler);
          scriptEl.setAttribute("data-loaded", "true");
          resolve(window.gsap ?? null);
        };

        errorHandler = (error) => {
          scriptEl.removeEventListener("load", loadHandler);
          scriptEl.removeEventListener("error", errorHandler);
          reject(error);
        };

        scriptEl.addEventListener("load", loadHandler);
        scriptEl.addEventListener("error", errorHandler);

        if (needsAppend) {
          scriptEl.src = GSAP_CDN_SRC;
          scriptEl.async = true;
          scriptEl.setAttribute(GSAP_SCRIPT_ATTR, "true");
          document.head.appendChild(scriptEl);
        }
      });
    };

    loadGSAP()
      .then((gsapInstance) => {
        if (!gsapInstance || cancelled) return;

        ctx = gsapInstance.context(() => {
          gsapInstance.fromTo(
            ".velvet-bg",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1 }
          );
          gsapInstance.fromTo(
            ".hero-content",
            { y: 40, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1, ease: "power2.out", delay: 0.2 }
          );
        });
      })
      .catch((error) => {
        console.error("Failed to load GSAP", error);
      });

    return () => {
      cancelled = true;
      ctx?.revert();
      if (trackedScript && loadHandler) {
        trackedScript.removeEventListener("load", loadHandler);
      }
      if (trackedScript && errorHandler) {
        trackedScript.removeEventListener("error", errorHandler);
      }
    };
  }, []);

  return (
    <>
      <section className="hero hero--light">
        <div className="velvet-bg" aria-hidden />

        <div className="hero-content">
          <p className="hero-eyebrow">Artan Gallery</p>
          <h1 className="hero-title">
            Italian velvet — for the first time in Türkiye by Artan Gallery.
          </h1>
          <p className="hero-tagline">Art is not just seen — it’s felt.</p>

          <div className="button-row" role="group" aria-label="Primary calls to action">
            {heroCtas.map((cta) => (
              <a key={cta.href} className="pill-button" href={cta.href}>
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <div className="scroll-cue">
          <span>scroll</span>
        </div>
      </section>

      <CompareBlock
        title="Feel the Artan difference"
        titleId="en-compare-title"
        description="Our atelier curates Italian velvet with luminous pile depth, delivering a tactile encounter far beyond conventional fabrics."
        leftLabel="Artan Gallery velvet"
        rightLabel="Ordinary upholstery fabrics"
        leftText="Hand-selected Italian mills, rich double-combed pile and a luminous colour range engineered to stay vibrant for years."
        rightText="Mass-produced synthetics with a shallow nap, quick fading tones and little sense of depth or softness."
      />
    </>
  );
}
