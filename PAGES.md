# Pages yayını / Pages deployment

Kurgusal demo proje / Fictional demo project.

## Türkçe
1. Kendi hesabında `mola-cafe-website` adlı public repo oluştur.
2. Terminali bu klasörde aç. `git branch -M main` çalıştır.
3. `git remote add origin https://github.com/onurerbekte/mola-cafe-website.git` çalıştır. Remote zaten varsa `git remote -v` ile kontrol et; gerekirse `git remote set-url origin ...` kullan.
4. `git push -u origin main` çalıştır.
5. Repo Settings → Pages → Deploy from a branch → `main` ve `/docs` → Save.
6. Yayın tamamlanınca beklenen adres: `https://onurerbekte.github.io/mola-cafe-website/`. Bu adres henüz yayınlanmadı veya doğrulanmadı.

`docs/` çalışır statik siteyi içerir. İleride `dist/` dosyalarını değiştirirsen `docs/` içeriğini de yenile.

## English
Create the public `mola-cafe-website` repository yourself, rename the local branch to `main`, add the remote URL above, and push with `git push -u origin main`. In repository Settings → Pages choose Deploy from a branch, `main`, `/docs`, and Save. The URL above is expected after deployment, not a verified live URL. Keep `docs/` synchronized with future `dist/` changes.
