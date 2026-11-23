const video = document.getElementById('promoVideo');
const startButton = document.getElementById('startButton');
const instagramLink = document.getElementById('instagramLink');

function hideOverlay() { startButton.classList.add('hidden'); }
function showOverlay() { startButton.classList.remove('hidden'); }

// Try muted autoplay first; mobile browsers may still require a tap.
video.play().then(hideOverlay).catch(showOverlay);
startButton.addEventListener('click', async () => {
  try {
    video.muted = false;
    await video.play();
    hideOverlay();
  } catch (e) {
    // If sound playback is denied, start muted and let the viewer enable sound via controls.
    video.muted = true;
    try { await video.play(); hideOverlay(); } catch (_) { showOverlay(); }
  }
});
video.addEventListener('playing', hideOverlay);
video.addEventListener('ended', () => { instagramLink.hidden = false; });
