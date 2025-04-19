// Utility: Toggle visibility between sections
function toggleViews(hideEl, showEl) {
  const hideView = document.querySelector(hideEl);
  const showView = document.querySelector(showEl);

  if (!hideView || !showView) {
    console.error("One or both elements not found:", hideEl, showEl);
    return;
  }

  hideView.classList.add("visually-hidden");
  hideView.setAttribute("aria-hidden", "true");

  showView.classList.remove("visually-hidden");
  showView.setAttribute("aria-hidden", "false");
  showView.focus();
}

// Init function to add event listeners
function initViewToggle() {
  const viewFeatured = document.querySelector('[data-section="featured"]');
  const viewAbout = document.querySelector('[data-page="about"]');

  viewFeatured.addEventListener("click", () =>
    toggleViews('[data-section="featured"]', '[data-section="detail"]')
  );
}

initViewToggle();
