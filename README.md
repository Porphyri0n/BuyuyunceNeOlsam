# 🧭 Büyüyünce Ne Olsam?

Google Gemini 2.5 Flash modelini kullanarak hobileriniz, ilgi alanlarınız ve güçlü yönlerinize göre **3 özelleştirilmiş kariyer yolu** öneren, tamamen **statik** (HTML + CSS + JS) bir web uygulaması. Modern **glass‑dark** arayüzü ve tek tıkta dağıtılabilir yapısıyla öne çıkar.

![screenshot](./Assets/logo.png)

---

## 🚀 Öne Çıkan Özellikler

|                           |                                                        |
| ------------------------- | ------------------------------------------------------ |
| **🌑 Dark Slate Teması**  | Cam efektli kartlar, neon düğmeler, gradient başlıklar |
| **📱 Tamamen Responsive** | Mobil‑ilk grid yapısı, 960 px üstü iki kolona geçiş    |
| **⚡ Gemini 2.5 Flash**   | Hızlı yanıtlar, 3 kariyer alternatifi + adım listeleri |
| **🗃️ Sıfır Backend**     | Sadece statik dosyalar; CDN'den ES Module import       |
| **🖼️ Landing Page**      | Etkileyici karşılama sayfası, modern navbar yapısı     |

---

## 📦 Gereksinimler

| Yazılım                       | Sürüm                 | Not                                        |
| ----------------------------- | --------------------- | ------------------------------------------ |
| **Modern Tarayıcı**           | 2024+                 | ES Modules ve fetch desteklemeli           |
| **API Anahtarı**              | Google GenAI          | Gemini 2.5 Flash erişimli                  |
| **İsteğe Bağlı Yerel Sunucu** | Live Server, Vite vb. | Dosya : // kısıtlarını aşmak için önerilir |

---

## 🔧 Kurulum

```bash
# 1 – Projeyi klonla
$ git clone https://github.com/kullanici/buyuyunce-ne-olsam.git && cd buyuyunce-ne-olsam

# 2 – API anahtarını tanımla
$ cp env.sample.js env.js
#  env.js düzelterek anahtarını gir
export const GEMINI_API_KEY = "YOUR_API_KEY";

# 3 – (Opsiyonel) Yerel sunucu başlat
$ npx live-server .
# veya
$ npm i -g serve && serve .
```

> **Not:** Tarayıcı güvenlik kısıtlamalarını (CORS / Mixed Content) önlemek için `env.js` dosyasını kök dizinde tut ve `app.js` içinde **`import { GEMINI_API_KEY } from './env.js'`** satırını aktif et.

---

## 📝 env.js Şablonu

```js
// env.sample.js ↴
export const GEMINI_API_KEY = "YOUR_API_KEY"; // Gemini 2.5 Flash erişimi şart!
```

Rename → **env.js** ve anahtarını gir.

---

## 📁 Proje Yapısı

```
buyuyunce-ne-olsam/
├── app.js           # Ana uygulama mantığı
├── env.js           # API anahtarı (gitignore)
├── env.sample.js    # API anahtarı şablonu
├── index.html       # Ana uygulama sayfası
├── landing.html     # Karşılama sayfası
├── landing.css      # Karşılama sayfası stilleri 
├── landing.js       # Karşılama sayfası script
├── navbar.css       # Navbar stilleri
├── navbar.js        # Navbar interaktivitesi
├── style.css        # Ana uygulama stilleri
├── docs/            # Görseller ve belgeler
└── LICENSE          # MIT lisansı
```

---

## ▶️ Kullanım

1. `landing.html` sayfasında "Haydi Başlayalım" butonuna tıklayın
2. Ana sayfada formu doldurun – hobi, ders, güçlü yön…
3. **Önerileri Al** butonuna tıklayın
4. 1‑2 sn içinde 3 kariyer yolu başlık + kısa açıklama + takip adımları karşınızda!

---

## ☁️ Dağıtım

Uygulama salt statik olduğundan GitHub Pages, Netlify Drop, Vercel Static Hosting gibi servislerde dakikalar içinde yayına alabilirsiniz:

1. Repo'yu GitHub'a yükleyin
2. GitHub Pages ayarlarından yayınlayın
   - veya
3. Dosyaları Netlify/Vercel'e sürükleyip bırakın

**Not:** Dağıtımdan önce `env.js` dosyasının `.gitignore` listesinde olduğundan emin olun.

---

## 🛠️ Özelleştirme

- Renk temasını `style.css` ve `landing.css` içindeki `:root` CSS değişkenlerinden düzenleyebilirsiniz
- Prompt formatını `app.js` içindeki `prompt` değişkeninden değiştirebilirsiniz
- Sayfa başlığını ve metin içeriklerini HTML dosyalarından güncelleyebilirsiniz

---

## 📄 Lisans

GPL-3.0 LICENSE