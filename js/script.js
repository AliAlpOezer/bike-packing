// ========================
// DAY DATA – all images use Special:FilePath (reliable)
// ========================
const daysData = [
    {
        label: "Day 1 · Moderate",
        name: "Into the forest cathedral",
        route: "Zurich → Sihltal → Albis Ridge → Unterägeri",
        dist: "58 km",
        elev: "+950 m",
        body: `<p>Leave Zurich via Wollishofen and enter the Sihltal river valley. Sihlwald forest, Albispass (789 m), descend to Lake Aegeri. Wild camp above lake.</p>`,
        camp: `🏕️ Wild camp: Forest edge above Lake Aegeri east shore.`,
        typeClass: "",
        stops: [
            { name: "Zürich", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Z%C3%BCrich.jpg?width=800", desc: "Start at Zurich HB, the lively city by the water." },
            { name: "Sihltal & Sihlwald", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aegerisee.jpg?width=800", desc: "Follow the Sihl river through deep forest." },
            { name: "Albispass", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sustenpass.jpg?width=800", desc: "Climb to Albispass (789 m) with views over the lake." },
            { name: "Unterägeri & Lake Aegeri", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aegerisee.jpg?width=800", desc: "Descend to the crystal‑clear Ägerisee. Wild camp above the lake." }
        ],
        forecastLat: 47.1406, forecastLon: 8.5844
    },
    {
        label: "Day 2 · Moderate",
        name: "Hidden lakes and Lake Lucerne",
        route: "Unterägeri → Sattel → Lauerz → Schwyz → Morschach → Brunnen",
        dist: "52 km",
        elev: "+720 m",
        body: `<p>Rothenthurm peatbog, Lauerzersee loop, Schwyz, Morschach panorama, descent to Brunnen.</p>`,
        camp: `🏕️ Wild camp: Pine forest bench between Morschach and Brunnen.`,
        typeClass: "",
        stops: [
            { name: "Unterägeri", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aegerisee.jpg?width=800", desc: "Leave the peaceful lake behind." },
            { name: "Rothenthurm moor", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Vierwaldstaettersee.jpg?width=800", desc: "Cross the vast peatbog, a nature reserve." },
            { name: "Lauerz & Schwyz", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Vierwaldstaettersee.jpg?width=800", desc: "Ride through the medieval town of Schwyz." },
            { name: "Morschach → Brunnen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Vierwaldstaettersee.jpg?width=800", desc: "Panoramic descent to Brunnen on Lake Lucerne." }
        ],
        forecastLat: 46.9980, forecastLon: 8.6053
    },
    {
        label: "Day 3 · Moderate ⚠ CLOSURE",
        name: "Boat & secret valley",
        route: "Brunnen → (boat) Flüelen → Altdorf → Maderanertal",
        dist: "55 km",
        elev: "+700 m",
        body: `<div class="warn-box"><p>❌ Axenstrasse closed: take URJ boat Brunnen→Flüelen.</p></div><p>Maderanertal – hidden valley, waterfalls, dead‑end at Balmenschachen.</p>`,
        camp: `🏕️ Wild camp: Valley end meadows at Balmenschachen.`,
        typeClass: "",
        stops: [
            { name: "Brunnen boat", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Vierwaldstaettersee.jpg?width=800", desc: "Board the URJ boat, bikes welcome." },
            { name: "Flüelen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Maderanertal.jpg?width=800", desc: "Arrive at Flüelen, gateway to the Reuss valley." },
            { name: "Altdorf", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Maderanertal.jpg?width=800", desc: "Ride through the historic capital of Uri." },
            { name: "Maderanertal", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Maderanertal.jpg?width=800", desc: "Enter the wild Maderanertal, ending at Balmenschachen." }
        ],
        forecastLat: 46.7720, forecastLon: 8.7000
    },
    {
        label: "Day 4 · HARDEST DAY ★",
        name: "Over Susten Pass",
        route: "Maderanertal → Wassen → Sustenpass (2,224 m) → Innertkirchen",
        dist: "48 km",
        elev: "+1,950 m",
        body: `<p>Steingletscher viewpoint, pass summit 2,224 m, epic descent to Innertkirchen. Wild camp above Gadmen meadows.</p>`,
        camp: `🏕️ Wild camp: Gadmen meadows above treeline.`,
        typeClass: "hard",
        stops: [
            { name: "Maderanertal exit", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Maderanertal.jpg?width=800", desc: "Leave the secret valley." },
            { name: "Wassen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sustenpass.jpg?width=800", desc: "Begin the legendary climb." },
            { name: "Sustenpass summit (2,224 m)", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sustenpass.jpg?width=800", desc: "Steingletscher view, highest point of the trip." },
            { name: "Innertkirchen descent", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aareschlucht.jpg?width=800", desc: "Sweeping descent into Gadmen valley." }
        ],
        forecastLat: 46.7400, forecastLon: 8.4540
    },
    {
        label: "Day 5 · Easy — Recovery",
        name: "Aare Gorge & Brienz",
        route: "Innertkirchen → Meiringen → Aare Gorge → Brienz",
        dist: "32 km",
        elev: "+320 m",
        body: `<p>Aareschlucht, Reichenbach Falls, Lake Brienz turquoise water. Wild camp east shore above Brienz.</p><div class="star-box"><div class="star-label">★ Best camp of trip</div><div class="star-body">Stechelberg, Lauterbrunnen valley (Day 7)</div></div>`,
        camp: "",
        typeClass: "easy",
        stops: [
            { name: "Innertkirchen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aareschlucht.jpg?width=800", desc: "Easy start near the gorge." },
            { name: "Aare Gorge", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aareschlucht.jpg?width=800", desc: "Walk through the narrow Aareschlucht." },
            { name: "Reichenbach Falls", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Giessbach.jpg?width=800", desc: "See the famous Sherlock Holmes waterfall." },
            { name: "Brienz", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aareschlucht.jpg?width=800", desc: "Arrive at the turquoise Lake Brienz." }
        ],
        forecastLat: 46.7540, forecastLon: 8.0380
    },
    {
        label: "Day 6 · Moderate",
        name: "Two lakes: Brienz → Thun",
        route: "Brienz → Giessbach → Lake Brienz south → Interlaken → Lake Thun → Leissigen",
        dist: "60 km",
        elev: "+580 m",
        body: `<p>Giessbach Falls, quiet south shore, Interlaken, Lake Thun east shore to Leissigen. Wild camp above Leissigen.</p>`,
        camp: "",
        typeClass: "",
        stops: [
            { name: "Giessbach Falls", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Giessbach.jpg?width=800", desc: "Majestic waterfall cascading into Lake Brienz." },
            { name: "Lake Brienz south shore", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aareschlucht.jpg?width=800", desc: "Quiet road along the lake." },
            { name: "Interlaken", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen.jpg?width=800", desc: "Between two lakes, a bustling hub." },
            { name: "Leissigen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Giessbach.jpg?width=800", desc: "Lake Thun east shore, wild camp above." }
        ],
        forecastLat: 46.6560, forecastLon: 7.7750
    },
    {
        label: "Day 7 · Moderate",
        name: "Valley of 72 waterfalls",
        route: "Leissigen → Interlaken → Lauterbrunnen → Stechelberg",
        dist: "52 km",
        elev: "+640 m",
        body: `<p>Lauterbrunnen valley, Staubbachfall, Trümmelbachfälle, road end at Stechelberg – best camp of the trip.</p>`,
        camp: `🏕️ ★ BEST CAMP: Stechelberg valley end, 18 waterfalls, alpine zone.`,
        typeClass: "",
        stops: [
            { name: "Interlaken", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen.jpg?width=800", desc: "Quick transit through Interlaken." },
            { name: "Lauterbrunnen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen.jpg?width=800", desc: "Enter the valley of 72 waterfalls." },
            { name: "Staubbachfall", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen.jpg?width=800", desc: "Free‑falling 297 m waterfall." },
            { name: "Stechelberg", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen.jpg?width=800", desc: "Road’s end, best camp of the entire trip." }
        ],
        forecastLat: 46.5540, forecastLon: 7.9000
    },
    {
        label: "Day 8 · Moderate",
        name: "The Eiger arrives",
        route: "Stechelberg → Lauterbrunnen → Zweilütschinen → Grindelwald",
        dist: "38 km",
        elev: "+900 m",
        body: `<p>Return through valley, then climb to Grindelwald basin – first sight of Eiger north face. Camp at Gletscherdorf.</p>`,
        camp: "",
        typeClass: "",
        stops: [
            { name: "Stechelberg", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen.jpg?width=800", desc: "Start the climb out of the valley." },
            { name: "Lauterbrunnen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen.jpg?width=800", desc: "Back through the waterfall valley." },
            { name: "Zweilütschinen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Eiger_Nordwand.jpg?width=800", desc: "The fork where the Lütschine rivers meet." },
            { name: "Grindelwald", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Eiger_Nordwand.jpg?width=800", desc: "Eiger north face suddenly appears – epic finale." }
        ],
        forecastLat: 46.6240, forecastLon: 8.0340
    },
    {
        label: "Day 9 · Grand finale — Epic loop",
        name: "Grosse Scheidegg (no‑car gravel)",
        route: "Grindelwald → Grosse Scheidegg (1,962 m) → return",
        dist: "28 km",
        elev: "+740 m",
        body: `<div class="info-box"><p>🚫 No private cars – only cyclists and PostBus. Compacted gravel, perfect finale.</p></div><p>Views of Wetterhorn and Eiger massif, marmots, Berghaus since 1859. Return to Grindelwald.</p><div class="info-box"><p>🚆 Departure: Grindelwald → Interlaken → Bern → Zurich. Bike day pass CHF ~18.</p></div>`,
        camp: "",
        typeClass: "epic",
        stops: [
            { name: "Grindelwald", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Eiger_Nordwand.jpg?width=800", desc: "Start the car‑free gravel climb." },
            { name: "Grosse Scheidegg", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Grosse_Scheidegg.jpg?width=800", desc: "1,962 m pass, Wetterhorn views." },
            { name: "Berghaus (1859)", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Grosse_Scheidegg.jpg?width=800", desc: "Historic mountain inn, perfect break." },
            { name: "Return to Grindelwald", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Eiger_Nordwand.jpg?width=800", desc: "Coast back to the village, trip complete." }
        ],
        forecastLat: 46.6580, forecastLon: 8.1040
    }
];

// ========================
// BUILD DAY CARDS + NAV (unchanged)
// ========================
function buildDayCards() {
    const navContainer = document.getElementById('day-nav-buttons');
    const cardsContainer = document.getElementById('day-cards-container');

    daysData.forEach((day, idx) => {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        if (day.typeClass === 'hard') btn.classList.add('hard');
        if (day.typeClass === 'easy') btn.classList.add('easy');
        if (day.typeClass === 'epic') btn.classList.add('epic');
        btn.textContent = `D${idx+1} ${day.label.split('·')[1]?.trim() || day.label}`;
        btn.addEventListener('click', () => showDay(idx));
        if (idx === 0) btn.classList.add('active');
        navContainer.appendChild(btn);

        const card = document.createElement('div');
        card.className = 'day-card';
        if (idx === 0) card.classList.add('visible');
        card.id = `day-${idx}`;
        card._stops = day.stops;
        card._forecastLat = day.forecastLat;
        card._forecastLon = day.forecastLon;
        card._weatherFetched = false;
        card._currentSlide = 0;

        let stopsHTML = '';
        day.stops.forEach((stop, stopIdx) => {
            stopsHTML += `
                <div class="gallery-slide" data-stop="${stopIdx}" style="display: ${stopIdx === 0 ? 'block' : 'none'};">
                    <img src="${stop.img}" alt="${stop.name}" class="gallery-image">
                    <div class="gallery-caption">
                        <strong>${stop.name}</strong>
                        <p>${stop.desc}</p>
                    </div>
                </div>`;
        });

        stopsHTML += `
            <div class="gallery-slide weather-slide" data-stop="weather" style="display: none;">
                <div class="weather-forecast-inline" id="weather-forecast-${idx}">
                    <p class="weather-loading">Loading forecast…</p>
                </div>
            </div>`;

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
                ${day.body}
                <div class="gallery-container">
                    <button class="gallery-arrow left" data-dir="-1">&#10094;</button>
                    <div class="gallery-viewport">
                        ${stopsHTML}
                    </div>
                    <button class="gallery-arrow right" data-dir="1">&#10095;</button>
                </div>
                <div class="gallery-dots">
                    ${day.stops.map((_, i) => `<span class="dot" data-stop="${i}"></span>`).join('')}
                    <span class="dot weather-dot" data-stop="weather"></span>
                </div>
                ${day.camp ? `<div class="camp-box">${day.camp}</div>` : ''}
            </div>
        `;
        cardsContainer.appendChild(card);
        initCarousel(card);
    });
}

// ========================
// CAROUSEL LOGIC
// ========================
function initCarousel(card) {
    const slides = card.querySelectorAll('.gallery-slide');
    const dots = card.querySelectorAll('.dot');
    const leftBtn = card.querySelector('.gallery-arrow.left');
    const rightBtn = card.querySelector('.gallery-arrow.right');

    function goToSlide(index) {
        slides.forEach(s => s.style.display = 'none');
        slides[index].style.display = 'block';
        card._currentSlide = index;
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        if (index === slides.length - 1 && !card._weatherFetched) {
            loadInlineWeather(card);
        }
    }

    goToSlide(0);

    leftBtn.addEventListener('click', () => {
        let newIdx = card._currentSlide - 1;
        if (newIdx < 0) newIdx = slides.length - 1;
        goToSlide(newIdx);
    });
    rightBtn.addEventListener('click', () => {
        let newIdx = card._currentSlide + 1;
        if (newIdx >= slides.length) newIdx = 0;
        goToSlide(newIdx);
    });
    dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
}

// ========================
// INLINE WEATHER
// ========================
async function loadInlineWeather(card) {
    const container = card.querySelector('.weather-forecast-inline');
    if (!container) return;
    const lat = card._forecastLat, lon = card._forecastLon;
    const today = new Date().toISOString().split('T')[0];
    const endDate = new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0];
    const params = 'temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode';
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=${params}&timezone=auto&start_date=${today}&end_date=${endDate}`);
        const data = await res.json();
        if (data?.daily?.time?.length) {
            renderInlineWeather(container, data.daily);
            card._weatherFetched = true;
            return;
        }
    } catch (e) {}
    container.innerHTML = '<p class="weather-loading">Forecast unavailable</p>';
}

function renderInlineWeather(container, daily) {
    let html = '';
    for (let i = 0; i < daily.time.length; i++) {
        const date = new Date(daily.time[i] + 'T00:00:00');
        const day = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        const emoji = getWeatherEmoji(daily.weathercode[i]);
        const max = Math.round(daily.temperature_2m_max[i]);
        const min = Math.round(daily.temperature_2m_min[i]);
        const rain = daily.precipitation_sum[i] != null ? daily.precipitation_sum[i].toFixed(1) : '?';
        const mood = max >= 16 ? '😃' : '😔';
        html += `
            <div class="weather-day-card">
                <div class="weather-date">${day}</div>
                <div class="weather-icon">${emoji}</div>
                <div class="weather-temp">${max}° / ${min}° <span class="mood-emoji">${mood}</span></div>
                <div class="weather-precip">💧 ${rain} mm</div>
            </div>`;
    }
    container.innerHTML = `<div class="weather-grid">${html}</div>`;
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
// MAP (updated markers with Special:FilePath)
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
    L.polyline([[46.9980, 8.6053], [46.9024, 8.6241]], { color: '#f5a623', weight: 3, dashArray: '8, 8', opacity: 0.9 }).addTo(map);

    const markers = [
        { lat: 47.3769, lng: 8.5417, day: 1, name: "Zurich start", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Z%C3%BCrich.jpg?width=320" },
        { lat: 47.1406, lng: 8.5844, day: 1, name: "Unterägeri", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aegerisee.jpg?width=320" },
        { lat: 46.9980, lng: 8.6053, day: 2, name: "Brunnen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Vierwaldstaettersee.jpg?width=320" },
        { lat: 46.9024, lng: 8.6241, day: 3, name: "Flüelen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Maderanertal.jpg?width=320" },
        { lat: 46.7720, lng: 8.7000, day: 3, name: "Maderanertal end", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Maderanertal.jpg?width=320" },
        { lat: 46.7400, lng: 8.4540, day: 4, name: "Sustenpass", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sustenpass.jpg?width=320" },
        { lat: 46.7000, lng: 8.2350, day: 4, name: "Innertkirchen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aareschlucht.jpg?width=320" },
        { lat: 46.7540, lng: 8.0380, day: 5, name: "Brienz", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Aareschlucht.jpg?width=320" },
        { lat: 46.6560, lng: 7.7750, day: 6, name: "Leissigen", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Giessbach.jpg?width=320" },
        { lat: 46.5540, lng: 7.9000, day: 7, name: "Stechelberg", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen.jpg?width=320" },
        { lat: 46.6240, lng: 8.0340, day: 8, name: "Grindelwald", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Eiger_Nordwand.jpg?width=320" },
        { lat: 46.6580, lng: 8.1040, day: 9, name: "Grosse Scheidegg", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Grosse_Scheidegg.jpg?width=320" }
    ];

    markers.forEach(m => {
        let color = m.day === 4 ? '#e24b4a' : (m.day === 9 ? '#639922' : '#2c7ab1');
        L.marker([m.lat, m.lng], {
            icon: L.divIcon({ html: `<div style="background:${color}; width:12px; height:12px; border-radius:50%; border:2px solid white; box-shadow:0 0 0 1px #333;"></div>`, iconSize: [12,12], className: 'custom-marker' })
        }).addTo(map).bindPopup(`<strong>Day ${m.day}</strong><br><b>${m.name}</b><br><img src="${m.img}" style="width:100%; border-radius:8px; margin-top:6px;">`);
    });

    L.marker([46.950, 8.615]).addTo(map).bindPopup("🚢 Lake Uri boat crossing").openPopup();
    L.circleMarker([46.97, 8.60], { radius: 5, color: '#e24b4a' }).addTo(map).bindPopup("⚠️ Axenstrasse closed (Day 3)");
    map.fitBounds(mainPolyline.getBounds().pad(0.15));
}

// ========================
// GLOBAL WEATHER EMOJI
// ========================
function getWeatherEmoji(code) {
    const icons = {0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',71:'❄️',73:'❄️',75:'❄️',77:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',85:'❄️',86:'❄️',95:'⛈️',96:'⛈️',99:'⛈️'};
    return icons[code] || '🌈';
}

// ========================
// MAIN WEATHER FORECAST (Interlaken region, May 21‑31)
// ========================
function getWeatherDesc(code) {
    const desc = {
        0: 'Clear', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
        45: 'Fog', 48: 'Depositing rime fog',
        51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
        61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
        71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
        85: 'Slight snow showers', 86: 'Heavy snow showers',
        95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail'
    };
    return desc[code] || 'Unknown';
}

async function renderWeather(dailyData, source) {
    const container = document.getElementById('weather-container');
    const note = document.getElementById('weather-note');
    container.innerHTML = '';
    if (!dailyData || !dailyData.time) {
        container.innerHTML = '<div class="weather-loading">No data available.</div>';
        return;
    }

    for (let i = 0; i < dailyData.time.length; i++) {
        const date = new Date(dailyData.time[i] + 'T00:00:00');
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dayMonth = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const emoji = getWeatherEmoji(dailyData.weathercode[i]);
        const max = Math.round(dailyData.temperature_2m_max[i]);
        const min = Math.round(dailyData.temperature_2m_min[i]);
        const rain = dailyData.precipitation_sum[i] != null ? dailyData.precipitation_sum[i].toFixed(1) : '?';
        const mood = max >= 16 ? '😃' : '😔';
        const badgeText = source === 'forecast' ? '📡 Live' : '📊 Avg';
        const badgeTitle = source === 'forecast' ? 'Live forecast' : 'Climate average';

        const card = document.createElement('div');
        card.className = 'weather-day-card';
        card.innerHTML = `
            <div class="weather-source-badge" title="${badgeTitle}">${badgeText}</div>
            <div class="weather-date">${dayName}<br>${dayMonth}</div>
            <div class="weather-icon" title="${getWeatherDesc(dailyData.weathercode[i])}">${emoji}</div>
            <div class="weather-temp">${max}° / ${min}° <span class="mood-emoji">${mood}</span></div>
            <div class="weather-precip">💧 <span>${rain} mm</span></div>
        `;
        container.appendChild(card);
    }

    note.textContent = source === 'forecast'
        ? '📡 Live forecast data · Each card shows "Live" badge.'
        : '📊 Based on long‑term climate averages · Cards show "Avg" badge.';
}

async function fetchWeather() {
    const lat = 46.6863, lon = 7.8635;
    const start = '2026-05-21', end = '2026-05-31';
    const params = 'temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode';

    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=${params}&timezone=Europe/Zurich&start_date=${start}&end_date=${end}`);
        const data = await res.json();
        if (data?.daily?.time?.length && !data.error) return renderWeather(data.daily, 'forecast');
    } catch (e) {
        console.warn('Forecast fetch failed, trying climate averages...', e);
    }

    try {
        const res = await fetch(`https://climate-api.open-meteo.com/v1/climate?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&daily=${params}&timezone=Europe/Zurich`);
        const data = await res.json();
        if (data?.daily?.time?.length) return renderWeather(data.daily, 'climate');
    } catch (e) {
        console.error('Climate fetch failed', e);
    }

    document.getElementById('weather-container').innerHTML = '<div class="weather-loading">Could not load weather data. Please try again later.</div>';
    document.getElementById('weather-note').textContent = '';
}

// ========================
// INIT
// ========================
window.addEventListener('load', () => {
    buildDayCards();
    initMap();
    // main forecast if you still want the Interlaken section (optional)
    fetchWeather();
});