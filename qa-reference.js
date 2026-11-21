/*
 * QA-only comparison overlay for Bella's Park reconstruction.
 * This file is loaded by index.html but does nothing unless the URL contains
 * ?reference=1. It is never part of the normal root experience:
 *  - no overlay element is created by default
 *  - the overlay is pointer-events:none and cannot affect the scene
 *  - the Foxora poster is used ONLY here as a visual comparison target
 */
(function () {
  if (!/[?&]reference=1(?:&|$)/.test(window.location.search)) return;

  var img = document.createElement("img");
  img.src =
    "https://showcase.foxora.studio/thumbnails/curated-threejs-bellas-park.webp";
  img.alt = "QA reference overlay";
  Object.assign(img.style, {
    position: "fixed",
    inset: "0",
    width: "100vw",
    height: "100vh",
    objectFit: "fill",
    opacity: "0.5",
    pointerEvents: "none",
    zIndex: "2147483647",
  });

  var tag = document.createElement("div");
  tag.textContent = "QA REFERENCE OVERLAY — not part of the site";
  Object.assign(tag.style, {
    position: "fixed",
    top: "0",
    left: "0",
    background: "#000",
    color: "#fff",
    font: "12px monospace",
    padding: "4px 8px",
    pointerEvents: "none",
    zIndex: "2147483647",
  });

  document.body.appendChild(img);
  document.body.appendChild(tag);
})();
