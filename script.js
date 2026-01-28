// --- DATA ---
const CATEGORIES = {
    "Локації": [
        "Лікарня", "Школа", "Військова база", "Поліцейська дільниця", "Театр",
        "Університет", "Пляж", "Океанський лайнер", "Потяг", "Літак",
        "Космічна станція", "Підводний човен", "Ресторан", "Церква", "Банк",
        "Спа-салон", "Супермаркет", "Парк розваг", "Зоопарк", "Музей",
        "Бібліотека", "Нічний клуб", "Будівельний майданчик", "Стадіон",
        "Казино", "Цирк", "Посольство", "Готель", "Аеропорт", "Вокзал",
        "Бензозаправка", "Цвинтар", "В'язниця", "Кінотеатр", "Боулінг",
        "Спортзал", "Пошта", "Пожежна частина", "Станція метро", "Галерея мистецтв",
        "Ринок", "Гора", "Печера", "Пустеля", "Джунглі", "Північний полюс",
        "Безлюдний острів", "Яхта", "Студія звукозапису", "Сауна"
    ],
    "Відомі люди": [
        "Тарас Шевченко", "Ілон Маск", "Володимир Зеленський", "Альберт Ейнштейн",
        "Мерілін Монро", "Кріштіану Роналду", "Майкл Джексон", "Королева Єлизавета II",
        "Стів Джобс", "Леся Українка", "Богдан Хмельницький", "Наполеон", "Шекспір",
        "Леонардо ді Капріо", "Анджеліна Джолі", "Бред Пітт", "Дональд Трамп",
        "Джо Байден", "Клеопатра", "Юлій Цезар", "Майкл Джордан", "Ліонель Мессі",
        "Усейн Болт", "Джоан Роулінг", "Стівен Кінг", "Опра Вінфрі", "Валерій Залужний",
        "Віталій Кличко", "Андрій Шевченко", "Елвіс Преслі", "Фредді Мерк'юрі"
    ],
    "Герої та Персонажі": [
        "Гаррі Поттер", "Бетмен", "Супермен", "Людина-павук", "Дарт Вейдер",
        "Шерлок Холмс", "Джеймс Бонд", "Шрек", "Губка Боб", "Залізна людина",
        "Маріо", "Пікачу", "Відьмак (Геральт)", "Джек Горобець", "Джокер", "Гендальф",
        "Тор", "Халк", "Капітан Америка", "Чорна Вдова", "Доктор Стрендж", "Танос",
        "Люк Скайвокер", "Йода", "Гомер Сімпсон", "Барт Сімпсон", "Міккі Маус",
        "Дональд Дак", "Скубі Ду", "Попелюшка", "Білосніжка", "Русалонька",
        "Ельза (Холодне серце)", "Вінні Пух", "Наруто", "Сон Гоку"
    ],
    "Тварини": [
        "Лев", "Пінгвін", "Жираф", "Слон", "Кіт", "Собака", "Орел", "Акула",
        "Дельфін", "Ведмідь", "Кенгуру", "Панда", "Тигр", "Вовк", "Лисиця",
        "Заєць", "Їжак", "Черепаха", "Крокодил", "Мавпа", "Коала", "Зебра",
        "Носоріг", "Бегемот", "Папуга", "Сова", "Жаба", "Змія", "Хом'як",
        "Кінь", "Корова", "Свиня", "Вівця", "Курка"
    ],
    "Професії": [
        "Лікар", "Вчитель", "Пожежник", "Поліцейський", "Програміст", "Кухар",
        "Водій", "Пілот", "Будівельник", "Художник", "Музикант", "Актор",
        "Суддя", "Фермер", "Перукар", "Офіціант", "Фотограф", "Журналіст",
        "Детектив", "Космонавт", "Стюардеса", "Стоматолог", "Механік",
        "Електрик", "Сантехнік", "Дизайнер", "Архітектор", "Психолог",
        "Ветеринар", "Тренер"
    ],
    "Їжа": [
        "Піца", "Борщ", "Суші", "Бургер", "Морозиво", "Шоколад", "Салат",
        "Стейк", "Паста", "Млинець", "Яблуко", "Банан", "Кавун", "Хліб",
        "Сир", "Торт", "Печиво", "Картопля фрі", "Хот-дог", "Шашлик",
        "Пельмені", "Вареники", "Суп", "Яєчня", "Круасан", "Пончик",
        "Попкорн", "Чіпси", "Ковбаса", "Риба"
    ]
};

