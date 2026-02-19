function changeHeaderColor(el) {
    el.style.color = "#2ecc71";
}

const mainHeader = document.getElementById('main-header');
mainHeader.onclick = function() {
    this.style.transform = "scale(1.05)";
    console.log("Заголовок масштабовано через властивість onclick");
};

const promoCard = document.getElementById('special-promo-card');

function handlerLog() { console.log("Промо-банер активовано."); }
function handlerShadow() { promoCard.style.boxShadow = "0 20px 50px rgba(46, 204, 113, 0.3)"; }

promoCard.addEventListener('mouseenter', handlerLog);
promoCard.addEventListener('mouseenter', handlerShadow);

let storeManager = {
    handleEvent(event) {
        alert("Обробник спрацював на: " + event.currentTarget.id);
        
        promoCard.removeEventListener('click', storeManager);
        console.log("Обробник-об'єкт видалено.");
    }
};
promoCard.addEventListener('click', storeManager);

const grid = document.getElementById('interactive-category-list');
grid.onclick = function(event) {
    let card = event.target.closest('.product-card');
    if (!card || !grid.contains(card)) return;

    Array.from(grid.children).forEach(c => c.classList.remove('highlight-item'));
    card.classList.add('highlight-item');
};

const menu = document.getElementById('action-menu');
const methods = {
    showWelcome() { alert("Вітаємо в преміум-маркеті Світ Продуктів!"); },
    contactSupport() { alert("Менеджер онлайн. Чим допомогти?"); },
    toggleTheme() { document.body.classList.toggle('dark-mode'); }
};

menu.onclick = function(event) {
    let btn = event.target.closest('button');
    if (!btn) return;
    let method = btn.dataset.method;
    if (method && methods[method]) methods[method]();
};


document.addEventListener('click', function(event) {
    if (event.target.dataset.counter !== undefined) {
        event.target.value++;
        event.target.style.background = "#2ecc71";
    }
});