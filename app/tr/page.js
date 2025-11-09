"use client";

import { useEffect } from "react";
import CompareBlock from "../../components/CompareBlock";

const GSAP_CDN_SRC = "https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js";
const GSAP_SCRIPT_ATTR = "data-artan-gsap";

export default function PageTR() {
  useEffect(() => {
    let ctx;
    let cancelled = false;
    let trackedScript;
    let loadHandler;
    let errorHandler;

    const loadGSAP = () => {
      if (typeof window === "undefined") {
        return Promise.resolve(null);
      }

      if (window.gsap) {
        return Promise.resolve(window.gsap);
      }

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
        if (!gsapInstance || cancelled) {
          return;
        }

        ctx = gsapInstance.context(() => {
          gsapInstance.fromTo(
            ".velvet-bg",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1 }
          );

          gsapInstance.fromTo(
            ".hero-content",
            { y: 40, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              delay: 0.2,
            }
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
    <main>
      <section className="hero hero--light">
        <div className="velvet-bg" aria-hidden />

        <section className="hero-content">
          <h1 className="hero-title">
            İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.
          </h1>
          <p className="hero-tagline">Sanat sadece görülmez — hissedilir.</p>

          <div className="cta">
            <a className="btn" href="/tr/shop">
              Shop
            </a>
            <a className="btn" href="/tr/ai">
              AI Room Styler
            </a>
            <a className="btn" href="/tr/projects">
              Interior Projects
            </a>
          </div>
        </section>

        <div className="scroll-cue">
          <span>kaydır</span>
        </div>
      </section>

      <CompareBlock
        title="Artan farkını hissedin"
        leftLabel="Artan Gallery kadifesi"
        rightLabel="Sıradan döşemelik kumaşlar"
        leftText="El seçimi İtalyan dokumaları, zengin çift taramalı hav ve yıllarca canlı kalan ışıl ışıl bir renk skalası."
        rightText="Sığ havlı, hızla solan tonlara ve derinlik ile yumuşaklıktan yoksun seri üretim sentetikler."
      />
    </main>
  );
}
