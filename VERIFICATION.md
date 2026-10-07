# Doğrulama / Verification

## Türkçe
- JavaScript sözdizimi kontrolleri geçti: `node --check dist/app.js` ve `node --check preview.cjs`.
- Node.js içinde DOM simülasyonuyla altı ürün, üç kategori filtresi, seçili filtre durumu, mobil menü açılması, bağlantıyla kapanması, tüm İngilizce metinler, Türkçeye dönüş ve bölüm bağlantıları kontrol edildi; geçti.
- Git ilk sürüm kaydı oluşturuldu.
- Yerel sunucu başlatıldı. Tarayıcı bağlantısı zaman aşımına uğradı; HTTP isteği ortamın ağ kısıtlaması nedeniyle engellendi. Sunucunun HTTP yanıtı ve gerçek tarayıcıdaki görsel görünüm doğrulanmadı.
- Gerçek tarayıcıda elle kontrol: 360, 768 ve 1280 piksel genişliklerde yatay taşma olmadığını; Tab ile bağlantı ve düğmelere erişimi; TR/EN geçişini; tüm filtreleri ve mobil menüyü kontrol et. Bu kontroller henüz tamamlanmış olarak raporlanmaz.
- CV HTML dosyaları tarayıcıda Yazdır → PDF olarak kaydet ile dönüştürülebilir. A4 seç, ölçeği %100 tut, tarayıcı üst/alt bilgilerini kapat. PDF çıktısının görsel kontrolü henüz yapılmadı.

## English
- JavaScript syntax checks passed for `dist/app.js` and `preview.cjs`.
- A Node.js DOM simulation passed checks for six products, three category filters, pressed states, mobile menu opening and closing through a link, all English translations, Turkish restoration, and internal section links.
- An initial Git commit was created.
- The local server started. Browser access timed out and the HTTP request was blocked by the environment's network restrictions. HTTP responses and rendered visual appearance remain unverified.
- Manual browser checklist: inspect widths of 360, 768, and 1280 pixels for horizontal overflow; keyboard navigation with Tab; TR/EN switching; every filter; and the mobile menu. These checks are not reported as completed.
- Convert CV HTML using the browser's Print → Save as PDF. Choose A4, 100% scale, and disable browser headers/footers. PDF output has not been visually checked.
