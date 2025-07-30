function play(url) {
  const player = document.getElementById('main-player');
  player.src = url;
  player.play();
}