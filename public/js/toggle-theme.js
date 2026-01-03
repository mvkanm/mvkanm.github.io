const root = document.documentElement;
const toggles = document.querySelectorAll(".theme-toggle");

// click handling
toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    root.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      root.classList.contains("dark") ? "dark" : "light"
    );
  });
});

// persist theme on reload
if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
}
if (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.classList.add("dark");
}