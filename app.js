const players = [
  {name:"Ehimen Ajede",classYear:"2027",position:"RB",height:"6'0\"",weight:"190 lbs",gpa:"3.6",phone:"386-672-3075",hudl:"https://www.hudl.com/profile/19370757/Ehimen-Ajede",x:"https://x.com/EAjede79016",image:"assets/ehimen-ajede.jpg",imagePosition:"50% 26%",note:"Explosive back with huge upside; projected small-D1 prospect.",stats:"Senior season: 68 carries · 613 yards · 9 TD",tags:["RB","Power","Production"]},
  {name:"Logan Jacobelli",classYear:"2027",position:"WR",height:"6'0\"",weight:"165 lbs",gpa:"3.0",phone:"386-346-1611",hudl:"https://www.hudl.com/profile/19787068/Logan-Jacobelli",x:"https://x.com/LoganJacobelli",image:"assets/logan-jacobelli.jpg",imagePosition:"50% 15%",note:"Multi-sport athlete with elite deep speed.",stats:"100m 10.53 · 200m 21.23 · 515 all-purpose yards",tags:["WR","Track","Speed"]},
  {name:"Lucas Siharaj",classYear:"2027",position:"CB / WR",height:"5'8\"",weight:"165 lbs",gpa:"3.5",phone:"386-302-2012",hudl:"https://www.hudl.com/profile/19787113/Lucas-Siharaj",x:"https://x.com/Lucas_Siharaj",image:"assets/lucas-siharaj.jpg",imagePosition:"50% 15%",note:"Physical cover corner with return-specialist vision.",stats:"12 solo tackles · 1 FR · 2 KOR / 90 yards",tags:["CB","Returner","Physical"]},
  {name:"Brian Gunter",classYear:"2027",position:"WR",height:"6'2\"",weight:"186 lbs",gpa:"3.8",phone:"",hudl:"https://www.hudl.com/video/3/23308093/66f5dccb4d2a615a0add4de1",x:"",image:"assets/brian-gunter.jpg",note:"Long target with academic strength.",stats:"3 receptions · 84 yards · 1 TD",tags:["WR","Length","Academics"]},
  {name:"Garrett Tucker",classYear:"2027",position:"K / P",height:"5'11\"",weight:"155 lbs",gpa:"4.5",phone:"386-874-4560",hudl:"https://www.hudl.com/profile/20443413/Garrett-Tucker",x:"https://x.com/GarrettTuckerK1",image:"assets/garrett-tucker.jpg",note:"Strong-legged kicker with consistent 40–45-yard range; 4-star K / 3.5-star P noted in supplied profile.",stats:"Kohl's Kicking Camp · Ivy-level academic profile",tags:["K","P","Academics"]},
  {name:"Hayden Powell",classYear:"2025",position:"DB",height:"6'0\"",weight:"170 lbs",gpa:"3.113",phone:"864-586-9456",hudl:"https://www.hudl.com/video/3/21955294/67126d8d510872ddafbe5661",x:"",image:"assets/hayden-powell.jpg",note:"Sam backer with verified speed and explosive testing.",stats:"4.39 laser 40 · 35\" vertical · 10'2\" broad · 10.9 laser 100m",tags:["DB","Speed","Track"]},
  {name:"Reagan Melland",classYear:"2025",position:"DL / OL",height:"6'0\"",weight:"350 lbs",gpa:"4.3",phone:"864-484-5747",hudl:"https://www.hudl.com/video/3/18008956/672644b1da33ac90e39e88ea",x:"https://x.com/Reagan47316",image:"assets/reagan-melland.jpg",note:"Interior force with 0–5 technique experience; also contributes in heavy offensive packages.",stats:"DL / FB package · State-contender weightlifting program",tags:["DL","OL","Power"]}
];

// These records are transcribed from every tab in the supplied workbook:
// Master Roster, Top Prospects, and the Class of 2026–2029 sheets.
// The workbook, rather than a placeholder roster, is the source for contacts,
// links, measurables, academics, and recruiting notes.
const rosterPlayer = ({ name, classYear, position, height = "Not listed", weight = "Not listed", gpa = "—", phone = "", hudl = "", handle = "", note = "", stats = "" }) => ({
  name, classYear, position, height, weight, gpa, phone, hudl,
  x: handle ? `https://x.com/${handle.replace(/^@/, "")}` : "",
  image: "", note: note || "FPC roster profile.",
  stats: stats || "No additional testing or game stats were listed in the supplied workbook.",
  tags: ["Roster", position]
});

