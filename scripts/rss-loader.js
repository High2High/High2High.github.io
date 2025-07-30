fetch('data/the-rss-feed.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    const list = document.getElementById("episode-list");
    items.forEach((item, index) => {
      if (index >= 10) return;
      const title = item.querySelector("title")?.textContent;
      const enclosure = item.querySelector("enclosure")?.getAttribute("url");
      const div = document.createElement("div");
      div.innerHTML = `<strong>${title}</strong><br><button onclick="play('${enclosure}')">Play</button>`;
      list.appendChild(div);
      if (index === 0) {
        document.getElementById("main-player").src = enclosure;
      }
    });
  });
function play(url) {
  const player = document.getElementById("main-player");
  player.src = url;
  player.play();
}