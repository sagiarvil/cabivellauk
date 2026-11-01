# CABIVELLA UK — GRAVITY P0/P1/P2 İCRA SÖZLEŞMESİ
Tarih: 2026-11-01 · Kanıt kaynağı: canlı cabivella.co.uk üzerinden tekrarlı okumalar · Çalışma tipi: kaynak kodunu yerinde düzeltme, gereksiz yeniden yazım YOK.

## 0. Değişmez kurallar
- Site yalnızca `en-GB` kullanıcı içeriği yayımlasın. Gerçek ürün verisi olmadan hiçbir teknik iddia, marka iş birliği, garanti, sertifika, İngiltere'de üretim, showroom, UK montajcı ağı, UK şirket kaydı veya teslimat taahhüdü türetilmesin.
- Kamuya açık sitede hiçbir fiyat, TL/TRY/₺, sahte Offer/rating/review, 'reference price' yayımlanmasın. Özel teklif ile müşteri fiyatlandırması ayrı tutulmalı.
- Gerçek ve belgelendirilmiş üretici/satıcı bilgileri açık olsun; Türk üretimi ile İngiliz müşteri odaklı tasarım arasında yanıltıcı 'Made in Britain' anlatısı kurulmasın.
- Mevcut doğrulanmış URL'ler korunmalı. Toplu silme, 301'i tüm sayfaları ana sayfaya verme, örnek veri ile üretime dağıtım, sahte referans ve yer tutucu iletişim kullanma.
- Önce geri dönüş noktası: tam repo yedeği, önceki URL+status+canonical+görsel listesi ve deploy hash'i; feature branch + PR + review + staging + diff + rollback.
- Erişilemeyen servisleri 'tamam' raporlama. Kanıt: otomatik test raporu + gerçek mobil tarayıcı + sunucu readback + arama motoru doğrulaması.

## 1. Güncel doğrulanmış bulgular (P0 ticari riskler + P2 yardımcı keşif dosyaları)
1. [P2] `https://cabivella.co.uk/llms.txt` ve `/llms-full.txt` 404; oluşturulması Google sıralama avantajı yaratmaz ama kullanıcı isteğine göre yardımcı AI dokümanları olarak üretilebilir.
2. [P2] `/rss.xml`, `/feed.xml`, `/atom.xml` 404. Gerçek haber/makale yoksa sahte RSS üretme. Gerçek Journal yayınlanınca geçerli `feed.xml` oluştur ve `<link rel="alternate" type="application/rss+xml">` koy.
3. Sitemap canlı okumalar arasında 123 ve 255 URL gösterdi; otomatik üretim/bellek/yayım farkı araştır. Tek build'in çıktısı atomik dağıtılmalı.
4. 2026-11-01'de örnek eski URL'ler 404: `/collections/kitchens/shaker-kitchens/`, `/collections/bathrooms/wall-hung-vanities/`, `/collections/coffee-stations/barnes-radiator-coffee-console-130/`, `/collections/coffee-stations/chelsea-illuminated-coffee-armoire/`, `/collections/fitted-storage/mayfair-6door-wardrobe/`. Yeni karşılığı gerçekten varsa 301; yoksa 410/404 ve ilgili iç linkleri düzelt.
5. Belgravia 100, Bloomsbury 80, Arya Shaker, Malta vanity gibi canlı ürünlerde `Reference Price: ... TL` mevcut; tüm görünür, gizli ve JSON-LD çıktılarından kaldır. Kamuya açık fiyat gösterme kararı bağlayıcı.
6. Dört ayrı coffee ürünündeki uzun açıklama, özellikler, malzeme, teslimat, kurulum bloğu neredeyse kelimesi kelimesine aynı. Bunları farklı ürün adı altında otomatik çoğaltma. Her özgün ürünün belgeli veri ve farklı galeri ile onayı şart.
7. Görsel kaynak adları `tekzen_coffee_*`, `mondi_*`, `bath_500...` gibi üçüncü taraf kaynakları çağrıştırıyor. Fotoğraf hakları, üretici/ürün eşleştirmesi, İngiltere'de ticari yeniden yayım izni yazılı doğrulanmadan yayına çıkmasın.
8. Ürün özelliklerinde mutlak vaatler var: 'hydro-phobic ... impenetrable', 'ready for immediate ... plumbing connection', doğrudan 4–8 hafta 'production & UK transit', bütün varyantların aynı mekanizmayı kullandığı varsayımı. Her iddia belgeye bağlanmalı veya kaldırılmalı.
9. Our Story, Materials, Trade, Privacy sayfalarında şirket, fabrikalar, ülke çapı lojistik, kullanıcı verisi aktarımı, teslim, numune ve servis beyanları bulunuyor. Ticari operasyon sahibi tarafından belgelendirilmedikçe mutlak yazılamaz.
10. UK metinlerde 'customizable', 'matte', 'utilize', 'artisan beverage credenza', 'daily cadence', 'architectural sanctuary', 'architectural monolith', 'serene domestic chaos' vb. aşırı şablon veya Amerikan kullanımına kayan dil var.

