// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const aboutSection = document.getElementById("about-section");

  if (isInViewport(aboutSection)) {
    aboutSection.classList.add("in-view");
  }
}

// Event listener for scroll event
window.addEventListener("scroll", handleScroll);
