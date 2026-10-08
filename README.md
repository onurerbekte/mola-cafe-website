# Mola — Küçük işletme web sitesi / Small business website

## Türkçe

Mola, kurgusal bir mahalle kahvecisi için hazırlanmış çalışan bir portföy demosudur. İşletme, menü, fiyatlar ve saatler örnektir. Sipariş, rezervasyon veya mesaj gönderimi yoktur.

### 10 satırlık özet
1. Küçük bir işletmeyi tanıtan tek sayfalık web sitesi yaptık.
2. HTML5 ile başlık, gezinme, menü, hikâye ve ziyaret bölümlerini kurduk.
3. CSS ile renkler, tipografi ve kahve fincanı illüstrasyonu oluşturduk.
4. CSS Grid ve Flexbox ile masaüstü ve mobil yerleşimler hazırladık.
5. Media query ile dar ekranlarda yerleşimi değiştirdik.
6. JavaScript ile mobil menüyü açıp kapattık.
7. Ürünleri kahve ve atıştırmalık olarak filtreledik.
8. Türkçe ve İngilizce arasında sayfayı yenilemeden geçiş ekledik.
9. Klavye odağı, içerik atlama bağlantısı ve ARIA durumları ekledik.
10. Projeyi Git ile takip edilen, bağımlılıksız statik dosyalar halinde düzenledik.

### Bilgisayarında çalıştırma
1. Bu klasörde `dist` klasörünü aç.
2. `index.html` dosyasına çift tıkla; varsayılan tarayıcında açılır.
3. EN düğmesine basarak İngilizceyi, TR düğmesine basarak Türkçeyi gör.
4. Menü bölümündeki filtreleri dene.
5. Tarayıcı penceresini daralt; mobil Menü düğmesini dene.
6. Geliştirici araçlarında farklı ekran boyutlarını seçebilirsin (F12).

Kurulum, internet veya API anahtarı gerekmez. Yerel HTTP önizlemesi için Node.js varsa bu klasörde terminal açıp `node preview.cjs` çalıştır ve `http://127.0.0.1:4173` adresini aç. Durdurmak için Ctrl+C.

### Kodun ana kısımları
- `dist/index.html`: Sayfanın iskeleti ve Türkçe başlangıç içeriği. `section` bölümleri düzenler, `article` ürünleri temsil eder. `data-i18n` hangi metnin çevrileceğini belirtir.
- `dist/styles.css`: Görünümü yönetir. `:root` ortak renkleri tutar. Grid iki boyutlu yerleşimleri, Flexbox gezinme gibi tek yönlü yerleşimleri düzenler. Media query ekran genişliğine göre tasarımı değiştirir. Fincan CSS şekillerinden oluşur.
- `dist/app.js`: Kullanıcı etkileşimleri. `querySelector` HTML öğesini bulur, `addEventListener` tıklamayı dinler. `hidden` uygun olmayan ürünleri saklar. `aria-pressed` seçili filtreyi, `aria-expanded` menünün açık olup olmadığını bildirir. Dil düğmesi sözlükteki metni `textContent` ile yerleştirir.
- `preview.cjs`: İsteğe bağlı yerel önizleme sunucusu; yalnızca üç site dosyasını bilgisayarında sunar.

### Mülakat / müşteri görüşmesi: 5 soru ve cevap
1. **Neden React kullanmadın?** Bu kapsam tek sayfa ve birkaç etkileşimden oluşuyor. HTML/CSS/JS yeterli; ek kurulum ve bağımlılık gerektirmiyor.
2. **Mobil uyumu nasıl sağladın?** Viewport etiketi, esnek boyutlar, Grid/Flexbox ve 760/380 piksel media query eşikleri kullandık.
3. **Menü filtresi nasıl çalışıyor?** Düğmenin `data-filter` değeri ürünün `data-category` değeriyle karşılaştırılır; uygun olmayan ürünlere `hidden` atanır.
4. **Gerçek müşteri için neleri değiştirmek gerekir?** Marka, gerçek ürünler, onaylı fiyatlar, çalışma saatleri ve iletişim bilgileri eklenir. Sipariş sistemi ayrıca kapsamlandırılır.
5. **Projede senin ve AI'ın rolü neydi?** Proje, yönlendirmem doğrultusunda Codex ile geliştirildi. Kodun yapısını öğreniyorum; tek başıma yazdığımı veya ticari müşteri deneyimi olduğunu iddia etmiyorum.