## 2. İcra sırası (karar kapıları)
### P0 / yayın blokajı
A. Git'te snapshot al; staging'de URL envanteri ve 200/301/404 durumlarını dışa aktar; sitemap ile fiilî public URL envanterini karşılaştır.
B. Model kaynağı oluştur: `product_id`, `supplier_product_id`, `approved_name_en_gb`, `verified_materials`, `technical_document`, `approved_dimensions`, `actual_images`, `rights_licence`, `manufacturer`, `responsible_seller`, `proven_lead_time`, `image_status`, `publication_status`. Yalnız `publication_status=approved` ürün modeli indekslenir.
C. 255 sitemap URL'nin tek tek karşılıklarının ve eski sürüm URL'lerinin HTTP status/canonical/noindex/redirect değerlerini test et. Aynı sayfanın birden fazla URL'de sunulmasını durdur.
D. Bütün ürünlerde görünen `Reference Price`/TL değerlerini kaldır. Yanlış değerler kaynak veriden de giderilsin; yalnız CSS ile gizlemek YASAK.
E. Kopya kategori/model açıklamalarını iki gruba ayır: somut ürünü olanları ayrı özgün model sayfasına dönüştür; gerçekte sadece konsept olanları dürüstçe concept olarak işaretle ve gerekli ise noindex uygula. Eski sayfalar için uygun 301 eşleştirmesi yap.
F. Her teknik iddia için kanıt kayıt tablosu doldur: metin, kaynak, belge, kapsam, geçerlilik, son doğrulama, sorumlu kişi. Kanıtsız sertlik/kesinlik çıkar.
G. Web sitesinin gerçek satıcı/üretici ve ticari sorumlusu belirtilecek; yerel İngiliz işletme olduğu doğrulanmıyorsa 'British manufacturer', 'London showroom', 'UK design team' gibi izlenimler kaldırılacak.
H. Görsel kimliği ve telif kontrolü yapılmadan markalı fotoğrafı sahiplenme; gerçek üretici iş birliği yoksa ürün sayfası 'Cabivella-made' denmemeli.
I. Form için gerçek kayıt akışı ve hatasız callback: sunucu validasyonu, turnstile server verification, idempotency key, durable storage, spam rate limit, CRM sync retry, e-posta teslim raporu, açık başarı / hata durumu. Form mevcut ama canlı test yapılmadı; kullanıcı bilgisi izinsiz canlı testte gönderme.

### P1 / indeksleme ve içerik
J. Yalnız 200, self-canonical, indexable, tam içerikli, onaylı ve tekil URL'leri sitemap'e ekle. `lastmod` yalnız gerçek anlamlı içerik değiştiğinde güncellensin, otomatik her deploy'da değil.
K. Başlık, meta açıklaması, tek H1, OG, Twitter Card, `lang=en-GB`, açıklayıcı breadcrumb, descriptive alt, responsive `srcset`, birincil görsel yükleme önceliği kontrolü.
L. JSON-LD: gerçek `Organization` veya `Person` (tüzel kişi doğrulanana kadar uydurma şirket/vergi/posta adresi yok), `WebSite`, `BreadcrumbList`, koleksiyonlar için `CollectionPage`, doğru ve doğrulanmış tekil ürünler için sınırlı `Product`. Fiyat yoksa `Offer`, `AggregateOffer`, `price`, `aggregateRating`, `review` YOK.
M. llms.txt ve llms-full.txt yalnız onaylı kanonik sayfalar için oluşturulmalı; Google SEO açısından etkisi olmadığını raporda belirt. Türetme otomatik olsun; her yeni ürün varlığı eklendiğinde re-build.
N. RSS sadece yayımlanan editoryal yazılar için; katalog ürünlerini haber diye RSS'e doldurma. Gerçek blog yoksa canlı RSS'e boş/sahte post koyma.
O. UK English içerik sözlüğü (sayfa gövdesi, formlar, hata mesajları, metadata, alt, AI dokümanları ve JSON-LD) için zorunlu lint: colour, customisable, matt, galvanised, levelling, fulfil, organise, optimise. `credenza` yerine müşterinin aradığı ürün tipine göre `coffee station cabinet`, `breakfast cupboard`, `larder cupboard` kullan.
P. Ürün galeri izin ve açıklama gereği: önden, açık, yandan, donanım, mekânda kullanım; gerçek olmayan açı uydurulmasın; 'concept visual' ibaresi ürün gerçekliğiyle karışmasın.
Q. UK satın alma akışında gerçek maliyet ve teslimat: ödeme alınmadan önce ithalatçı, KDV/gümrük, teslim şekli, kurulum ve garanti sözleşme bazında açıklanmalı; fiyat göstermeme politikası korunacak.

