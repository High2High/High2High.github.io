fetch('/data/episodes.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('episode-list');
    data.slice(0, 5).forEach(ep => {
      list.innerHTML += `<li><button onclick="play('${ep.audioSrc}')">${ep.title}</button></li>`;
    });
  });