const themeToggle = document.querySelector("#theme-toggle");
const sunIcon = themeToggle.querySelector('[data-theme-icon="sun"]');
const moonIcon = themeToggle.querySelector('[data-theme-icon="moon"]');
const root = document.documentElement;
const savedTheme = localStorage.getItem("portfolio-theme");

function applyTheme(theme) {
  const isDark = theme === "dark";
  if (isDark) {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = "light";
  }

  sunIcon.toggleAttribute("hidden", !isDark);
  moonIcon.toggleAttribute("hidden", isDark);
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

applyTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  const theme = root.dataset.theme === "light" ? "dark" : "light";
  applyTheme(theme);
  localStorage.setItem("portfolio-theme", theme);
});

const imageViewer = document.querySelector("#image-viewer");
const viewerImage = imageViewer.querySelector(".image-viewer__image");
const viewerCaption = imageViewer.querySelector("figcaption");

document.querySelectorAll(".screenshot-button").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const caption = button.closest("figure").querySelector("figcaption");

    viewerImage.src = image.currentSrc || image.src;
    viewerImage.alt = image.alt;
    viewerCaption.textContent = caption.textContent;
    imageViewer.showModal();
  });
});

imageViewer.addEventListener("click", (event) => {
  if (event.target === imageViewer) {
    imageViewer.close();
  }
});

imageViewer.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    imageViewer.close();
  }
});