### P2 / ileri optimizasyon ve ölçüm
R. GA4 / GSC / Bing WMT doğrula; `view_item`, `generate_lead` (yalnız sunucuda başarılı kayıt), `qualify_lead`, `close_convert_lead` olayları gerçeği yansıtsın. Consent Mode, ret halindeki script davranışı test edilsin. Arama kaynakları organik/paid/B2B ayrıştırılsın.
S. Mobil LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 at p75; Lighthouse laboratuvar skoru ayrıca raporlanır, gerçek kullanıcı verisi yerine geçmez.
T. İçerik stratejisi: Britanya ürün terminolojisinde birincil: `Shaker kitchen doors`, `replacement kitchen doors`, `made to measure pantry cupboards`, `bathroom vanity units`, `utility room cabinets`. Sahte yerel 'London design studio' sayfaları veya semt adı varyantlarını anahtar kelime doldurmak için üretme.
U. Deneysel UK alıcı testi: 8–12 homeowner ve 8–12 fitter/designer kullanıcıyla ürün anlaşılırlığı, güven, teklif isteme ve teslimat bilgi erişimi ölç. 'İngilizler sever' iddiası bu çalışma olmadan raporlanamaz.

## 3. Zorunlu kaynak kodu klasörleri (varsa mevcut stack'e uyarlanacak)
```text
public/
  robots.txt
  llms.txt
  llms-full.txt
  sitemap.xml              # approval-backed build output
  feed.xml                 # only published Journal if exists
src/
  content/products/        # approved factual product records
  content/collections/     # approved category content
  content/journal/         # optional true dated editorial
  lib/seo/                 # head meta, schema generator, sitemap builder
  lib/claims/              # approved technical claim registry
  components/              # header, gallery, enquiry, breadcrumbs
scripts/
  audit_site.py
  build_discovery.py
  validate_products.py
  audit_internal_links.py
reports/
  audit.csv
  broken-links.csv
  claims-register.csv
  image-rights.csv
  redirects.csv
```
Mevcut site statik HTML ise olduğu gibi iyileştir; sırf mimari gösteriş için Astro/Next/WP göçü yapma. Tüm üretim verisinin tek kaynak olması şart.

## 4. İçerik ve AI izi — kabul/reddet kriteri
RED: 'a sanctuary of morning rituals', 'serene architectural elegance', 'timeless craftsmanship meeting everyday luxury', tekrar tekrar 'masterclass', 'uncompromising', 'peerless', 'impeccably', 'architectural monolith', sahte test sayıları, sırf London semt adı ile çoğaltılmış şablon ürün.
KABUL: 1 cümlede ürünün ne olduğu; doğrulanmış ölçüler; doğru aksesuar/kapak materyali; teknik kısıt; fotoğrafta gerçekten görülen ürün; tedarik şekli; teklif çağrısı. Kısa, doğal, İngiliz ev mobilyası terimleri.

## 5. URL ve yönlendirme politikası
- Eski sayfaya semantik olarak en yakın onaylı ürün: 301 (tek sıçrama, 200 hedef).
- Eşleşme yok: gerçek 404 veya kalıcı olarak kaldırıldıysa 410; 404'ü 301 ile ana sayfaya yollama.
- 301 redirect testleri sitemap'ten bağımsız; source URL sitemap'e konmaz.
- Aynı ürün için yalnız bir canonical; query/UTM parametreleri indeks varyantı oluşturmasın.
- XML valid UTF-8, `application/xml` veya `text/xml`, tüm <loc> gerçek URL, `lastmod` gerçek içerik güncellemesi.