const CATEGORY_KEYS = ["Випадкова", ...Object.keys(CATEGORIES)];

// --- STATE ---
let gameState = {
    status: 'SETUP',
    config: { totalPlayers: 4, spyCount: 1, category: "Випадкова" },
    players: [],
    currentPlayerIndex: 0,
    viewState: 'GRID',
    selectedPlayerId: null
};

// --- ICONS ---
const Icons = {
    fingerprint: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fingerprint-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" /></svg>',
    spy: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:40px;height:40px"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>',
    local: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:40px;height:40px"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:40px;height:40px;color:#ca8a04"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>',
    edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="edit-icon"><path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" /></svg>'
};

// --- GLOBAL EXPORTS ---
// Attached directly to window to ensure HTML onclick events can find them

window.changeConfig = function(type, delta) {
    if (type === 'players') {
        var newVal = gameState.config.totalPlayers + delta;
        if (newVal >= 3 && newVal <= 16) {
            gameState.config.totalPlayers = newVal;
            var maxSpies = Math.floor(newVal / 2);
            if (gameState.config.spyCount > maxSpies) gameState.config.spyCount = maxSpies;
        }
    } else if (type === 'spies') {
        var newVal = gameState.config.spyCount + delta;
        var maxSpies = Math.max(1, Math.floor(gameState.config.totalPlayers / 2));
        if (newVal >= 1 && newVal <= maxSpies) {
            gameState.config.spyCount = newVal;
        }
    }
    render();
};

window.changeCategory = function(dir) {
    var idx = CATEGORY_KEYS.indexOf(gameState.config.category);
    if (dir === 'next') {
        idx = (idx + 1) % CATEGORY_KEYS.length;
    } else {
        idx = (idx - 1 + CATEGORY_KEYS.length) % CATEGORY_KEYS.length;
    }
    gameState.config.category = CATEGORY_KEYS[idx];
    render();
};

window.startGame = function() {
    var availableRoles = [];
    if (gameState.config.category === "Випадкова") {
        Object.keys(CATEGORIES).forEach(function(k) {
            availableRoles = availableRoles.concat(CATEGORIES[k]);
        });
    } else {
        availableRoles = CATEGORIES[gameState.config.category] || [];
    }
    
    if (availableRoles.length === 0) availableRoles = ["Роль 1", "Роль 2"];

    var randomRole = availableRoles[Math.floor(Math.random() * availableRoles.length)];

    gameState.players = [];
    for (var i = 0; i < gameState.config.totalPlayers; i++) {
        gameState.players.push({
            id: i,
            name: "Гравець " + (i + 1),
            isSpy: false,
            role: randomRole
        });
    }

    var assignedSpies = 0;
    while (assignedSpies < gameState.config.spyCount) {
        var randomIndex = Math.floor(Math.random() * gameState.config.totalPlayers);
        if (!gameState.players[randomIndex].isSpy) {
            gameState.players[randomIndex].isSpy = true;
            gameState.players[randomIndex].role = "Шпигун";
            assignedSpies++;
        }
    }

    gameState.currentPlayerIndex = 0;
    gameState.status = 'REVEAL';
    render();
};

window.resetGame = function() {
    gameState.status = 'SETUP';
    gameState.players = [];
    gameState.viewState = 'GRID';
    render();
};

window.selectPlayer = function(id) {
    gameState.selectedPlayerId = id;
    gameState.viewState = 'CONFIRM';
    render();
};

window.setViewState = function(state) {
    gameState.viewState = state;
    render();
};


// --- RENDER LOGIC ---
function render() {
    var app = document.getElementById('app');
    if (!app) return;

    // We don't want to wipe app.innerHTML completely if we are just re-rendering setup,
    // but for simplicity in this vanilla version, we will clear and rebuild.
    app.innerHTML = '';
    
    if (gameState.status === 'SETUP') {
        renderSetup(app);
    } else if (gameState.status === 'REVEAL') {
        renderReveal(app);
    } else if (gameState.status === 'PLAYING') {
        renderGameInterface(app);
    }
}

