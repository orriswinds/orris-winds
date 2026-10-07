document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Mark active nav link based on current path
  var links = document.querySelectorAll(".site-nav a");
  var path = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href) return;
    // Normalize index
    var linkName = href.split("/").pop();
    if (linkName === "") linkName = "index.html";
    if (linkName === path || (path === "" && linkName === "index.html")) {
      a.classList.add("active");
    }
  });
});
