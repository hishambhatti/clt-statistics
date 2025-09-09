import {
  Runtime,
  Inspector,
} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/80e03e3a06392320.js?v=4";
new Runtime().module(define, (name) => {
  if (name === "viewof p1")
    return new Inspector(
      document.querySelector("#observablehq-viewof-p1-ecc60331")
    );
  if (name === "viewof p2")
    return new Inspector(
      document.querySelector("#observablehq-viewof-p2-ecc60331")
    );
  if (name === "viewof p3")
    return new Inspector(
      document.querySelector("#observablehq-viewof-p3-ecc60331")
    );
  if (name === "viewof p4")
    return new Inspector(
      document.querySelector("#observablehq-viewof-p4-ecc60331")
    );
  if (name === "viewof p5")
    return new Inspector(
      document.querySelector("#observablehq-viewof-p5-ecc60331")
    );
  if (name === "viewof p6")
    return new Inspector(
      document.querySelector("#observablehq-viewof-p6-ecc60331")
    );
  if (name === "chart")
    return new Inspector(
      document.querySelector("#observablehq-chart-ecc60331")
    );
  if (name === "viewof sampleSize")
    return new Inspector(
      document.querySelector("#observablehq-viewof-sampleSize-ecc60331")
    );
  if (name === "viewof numSamples")
    return new Inspector(
      document.querySelector("#observablehq-viewof-numSamples-ecc60331")
    );
  if (name === "viewof play")
    return new Inspector(
      document.querySelector("#observablehq-viewof-play-ecc60331")
    );
  if (name === "viewof reset")
    return new Inspector(
      document.querySelector("#observablehq-viewof-reset-ecc60331")
    );
  if (name === "res")
    return new Inspector(document.querySelector("#observablehq-res-ecc60331"));
  return [
    "data",
    "storedSettings",
    "total",
    "normalizedData",
    "sampleAndUpdate",
  ].includes(name);
});
