import {
  Runtime,
  Inspector,
} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/1e8ca7864077a6c7.js?v=4";

new Runtime().module(define, (name) => {
  if (name === "chart3")
    return new Inspector(
      document.querySelector("#observablehq-chart3-56f76ebe")
    );
});
