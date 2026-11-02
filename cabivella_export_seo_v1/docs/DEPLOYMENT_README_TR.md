# Cabivella SEO / AI / Export — yayın paketi (v1.0)

## Durum
Bu paket üretildi ve çevrimdışı dosya kontrolleri çalıştırıldı. **Canlı cabivella.co.uk sunucusuna yayınlanmadı**, GSC/Bing hesaplarına bağlanmadı. Google/AI sıralama, indekslenme veya satış garantisi yoktur.

## Doğrulanan canlı durum (02.11.2026)
- `/robots.txt`: mevcut ve taramaya izin veriyor.
- `/sitemap.xml`: 164 URL içeriyor. SİLMEYİN / üstüne 5 URL yazmayın.
- `/llms.txt`: mevcut, yalnız UK ağırlıklı. Bu pakette güncellenmiş alternatif var.
- `/feed.xml`, `/atom.xml`: 404; bu pakette opsiyonel kategori dizini feed'leri var.
- `/trade/`: mevcut UK B2B sayfası. Kanibalizasyon yaratacak ikinci UK trade sayfası üretmeyin.
- `/our-story/`: Türkiye üretim bağlantısı mevcut; yasal satıcı, hizmet kapsamı ve kişi bilgileri yayın öncesi kanıtla eşitlenmeli.
- `/enquire/`: mevcut teklif toplama yolu.

## Dosya haritası
`publish_to_site_root/` içeriği site kök dizinine yalnız yedek ve staging kontrolünden sonra aktarılır:
- `/trade/europe/index.html` — Avrupa toptan/B2B İngilizce sayfa
- `/de/grosshandel-einbaumoebel/index.html` — Almanca B2B
- `/fr/fabricant-meubles-sur-mesure-grossiste/index.html` — Fransızca B2B
- `/nl/maatwerk-kasten-groothandel/index.html` — Hollandaca B2B
- `/international-delivery/index.html` — ihracat kapsam ve şartlar açıklaması
- `/assets/cabivella-export.css` — bağımsız, responsive tasarım
- `/llms.txt`, `/llms/trade-export.md`, `/llms/collections.md`
- `/sitemap-export.xml` — sadece yeni sayfalar; mevcut sitemap'e dokunmaz
- `/feed.xml`, `/atom.xml`, `/feed.json` — kategori dizini, haber akışı değildir
- `robots.txt.REVIEW_FIRST` — sadece örnek; CANLI robots.txt üzerine otomatik yazmayın.
- `docs/homepage-schema.json` — mevcut ana sayfa Organization/WebSite grafiğiyle birleştirilecek; ikinci bir çelişkili grafik oluşturmayın.

## Yayın sırası
1. Domainin gerçek dosya kökünü (web root) ve sunucudaki mevcut yönlendirme kurallarını bulun. Yedek alın.
2. Önce staging'de test edin; `.html` yerine sonu `/` ile biten canonical URL'lerin HTTP 200 döndüğünü teyit edin. Sitenin statik sunucu yönlendirme davranışı farklıysa route'ları sunucuyla uyumlu hale getirin.
3. Uygun ticari/lojistik/onay kanıtları kontrol edilmeden bölge sayfalarını yayınlamayın. Özellikle DE/FR/NL'de gelen talepleri yanıtlayacak ekip ve prosedür gerekli.
4. `publish_to_site_root/` içindeki yeni yolları deploy edin. **Mevcut 164 URL'yi veya orijinal sitemap'i değiştirmeyin**.
5. Site navigasyonuna ilgili linkleri ekleyin: `/trade/` → `/trade/europe/`; ana sayfa → `/trade/`, `/international-delivery/`; footer → ilgili sayfalar.
6. Yeni URLs erişilebilir olduğunda `sitemap-export.xml` ek sitemap olarak GSC/Bing'e gönderin veya robots.txt içine ikinci Sitemap satırını ekleyin. Mevcut satırı koruyun.
7. Sayfa head'inde duplicate canonical/JSON-LD çıkmadığından emin olun. `hreflang` sadece bu dört tam dil sürümü için çift yönlüdür; bütün ülke sayfalarının kendilerine self-canonical olması gerekir.
8. GSC ve Bing performans/coverage 7–28 gün izle. Düşüş varsa yeni içerik ve redirect değişikliklerini geri alın.

## Ticari kanıt kontrol listesi (yayın öncesi)
- [ ] Şirketin tam hukuki adı, kuruluş ülkesi ve kayıt numarası doğru mu?
- [ ] İhracat, fatura kesen satıcı ve ithalatçı rolü net mi?
- [ ] UK/EU teslim kapsamı, gümrük, Incoterms, vergi sorumluluğu yazılı mı?
- [ ] Almanca/Fransızca/Hollandaca talepleri cevaplayacak yetkili kim?
- [ ] FSC ve diğer sertifika, süre, üretim koşulları doğrulanmış mı?
- [ ] Fotoğraflar gerçek işe ait mi, kullanım izni var mı?
- [ ] Site sahibinin ve ekip üyelerinin isim/görevleri diğer sayfalarla çelişiyor mu?

## Kritik gerçeklik kontrolü
`llms.txt`, RSS, feed, IndexNow ve JSON-LD yardımcıdır; Google/ChatGPT/Claude/Perplexity'de önerilme veya satış garantisi vermez. Google resmi AI arama kılavuzuna göre teknik SEO ve faydalı doğrulanabilir içerik esastır. Google Indexing API normal mobilya sayfalarında kullanılamaz. `Offer`, `aggregateRating`, `Review` gibi alanları veri yokken üretmeyin. B2B teklif bazlı ürünler için sahte fiyat yazmayın.

## Ölçüm
- lead form submit → valid qualified lead → quote issued → won order → gross margin
- ülke, dil, B2C/B2B, landing page, campaign/source etiketleri; kişisel veri gönderimini engelle
- ilk 30 gün GSC country + query + indexed pages baseline

## Script ve doğrulama
`python3 scripts/validate_package.py publish_to_site_root`
`python3 scripts/check_live.py https://cabivella.co.uk/` (yalnız ağ erişimi varsa)

## Kaynaklar
- Google AI: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google product schema: https://developers.google.com/search/docs/appearance/structured-data/product-snippet

## Mevcut sitemap düzeltmesi
- Canlı `/thank-you/` URL’si `noindex,nofollow`, fakat 164 URL’lik mevcut sitemap içinde yer alıyor. Kaynak sitemap üretecinden bu URL’yi çıkarın (404 vermeyin, noindex sürsün).
- Yayın öncesi arama motorlarının yeni sayfaları bulabilmesi için header/footer ve `/trade/` içine HTML linkleri ekleyin.
- Lokal HTML önizlemesi: `cd publish_to_site_root && python3 -m http.server 8000` ardından `http://localhost:8000/trade/europe/`; dosyaya çift tıklamak CSS mutlak URL yolları nedeniyle doğru önizleme değildir.
