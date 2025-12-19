const mods = [
{name:"Vs Whitty Full Week",thumb:"https://files.catbox.moe/xyz123.png",embed:"https://newgrounds.com/portal/view/789456"},
{name:"Vs Tricky Phase 3",thumb:"https://files.catbox.moe/tricky.png",embed:"https://ninja-muffin24.itch.io/tricky"},
{name:"Mid Fight Masses Deluxe",thumb:"https://img.itch.zone/mfm.png",embed:"https://saruky.itch.io/mfm-web"},
{name:"Vs Tabi Ex Boyfriend",thumb:"https://tabi.png",embed:"https://newgrounds.com/portal/view/812345"},
{name:"Doki Doki Takeover Plus",thumb:"https://ddto.png",embed:"https://ninja-muffin24.itch.io/funkin-ddto-web"},
{name:"Vs Neo",thumb:"https://neo.png",embed:"https://newgrounds.com/portal/view/823456"},
{name:"Vs Kapi Arcade Showdown",thumb:"https://kapi.png",embed:"https://kapi.itch.io/kapi"},
{name:"Vs Sky Full Week",thumb:"https://sky.png",embed:"https://newgrounds.com/portal/view/834567"},
{name:"Vs Carol & Whitty",thumb:"https://carol.png",embed:"https://carol-week.itch.io"},
{name:"Vs Hex",thumb:"https://hex.png",embed:"https://hex-mod.itch.io/hex"},
{name:"Vs Bob & Bosip",thumb:"https://bob.png",embed:"https://bob-bosip.itch.io"},
{name:"Vs Matt Wiik 3",thumb:"https://matt.png",embed:"https://matt-week.itch.io"},
{name:"Vs Impostor V4",thumb:"https://impostor.png",embed:"https://newgrounds.com/portal/view/845678"},
{name:"Vs Sonic.exe",thumb:"https://sonic.png",embed:"https://sonic-exe.itch.io"},
{name:"Vs Shaggy",thumb:"https://shaggy.png",embed:"https://shaggy-mod.itch.io"},
{name:"Vs AGOTI",thumb:"https://agoti.png",embed:"https://agotii.itch.io"},
{name:"Vs Ron",thumb:"https://ron.png",embed:"https://ron-mod.itch.io"},
{name:"Vs Nonsense",thumb:"https://nonsense.png",embed:"https://nonsense.itch.io"},
{name:"Vs Annie",thumb:"https://annie.png",embed:"https://annie-week.itch.io"},
{name:"Vs Monika",thumb:"https://monika.png",embed:"https://monika.itch.io"},
{name:"Vs Huggy Wuggy",thumb:"https://huggy.png",embed:"https://huggy.itch.io"},
{name:"Vs Poppy Playtime",thumb:"https://poppy.png",embed:"https://poppy.itch.io"},
{name:"Vs Among Us",thumb:"https://amongus.png",embed:"https://amongus.itch.io"},
{name:"Vs Rainbow Friends",thumb:"https://rainbow.png",embed:"https://rainbow.itch.io"},
{name:"Vs Squid Game",thumb:"https://squid.png",embed:"https://squid.itch.io"},
{name:"Vs Bendy",thumb:"https://bendy.png",embed:"https://bendy.itch.io"},
{name:"Vs Cuphead",thumb:"https://cuphead.png",embed:"https://cuphead.itch.io"},
{name:"Vs Undertale",thumb:"https://undertale.png",embed:"https://undertale.itch.io"},
{name:"Vs Mario's Madness",thumb:"https://mario.png",embed:"https://mario-madness.itch.io"},
{name:"Vs Luigi's Mansion",thumb:"https://luigi.png",embed:"https://luigi.itch.io"},
{name:"Vs Garcello",thumb:"https://garcello.png",embed:"https://garcello.itch.io"},
{name:"Vs Ruv",thumb:"https://ruv.png",embed:"https://ruv.itch.io"},
{name:"Vs Sarvente's Mid-Fight",thumb:"https://sarvente.png",embed:"https://sarvente.itch.io"},
{name:"Vs Zardy",thumb:"https://zardy.png",embed:"https://zardy.itch.io"},
{name:"Vs Dave & Bambi",thumb:"https://dave.png",embed:"https://dave-bambi.itch.io"},
{name:"Vs Hypno's Lullaby",thumb:"https://hypno.png",embed:"https://hypno.itch.io"},
{name:"Vs Entity",thumb:"https://entity.png",embed:"https://entity.itch.io"},
{name:"Vs Ourple Guy",thumb:"https://ourple.png",embed:"https://ourple.itch.io"},
{name:"Vs Rewrite",thumb:"https://rewrite.png",embed:"https://rewrite.itch.io"},
{name:"Vs Tord",thumb:"https://tord.png",embed:"https://tord.itch.io"},
{name:"Vs Pico School",thumb:"https://pico.png",embed:"https://pico-school.itch.io"},
{name:"Vs Tankman",thumb:"https://tankman.png",embed:"https://tankman.itch.io"},
{name:"Vs Senpai",thumb:"https://senpai.png",embed:"https://senpai.itch.io"},
{name:"Vs Mommy Mearest",thumb:"https://mommy.png",embed:"https://mommy.itch.io"},
{name:"Vs Daddy Dearest",thumb:"https://daddy.png",embed:"https://daddy.itch.io"},
{name:"Vs Boyfriend",thumb:"https://bf.png",embed:"https://bf.itch.io"},
{name:"Vs Girlfriend",thumb:"https://gf.png",embed:"https://gf.itch.io"},
{name:"Vs Pico",thumb:"https://pico2.png",embed:"https://pico2.itch.io"},
{name:"Vs Lemon Demon",thumb:"https://lemon.png",embed:"https://lemon.itch.io"}
];

const grid = document.getElementById('mod-grid')
mods.forEach(mod => {
  const card = document.createElement('div')
  card.className = 'mod-card'
  card.innerHTML = `<img src="${mod.thumb}"><p>${mod.name}</p>`
  card.onclick = () => {
    document.getElementById('mod-name').textContent = mod.name
    document.getElementById('player').src = mod.embed
    document.getElementById('modal').classList.remove('hidden')
  }
  grid.appendChild(card)
})

document.getElementById('close').onclick = () => {
  document.getElementById('modal').classList.add('hidden')
  document.getElementById('player').src = ''
}
document.getElementById('fullscreen').onclick = () => document.getElementById('player').requestFullscreen()
document.getElementById('exit-fs').onclick = () => document.exitFullscreen()

document.getElementById('search').oninput = e => {
  let term = e.target.value.toLowerCase()
  document.querySelectorAll('.mod-card').forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(term) ? '' : 'none'
  })
}