const rosterProfiles = [
  rosterPlayer({name:"Kenneth Robinson",classYear:"2026",position:"DB",height:"5'9\"",weight:"160 lbs",gpa:"2.5",phone:"386-383-5522",hudl:"https://www.hudl.com/profile/21260203/Kenneth-Robinson/highlights",handle:"KennethRob3865",note:"Offers noted: Brevard College and Capital University."}),
  rosterPlayer({name:"Tywann Andrews",classYear:"2026",position:"CB",height:"6'1\"",weight:"172 lbs",gpa:"2.5",phone:"386-318-6479",hudl:"https://www.hudl.com/profile/22841566/Tywann-Andrews/highlights",handle:"TywannAndrewsjr",note:"Offers noted: Daytona Elite, FC Tech, and Capital University."}),
  rosterPlayer({name:"La'Darius Simmons",classYear:"2026",position:"QB",height:"6'1\"",weight:"190 lbs",gpa:"3.89",phone:"386-871-6629",hudl:"https://www.hudl.com/profile/6333168/LaDarius-Simmons/highlights",handle:"L4dar1us",note:"Signed — Brevard College.",stats:"ACT 21 · SAT 1090"}),
  rosterPlayer({name:"Teagan Paulo",classYear:"2026",position:"K / P",height:"5'10\"",weight:"165 lbs",gpa:"3.7",phone:"386-517-3668",hudl:"https://www.hudl.com/profile/19943346/Teagan-Paulo/highlights",handle:"TeaganPaulo",note:"Signed — Andrews College."}),
  rosterPlayer({name:"Zaiden Greene",classYear:"2026",position:"LB",height:"5'8\"",weight:"180 lbs",gpa:"2.8",phone:"407-279-7499",hudl:"https://www.hudl.com/profile/19830247/Zaiden-Greene/highlights",handle:"zaiden_greene",note:"Offer noted: Mesabi Range."}),
  rosterPlayer({name:"Caden Burchfield",classYear:"2026",position:"QB",height:"6'0\"",weight:"160 lbs",gpa:"3.9",phone:"386-529-4437",hudl:"https://www.hudl.com/profile/18371496/Caden-Burchfield/highlights",handle:"Caden_qb1",note:"Offers noted: McPherson, Mesabi Range, Daytona Christian, FBA, and DEA."}),
  rosterPlayer({name:"Dwayne Webb",classYear:"2026",position:"FS",height:"6'3\"",weight:"175 lbs",gpa:"2.5",phone:"386-780-4150",hudl:"https://www.hudl.com/profile/17932403/Dwayne-Webb/highlights",handle:"DwayneWebb2026",note:"Offers noted: Ventura College, Daytona Elite, FC Tech, and Brevard College."}),
  rosterPlayer({name:"Tamarious Alexander",classYear:"2026",position:"CB",height:"5'8\"",weight:"126 lbs",gpa:"3.1",phone:"386-225-1511",hudl:"https://www.hudl.com/profile/19787142/Tamarious-Alexander/highlights",handle:"TamariousAlexa1"}),
  rosterPlayer({name:"Armani Owens",classYear:"2026",position:"LB",height:"5'10\"",weight:"175 lbs",gpa:"3.0",phone:"386-318-7286",hudl:"https://www.hudl.com/profile/19415126/Armani-Owens/highlights",handle:"ArmaniOwens35"}),
  rosterPlayer({name:"Thomasio Curry",classYear:"2026",position:"LB",height:"5'8\"",weight:"175 lbs",gpa:"2.5",phone:"386-331-0315",hudl:"https://www.hudl.com/profile/26339264/Thomasio-Curry/highlights",handle:"Thomasio24285",note:"Offer noted: Brevard College."}),
  rosterPlayer({name:"Case Dennis",classYear:"2026",position:"DL",height:"6'0\"",weight:"240 lbs",gpa:"2.5",phone:"386-283-0175",hudl:"https://www.hudl.com/profile/26369136/Case-Dennis/highlights",handle:"CaseDennis56",note:"Offer noted: Mesabi Range."}),
  rosterPlayer({name:"Angel De Leon",classYear:"2026",position:"C / G",height:"6'1\"",weight:"285 lbs",gpa:"2.7",phone:"386-627-1369",hudl:"https://www.hudl.com/profile/19379646/Angel-De-Leon/highlights",handle:"AngelDeLeon62",note:"Offers noted: Warner, Webber, and Daytona Elite."}),
  rosterPlayer({name:"Zach Farrell",classYear:"2026",position:"T / G",height:"6'4\"",weight:"290 lbs",gpa:"3.6",phone:"386-863-3225",hudl:"https://www.hudl.com/profile/19372783/Zach-Farrell/highlights",handle:"zztopp_",note:"Offers noted: KCU, FC Tech, and Daytona Elite."}),
  rosterPlayer({name:"Evan Rodriguez",classYear:"2027",position:"DB",height:"5'9\"",weight:"158 lbs",gpa:"2.5",phone:"386-264-5662",handle:"_evanrodiguez"}),
  rosterPlayer({name:"Jacob Harnish",classYear:"2027",position:"DE",height:"6'5\"",weight:"245 lbs",gpa:"3.1",phone:"386-237-7214",handle:"HarnischJa63682",note:"Multi-sport note: Track & Field."}),
  rosterPlayer({name:"Kameron Kalasnik",classYear:"2027",position:"WR"}),
  rosterPlayer({name:"Prince Darby",classYear:"2027",position:"WR",height:"5'10\"",weight:"150 lbs"}),
  rosterPlayer({name:"Kayson Magsino",classYear:"2027",position:"CB"}),
  rosterPlayer({name:"Bryce Murray",classYear:"2027",position:"RB",height:"5'6\"",weight:"150 lbs"}),
  rosterPlayer({name:"Will Hawley",classYear:"2027",position:"OL",height:"5'9\"",weight:"225 lbs",gpa:"4.2",phone:"386-347-1168"}),
  rosterPlayer({name:"Josiah Hathaway",classYear:"2027",position:"LB",height:"6'2\"",weight:"190 lbs",gpa:"3.3",phone:"386-872-2225",hudl:"https://www.hudl.com/profile/19636691/Josiah-Hathaway",handle:"josiahhathaway"}),
  rosterPlayer({name:"Mathias Parker",classYear:"2027",position:"OLB",height:"5'10\"",weight:"190 lbs",gpa:"3.7",phone:"509-820-0002",hudl:"https://www.hudl.com/profile/20145391/Mathias-Parker",handle:"MathiasParker09",note:"Keiser University / multi-sport athlete."}),
  rosterPlayer({name:"Mekhi Jones",classYear:"2027",position:"OL",height:"6'1\"",weight:"310 lbs",gpa:"2.6",phone:"386-215-1468",handle:"MekhiJones82641",note:"FAU (WO) noted."}),
  rosterPlayer({name:"Aiden Maynard-Vojtech",classYear:"2027",position:"OL",height:"6'1\"",weight:"290 lbs",gpa:"3.5",phone:"386-276-4818",hudl:"https://www.hudl.com/profile/19924843/Aiden-MaynardVojtech",handle:"Aidenmay2431"}),
  rosterPlayer({name:"Wendell Weaver",classYear:"2027",position:"DT",height:"5'9\"",weight:"270 lbs",gpa:"3.4",phone:"386-569-7809",hudl:"https://www.hudl.com/profile/20545812/Wendell-Weaver-Jr",handle:"WendellWeaver75",note:"Multi-sport note: Weightlifting."}),
  rosterPlayer({name:"Yamon Jordan",classYear:"2027",position:"DB",height:"6'0\"",weight:"160 lbs",gpa:"2.6",phone:"386-237-0115",hudl:"https://www.hudl.com/profile/26340290/Yamon-Jordan",handle:"Yamon_J",note:"Multi-sport note: Track & Field."}),
  rosterPlayer({name:"Ethan Ruiz",classYear:"2027",position:"WR / TE",height:"6'4\"",weight:"225 lbs",gpa:"3.0",phone:"386-302-2423",handle:"EthanRuiz____",note:"Multi-sport note: Track & Field."}),
  rosterPlayer({name:"Stevie Hafer",classYear:"2027",position:"TE / DE",height:"6'0\"",weight:"195 lbs",gpa:"2.5",phone:"937-361-9487",hudl:"https://www.hudl.com/profile/19624213/Steven-Hafer",handle:"StevieHafer15"}),
  rosterPlayer({name:"Nei'cco Murphy",classYear:"2028",position:"ATH",height:"5'9\"",weight:"170 lbs",gpa:"2.6",phone:"386-270-2326",hudl:"https://www.hudl.com/profile/24033061/Neicco-Murphy",handle:"beehumble_1"}),
  rosterPlayer({name:"Cal Zwirm",classYear:"2028",position:"DE",height:"6'1\"",weight:"215 lbs",gpa:"3.1",phone:"386-597-3136",hudl:"https://www.hudl.com/profile/24002308/Caldwell-Zwirn",handle:"caldwell_zwirm",note:"Multi-sport note: Track & Field; 10.5 100m listed."}),
  rosterPlayer({name:"Shawn Smith",classYear:"2028",position:"DB",height:"6'0\"",weight:"178 lbs",gpa:"2.7",phone:"240-422-4987",hudl:"https://www.hudl.com/profile/24070173/Shawn-Smith",handle:"Shawnsmith2028"}),
  rosterPlayer({name:"Joseph Foust",classYear:"2028",position:"LB",height:"5'10\"",weight:"175 lbs",gpa:"3.9",phone:"689-247-6934",hudl:"https://www.hudl.com/profile/26339768/Joseph-Foust",handle:"jfousty22"}),
  rosterPlayer({name:"Stephen Bisulca",classYear:"2028",position:"TE",height:"6'2\"",weight:"215 lbs",gpa:"3.5",phone:"386-569-4913",hudl:"https://www.hudl.com/profile/24312734/Stephen-Bisulca",handle:"StephenBisulca"}),
  rosterPlayer({name:"Brian Veal",classYear:"2028",position:"EDGE",height:"6'1\"",weight:"200 lbs",gpa:"3.5",phone:"864-518-7652",hudl:"https://www.hudl.com/profile/22770554/Brian-Veal",handle:"32Veal_B",note:"Keiser University — 3-sport athlete."}),
  rosterPlayer({name:"Caleb Shamblin",classYear:"2028",position:"LB",height:"5'10\"",weight:"182 lbs",gpa:"4.21",phone:"386-302-3074",hudl:"https://www.hudl.com/profile/22282907/Caleb-Shamblin",handle:"CalebShamblin35"}),
  rosterPlayer({name:"Brady Gerling",classYear:"2028",position:"LS",height:"6'1\"",weight:"155 lbs",gpa:"4.4",phone:"386-986-9900",handle:"BradyGerling",note:"Multi-sport note: Soccer."}),
  rosterPlayer({name:"Bobby Starr",classYear:"2028",position:"QB",height:"5'9\"",weight:"140 lbs",gpa:"3.7",phone:"386-999-1304",handle:"BobbyStarr_6",note:"Multi-sport note: Track & Field sprinter."}),
  rosterPlayer({name:"Trace Paffrath",classYear:"2028",position:"WR",height:"5'9\"",weight:"140 lbs",gpa:"2.8",phone:"386-627-3237",handle:"TracPaf1"}),
  rosterPlayer({name:"John McIntyre",classYear:"2028",position:"CB",height:"5'11\"",weight:"145 lbs",gpa:"3.0",phone:"386-864-3587",handle:"johnMcinty80879"}),
  rosterPlayer({name:"Tarious Smith",classYear:"2029",position:"ATH",height:"6'1\"",weight:"193 lbs",gpa:"2.8",phone:"386-346-1673",handle:"TariousSmith",note:"Varsity reps noted."}),
  rosterPlayer({name:"Khaidyn Steward",classYear:"2029",position:"ATH",height:"5'8\"",weight:"140 lbs",gpa:"3.0",phone:"386-327-5953",handle:"KhaidynSteward",note:"Multi-sport note: Weightlifting."}),
  rosterPlayer({name:"Nolan Parkhurst",classYear:"2029",position:"DL",height:"6'1\"",weight:"215 lbs",gpa:"5.0",phone:"386-864-0607",handle:"nolan_parkhurst",note:"Varsity reps noted."}),
  rosterPlayer({name:"Elijah Washington",classYear:"2029",position:"ATH",height:"5'5\"",weight:"135 lbs",gpa:"4.0",phone:"386-225-1510",handle:"Birdman_Island",note:"Multi-sport note: Wrestling & Track."}),
  rosterPlayer({name:"Tyler Garrison",classYear:"2029",position:"WR",height:"5'5\"",weight:"115 lbs",gpa:"4.4",phone:"386-986-5687",handle:"Tygarrison_11",note:"Multi-sport note: Track & Field."}),
  rosterPlayer({name:"Reid Pritt",classYear:"2029",position:"QB",height:"5'9\"",weight:"150 lbs",gpa:"4.7",phone:"386-283-7305",handle:"RP9_QB1",note:"Multi-sport note: Track & Field."}),
  rosterPlayer({name:"Jaries Wright",classYear:"2029",position:"ATH"})
];
players.push(...rosterProfiles);

