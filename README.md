# Büyüyünce Ne Olsam?

"**Büyüyünce Ne Olsam?**" uygulaması, hobileriniz ve iyi olduğunuz alanlara dayanarak size en uygun ve güncel meslek önerilerini sunan bir web uygulamasıdır. Eşin dostun doktor ol dayatmalarından sıkıldıysanız, doğru yerdesiniz!

## Özellikler

- **Kişiselleştirilmiş Meslek Önerileri**: Hobileriniz ve yetenekleriniz doğrultusunda size özel meslek tavsiyeleri sunar.
- **Güncel ve Gelecek Trendleri**: Yeni ortaya çıkan meslekleri ve geleceğin trendlerini içerir.
- **Detaylı Meslek Bilgileri**: Her meslek için tanım, neden size uygun olduğu, gelecekteki iş imkânları, gerekli eğitim ve beceriler, başarı için tavsiyeler gibi detaylı bilgiler verir.
- **Samimi ve Motive Edici Üslup**: Sizi gerçekten motive edecek ve ilham verecek bir dil kullanır.

## Kurulum

### Gereksinimler

- **Node.js ve npm**: Projenin çalışması için gereklidir.
- **Gemini API Anahtarı**: Meslek önerilerini almak için gereklidir.

### Adımlar

1. **Projeyi Klonlayın**

   ```bash
   git clone https://github.com/kullaniciadi/buyuyunce-ne-olsam.git
   cd buyuyunce-ne-olsam
   ```

2. **Gerekli Paketleri Yükleyin**

   Proje, `@google/generative-ai` paketini kullanmaktadır. Bu paketi yüklemek için:

   ```bash
   npm install @google/generative-ai
   ```

3. **API Anahtarını Ayarlayın**

   Proje dizininde bir `env.js` dosyası oluşturun ve Google Generative AI API anahtarınızı ekleyin:

   ```javascript
   // env.js
   export const API_KEY = 'SİZİN_GEMINI_API_ANAHTARINIZ';
   ```

4. **Uygulamayı Başlatın**

   - Projeyi bir canlı sunucu ile çalıştırabilirsiniz. Örneğin, Visual Studio Code kullanıyorsanız Live Server eklentisini kullanabilirsiniz.
   - Ya da doğrudan `index.html` dosyasını tarayıcınızda açabilirsiniz (API çağrıları nedeniyle canlı sunucu kullanmanız önerilir).

## Kullanım

1. **Formu Doldurun**

   - **Hobilerinizi** ve **iyi olduğunuz alanları** ilgili alanlara girin.
   - Örnek:
     - Hobiler: Kitap okumak, tenis oynamak, yüzmek
     - İyi olduğum alanlar: Kod yazmak, koşu birinciliğim var, çok fena basketbol oynarım

2. **Mesleğimi Bulalım!**

   - "Mesleğimi Bulalım!" butonuna tıklayın.

3. **Sonuçları İnceleyin**

   - GEMINI chatbot tarafından oluşturulan kişiselleştirilmiş meslek önerilerini ve detaylı açıklamalarını görün.

## Teknolojiler

- **HTML5 & CSS3**: Yapısal ve stil tasarımı için.
- **JavaScript (ES6+)**: Dinamik içerik ve API entegrasyonu için.
- **Google Generative AI API**: Meslek önerilerinin oluşturulması için.
- **Font Awesome**: İkonlar için.
- **Esm.sh**: Tarayıcıda modül kullanımı için.


## Lisans

Bu proje **GNU Lisansı** ile lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakabilirsiniz.

## İletişim

- **Geliştirici**: Egemen Çalışkan, Erdoğan Başer
- **E-posta**: jeithx@gmail.com eb.baser@gmail.com
- **GitHub**: https://github.com/Jeithx https://github.com/Porphyri0n

---

