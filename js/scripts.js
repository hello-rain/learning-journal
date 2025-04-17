// Utility: Toggle visibility between sections
function toggleSections(hideSelector, viewSelector) {
  const hideEl = document.querySelector(hideSelector);
  const showEl = document.querySelector(viewSelector);

  if (!hideEl || !showEl) return;

  hideEl.classList.add("visually-hidden");
  hideEl.setAttribute("aria-hidden", "true");

  showEl.classList.remove("visually-hidden");
  showEl.setAttribute("aria-hidden", "false");
  showEl.focus();
}

// Init function to add event listeners
function initPostToggle() {
  const sectionFeatured = document.querySelector('[data-section="featured"]');

  sectionFeatured.addEventListener("click", () =>
    toggleSections('[data-section="featured"]', '[data-section="detail"]')
  );
}

initPostToggle();