const spreadsheetUpdates = {
  "Ehimen Ajede": {height:"5'11\"",weight:"185 lbs",gpa:"3.6",phone:"386-627-3075",x:"https://x.com/EAjede79016",note:"Explosive back with huge upside; projected small-D1 prospect. Multi-sport note: Track & Field; 4.5 40 listed."},
  "Logan Jacobelli": {height:"6'1\"",weight:"160 lbs",gpa:"3.0",phone:"386-346-1611",x:"https://x.com/LoganJacobelli",note:"Multi-sport athlete with elite deep speed. Spreadsheet notes: Football & Track; 10.68 100m and 10.5 100m entries are listed."},
  "Lucas Siharaj": {position:"CB",height:"5'7\"",weight:"165 lbs",gpa:"3.5",phone:"386-302-2012",x:"https://x.com/Lucas_Siharaj"},
  "Brian Gunter": {height:"6'0\"",weight:"195 lbs",gpa:"3.0",phone:"386-693-0867",hudl:"https://www.hudl.com/profile/19370695/Brian-Gunter",x:"https://x.com/briangunterjr",note:"Long target with academic strength. Multi-sport note: Basketball."},
  "Garrett Tucker": {position:"K / P",height:"5'11\"",weight:"155 lbs",gpa:"4.5",phone:"386-874-4560",x:"https://x.com/GarretttuckerK1",note:"Strong-legged kicker with consistent 40–45-yard range; 4-star K / 3.5-star P noted in supplied profile. Multi-sport note: Soccer."},
  "Hayden Powell": {classYear:"2027",position:"S",height:"6'0\"",weight:"180 lbs",gpa:"3.51",phone:"386-237-5189",x:"https://x.com/haydenpowell29",note:"Sam backer with verified speed and explosive testing. Multi-sport note: Track & Field sprinter."},
  "Reagan Melland": {classYear:"2027",position:"DL / FB",height:"5'11\"",weight:"225 lbs",gpa:"2.6",phone:"206-549-4810",hudl:"https://www.hudl.com/profile/19924615/Reagan-Melland",x:"https://x.com/Reagan47316",note:"Interior force with 0–5 technique experience; also contributes in heavy offensive packages. Multi-sport note: Weightlifting."}
};
players.forEach(player => Object.assign(player, spreadsheetUpdates[player.name] || {}));

