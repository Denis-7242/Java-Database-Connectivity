// Add IDs to sections for TOC navigation
document.querySelectorAll(".content-section h2").forEach((heading, index) => {
  const id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
  heading.id = id;

  // Update TOC links
  const tocLinks = document.querySelectorAll(".toc a");
  if (tocLinks[index]) {
    tocLinks[index].href = `#${id}`;
  }
});

// Add smooth scrolling for TOC links
document.querySelectorAll(".toc a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 20,
      behavior: "smooth",
    });
  });
});
