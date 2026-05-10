// ========================
// DAY DATA (compact + image)
// ========================
const daysData = [
    {
        label: "Day 1 · Moderate",
        name: "Into the forest cathedral",
        route: "Zurich → Sihltal → Albis Ridge → Unterägeri",
        dist: "58 km",
        elev: "+950 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Aegerisee_01.jpg/800px-Aegerisee_01.jpg",
        imageAlt: "Lake Aegeri (Ägerisee)",
        body: `<p>Leave Zurich via Wollishofen and enter the Sihltal river valley. Sihlwald forest, Albispass (789 m), descend to Lake Aegeri. Wild camp above lake.</p>`,
        camp: `🏕️ Wild camp: Forest edge above Lake Aegeri east shore.`,
        typeClass: ""
    },
    {
        label: "Day 2 · Moderate",
        name: "Hidden lakes and Lake Lucerne",
        route: "Unterägeri → Sattel → Lauerz → Schwyz → Morschach → Brunnen",
        dist: "52 km",
        elev: "+720 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Brunnen_Switzerland_Lake_Lucerne.jpg/800px-Brunnen_Switzerland_Lake_Lucerne.jpg",
        imageAlt: "Lake Lucerne view from Brunnen",
        body: `<p>Rothenthurm peatbog, Lauerzersee loop, Schwyz, Morschach panorama, descent to Brunnen.</p>`,
        camp: `🏕️ Wild camp: Pine forest bench between Morschach and Brunnen.`,
        typeClass: ""
    },
    {
        label: "Day 3 · Moderate ⚠ CLOSURE",
        name: "Boat & secret valley",
        route: "Brunnen → (boat) Flüelen → Altdorf → Maderanertal",
        dist: "55 km",
        elev: "+700 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Maderanertal.jpg/800px-Maderanertal.jpg",
        imageAlt: "Maderanertal valley",
        body: `<div class="warn-box"><p>❌ Axenstrasse closed: take URJ boat Brunnen→Flüelen.</p></div><p>Maderanertal – hidden valley, waterfalls, dead-end at Balmenschachen.</p>`,
        camp: `🏕️ Wild camp: Valley end meadows at Balmenschachen.`,
        typeClass: ""
    },
    {
        label: "Day 4 · HARDEST DAY ★",
        name: "Over Susten Pass",
        route: "Maderanertal → Wassen → Sustenpass (2,224 m) → Innertkirchen",
        dist: "48 km",
        elev: "+1,950 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sustenpass.jpg/800px-Sustenpass.jpg",
        imageAlt: "Sustenpass mountain pass",
        body: `<p>Steingletscher viewpoint, pass summit 2,224 m, epic descent to Innertkirchen. Wild camp above Gadmen meadows.</p>`,
        camp: `🏕️ Wild camp: Gadmen meadows above treeline.`,
        typeClass: "hard"
    },
    {
        label: "Day 5 · Easy — Recovery",
        name: "Aare Gorge & Brienz",
        route: "Innertkirchen → Meiringen → Aare Gorge → Brienz",
        dist: "32 km",
        elev: "+320 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Aareschlucht_03.jpg/800px-Aareschlucht_03.jpg",
        imageAlt: "Aare Gorge (Aareschlucht)",
        body: `<p>Aareschlucht, Reichenbach Falls, Lake Brienz turquoise water. Wild camp east shore above Brienz.</p><div class="star-box"><div class="star-label">★ Best camp of trip</div><div class="star-body">Stechelberg, Lauterbrunnen valley (Day 7)</div></div>`,
        camp: "",
        typeClass: "easy"
    },
    {
        label: "Day 6 · Moderate",
        name: "Two lakes: Brienz → Thun",
        route: "Brienz → Giessbach → Lake Brienz south → Interlaken → Lake Thun → Leissigen",
        dist: "60 km",
        elev: "+580 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Giessbach_falls.jpg/800px-Giessbach_falls.jpg",
        imageAlt: "Giessbach Falls",
        body: `<p>Giessbach Falls, quiet south shore, Interlaken, Lake Thun east shore to Leissigen. Wild camp above Leissigen.</p>`,
        camp: "",
        typeClass: ""
    },
    {
        label: "Day 7 · Moderate",
        name: "Valley of 72 waterfalls",
        route: "Leissigen → Interlaken → Lauterbrunnen → Stechelberg",
        dist: "52 km",
        elev: "+640 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lauterbrunnen_valley_01.jpg/800px-Lauterbrunnen_valley_01.jpg",
        imageAlt: "Lauterbrunnen valley with Staubbachfall",
        body: `<p>Lauterbrunnen valley, Staubbachfall, Trümmelbachfälle, road end at Stechelberg – best camp of the trip.</p>`,
        camp: `🏕️ ★ BEST CAMP: Stechelberg valley end, 18 waterfalls, alpine zone.`,
        typeClass: ""
    },
    {
        label: "Day 8 · Moderate",
        name: "The Eiger arrives",
        route: "Stechelberg → Lauterbrunnen → Zweilütschinen → Grindelwald",
        dist: "38 km",
        elev: "+900 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Eiger_north_face_Grindelwald.jpg/800px-Eiger_north_face_Grindelwald.jpg",
        imageAlt: "Eiger north face from Grindelwald",
        body: `<p>Return through valley, then climb to Grindelwald basin – first sight of Eiger north face. Camp at Gletscherdorf.</p>`,
        camp: "",
        typeClass: ""
    },
    {
        label: "Day 9 · Grand finale — Epic loop",
        name: "Grosse Scheidegg (no‑car gravel)",
        route: "Grindelwald → Grosse Scheidegg (1,962 m) → return",
        dist: "28 km",
        elev: "+740 m",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Grosse_Scheidegg.jpg/800px-Grosse_Scheidegg.jpg",
        imageAlt: "Grosse Scheidegg pass",
        body: `<div class="info-box"><p>🚫 No private cars – only cyclists and PostBus. Compacted gravel, perfect finale.</p></div><p>Views of Wetterhorn and Eiger massif, marmots, Berghaus since 1859. Return to Grindelwald.</p><div class="info-box"><p>🚆 Departure: Grindelwald → Interlaken → Bern → Zurich. Bike day pass CHF ~18.</p></div>`,
        camp: "",
        typeClass: "epic"
    }
];

