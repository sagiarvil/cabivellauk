/* ==========================================================================
   CABIVELLA INTERNATIONAL — RETAIL & WHOLESALE CONVERSION ENGINE (V2)
   Supports: /ar/ (RTL) & /fr/ (LTR) · WhatsApp Quote Builder · GA4/DataLayer
   ========================================================================== */
(function () {
  'use strict';

  var CONFIGS = {
    fr: {
      lang: 'fr',
      msg: 'Bonjour Cabivella, je souhaite recevoir un devis.',
      individual: 'Particulier (Maison)',
      professional: 'Professionnel (Commerce / Projet)',
      errorRequired: 'Veuillez vérifier les champs obligatoires avant de continuer.',
      errorQuantity: 'Veuillez indiquer une quantité valide (minimum 1).',
      labels: {
        type: 'Type de client',
        country: 'Pays de livraison',
        city: 'Ville / Code postal',
        product: 'Collection',
        model: 'Modèle sélectionné',
        quantity: 'Quantité',
        measure: 'Dimensions',
        finish: 'Couleur / Matériau',
        company: 'Entreprise / Magasin',
        tradeScope: 'Profil & besoin commercial',
        details: 'Détails du projet'
      }
    },
    ar: {
      lang: 'ar',
      msg: 'مرحباً كابيفيلا، أود الحصول على عرض سعر.',
      individual: 'عميل فردي (للمنزل)',
      professional: 'تاجر أو شركة (جملة ومشاريع)',
      errorRequired: 'يرجى التأكد من تعبئة جميع الحقول المطلوبة.',
      errorQuantity: 'يرجى إدخال كمية صحيحة (1 على الأقل).',
      labels: {
        type: 'نوع العميل',
        country: 'بلد التسليم',
        city: 'المدينة / الرمز البريدي',
        product: 'المجموعة',
        model: 'الموديل المختار',
        quantity: 'الكمية',
        measure: 'المقاسات',
        finish: 'اللون / المادة',
        company: 'اسم الشركة أو المعرض',
        tradeScope: 'طبيعة النشاط والطلب',
        details: 'تفاصيل المشروع'
      }
    }
  };

  function getPageLang() {
    var htmlLang = (document.documentElement.getAttribute('lang') || 'fr').toLowerCase();
    return htmlLang.indexOf('ar') === 0 ? 'ar' : 'fr';
  }

  function getFormContext() {
    var form = document.getElementById('quote');
    if (!form) {
      return {
        language: getPageLang(),
        customer_type: 'retail',
        product: 'unselected',
        country: 'unselected'
      };
    }
    var checkedType = form.querySelector('input[name="type"]:checked');
    var productEl = document.getElementById('product');
    var countryEl = document.getElementById('country');
    return {
      language: getPageLang(),
      customer_type: checkedType ? checkedType.value : 'retail',
      product: productEl && productEl.value ? productEl.value : 'unselected',
      country: countryEl && countryEl.value ? countryEl.value : 'unselected'
    };
  }

  /**
   * Dispatches strictly non-PII analytics events to dataLayer and gtag.
   * Never records phone or WhatsApp clicks as completed sales.
   */
  function trackEvent(eventName, extraParams) {
    var base = getFormContext();
    var payload = {
      event: eventName,
      language: base.language,
      customer_type: base.customer_type,
      product: base.product,
      country: base.country
    };
    if (extraParams && typeof extraParams === 'object') {
      Object.keys(extraParams).forEach(function (k) {
        if (extraParams[k] !== undefined && extraParams[k] !== '') {
          payload[k] = extraParams[k];
        }
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') {
      var gtagParams = {};
      Object.keys(payload).forEach(function (k) {
        if (k !== 'event') gtagParams[k] = payload[k];
      });
      window.gtag('event', eventName, gtagParams);
    }
  }

  function initHeaderMenu() {
    var intlMenu = document.getElementById('intl-menu');
    var intlTrigger = document.getElementById('intl-trigger');
    var mobileBtn = document.getElementById('mobile-menu-btn');
    var mobileDrawer = document.getElementById('mobile-drawer');

    function setIntlOpen(open, dismissed) {
      if (!intlMenu || !intlTrigger) return;
      intlTrigger.setAttribute('aria-expanded', String(open));
      intlMenu.classList.toggle('is-open', open);
      intlMenu.classList.toggle('is-dismissed', Boolean(dismissed));
    }

    function setMobileOpen(open) {
      if (!mobileBtn || !mobileDrawer) return;
      mobileBtn.setAttribute('aria-expanded', String(open));
      mobileDrawer.hidden = !open;
    }

    if (intlTrigger && intlMenu) {
      intlTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = intlMenu.classList.contains('is-open');
        var next = !isOpen;
        setIntlOpen(next, !next);
        if (next) {
          trackEvent('international_menu_click', { source: 'desktop_header' });
        }
      });

      intlMenu.addEventListener('mouseleave', function () {
        intlMenu.classList.remove('is-dismissed');
        if (!intlMenu.classList.contains('is-open')) {
          intlTrigger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', function () {
        var next = mobileDrawer.hidden;
        setMobileOpen(next);
        if (next) {
          trackEvent('international_menu_click', { source: 'mobile_header' });
        }
      });

      mobileDrawer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          setMobileOpen(false);
        });
      });
    }

    document.querySelectorAll('[data-lang-select]').forEach(function (el) {
      el.addEventListener('click', function () {
        trackEvent('language_select', {
          target_language: el.getAttribute('data-lang-select') || '',
          market: el.getAttribute('data-market') || '',
          source: el.getAttribute('data-source') || 'header'
        });
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setIntlOpen(false, true);
        setMobileOpen(false);
      }
    });

    document.addEventListener('click', function (e) {
      if (intlMenu && !intlMenu.contains(e.target)) {
        setIntlOpen(false, false);
      }
    });
  }

  function initCollectionObservers() {
    var seen = {};
    var cards = document.querySelectorAll('.product[id]');
    if ('IntersectionObserver' in window && cards.length) {
      var obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var id = entry.target.id;
              if (id && !seen[id]) {
                seen[id] = true;
                trackEvent('collection_view', { product: id, collection: id });
              }
            }
          });
        },
        { threshold: 0.25 }
      );
      cards.forEach(function (c) {
        obs.observe(c);
      });
    }

    document.querySelectorAll('.models-drawer').forEach(function (drawer) {
      drawer.addEventListener('toggle', function () {
        if (drawer.open) {
          var card = drawer.closest('.product[id]');
          var colId = card ? card.id : 'collection';
          trackEvent('collection_view', {
            product: colId,
            collection: colId,
            interaction: 'models_drawer_open'
          });
        }
      });
    });
  }

  function initQuoteEngine() {
    var lang = getPageLang();
    var cfg = CONFIGS[lang] || CONFIGS.fr;
    var form = document.getElementById('quote');
    if (!form) return;

    var countryEl = document.getElementById('country');
    var otherField = document.getElementById('other-field');
    var otherEl = document.getElementById('other');
    var cityEl = document.getElementById('city');
    var productEl = document.getElementById('product');
    var modelEl = document.getElementById('model');
    var quantityEl = document.getElementById('quantity');
    var measureEl = document.getElementById('measure');
    var finishEl = document.getElementById('finish');
    var companyField = document.getElementById('company-field');
    var companyEl = document.getElementById('company');
    var tradeScopeField = document.getElementById('trade-scope-field');
    var tradeScopeEl = document.getElementById('trade-scope');
    var detailsEl = document.getElementById('details');
    var errorBox = document.getElementById('form-error');

    function getCustomerType() {
      var checked = form.querySelector('input[name="type"]:checked');
      return checked ? checked.value : 'retail';
    }

    function showError(msg) {
      if (!errorBox) return;
      if (msg) {
        errorBox.textContent = msg;
        errorBox.hidden = false;
      } else {
        errorBox.textContent = '';
        errorBox.hidden = true;
      }
    }

    function syncFormState() {
      var isTrade = getCustomerType() === 'trade';
      if (companyField && companyEl) {
        companyField.hidden = !isTrade;
        companyEl.required = isTrade;
      }
      if (tradeScopeField) {
        tradeScopeField.hidden = !isTrade;
      }
      var isOtherCountry = countryEl && countryEl.value === 'OTHER';
      if (otherField && otherEl) {
        otherField.hidden = !isOtherCountry;
        otherEl.required = Boolean(isOtherCountry);
      }
    }

    form.addEventListener('input', function () {
      showError('');
    });

    form.addEventListener('change', function (e) {
      syncFormState();
      showError('');
      if (e.target && e.target.name === 'type') {
        if (e.target.value === 'trade') {
          trackEvent('wholesale_quote_start', { trigger: 'form_toggle' });
        } else {
          trackEvent('retail_quote_start', { trigger: 'form_toggle' });
        }
      }
      if (e.target === productEl && productEl.value) {
        trackEvent('product_select', {
          product: productEl.value,
          source: 'form_select'
        });
      }
    });

    // Wire all product/model/type triggers across page
    document.querySelectorAll('[data-type], [data-product], [data-model], [data-finish]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var tType = trigger.getAttribute('data-type');
        var tProd = trigger.getAttribute('data-product');
        var tModel = trigger.getAttribute('data-model');
        var tDims = trigger.getAttribute('data-dims');
        var tFinish = trigger.getAttribute('data-finish');

        if (tType) {
          var radio = form.querySelector('input[name="type"][value="' + tType + '"]');
          if (radio) radio.checked = true;
        }

        if (tProd && productEl) {
          productEl.value = tProd;
        }

        if (tModel && modelEl) {
          modelEl.value = tModel;
        }

        if (tDims && measureEl && !measureEl.value.trim()) {
          measureEl.value = tDims;
        }

        if (tFinish && finishEl) {
          finishEl.value = tFinish;
          document.querySelectorAll('.swatch').forEach(function (s) {
            s.classList.toggle('is-selected', s.getAttribute('data-finish') === tFinish);
          });
        }

        syncFormState();
        showError('');

        if (tProd || tModel) {
          trackEvent('product_select', {
            product: tProd || (productEl ? productEl.value : ''),
            model: tModel || '',
            customer_type: getCustomerType()
          });
        }

        if (tType === 'trade') {
          trackEvent('wholesale_quote_start', {
            product: tProd || (productEl ? productEl.value : ''),
            trigger: 'cta_button'
          });
        } else if (tType === 'retail' || tProd || tModel) {
          trackEvent('retail_quote_start', {
            product: tProd || (productEl ? productEl.value : ''),
            trigger: 'product_card'
          });
        }
      });
    });

    // Apply URL query parameters if present
    var params = new URLSearchParams(window.location.search);
    var pCountry = params.get('country');
    if (pCountry && countryEl) {
      var upper = pCountry.toUpperCase();
      var hasCountry = Array.from(countryEl.options).some(function (o) {
        return o.value === upper;
      });
      if (hasCountry) countryEl.value = upper;
    }
    var pProduct = params.get('product');
    if (pProduct && productEl) {
      var hasProduct = Array.from(productEl.options).some(function (o) {
        return o.value === pProduct;
      });
      if (hasProduct) productEl.value = pProduct;
    }
    var pModel = params.get('model');
    if (pModel && modelEl) {
      modelEl.value = pModel;
    }
    if (params.get('type') === 'trade') {
      var tradeRadio = form.querySelector('input[name="type"][value="trade"]');
      if (tradeRadio) tradeRadio.checked = true;
    }
    syncFormState();

    // Form submit -> Validate & Generate Localized WhatsApp Message
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showError('');

      var rawQty = quantityEl ? quantityEl.value.trim() : '';
      var parsedQty = Number(rawQty);
      if (!rawQty || isNaN(parsedQty) || parsedQty < 1 || !Number.isInteger(parsedQty)) {
        showError(cfg.errorQuantity);
        if (quantityEl) {
          quantityEl.focus();
        }
        return;
      }

      var isTrade = getCustomerType() === 'trade';
      var countryVal = countryEl ? countryEl.value.trim() : '';
      var otherVal = otherEl ? otherEl.value.trim() : '';
      var cityVal = cityEl ? cityEl.value.trim() : '';
      var productVal = productEl ? productEl.value.trim() : '';
      var companyVal = companyEl ? companyEl.value.trim() : '';

      if (
        !countryVal ||
        (countryVal === 'OTHER' && !otherVal) ||
        !cityVal ||
        !productVal ||
        (isTrade && !companyVal)
      ) {
        showError(cfg.errorRequired);
        if (typeof form.reportValidity === 'function') {
          form.reportValidity();
        }
        return;
      }

      if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
        showError(cfg.errorRequired);
        return;
      }

      var countryLabel =
        countryVal === 'OTHER'
          ? otherVal
          : countryEl.selectedOptions && countryEl.selectedOptions[0]
          ? countryEl.selectedOptions[0].textContent.trim()
          : countryVal;

      var productLabel =
        productEl.selectedOptions && productEl.selectedOptions[0]
          ? productEl.selectedOptions[0].textContent.trim()
          : productVal;

      var tradeScopeLabel =
        isTrade && tradeScopeEl && tradeScopeEl.selectedOptions && tradeScopeEl.selectedOptions[0] && tradeScopeEl.value
          ? tradeScopeEl.selectedOptions[0].textContent.trim()
          : '';

      var modelVal = modelEl ? modelEl.value.trim() : '';
      var measureVal = measureEl ? measureEl.value.trim() : '';
      var finishVal = finishEl ? finishEl.value.trim() : '';
      var detailsVal = detailsEl ? detailsEl.value.trim() : '';

      var lines = [
        cfg.msg,
        cfg.labels.type + ': ' + (isTrade ? cfg.professional : cfg.individual),
        cfg.labels.country + ': ' + countryLabel,
        cfg.labels.city + ': ' + cityVal,
        cfg.labels.product + ': ' + productLabel
      ];

      if (modelVal) lines.push(cfg.labels.model + ': ' + modelVal);
      lines.push(cfg.labels.quantity + ': ' + String(parsedQty));
      if (measureVal) lines.push(cfg.labels.measure + ': ' + measureVal);
      if (finishVal) lines.push(cfg.labels.finish + ': ' + finishVal);
      if (isTrade && companyVal) lines.push(cfg.labels.company + ': ' + companyVal);
      if (isTrade && tradeScopeLabel) lines.push(cfg.labels.tradeScope + ': ' + tradeScopeLabel);
      if (detailsVal) lines.push(cfg.labels.details + ': ' + detailsVal);

      var messageText = lines.join('\n');
      var waUrl = 'https://wa.me/905324261788?text=' + encodeURIComponent(messageText);

      form.dataset.lastWhatsappUrl = waUrl;
      form.dataset.lastWhatsappMessage = messageText;
      window.__cabivellaLastWhatsApp = {
        url: waUrl,
        message: messageText,
        country: countryVal === 'OTHER' ? otherVal : countryVal,
        product: productVal,
        customer_type: isTrade ? 'trade' : 'retail',
        quantity: parsedQty
      };

      var qtyBucket = parsedQty === 1 ? '1' : parsedQty <= 10 ? '2-10' : '11+';
      trackEvent('quote_form_complete', {
        product: productVal,
        country: countryVal,
        customer_type: isTrade ? 'trade' : 'retail',
        quantity_bucket: qtyBucket
      });
      trackEvent('whatsapp_click', {
        product: productVal,
        country: countryVal,
        customer_type: isTrade ? 'trade' : 'retail',
        source: 'quote_form_submit'
      });

      if (!window.__cabivellaPreventRedirect) {
        window.location.assign(waUrl);
      }
    });
  }

  function initDirectContactTracking() {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener('click', function () {
        trackEvent('phone_click', {
          source: link.closest('.dock') ? 'mobile_dock' : 'page_contact'
        });
      });
    });

    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (link) {
      link.addEventListener('click', function () {
        trackEvent('whatsapp_click', {
          source: link.closest('.dock') ? 'mobile_dock' : 'direct_whatsapp_button'
        });
      });
    });
  }

  function initScrollReveal() {
    document.documentElement.classList.add('motion-ready');
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    var obs = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var group = el.closest('[data-reveal-group]');
            if (group) {
              var siblings = Array.from(group.querySelectorAll('[data-reveal]'));
              var idx = siblings.indexOf(el);
              el.style.transitionDelay = Math.min((idx % 4) * 80, 240) + 'ms';
            }
            el.classList.add('is-revealed');
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: '160px 0px 60px 0px', threshold: 0.01 }
    );

    items.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 120) {
        el.classList.add('is-revealed');
      } else {
        obs.observe(el);
      }
    });
  }

  function boot() {
    initHeaderMenu();
    initCollectionObservers();
    initQuoteEngine();
    initDirectContactTracking();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