// When the terminal sync has generated fresh source data, it replaces the
// original hand-built snapshot above. Keeping the snapshot lets the standalone
// download continue to work even without the generated data file.
if (Array.isArray(window.FPC_PLAYERS) && window.FPC_PLAYERS.length) {
  players.length = 0;
  players.push(...window.FPC_PLAYERS);
}

const search = document.querySelector('#search');
const grid = document.querySelector('#playerGrid');
const count = document.querySelector('#resultsCount');
const dialog = document.querySelector('#playerDialog');
const dialogContent = document.querySelector('#dialogContent');
let classFilter = 'All', positionFilter = 'All';
const recruitingFilters = ['OL', 'TE', 'RB', 'WR', 'FB', 'QB', 'DT', 'EDGE', 'LB', 'CB', 'S', 'K', 'P', 'LS', 'ATH'];

function recruitingCategories(position) {
  const value = position.toUpperCase();
  const has = token => new RegExp(`(^|[^A-Z])${token}($|[^A-Z])`).test(value);
  const categories = new Set();
  if (has('OL') || has('T') || has('G') || has('C')) categories.add('OL');
  if (has('TE')) categories.add('TE');
  if (has('RB')) categories.add('RB');
  if (has('WR')) categories.add('WR');
  if (has('FB')) categories.add('FB');
  if (has('QB')) categories.add('QB');
  if (has('DL') || has('DT')) categories.add('DT');
  if (has('EDGE') || has('DE') || has('OLB')) categories.add('EDGE');
  if (has('LB') || has('OLB')) categories.add('LB');
  if (has('CB') || has('DB')) categories.add('CB');
  if (has('S') || has('FS') || has('SS') || has('DB')) categories.add('S');
  if (has('K')) categories.add('K');
  if (has('P')) categories.add('P');
  if (has('LS')) categories.add('LS');
  if (has('ATH')) categories.add('ATH');
  return [...categories];
}
players.forEach(player => { player.categories = recruitingCategories(player.position); });

