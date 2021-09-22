function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => creatHTMLString(item)).join('');
}

function creatHTMLString(item) {
    return `
    <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item__description">${item.product} price: ${item.price}</span>
    </li>
    `;
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onClickButton(event, items));
}

function onClickButton(event, items) {
    const dataset = event.target.dataset;
    const value = dataset.value;
    const key = dataset.key;

    if (key == null || value == null) {
        return;
    }

    displayItems(items.filter(item => item[key] === value));
}
function catBtn() {
const catBtn = document.querySelector('.catBtn');
const buttons = document.querySelector('.buttons');

catBtn.addEventListener('click', () => {
    buttons.classList.toggle('active');
})
}

catBtn()
loadItems()
.then(items => { 
    displayItems(items);
    setEventListeners(items)
})
.catch(console.log);
