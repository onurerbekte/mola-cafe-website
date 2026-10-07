'use strict';
// Türkçe metinleri HTML'den alırız; İngilizce karşılıklar burada tutulur.
const english = {
  skip:'Skip to content',demo:'Portfolio demo • Mola is a fictional business. No orders or reservations are accepted.',navToggle:'Menu',menu:'Menu',story:'Our story',visit:'Visit',eyebrow:'A BREATHER IN THE NEIGHBORHOOD',headline:'A little pause. A better day.',intro:'A cup of coffee, something from the oven, and a moment without the rush. Welcome to Mola.',explore:'Explore the menu ↗',heroNote:'Coffee · Fresh bites · A quiet corner',artLabel:'Slow down a little.',menuEyebrow:'FROM CUP TO PLATE',menuTitle:'What are you in the mood for?',pricesNote:'Sample menu and prices • TRY',all:'All',coffee:'Coffee',food:'Bites',espresso:'A short, rich, simple start.',latte:'Espresso with silky milk foam.',filterCoffee:'Filter coffee',filterDesc:'A cup for long conversations.',croissant:'Croissant',croissantDesc:'A flaky, buttery break.',cookie:'Chocolate cookie',cookieDesc:'A little happiness with your coffee.',sandwich:'Cheese sandwich',sandwichDesc:'An easy option for a lunch break.',storyEyebrow:'A SMALL PLACE, A SIMPLE IDEA',storyTitle:'Good coffee.\nA comfortable table.\nA moment for yourself.',storyBody:'Mola is a sample brand inspired by a neighborhood café. This design presents a small business’s menu, story, and visit information on one page.',storyNote:'Products, prices, and opening hours are illustrative content; they do not belong to a real business.',visitEyebrow:'YOUR NEXT BREAK',visitTitle:'Drop by.',visitBody:'A real business can add its address, map link, and contact details here.',hours:'Sample opening hours',weekdays:'Monday – Friday',weekend:'Saturday – Sunday',contactNote:'Demo contact: No real address or phone number has been added.',footer:'A portfolio project developed by Onur Erbekte.'
};
const translatedElements = [...document.querySelectorAll('[data-i18n]')];
const turkish = Object.fromEntries(translatedElements.map(element => [element.dataset.i18n, element.innerText]));
let language = 'tr';
let activeFilter = 'all';
const navigation = document.querySelector('#navigation');
const menuToggle = document.querySelector('.menu-toggle');
const languageButton = document.querySelector('.language');
function updateStatus() {
  const count = document.querySelectorAll('[data-category]:not([hidden])').length;
  document.querySelector('#filter-status').textContent = language === 'tr' ? `${count} ürün gösteriliyor.` : `${count} items shown.`;
}
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-category]').forEach(item => { item.hidden = activeFilter !== 'all' && item.dataset.category !== activeFilter; });
    updateStatus();
  });
});
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
languageButton.addEventListener('click', () => {
  language = language === 'tr' ? 'en' : 'tr';
  const copy = language === 'tr' ? turkish : english;
  translatedElements.forEach(element => { element.textContent = copy[element.dataset.i18n]; });
  document.documentElement.lang = language;
  document.querySelector('[data-i18n="storyTitle"]').style.whiteSpace = 'pre-line';
  languageButton.textContent = language === 'tr' ? 'EN' : 'TR';
  languageButton.setAttribute('aria-label', language === 'tr' ? 'Switch to English' : 'Türkçeye geç');
  navigation.setAttribute('aria-label', language === 'tr' ? 'Ana gezinme' : 'Main navigation');
  document.querySelector('.filters').setAttribute('aria-label', language === 'tr' ? 'Menü filtreleri' : 'Menu filters');
  document.querySelector('[data-art]').setAttribute('aria-label', language === 'tr' ? 'Krem renkli fincanda kahve illüstrasyonu' : 'Illustration of coffee in a cream-colored cup');
  document.querySelector('meta[name="description"]').content = language === 'tr' ? 'Mola: örnek bir mahalle kahvecisi için iki dilli, mobil uyumlu demo web sitesi.' : 'Mola: a bilingual, responsive demo website for a fictional neighborhood café.';
  updateStatus();
});
