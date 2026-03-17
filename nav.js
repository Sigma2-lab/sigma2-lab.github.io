(function () {
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");
  navToggle?.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  const activePage = document.body?.dataset?.page;
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.dataset.page === activePage) {
      link.classList.add("active");
    }
    link.addEventListener("click", () => siteNav.classList.remove("open"));
  });
})();