function renderSetup(container) {
    var div = document.createElement('div');
    div.className = 'setup-container fade-in';
    
    div.innerHTML = `
        <div>
            <h1>Шпигун</h1>
            <p class="subtitle">Налаштування гри</p>
        </div>
        
        <div class="control-group">
            <label class="control-label">Гравців</label>
            <div class="control-row">
                <button class="btn-icon" onclick="window.changeConfig('players', -1)">−</button>
                <span class="control-value">${gameState.config.totalPlayers}</span>
                <button class="btn-icon" onclick="window.changeConfig('players', 1)">+</button>
            </div>
        </div>

        <div class="control-group">
            <label class="control-label">Шпигунів</label>
            <div class="control-row">
                <button class="btn-icon" onclick="window.changeConfig('spies', -1)">−</button>
                <span class="control-value text-red">${gameState.config.spyCount}</span>
                <button class="btn-icon" onclick="window.changeConfig('spies', 1)">+</button>
            </div>
        </div>

        <div class="control-group">
            <label class="control-label">Категорія</label>
            <div class="control-row">
                <button class="btn-icon" onclick="window.changeCategory('prev')">‹</button>
                <span class="category-value">${gameState.config.category}</span>
                <button class="btn-icon" onclick="window.changeCategory('next')">›</button>
            </div>
        </div>

        <button class="btn-primary mt-4" onclick="window.startGame()">Почати гру</button>
    `;
    container.appendChild(div);
}

function renderReveal(container) {
    var player = gameState.players[gameState.currentPlayerIndex];
    var isLast = gameState.currentPlayerIndex === gameState.players.length - 1;
    
    var div = document.createElement('div');
    div.className = 'reveal-container fade-in';
    
    var cardContent = player.isSpy 
        ? `<div class="role-icon bg-spy">${Icons.spy}</div>
           <div class="role-title text-red">ШПИГУН</div>
           <p class="role-desc">Не викажи себе!</p>`
        : `<div class="role-icon bg-local">${Icons.local}</div>
           <div class="role-title">${player.role}</div>
           <p class="role-desc">Знайди шпигуна</p>`;

    div.innerHTML = `
        <div class="text-center mt-4 w-full">
            <div class="player-name-container" id="nameDisplay">
                <h2>${player.name}</h2>
                ${Icons.edit}
            </div>
            <p class="subtitle">Тримай палець на картці</p>
        </div>
        
        <div class="card-scene">
            <div class="card" id="gameCard">
                <div class="card-face card-front">
                    ${Icons.fingerprint}
                    <p class="text-center"><b>Торкнись та тримай</b></p>
                    <p class="subtitle">щоб побачити роль</p>
                </div>
                <div class="card-face card-back">
                    ${cardContent}
                </div>
            </div>
        </div>
        
        <button class="btn-primary" id="nextBtn">${isLast ? "Почати гру" : "Наступний гравець"}</button>
    `;
    
    container.appendChild(div);

    var card = document.getElementById('gameCard');
    var nextBtn = document.getElementById('nextBtn');
    var nameDisplay = document.getElementById('nameDisplay');

    if (card && nextBtn) {
        var show = function(e) { 
            if(e.type==='contextmenu') e.preventDefault(); 
            card.classList.add('is-flipped'); 
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
        };
        var hide = function() { 
            card.classList.remove('is-flipped'); 
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        };
        
        card.addEventListener('mousedown', show);
        card.addEventListener('mouseup', hide);
        card.addEventListener('mouseleave', hide);
        card.addEventListener('touchstart', show, {passive: false});
        card.addEventListener('touchend', hide);

        nextBtn.onclick = function() {
            if (isLast) {
                gameState.status = 'PLAYING';
                gameState.viewState = 'GRID';
            } else {
                gameState.currentPlayerIndex++;
            }
            render();
        };
    }

    if (nameDisplay) {
        nameDisplay.onclick = function() {
            var currentName = player.name;
            var parent = nameDisplay.parentElement;
            parent.innerHTML = `<input type="text" id="nameInput" value="${currentName}" />`;
            var input = document.getElementById('nameInput');
            if (input) {
                input.focus();
                input.onblur = function() {
                    if (input.value.trim()) gameState.players[gameState.currentPlayerIndex].name = input.value.trim();
                    render();
                };
                input.onkeydown = function(e) { if(e.key === 'Enter') input.blur(); };
            }
        };
    }
}

