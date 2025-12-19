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
  {name: "FNF Silly Billy vs Yourself", thumb: "https://kbhgames.com/wp-content/uploads/2024/10/fnf-silly-billy-vs-yourself.jpg", embed: "https://kbhgames.com/game/fnf-silly-billy-vs-yourself"},
  {name: "Friday Night Funkin VS. KAPI v2", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-vs-kapi.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-kapi"},
  {name: "FNF vs Indie Cross", thumb: "https://kbhgames.com/wp-content/uploads/2022/04/friday-night-funkin-vs-indie-cross.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-indie-cross"},
  {name: "FNF vs Huggy Wuggy (Poppy Playtime)", thumb: "https://kbhgames.com/wp-content/uploads/2021/11/friday-night-funkin-vs-huggy-wuggy-poppy-playtime.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-huggy-wuggy-poppy-playtime"},
  {name: "Friday Night Funkin’ Sarvente’s Mid-Fight Masses", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-sarventes-mid-fight-masses.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-sarventes-mid-fight-masses"},
  {name: "Friday Night Funkin’ V.S. Whitty Full Week", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-v-s-whitty-full-week.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-v-s-whitty-full-week"},
  {name: "FNF vs Impostor Among Us V4", thumb: "https://kbhgames.com/wp-content/uploads/2022/10/fnf-vs-impostor-among-us-v4.jpg", embed: "https://kbhgames.com/game/fnf-vs-impostor-among-us-v4"},
  {name: "FNF vs TABI Ex Boyfriend", thumb: "https://kbhgames.com/wp-content/uploads/2021/05/fnf-vs-tabi-ex-boyfriend.jpg", embed: "https://kbhgames.com/game/fnf-vs-tabi-ex-boyfriend"},
  {name: "FNF Vs. Tricky Version 2.0 (Phase 3)", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/fnf-vs-tricky-version-2-0.jpg", embed: "https://kbhgames.com/game/fnf-vs-tricky-version-2-0"},
  {name: "FNF vs Bambi: Strident Crisis", thumb: "https://kbhgames.com/wp-content/uploads/2023/01/fnf-vs-bambi-strident-crisis.jpg", embed: "https://kbhgames.com/game/fnf-vs-bambi-strident-crisis"},
  {name: "Friday Night Funkin VS Garcello", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-vs-garcello.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-garcello"},
  {name: "FNF Vs Mario’s Madness V2", thumb: "https://kbhgames.com/wp-content/uploads/2024/01/fnf-vs-marios-madness-v2.jpg", embed: "https://kbhgames.com/game/fnf-vs-marios-madness-v2"},
  {name: "Friday Night Funkin vs Accelerant Hank", thumb: "https://kbhgames.com/wp-content/uploads/2021/10/friday-night-funkin-vs-accelerant-hank.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-accelerant-hank"},
  {name: "FNF Character Test Playground", thumb: "https://kbhgames.com/wp-content/uploads/2021/07/friday-night-funkin-character-test-playground.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-character-test-playground"},
  {name: "Friday Night Funkin’: Vs. Sonic.Exe", thumb: "https://kbhgames.com/wp-content/uploads/2021/08/friday-night-funkin-vs-sonic-exe.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-sonic-exe"},
  {name: "Wednesday’s Infidelity 2 vs Sad Mickey Mouse", thumb: "https://kbhgames.com/wp-content/uploads/2022/12/wednesdays-infidelity-vs-sad-mickey-mouse.jpg", embed: "https://kbhgames.com/game/wednesdays-infidelity-vs-sad-mickey-mouse"},
  {name: "FNF vs QT Mod 2.0", thumb: "https://kbhgames.com/wp-content/uploads/2021/10/friday-night-funkin-vs-qt-mod.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-qt-mod"},
  {name: "Friday Night Funkin vs AGOTI", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-vs-agoti.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-agoti"},
  {name: "Friday Night Funkin’ VS Shaggy 2.5", thumb: "https://kbhgames.com/wp-content/uploads/2021/10/friday-night-funkin-vs-shaggy-2-5.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-shaggy-2-5"},
  {name: "Friday Night Funkin’ Vs Suicide Mouse v2", thumb: "https://kbhgames.com/wp-content/uploads/2021/10/friday-night-funkin-vs-suicide-mouse.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-suicide-mouse"},
  {name: "FNF Indie Cross – Crossed Out", thumb: "https://kbhgames.com/wp-content/uploads/2022/08/fnf-indie-cross-crossed-out.jpg", embed: "https://kbhgames.com/game/fnf-indie-cross-crossed-out"},
  {name: "FNF vs Dave and Bambi v3", thumb: "https://kbhgames.com/wp-content/uploads/2022/09/fnf-vs-dave-bambi-full-week.jpg", embed: "https://kbhgames.com/game/fnf-vs-dave-bambi-full-week"},
  {name: "FNF Vs Rewrite (Sonic.exe)", thumb: "https://kbhgames.com/wp-content/uploads/2023/02/fnf-vs-rewrite-sonic-exe.jpg", embed: "https://kbhgames.com/game/fnf-vs-rewrite-sonic-exe"},
  {name: "Friday Night Funkin VS Sky Full Week", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/friday-night-funkin-vs-sky-full-week.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-sky-full-week"},
  {name: "Poppy Funktime vs Bunzo Bunny (FNF Mod)", thumb: "https://kbhgames.com/wp-content/uploads/2022/06/poppy-funktime-vs-bunzo-bunny-fnf-mod.jpg", embed: "https://kbhgames.com/game/poppy-funktime-vs-bunzo-bunny-fnf-mod"},
  {name: "FNF vs FNaF 1", thumb: "https://kbhgames.com/wp-content/uploads/2021/09/fnf-vs-fnaf-vs-freddy-chica-foxy-bonnie.jpg", embed: "https://kbhgames.com/game/fnf-vs-fnaf-vs-freddy-chica-foxy-bonnie"},
  {name: "FNF Mid Fight Masses Deluxe Edition", thumb: "https://kbhgames.com/wp-content/uploads/2021/06/fnf-mid-fight-masses-deluxe-edition.jpg", embed: "https://kbhgames.com/game/fnf-mid-fight-masses-deluxe-edition"},
  {name: "FNF vs Sonic.EXE 2.0", thumb: "https://kbhgames.com/wp-content/uploads/2022/05/friday-night-funkin-vs-sonic-exe-2-0.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-sonic-exe-2-0"},
  {name: "FNF vs Bob v2.0 (Bob’s Onslaught)", thumb: "https://kbhgames.com/wp-content/uploads/2021/08/friday-night-funkin-vs-bob-v2-0-bobs-onslaught.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-bob-v2-0-bobs-onslaught"},
  {name: "Friday Night Funkin’ Neo v3.0", thumb: "https://kbhgames.com/wp-content/uploads/2021/09/friday-night-funkin-neo.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-neo"},
  {name: "FNF Vs. Hypno’s Lullaby v2", thumb: "https://kbhgames.com/wp-content/uploads/2022/10/fnf-vs-hypnos-lullaby-v2.jpg", embed: "https://kbhgames.com/game/fnf-vs-hypnos-lullaby-v2"},
  {name: "FNF: Vs. Dave and Bambi: Golden Apple Edition", thumb: "https://kbhgames.com/wp-content/uploads/2022/03/fnf-vs-dave-and-bambi-golden-apple-edition.jpg", embed: "https://kbhgames.com/game/fnf-vs-dave-and-bambi-golden-apple-edition"},
  {name: "Animation VS Friday Night Funkin’ Full Mod", thumb: "https://kbhgames.com/wp-content/uploads/2021/12/animation-vs-friday-night-funkin-mod.jpg", embed: "https://kbhgames.com/game/animation-vs-friday-night-funkin-mod"},
  {name: "Friday Night Funkin Corruption: Reimagined!", thumb: "https://kbhgames.com/wp-content/uploads/2022/03/friday-night-funkin-corruption-reimagined.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-corruption-reimagined"},
  {name: "Rainbow Friends But Yellow, Pink, Red Join", thumb: "https://kbhgames.com/wp-content/uploads/2023/08/rainbow-friends-but-yellow-pink-red-join.jpg", embed: "https://kbhgames.com/game/rainbow-friends-but-yellow-pink-red-join"},
  {name: "FNF TwiddleFinger", thumb: "https://kbhgames.com/wp-content/uploads/2024/10/fnf-twiddlefinger.jpg", embed: "https://kbhgames.com/game/fnf-twiddlefinger"},
  {name: "FNF vs Sprunki – Sprunkin", thumb: "https://kbhgames.com/wp-content/uploads/2024/10/fnf-vs-sprunki-sprunkin.jpg", embed: "https://kbhgames.com/game/fnf-vs-sprunki-sprunkin"},
  {name: "Friday Night Funkin vs Bob", thumb: "https://kbhgames.com/wp-content/uploads/2021/07/friday-night-funkin-vs-bob.jpg", embed: "https://kbhgames.com/game/friday-night-funkin-vs-bob"},
  // Add more if needed – thumbnails can be blank or use a default if missing
];
  // Add the rest yourself from the tag page – there are hundreds on KBH
];

const grid = document.getElementById('mod-grid');
mods.forEach(mod => {
  const card = document.createElement('div');
  card.className = 'mod-card';
  card.innerHTML = `
${mod.name}
`;
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
