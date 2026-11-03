(()=>{
const header=document.getElementById('site-header');
const toggle=document.querySelector('.menu-toggle');
const mobile=document.getElementById('mobile-menu');
const mega=document.querySelector('.nav-mega');
function closeMobile(returnFocus=false){if(!mobile||!toggle)return;mobile.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');document.body.classList.remove('nav-open');if(returnFocus)toggle.focus()}
if(toggle&&mobile){
 toggle.addEventListener('click',()=>{const isOpen=toggle.getAttribute('aria-expanded')==='true';if(isOpen)closeMobile();else{mobile.hidden=false;toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close navigation');document.body.classList.add('nav-open');if(mega)mega.open=false}});
 mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMobile()));
 window.addEventListener('resize',()=>{if(window.innerWidth>1190)closeMobile()});
}
if(mega){document.addEventListener('pointerdown',e=>{if(!mega.contains(e.target))mega.open=false})}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(mega)mega.open=false;closeMobile(true)}});
if(header){const sync=()=>header.classList.toggle('is-scrolled',window.scrollY>28);sync();window.addEventListener('scroll',sync,{passive:true})}
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){document.documentElement.classList.add('motion-ready');const o=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');o.unobserve(e.target)}})},{threshold:.07,rootMargin:'0px 0px -16px 0px'});document.querySelectorAll('[data-reveal]').forEach((el,i)=>{el.style.setProperty('--delay',((i%4)*80)+'ms');o.observe(el)})}const interest=new URLSearchParams(location.search).get('interest'),sel=document.querySelector('#interest');if(sel&&interest){let opt=[...sel.options].find(o=>o.text.toLowerCase()===interest.toLowerCase());if(opt)sel.value=opt.value}const form=document.querySelector('form[name="cabivella-enquiries"]');if(form&&(location.protocol==='file:'||form.dataset.formStatus!=='live')){form.addEventListener('submit',e=>{e.preventDefault();const output=form.querySelector('.form-feedback');if(output)output.textContent='Preview only: no message has been sent. Approve privacy terms, change data-form-status to live, deploy on Netlify and configure form notifications to receive enquiries.'})}})();

// V6: real search of all local pages, accessible dialog and responsive navigation.
(()=>{
 const dialog=document.getElementById('site-search');const trigger=document.querySelector('.header-search');const q=document.getElementById('site-query');const results=document.getElementById('site-search-results');
 if(trigger&&dialog&&q&&results){trigger.addEventListener('click',()=>{dialog.showModal();q.value='';render('');q.focus()});const here=new URL(location.href.startsWith('about:') ? 'https://cabivella.co.uk/' : location.href); const base=document.querySelector('meta[name="cabivella-base"]')?.content||'./';
 function render(text){const data=(window.CABIVELLA_SEARCH_INDEX||[]).filter(x=>!text||x.title.toLowerCase().includes(text.toLowerCase())).slice(0,14);results.replaceChildren();if(!data.length){const p=document.createElement('p');p.textContent='No matching collections found.';results.append(p);return;}for(const item of data){const a=document.createElement('a');a.href=new URL(base+item.url,here).href;a.textContent=item.title;results.append(a)}}q.addEventListener('input',()=>render(q.value.trim()));render('');}
})();

// Global smooth scroll and auto-focus for Send project details / enquiry links
document.addEventListener('click', function(e) {
  var link = e.target.closest('a[href="#enquiry"], a[href="#enquiry-section"], a[href"#enquiry"]');
  if (link && !link.getAttribute('href').includes('index.html')) {
    var target = document.querySelector('#enquiry, #enquiry-section, #enquiry-form');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      var firstInput = target.querySelector('input, textarea, select');
      if (firstInput) {
        setTimeout(function() { firstInput.focus(); }, 400);
      }
    }
  }
});
