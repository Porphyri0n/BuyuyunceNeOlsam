# 🧭 Kariyer Rehberi AI

Google Gemini 2.5 Flash modelini kullanarak hobileriniz, ilgi alanlarınız ve güçlü yönlerinize göre **3 özelleştirilmiş kariyer yolu** öneren, tamamen **statik** (HTML + CSS + JS) bir web uygulaması. Modern **glass‑dark** arayüzü ve tek tıkta dağıtılabilir yapısıyla öne çıkar.

![screenshot](./docs/demo.png)

---

## 🚀 Öne Çıkan Özellikler

|                           |                                                        |
| ------------------------- | ------------------------------------------------------ |
| **🌑 Dark Slate Teması**  | Cam efektli kartlar, neon düğmeler, gradient başlıklar |
| **📱 Tamamen Responsive** |  Mobil‑ilk grid yapısı, 960 px üstü iki kolona geçiş   |
| **⚡ Gemini 2.5 Flash**    | Hızlı yanıtlar, 3 kariyer alternatifi + adım listeleri |
| **🗃️ Sıfır Backend**     | Sadece statik dosyalar; CDN’den ES Module import       |

---

## 📦 Gereksinimler

| Yazılım                       | Sürüm                 | Not                                        |
| ----------------------------- | --------------------- | ------------------------------------------ |
| **Modern Tarayıcı**           |  2024+                | ES Modules ve fetch desteklemeli           |
| **API Anahtarı**              | Google GenAI          | Gemini 2.5 Flash erişimli                  |
| **İsteğe Bağlı Yerel Sunucu** | Live Server, Vite vb. | Dosya : // kısıtlarını aşmak için önerilir |

---

## 🔧 Kurulum

```bash
# 1 – Projeyi klonla
$ git clone https://github.com/kullanici/kariyer‑ai.git && cd kariyer‑ai

# 2 – API anahtarını tanımla
$ cp env.sample.js env.js
#  env.js düzelterek anahtarını gir
export const GOOGLE_API_KEY = "YOUR_API_KEY";

# 3 – (Opsiyonel) Yerel sunucu başlat
$ npx live-server .
# veya
$ npm i -g serve && serve .
```

> **Not :** Tarayıcı güvenlik kısıtlamalarını (CORS / Mixed Content) önlemek için `env.js` dosyasını kök dizinde tut ve `app.js` içinde **`import { GOOGLE_API_KEY } from './env.js'`** satırını aktif et.

---

## 📝 env.js Şablonu

```js
// env.sample.js ↴
export const GOOGLE_API_KEY = "YOUR_API_KEY"; // Gemini 2.5 Flash erişimi şart!
```

Rename → **env.js** ve anahtarını gir.

---

## ▶️ Kullanım

1. Formu doldur – hobi, ders, güçlü yön…
2. **Önerileri Al** butonuna tıkla.
3. 1‑2 sn içinde 3 kariyer yolu başlık + kısa açıklama + takip adımları karşında!

---

## ☁️ Dağıtım

Uygulama salt statik olduğundan GitHub Pages, Netlify Drop, Vercel Static Hosting gibi servislerde dakikalar içinde yayına alabilirsin.

---

## 📄 Lisans

MIT
