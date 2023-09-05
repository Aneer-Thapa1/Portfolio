function scrollToElement(elementSelector, instance = 0) {
  // select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
    // scroll to the specified instance of the element
    elements[instance].scrollIntoView({ behavior: "smooth" }); // It's "behavior", not "behaviour"
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  link1.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToElement(".header");
  });

  link2.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToElement(".header", 1);
  });

  link3.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToElement(".column");
  });
});
