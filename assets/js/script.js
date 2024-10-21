document.querySelectorAll(".scroll-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Get the target section's ID from the data-target attribute
    const target = document.querySelector(this.getAttribute("data-target"));

    // Use scrollIntoView to scroll to the section smoothly
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start", // Adjust to 'center' or 'end' based on your needs
      });
    }
  });
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // Get current scroll position
  const navbar = document.getElementsByClassName("nav_full")[0];
  const navbar1 = document.getElementsByClassName("nav_small")[0];

  const hrefs = document.getElementsByClassName("href");
  let top = navbar.offsetTop;
  // Check the scroll position and change color accordingly
  if (scrollPosition > top) {
    navbar.classList.add("sticky");
    navbar.classList.add("background-sticky");

    navbar1.classList.add("sticky");
    navbar1.classList.add("background-sticky");
    for (let i = 0; i < hrefs.length; i++) {
      hrefs[i].classList.add("black-font");
    }
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("background-sticky");

    navbar1.classList.remove("sticky");
    navbar1.classList.remove("background-sticky");
    for (let i = 0; i < hrefs.length; i++) {
      hrefs[i].classList.remove("black-font");
    }
  }
});

function toggle_ul() {
  const ul = document.getElementById("nav__ul_div");
  if (!ul.classList.contains("toggled")) {
    ul.classList.add("toggled");
  } else {
    ul.classList.remove("toggled");
  }
}