function makeFilters(target, values, active, setActive) {
  target.innerHTML = values.map(value => `<button class="filter ${value === active ? 'active' : ''}" data-value="${value}">${value}</button>`).join('');
  target.querySelectorAll('button').forEach(button => button.addEventListener('click', () => setActive(button.dataset.value)));
}
function filters() {
  makeFilters(document.querySelector('#classFilters'), ['All', ...new Set(players.map(p => p.classYear))].sort(), classFilter, value => { classFilter = value; filters(); render(); });
  makeFilters(document.querySelector('#positionFilters'), ['All', ...recruitingFilters], positionFilter, value => { positionFilter = value; filters(); render(); });
}
function filteredPlayers() {
  const query = search.value.toLowerCase().trim();
  return players.filter(player => (classFilter === 'All' || player.classYear === classFilter) && (positionFilter === 'All' || player.categories.includes(positionFilter)) && (!query || `${player.name} ${player.position} ${player.note} ${player.tags.join(' ')}`.toLowerCase().includes(query)));
}
function render() {
  const list = filteredPlayers();
  count.textContent = `${list.length} prospect${list.length === 1 ? '' : 's'} shown`;
  grid.innerHTML = list.map(player => `<article class="player-card"><div class="player-photo ${player.image ? '' : 'no-photo'}" style="${player.image ? `background-image:url('${player.image}');--photo-position:${player.imagePosition || '50% 28%'}` : ''}">${player.image ? '' : player.name.split(' ').map(part => part[0]).slice(0, 2).join('')}<span class="class-badge">${player.classYear}</span></div><div class="player-body"><div class="player-position">${player.position}</div><h3>${player.name}</h3><p class="player-measurables">${player.height} · ${player.weight}</p><p class="player-note">${player.note}</p><div class="player-foot"><span class="gpa">GPA ${player.gpa}</span><button class="profile-button" data-player="${player.name}">Open profile →</button></div></div></article>`).join('') || '<p>No players match those filters.</p>';
  grid.querySelectorAll('[data-player]').forEach(button => button.addEventListener('click', () => openProfile(players.find(player => player.name === button.dataset.player))));
}
function openProfile(player) {
  const xHandle = player.x ? player.x.split('/').pop() : '';
  const links = [player.hudl && `<a href="${player.hudl}" target="_blank" rel="noopener">Watch Hudl ↗</a>`, player.x && `<a class="alt" href="${player.x}" target="_blank" rel="noopener">X @${xHandle} ↗</a>`, player.phone && `<a class="alt" href="tel:${player.phone.replace(/\D/g, '')}">${player.phone}</a>`].filter(Boolean).join('');
  dialogContent.innerHTML = `<div class="dialog-grid"><div class="dialog-photo ${player.image ? '' : 'no-photo'}" style="${player.image ? `background-image:url('${player.image}');--photo-position:${player.imagePosition || '50% 28%'}` : ''}">${player.image ? '' : player.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</div><div class="dialog-body"><p class="eyebrow green">Class of ${player.classYear} · ${player.position}</p><h2 id="dialogName">${player.name}</h2><p class="dialog-meta">${player.height} · ${player.weight}</p><p>${player.note}</p><div class="metric-list"><div><span>GPA</span><strong>${player.gpa}</strong></div><div><span>Class</span><strong>${player.classYear}</strong></div><div><span>Position</span><strong>${player.position}</strong></div></div><p><strong>Snapshot:</strong> ${player.stats}</p><div class="dialog-actions">${links}</div><p class="source-note">Profile details, links, and contact information are carried from the supplied FPC recruiting presentation and spreadsheet. Confirm current recruiting status with the recruiting coordinator.</p></div></div>`;
  dialog.showModal();
}
search.addEventListener('input', render);
document.querySelector('#resetFilters').addEventListener('click', () => { classFilter = 'All'; positionFilter = 'All'; search.value = ''; filters(); render(); });
document.querySelector('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
filters(); render();
