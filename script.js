const video = document.getElementById('promoVideo');
const startButton = document.getElementById('startButton');
const instagramLink = document.getElementById('instagramLink');

function hideOverlay() { startButton.classList.add('hidden'); }
function showOverlay() { startButton.classList.remove('hidden'); }

// Attempt autoplay with sound. Most mobile browsers block this until the viewer taps.
video.muted = false;
video.autoplay = true;
video.play().then(hideOverlay).catch(showOverlay);

startButton.addEventListener('click', async () => {
  try {
    video.muted = false;
    await video.play();
    hideOverlay();
  } catch (e) {
    showOverlay();
  }
});
video.addEventListener('playing', hideOverlay);
video.addEventListener('ended', () => { instagramLink.hidden = false; });
