const root = document.documentElement;
const toggle = document.getElementById("dark-light-theme-button");

toggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
}