### Sınırlar ve özelleştirme
Dil seçimi sayfa yenilenince Türkçeye döner. Form, veritabanı ve backend yoktur. Erişilebilirlik için temel uygulamalar yapıldı; resmi WCAG uygunluk sertifikası iddia edilmez. Metinleri HTML ve İngilizce sözlüğünde birlikte güncelle. Fiyat ve saatleri HTML'de değiştir. Git geçmişini `git log --oneline`, değişiklikleri `git status` ile görebilirsin.

## English

Mola is a working portfolio demo for a fictional neighborhood café. The business, menu, prices, and hours are illustrative. No orders, reservations, or messages are submitted.

### 10-line summary
1. Built a single-page website introducing a small business.
2. Used HTML5 for navigation, menu, story, and visit sections.
3. Created colors, typography, and a coffee cup illustration with CSS.
4. Used CSS Grid and Flexbox for desktop and mobile layouts.
5. Adapted the layout to narrow screens with media queries.
6. Added a collapsible mobile menu with JavaScript.
7. Filtered products by coffee and bites.
8. Added Turkish/English switching without reloading the page.
9. Added keyboard focus, a skip link, and ARIA state attributes.
10. Organized the dependency-free static project under Git version control.

### Run on your computer
1. Open this project's `dist` folder.
2. Double-click `index.html` to open it in your browser.
3. Use EN and TR to switch languages.
4. Try the product filters in the menu section.
5. Resize the browser and try the mobile Menu button.
6. Use browser developer tools (F12) to inspect different screen sizes.

No installation, internet access, or API key is required. For optional HTTP preview with Node.js, open a terminal in this folder, run `node preview.cjs`, and visit `http://127.0.0.1:4173`. Stop with Ctrl+C.

### Main code explained
- `dist/index.html`: Structure and initial Turkish copy. Sections organize content; articles represent products. `data-i18n` identifies text to translate.
- `dist/styles.css`: Visual presentation. Root variables store colors. Grid and Flexbox arrange content. Media queries adapt layouts. The cup is drawn with CSS shapes.
- `dist/app.js`: User interactions. Selectors find elements and event listeners respond to clicks. `hidden` controls product visibility. ARIA attributes expose filter and menu states. A dictionary supplies translations through `textContent`.
- `preview.cjs`: Optional local server serving only the three website files.

### Interview / client discussion: 5 questions and answers
1. **Why not React?** A single page with a few interactions works with HTML/CSS/JS and requires no additional dependencies.
2. **How is the layout responsive?** A viewport tag, flexible dimensions, Grid/Flexbox, and media queries at 760/380 pixels adapt the layout.
3. **How does filtering work?** The button's `data-filter` is compared with each product's `data-category`; unmatched items are hidden.
4. **What would change for a real client?** Replace the brand, products, approved prices, hours, and contact details. An ordering system needs a separate scope.
5. **What were your and AI's roles?** Codex implemented the project under my direction. I am learning the code structure and do not claim independent authorship or commercial client experience.

### Limitations and customization
Language resets to Turkish on reload. No form, database, or backend is included. Basic accessibility practices are included; no formal WCAG certification is claimed. Update HTML text and its English dictionary entry together. Edit prices and hours in HTML. Use `git log --oneline` for history and `git status` for changes.

Kurgusal demo proje / Fictional demo project.

Pages: see PAGES.md / Pages yönergeleri: PAGES.md.

## Doğrulama notu / Verification note

Mola sitesi Opera'da elle açılıp görsel olarak kontrol edildi. Telegram botu gerçek botla elle test edildi. Chrome eklentisi Opera'da elle test edildi. Docker projesi Docker Desktop ile çalıştırıldı; GET /health, GET /products ve POST /products elle denendi. OpenAI projesi anahtarsız demo modunda. Mobil cihaz testi yapıldı; yalnızca Android/iOS/web paketleri derlendi.

The Mola website was manually opened and visually checked in Opera. The Telegram bot was manually tested with a real bot. The Chrome extension was manually tested in Opera. The Docker project was run with Docker Desktop; GET /health, GET /products and POST /products were manually exercised. The OpenAI project is in key-free demo mode. Mobile device testing was performed; only Android/iOS/web bundles were built.
