# Şartnamedeki iddiaların gerçeklik kontrolü

**Faydalı:** HTML indekslenebilirliği, robots+sitemap, benzersiz içerik, self canonical, karşılıklı hreflang, gerçek JSON-LD, gerçek görseller, erişilebilir mobil deneyim, GSC ve Bing, kontrollü IndexNow (uygun arama motorları), teknik performans.

**Opsiyonel/düşük öncelik:** llms.txt, RSS/Atom/JSON Feed (gerçek yayın akışı varsa), PWA, AI ajan JSON. Bunlar tek başına Google sıralama veya LLM tavsiyesini garanti etmez. RSS canlıda 404 olduğu için sadece destekleyici dizin sunulmuştur; yeni güncelleme yokken yeni 'haber' tarihi uydurulmaz.

**Uygulanmamalı:** Google Indexing API'yi normal ürün sayfalarına toplu ping için kullanmak (desteklenen türler JobPosting/BroadcastEvent); uydurma değerlendirme ve fiyat schema'sı; rastgele Wikidata/MID kimlikleri; sertifika olmadan FSC/ISO iddiası; SEO amaçlı ilgisiz siteler arası link ağı; sayfa değişmeden dateModified güncelleme; 14KB ilk paket, 29 kelime, %15 delta, ColBERT MaxSim gibi kesin Google/LLM sıralama garantileri.

**Önemli:** İşletmenin belirtilen ihracat hedefi, tüm Avrupa ülkelerine doğrulanmış hizmet sunulduğu anlamına gelmez. Ülke servis kapsamı ve ticari koşullar yayın öncesi doğrulanmalıdır.

**2026 FAQ notu:** Google FAQ rich results özelliğini 2026 itibarıyla kaldırdığı için FAQPage JSON-LD bu paketten çıkarıldı. Okunabilir SSS içerikleri sayfalarda korunur.

**Sitemap vakası:** 02.11.2026 canlı kontrolde `/thank-you/` meta robots `noindex,nofollow` ancak mevcut sitemap'te listelenmiş. İndekslemek istemediğimiz bu URL, sitemap üreticisinde kapsam dışı tutulmalı; URL'nin kendisi dönüşüm takibi için erişilebilir kalabilir.
