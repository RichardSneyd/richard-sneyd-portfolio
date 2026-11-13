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