function renderGameInterface(container) {
    if (gameState.viewState === 'GRID') {
        renderGrid(container);
    } else if (gameState.viewState === 'CONFIRM') {
        renderConfirm(container);
    } else if (gameState.viewState === 'REVEAL_SINGLE') {
        renderSingleReveal(container);
    } else if (gameState.viewState === 'LIST') {
        renderList(container);
    }
}

function renderGrid(container) {
    var div = document.createElement('div');
    div.className = 'reveal-container fade-in';
    
    var gridItems = gameState.players.map(function(p) {
        return `
            <div class="player-card" onclick="window.selectPlayer(${p.id})">
                <div class="player-number">${p.id + 1}</div>
                <div class="player-name-grid">${p.name}</div>
            </div>
        `;
    }).join('');

    div.innerHTML = `
        <div class="text-center w-full mb-2">
            <h2>Гравці</h2>
            <p class="subtitle">Натисни, щоб нагадати роль</p>
        </div>
        <div class="grid-container"><div class="players-grid">${gridItems}</div></div>
        <div class="w-full mt-4" style="display:flex; flex-direction:column; gap:10px;">
            <button class="btn-primary" style="background:linear-gradient(135deg, #a855f7, #ec4899)" onclick="window.setViewState('LIST')">Відкрити всі ролі</button>
            <button class="btn-secondary" onclick="window.resetGame()">Головне меню</button>
        </div>
    `;
    container.appendChild(div);
}

function renderConfirm(container) {
    var div = document.createElement('div');
    div.className = 'confirm-view fade-in';
    div.innerHTML = `
        <div class="warning-icon">${Icons.warning}</div>
        <div>
            <h2>Перевірка безпеки</h2>
            <p class="subtitle">Переконайтесь, що ніхто інший не дивиться на екран.</p>
        </div>
        <div class="w-full" style="display:flex; flex-direction:column; gap:10px;">
             <button class="btn-primary" onclick="window.setViewState('REVEAL_SINGLE')">Я сам, показати</button>
             <button class="btn-secondary" onclick="window.setViewState('GRID')">Скасувати</button>
        </div>
    `;
    container.appendChild(div);
}

function renderSingleReveal(container) {
    var player = gameState.players.find(function(p) { return p.id === gameState.selectedPlayerId; });
    if (!player) { window.setViewState('GRID'); return; }
    
    var div = document.createElement('div');
    div.className = 'reveal-container fade-in';

    var cardContent = player.isSpy 
        ? `<div class="role-icon bg-spy">${Icons.spy}</div><div class="role-title text-red">ШПИГУН</div>`
        : `<div class="role-icon bg-local">${Icons.local}</div><div class="role-title">${player.role}</div>`;

    div.innerHTML = `
        <div class="text-center mt-4"><h2>${player.name}</h2></div>
        <div class="card-scene">
            <div class="card" id="checkCard">
                <div class="card-face card-front">
                    ${Icons.fingerprint}
                    <p class="text-center"><b>Торкнись</b></p>
                </div>
                <div class="card-face card-back">
                    ${cardContent}
                </div>
            </div>
        </div>
        <button class="btn-primary" onclick="window.setViewState('GRID')">Сховати</button>
    `;
    container.appendChild(div);

    var card = document.getElementById('checkCard');
    if (card) {
        var show = function(e) { if(e.type==='contextmenu')e.preventDefault(); card.classList.add('is-flipped'); };
        var hide = function() { card.classList.remove('is-flipped'); };
        card.addEventListener('mousedown', show);
        card.addEventListener('mouseup', hide);
        card.addEventListener('touchstart', show, {passive: false});
        card.addEventListener('touchend', hide);
    }
}

function renderList(container) {
    var div = document.createElement('div');
    div.className = 'reveal-container fade-in';
    
    var listItems = gameState.players.map(function(p) {
        return `
            <div class="list-item ${p.isSpy ? 'spy' : 'local'}">
                <div style="display:flex;align-items:center">
                    <div class="badge ${p.isSpy ? 'badge-spy' : 'badge-local'}">${p.id+1}</div>
                    <b>${p.name}</b>
                </div>
                <span>${p.role}</span>
            </div>
        `;
    }).join('');

    div.innerHTML = `
        <h2>Всі ролі</h2>
        <div class="grid-container list-view">${listItems}</div>
        <button class="btn-secondary mt-4" onclick="window.resetGame()">Головне меню</button>
    `;
    container.appendChild(div);
}

// --- INIT ---
function init() {
    console.log("App init");
    render();
}

// Check loading state
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}