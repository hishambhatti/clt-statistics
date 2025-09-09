function displayContent(brand) {
  let content = [];
  if (!brand || typeof brand !== "string") {
    brand = "default";
  }
  switch (brand) {
    case "Normal":
      content = [
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/popuniform.png",
          text: "This is the continuous uniform distribution from -5 to 5. It has Mean 0 and Variance 8.33",
        },
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/normal2.png",
          text: "This is our standard model of the CLT. For a population distribution of finite variance, taking i.i.d. samples with a sufficiently high sample size converges to a normal distribution.",
        },
      ];
      break;
    case "No i.i.d":
      content = [
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/popuniform.png",
          text: "This is the continuous uniform distribution from -5 to 5. It has Mean 0 and Variance 8.33",
        },
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/correlated.png",
          text: "To break independence, we introduced 95% correlation, where the result of a new sample was 95% weighted based on the result of the previous sample. As such, subsequent samples are heavily dependent on the first sample, resulting in a left-skewed distribution.",
        },
      ];
      break;
    case "Small Sample Size":
      content = [
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/popuniform.png",
          text: "This is the continuous uniform distribution from -5 to 5. It has Mean 0 and Variance 8.33",
        },
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/smallsample.png",
          text: "For a sample size of 3, each sample has a significant contribution to the sample mean, resulting in values that are too granular. This is reflected in the distribution, where rather than smoothly narrowing outside of the mean, our distribution appears highly discretized.",
        },
      ];
      break;
    case "Variance":
      content = [
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/cauchy.png",
          text: "The Cauchy distribution is the canonical example of a distribution with infinite variance. It resembles the normal distribution, but the bell is too narrow and the tails are too thick.",
        },
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/cacuhysample.png",
          text: "As such, the sample means are highly varied. We have a high concentration of sample means close to 0, but many outliers far from the mean.",
        },
      ];
      break;
    default:
      console.log("Default case triggered");
      content = [
        {
          image:
            "https://homes.cs.washington.edu/~jhua04/vis2images/popuniform.png",
          text: "This is the continuous uniform distribution from -5 to 5. It has Mean 0 and Variance 8.33",
        },
      ];
      break;
  }
  // Update the display area with the images and text
  const displayArea = document.getElementById("displayArea");
  if (content.length > 0) {
    displayArea.innerHTML = content
      .map(
        (item) => `
                  <div class="image-container">
                      <img src="${item.image}" alt="${brand} Image">
                      <p>${item.text}</p>
                  </div>
              `
      )
      .join("");
  } else {
    displayArea.innerHTML = "Please click a button to see the content.";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  displayContent("Hi"); // Automatically display Normal case
});
