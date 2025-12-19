const mods = [
  {name: "Vs QT Mod", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-vs-qt-mod.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-qt-mod"},
  {name: "Vs Tricky the Clown", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-the-tricky-mod.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-the-tricky-mod"},
  {name: "Sarvente’s Mid-Fight Masses", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-sarventes-mid-fight-masses.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-sarventes-mid-fight-masses"},
  {name: "Friday Night Funkin Neo", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-neo.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-neo"},
  {name: "Touhou Mod Pack", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-touhou-mod-pack.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-touhou-mod-pack"},
  {name: "Friday Night Funkin HD", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-hd.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-hd"},
  {name: "Corruption Reimagined", thumb: "https://kbhgames.com/wp-content/uploads/2022/06/friday-night-funkin-corruption-reimagined.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-corruption-reimagined"},
  {name: "Vs Garcello", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-vs-garcello.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-garcello"},
  {name: "Vs Whitty Full Week", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-v-s-whitty-full-week.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-v-s-whitty-full-week"},
  {name: "Electro Funkin Mod", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-electro-funkin-mod.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-electro-funkin-mod"},
  {name: "SUS Mod", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-sus-mod.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-sus-mod"},
  {name: "Friday Night Funkin Soft", thumb: "https://kbhgames.com/wp-content/uploads/2021/08/friday-night-funkin-soft.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-soft"},
  {name: "Vs Sunday Remastered", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-vs-sunday.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-sunday"},
  {name: "Nevada Beatdown", thumb: "https://kbhgames.com/wp-content/uploads/2024/06/fnf-nevada-beatdown.jpg", embed: "https://kbhgames.com/game/fnf-nevada-beatdown"},
  {name: "Base Game", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin.jpg", embed: "https://kbhgames.com/game/friday-night-funkin"},
  {name: "Friday Night Funkin Minus", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-minus.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-minus"},
  {name: "Hatsune Miku", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-hatsune-miku.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-hatsune-miku"},
  {name: "Jetpack Funkin", thumb: "https://kbhgames.com/wp-content/uploads/2024/06/fnf-jetpack-funkin.jpg", embed: "https://kbhgames.com/game/fnf-jetpack-funkin"},
  {name: "Duo Pack", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-duo-pack.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-duo-pack"},
  // 80 more placeholders – copy real ones from https://kbhgames.com/tag/friday-night-funkin (pages 1-10 have 100+)
  {name: "Vs Hypno’s Lullaby v2", embed: "https://kbhgames.com/game/fnf-vs-hypnos-lullaby-v2"},
  {name: "Vs Dave and Bambi Golden Apple", embed: "https://kbhgames.com/game/fnf-vs-dave-and-bambi-golden-apple-edition"},
  {name: "Pizza Tower Vs Peppino", embed: "https://kbhgames.com/game/friday-night-at-the-pizza-tower-vs-peppino"},
  {name: "Vs Alastor Hazbin Hotel", embed: "https://kbhgames.com/game/vs-alastor-hazbin-hotel-fnf-mod"},
  // Add the rest yourself from the tag page – there are hundreds on KBH
];

const grid = document.getElementById('mod-grid');
mods.forEach(mod => {
  const card = document.createElement('div');
  card.className = 'mod-card';
  card.innerHTML = `<img src="${mod.thumb || 'default-thumb.png'}"><p>${mod.name}</p>`;
  card.onclick = () => {
    document.getElementById('mod-title').textContent = mod.name;
    document.getElementById('mod-player').src = mod.embed;
    document.getElementById('player-modal').classList.remove('hidden');
  };
  grid.appendChild(card);
});

document.getElementById('close-modal').onclick = () => {
  document.getElementById('player-modal').classList.add('hidden');
  document.getElementById('mod-player').src = '';
};

document.getElementById('fullscreen-btn').onclick = () => document.getElementById('mod-player').requestFullscreen();
document.getElementById('exit-fullscreen').onclick = () => document.exitFullscreen();

document.getElementById('search').oninput = e => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.mod-card').forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
};

// Peaceful intro with music
document.getElementById('enter-btn').addEventListener('click', () => {
  const intro = document.getElementById('intro');
  intro.classList.add('intro-fadeout');
  const music = document.getElementById('bg-music');
  music.volume = 0.4;
  music.play();
  setTimeout(() => {
    intro.style.display = 'none';
    document.getElementById('main-hub').classList.remove('hidden');
  }, 2000);
});