## 6. Performans erişilebilirlik
- 320 / 375 / 390 / 768 / 1024 / 1280 / 1440 / 1920 genişlik testleri; responsive hero, küçük header crest, overflow yok.
- Hero içindeki metin gerçek HTML olsun, görselde yazı tekrar olmasın. LCP resmine `fetchpriority=high`, width/height; alt galeriler lazy. Responsive WebP/AVIF, gerçek alt. Watermark başlığın üstünde ayrı blok, yumuşak kontrast, kırpma/satır kırma yok.
- Scroll reveal yalnız progressive enhancement, JS yüklenmezse içerik görünür, reduced-motion true ise animasyon kapalı.
- WCAG 2.2 AA: klavye menüsü, `aria-expanded`, tek H1, form `label`, hata özetleri ve ekran okuyucu açıklamaları.

## 7. Güvenlik ve form
- File upload eklenirse MIME/byte sınırı + antivirüs tarama + özel saklama, yetkisiz herkese açık çizimler yok.
- Rate limit IP + fingerprint, Turnstile server-side, anti-CSRF; servis sırları yalnız server env; loglarda telefon/e-posta maskele.
- CRM unavailable: veri kaybolmaz, tekrar dener; kullanıcıya yalnız kesin kayıt başarı durumu gösterilir.
- Client consent separation: teklif dönüşü ve pazarlama onayı ayrı; 'Accept all/Reject non-essential/Change choices' aynı erişilebilir düzeyde; reddetmeden önce izleme yok.

## 8. Yayın kapıları ve kesin testler
P0 FAIL eğer: görünen TL, izinsiz görsel, sahte logo/sertifika/teslimat, yanlış URL 301, 404 sitemap URL, tekrarlanan ürün içerikleri, yanlış firma beyanı, form kaydı kaybı, önden yüklenen analitik.
P1 FAIL eğer: `lang` yanlış, `title`/H1 yok, canonical uyuşmazlığı, meta boş, resim alternatifi eksik, görünür İngilizce yazım Americanised, schema mismatches, 320px overflow.
P2 FAIL eğer: rapor ve izleme hiç yok; gerçek Google performans verisi olmadan 'SEO 100/100' raporu yayımlanıyorsa.

Her PR şu çıktıları vermeli: `diff`, yeni dosya listesi, URL 200/301/404 matrisi, ekran görüntüsü desktop/mobile, gerçek form teslim test ID, JSON-LD test sonucu, GSC/Bing teyit ekranı (izinli), rollback komutu. Test edilmemiş konuda 'pass' yazılmasın.

## 9. Uygulama komutları
```bash
python3 qa/audit_site.py --base https://cabivella.co.uk --sitemap https://cabivella.co.uk/sitemap.xml --out results/audit.json
python3 qa/build_discovery.py --data governance/content_manifest.json --out public
python3 -m unittest discover -s qa/tests -v
```

## 10. İleri Google & AI SEO açıklaması
Google 2026 resmî açıklamasına göre llms.txt, AI Mode veya AI Overviews sıralamasına katkı yapan özel dosya değildir. Dosyayı diğer sistemlerin anlaşılması için tutmak isteğe bağlıdır. Öncelik gerçek içerik, crawlability, kanıt, ürün galerisi, link otoritesi ve kullanıcı niyetidir. RSS Google sıralamasına doğrudan garanti sağlamaz; yalnız gerçek güncelleme akışı için uygundur. FAQ rich result'ın Haziran 2026 itibarıyla artık gösterilmemesi nedeniyle FAQ schema'yı 'ranking hack' gibi kullanma.

## 11. Gerçek kabul eşiği
`result=GO` yalnız onaylı ticari kimlik + teknik veri + lisans + ürün URL + CRM + en-GB copyediting + arama verisi tümü doğrulandıysa.
`result=HOLD` bu alanlardan biri eksikse. 'HOLD' yayından tüm siteyi kaldırmak zorunda değildir; sorunlu ürünleri taslak/noindex yap veya iddiaları kaldır; teknik SEO ve güvenli iletişim alanlarını açık tut.
