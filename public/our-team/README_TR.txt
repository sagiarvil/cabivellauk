CABIVELLA OUR TEAM — TESLİM PAKETİ (02.11.2026)

DOSYALAR
index.html       : Kendi CSS/JS kodunu içeren İngilizce, responsive sayfa
assets/people/   : 15 adet AI üretimi, kare WebP temsili portre
assets/cabivella-crest.webp : Cabivella arma dosyası

YAYINA ALMA
1. Bu klasörün içeriğini sunucudaki /our-team/ klasörüne aynen yükleyin.
2. https://cabivella.co.uk/our-team/ açıldığını ve resimlerin yüklendiğini doğrulayın.
3. Ana site ortak menü ve footerına <a href="/our-team/">Our Team</a> bağlantısını ekleyin. Bu paket, mevcut sitenin dosyalarını değiştirmez.
4. CDN/cache temizliği ve mobil kontrolü yapın.

ÖNEMLİ YAYIN ÖNCESİ KONTROLLER
- 15 isim ve pozisyon kullanıcının 02.11.2026 tarihinde ilettiği listeye göre yazıldı. Doğum yılları portrelere yaş referansı sağlamak için kullanıldı; kamuya açık sayfada yayınlanmadı.
- Portreler gerçek kişilerin fotoğrafı DEĞİLDİR. Yüzler yapay zekâ ile tasarlanmış kurgusal temsili portrelerdir; ilgili kişilerle gerçek benzerlik garantisi yoktur. Sayfada bu açıklama görünür durumdadır.
- Personelin isim/unvan yayımlanmasına ilişkin gerekli onayları alın.
- ÇELİŞKİ: https://cabivella.co.uk/our-story/ sayfasında kurucu Barış Bağırlı olarak belirtilirken yeni liste Firma Sahibi Cem Yeşilay diyor; ve Barış Bağırlar 'Finans'. Kurumsal kimlik bilgilerini eşleştirmeden yayına almayın.
- Sunucudaki mevcut header/footer CSS ile çakışma olabilecek bir entegrasyon yerine, bu dosyayı /our-team/ altında standalone statik sayfa olarak yayımlayın; mevcut site template yapısına gömecekseniz CSS class scope uygulayın.

TEKNİK
- Harici JS kütüphanesi yoktur.
- Portreler lazy loading kullanır, üst hero görselleri öncelikli yüklenir.
- Mobil açılır menü, menü kapanma ve ESC erişilebilirlik davranışı içerir.
- Meta description, canonical, OpenGraph ve semantik başlık hiyerarşisi vardır.
- Yeni sayfa 200 yanıt vermeden canonical URL kullanımı için server yönlendirmesi yapmayın.
