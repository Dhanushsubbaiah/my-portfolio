// Reload on back/forward cache restore to avoid blank screen issues
// on some browsers/extensions combinations.
window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    // Force a full reload to reinitialize scripts/rendering
    window.location.reload();
  }
});

