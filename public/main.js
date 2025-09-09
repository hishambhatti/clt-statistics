window.MathJax = {
  tex: {
    inlineMath: [["$", "$"]],
  },
  svg: {
    fontCache: "global",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
});