// ========================
// BUILD DAY CARDS + NAV
// ========================
function buildDayCards() {
    const navContainer = document.getElementById('day-nav-buttons');
    const cardsContainer = document.getElementById('day-cards-container');
    
    daysData.forEach((day, idx) => {
        // Navigation button
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        if (day.typeClass === 'hard') btn.classList.add('hard');
        if (day.typeClass === 'easy') btn.classList.add('easy');
        if (day.typeClass === 'epic') btn.classList.add('epic');
        btn.textContent = `D${idx+1} ${day.label.split('·')[1]?.trim() || day.label}`;
        btn.addEventListener('click', () => showDay(idx));
        if (idx === 0) btn.classList.add('active');
        navContainer.appendChild(btn);

        // Day card
        const card = document.createElement('div');
        card.className = 'day-card';
        if (idx === 0) card.classList.add('visible');
        card.id = `day-${idx}`;
        
        // Image HTML
        const imageHTML = day.image 
            ? `<img src="${day.image}" alt="${day.imageAlt}" class="day-image" loading="lazy">`
            : '';
            
        card.innerHTML = `
            <div class="day-header" style="${day.typeClass === 'hard' ? 'border-left:4px solid #e24b4a' : day.typeClass === 'easy' ? 'border-left:4px solid #378add' : day.typeClass === 'epic' ? 'border-left:4px solid #639922' : ''}">
                <div class="day-header-top">
                    <div>
                        <div class="day-label">${day.label}</div>
                        <div class="day-name">${day.name}</div>
                        <div class="day-route-sub">${day.route}</div>
                    </div>
                    <div class="day-metrics">
                        <div class="metric ${day.typeClass === 'hard' ? 'hard' : ''}">
                            <div class="metric-val">${day.dist}</div>
                            <div class="metric-lbl">Distance</div>
                        </div>
                        <div class="metric ${day.typeClass === 'hard' ? 'hard' : ''}">
                            <div class="metric-val">${day.elev}</div>
                            <div class="metric-lbl">Elevation</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="day-body">
                ${imageHTML}
                ${day.body}
                ${day.camp ? `<div class="camp-box">${day.camp}</div>` : ''}
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

// ========================
// DAY SWITCHING
// ========================
function showDay(index) {
    document.querySelectorAll('.day-card').forEach((card, i) => {
        card.classList.toggle('visible', i === index);
    });
    document.querySelectorAll('.day-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

// ========================
// INTERACTIVE MAP
// ========================
function initMap() {
    const map = L.map('route-map').setView([46.75, 8.35], 8.2);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> & CartoDB',
        subdomains: 'abcd',
        maxZoom: 14,
        minZoom: 7
    }).addTo(map);

    const routePoints = [
        [47.3769, 8.5417], [47.2800, 8.5400], [47.2100, 8.5500], [47.1406, 8.5844],
        [47.0700, 8.6500], [46.9980, 8.6050], [46.9024, 8.6241], [46.8800, 8.6700],
        [46.8000, 8.6900], [46.7720, 8.7000], [46.7300, 8.6000], [46.7400, 8.4540],
        [46.7000, 8.2350], [46.7540, 8.0380], [46.7000, 7.9200], [46.6560, 7.7750],
        [46.6200, 7.8000], [46.5950, 7.9100], [46.5540, 7.9000], [46.6240, 8.0340],
        [46.6580, 8.1040]
    ];

    const mainPolyline = L.polyline(routePoints, { color: '#2c7ab1', weight: 4, opacity: 0.8, smoothFactor: 1.5 }).addTo(map);
    const boatPoints = [[46.9980, 8.6053], [46.9024, 8.6241]];
    L.polyline(boatPoints, { color: '#f5a623', weight: 3, dashArray: '8, 8', opacity: 0.9 }).addTo(map);

    // Day markers with image thumbnails
    const dayStops = [
        { lat: 47.3769, lng: 8.5417, day: 1, name: "Zurich start", dist: "0 km", info: "Departure from Zurich HB", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Zurich_old_town.jpg/320px-Zurich_old_town.jpg" },
        { lat: 47.1406, lng: 8.5844, day: 1, name: "Unterägeri", dist: "58 km (Day 1)", info: "Lake Aegeri, wild camp nearby", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Aegerisee_01.jpg/320px-Aegerisee_01.jpg" },
        { lat: 46.9980, lng: 8.6053, day: 2, name: "Brunnen", dist: "110 km cumulative", info: "End of Day 2 · Lake Lucerne shore", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Brunnen_Switzerland_Lake_Lucerne.jpg/320px-Brunnen_Switzerland_Lake_Lucerne.jpg" },
        { lat: 46.9024, lng: 8.6241, day: 3, name: "Flüelen (boat arrival)", dist: "Day 3 · +55 km (boat incl.)", info: "After Axenstrasse closure alternate", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Maderanertal.jpg/320px-Maderanertal.jpg" },
        { lat: 46.7720, lng: 8.7000, day: 3, name: "Maderanertal end", dist: "Day 3 total ~55 km", info: "Wild camp at valley dead end", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Maderanertal.jpg/320px-Maderanertal.jpg" },
        { lat: 46.7400, lng: 8.4540, day: 4, name: "Sustenpass (2,224 m)", dist: "Day 4 · 48 km, +1,950m", info: "Hardest day, Steingletscher viewpoint", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sustenpass.jpg/320px-Sustenpass.jpg" },
        { lat: 46.7000, lng: 8.2350, day: 4, name: "Innertkirchen", dist: "Day 4 finish", info: "Base of Susten descent", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Aareschlucht_03.jpg/320px-Aareschlucht_03.jpg" },
        { lat: 46.7540, lng: 8.0380, day: 5, name: "Brienz", dist: "Day 5 · 32 km (recovery)", info: "Turquoise lake, Aare Gorge", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Aareschlucht_03.jpg/320px-Aareschlucht_03.jpg" },
        { lat: 46.6560, lng: 7.7750, day: 6, name: "Leissigen", dist: "Day 6 · 60 km", info: "Lake Thun, wild camp above", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Giessbach_falls.jpg/320px-Giessbach_falls.jpg" },
        { lat: 46.5540, lng: 7.9000, day: 7, name: "Stechelberg", dist: "Day 7 · 52 km", info: "★ Best camp: 72 waterfalls, vertical cliffs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lauterbrunnen_valley_01.jpg/320px-Lauterbrunnen_valley_01.jpg" },
        { lat: 46.6240, lng: 8.0340, day: 8, name: "Grindelwald", dist: "Day 8 · 38 km", info: "Eiger north face, Camping Gletscherdorf", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Eiger_north_face_Grindelwald.jpg/320px-Eiger_north_face_Grindelwald.jpg" },
        { lat: 46.6580, lng: 8.1040, day: 9, name: "Grosse Scheidegg", dist: "Day 9 · 28 km loop", info: "No-car gravel pass, 1,962m, epic finale", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Grosse_Scheidegg.jpg/320px-Grosse_Scheidegg.jpg" }
    ];

    dayStops.forEach(stop => {
        let markerColor = stop.day === 4 ? '#e24b4a' : (stop.day === 9 ? '#639922' : '#2c7ab1');
        let markerHtml = L.divIcon({
            html: `<div style="background:${markerColor}; width:12px; height:12px; border-radius:50%; border:2px solid white; box-shadow:0 0 0 1px #333;"></div>`,
            iconSize: [12,12],
            className: 'custom-marker'
        });
        const popupContent = `
            <div style="min-width:220px;">
                <strong>Day ${stop.day}</strong><br>
                <b>${stop.name}</b><br>
                📍 ${stop.dist}<br>
                ${stop.info}
                ${stop.image ? `<br><img src="${stop.image}" alt="${stop.name}" style="width:100%; border-radius:8px; margin-top:6px;">` : ''}
            </div>
        `;
        L.marker([stop.lat, stop.lng], { icon: markerHtml }).addTo(map)
         .bindPopup(popupContent);
    });

    L.marker([46.950, 8.615]).addTo(map).bindPopup("🚢 Lake Uri boat crossing (replaces closed Axenstrasse)").openPopup();
    L.circleMarker([46.97, 8.60], { radius: 5, color: '#e24b4a', fill: true, fillColor: '#e24b4a', fillOpacity: 0.7 })
     .addTo(map).bindPopup("⚠️ Axenstrasse closed to cyclists (Day 3) → use boat");

    map.fitBounds(mainPolyline.getBounds().pad(0.15));
}

// ========================
// WEATHER (unchanged)
// ========================
function getWeatherEmoji(code) {
    const icons = {0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',71:'❄️',73:'❄️',75:'❄️',77:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',85:'❄️',86:'❄️',95:'⛈️',96:'⛈️',99:'⛈️'};
    return icons[code] || '🌈';
}
function getWeatherDesc(code) {
    const desc = {0:'Clear',1:'Mainly clear',2:'Partly cloudy',3:'Overcast',45:'Fog',48:'Depositing rime fog',51:'Light drizzle',53:'Moderate drizzle',55:'Dense drizzle',61:'Slight rain',63:'Moderate rain',65:'Heavy rain',71:'Slight snow',73:'Moderate snow',75:'Heavy snow',77:'Snow grains',80:'Slight rain showers',81:'Moderate rain showers',82:'Violent rain showers',85:'Slight snow showers',86:'Heavy snow showers',95:'Thunderstorm',96:'Thunderstorm with slight hail',99:'Thunderstorm with heavy hail'};
    return desc[code] || 'Unknown';
}
async function renderWeather(dailyData, source) { /* unchanged */ }
async function fetchWeather() { /* unchanged */ }
window.addEventListener('load', () => { buildDayCards(); initMap(); fetchWeather(); });