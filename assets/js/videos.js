const videos = document.querySelectorAll('.event-multimedia video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    console.log('Playing:', video.src);
  });

  video.addEventListener('pause', () => {
    console.log('Paused:', video.src);
  });

  video.addEventListener('ended', () => {
    console.log('Video has ended:', video.src);
  });

});
