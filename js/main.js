const IN=!!document.body.dataset.base,U=i=>i=='home'?(IN?'../index.html':'index.html'):(IN?'':'pages/')+i+'.html';
const $=s=>document.querySelector(s),app=$('#app');
const pg=P.map(p=>p[0]);
const notes=()=>{try{return JSON.parse(LS.notes||'{}')}catch(e){return{}}};
const plan=()=>`<p class="note">${x('plan')}</p>`;
const head=id=>`<h1>${x('p_'+id+'_t')}</h1><p>${x('p_'+id+'_b')}</p>`;
const grid=i=>`<div class="grid">${i}</div>`;
function home(){
 const st=[1,2,3,4].map(i=>`<div class="card rv"><div>${x('i'+i)}</div><div class="big">${x('i'+i+'v')}</div></div>`).join('');
 const nv=DATA.news.slice(0,3).map(n=>`<div class="card rv"><small>${n.d}</small><br>${lt(n.ru,n.en)}</div>`).join('');
 return `<section class="hero rv"><h1>ЛАНДАЙ</h1><h2 style="color:#fff">${x('sub')}</h2></section>${plan()}${head('about')}${grid(st)}
 <h2>${x('latest')}</h2>${grid(nv)}<h2>${x('map')}</h2>${mapSvg()}<h2>${x('dev')}</h2><p>${x('devt')}</p>
 <h2>${x('nav')}</h2>${grid(pg.filter(i=>i!='home').map(i=>`<a class="card rv" href="${U(i)}">${x('p_'+i+'_t')}</a>`).join(''))}`}
function mapSvg(){return `<div class="card"><svg viewBox="0 0 200 330" width="180" role="img"><path class="isl" d="M95 10 L125 40 L110 90 L130 140 L115 200 L135 260 L110 320 L80 300 L70 230 L85 170 L70 110 L85 60Z"/><path class="reg" id="reg" d="M85 200 L115 200 L135 260 L110 320 L80 300 L70 230Z"/></svg><p id="mi">${x('mapinfo')}</p></div>`}
function fleet(){return `<div class="tabs">${['all',...new Set(DATA.buses.map(b=>b.b))].map(b=>`<button data-br="${b}">${b=='all'?x('all'):b}</button>`).join('')}</div><div class="grid" id="fl"></div>`}
function drawFleet(b){$('#fl').innerHTML=DATA.buses.filter(v=>b=='all'||v.b==b).map(v=>`<div class="card"><div class="big">${v.m}</div><small>${x('proj')}</small></div>`).join('')}
function drawRoutes(q){const r=DATA.routes.filter(o=>JSON.stringify(o).toLowerCase().includes(q.toLowerCase()));$('#rl').innerHTML=r.length?r.map(o=>`<div class="card"><b>${o.n}</b> ${o.from} → ${o.to}</div>`).join(''):`<p>${x('noroute')}</p>`}
function newsView(){return `<div class="tabs"><button data-nc="all">${x('all')}</button>${Object.keys(DATA.newscat).map(c=>`<button data-nc="${c}">${DATA.newscat[c][lang=='en'?1:0]}</button>`).join('')}</div><div id="nl" class="grid"></div>`}
function drawNews(c){$('#nl').innerHTML=DATA.news.filter(n=>c=='all'||n.c==c).map(n=>`<div class="card"><small>${n.d} · ${DATA.newscat[n.c][lang=='en'?1:0]}</small><br>${lt(n.ru,n.en)}</div>`).join('')}
const aviation=()=>head('aviation')+plan()+`<div class="grid"><div class="card"><div class="big">LANÐAIAVIA</div>${x('proj')}</div><div class="card"><div class="big">Lanđavia</div>${x('proj')}</div><div class="card"><div class="big">2042–2043</div>${x('proj')}</div></div>`;
const gallery=()=>head('gallery')+grid((DATA.gallery.length?DATA.gallery.map(s=>`<img class="rv" style="width:100%;border-radius:12px" src="${s}" alt="">`):Array(6).fill('<div class="ph rv"></div>')).join(''));
const contacts=()=>head('contacts')+`<div class="card">${Object.entries(DATA.contacts).map(([k,v])=>`<p><b>${k}</b>: ${v}</p>`).join('')||ts('unk')}</div>`;
let lsec='al',lsel=0,tbase=0;
function language(){
 const secs=['al','tn','ph','or','gr','di','ex','se','hi'];
 return head('language')+`<div class="tabs">${secs.map(s=>`<button data-ls="${s}" class="${s==lsec?'on':''}">${x(s)}</button>`).join('')}</div><div id="lb">${langBody()}</div>`}
function langBody(){
 const A=DATA.alphabet;
 if(lsec=='al'){const a=A[lsel],nt=notes()[a[0]]||'';
  return `<div class="al">${A.map((l,i)=>`<button data-li="${i}" class="${i==lsel?'on':''}">${l[0]}${l[1]}</button>`).join('')}</div>
  <div class="card" style="margin-top:1rem"><div class="gl">${a[0]} ${a[1]}</div><table>
  <tr><th>${x('upper')}</th><td>${a[0]}</td><th>${x('lower')}</th><td>${a[1]}</td></tr>
<tr><th>${x('name')}</th><td colspan=3>${a[3]||ts('unk')}</td></tr>
<tr><th>${x('desc')}</th><td colspan=3>${ts('unk')}</td></tr><tr><th>${x('word')}</th><td colspan=3>${ts('unk')}</td></tr></table>
  <p><label>${x('notes')}<br><textarea id="nt" rows=3 style="width:100%">${nt}</textarea></label></p></div>`}
 if(lsec=='tn'){const b=A[tbase];
  const rows=DATA.tones.map(t=>`<tr><td class="gl">${b[0]+t[0]}</td><td class="gl">${b[1]+t[0]}</td><td>${ts('unk')}</td><td>${ts('unk')}</td></tr>`).join('');
  return `<p class="note">${x('tnote')}</p><label>${x('base')}: <select id="tb">${A.map((l,i)=>`<option value="${i}"${i==tbase?' selected':''}>${l[0]}${l[1]}</option>`).join('')}</select></label>
  <table><tr><th>${x('upper')}</th><th>${x('lower')}</th><th>${x('tname')}</th><th>${x('tdesc')}</th></tr>${rows}</table>`}
 return `<div class="card">${x(lsec)}: ${x('tbd')}</div>`}
const views={home,about:()=>head('about')+plan(),transport:()=>head('transport')+plan()+grid(['routes','fleet','rail','aviation'].map(i=>`<a class="card" href="${U(i)}">${x('p_'+i+'_t')}</a>`).join('')),
 routes:()=>head('routes')+`<input id="rs" placeholder="${ts('fsearch')}"><div id="rl" class="grid"></div>`,fleet:()=>head('fleet')+fleet(),news:()=>head('news')+newsView(),aviation,gallery,contacts,language};
function route(){
 const id=document.body.dataset.page||'home';$('.logo').href=U('home');
 $('#nav').innerHTML=pg.map(i=>`<a href="${U(i)}" class="${i==id?'on':''}">${x('p_'+i+'_t')}</a>`).join('');
 app.innerHTML=(views[id]||(()=>head(id)+plan()))();
 if(id=='fleet')drawFleet('all');if(id=='routes')drawRoutes('');if(id=='news')drawNews('all');
 $('#ft').innerHTML=x('fn');$('#q').placeholder=ts('search');$('#nav').classList.remove('open');reveal();
 document.documentElement.lang=lang=='ld'?'x-landai':lang}
function reveal(){const o=new IntersectionObserver(e=>e.forEach(i=>{if(i.isIntersecting){i.target.classList.add('in');o.unobserve(i.target)}}));document.querySelectorAll('.rv').forEach(e=>o.observe(e))}
const applyTheme=()=>document.documentElement.dataset.theme=theme;
document.addEventListener('click',e=>{
 const t=e.target,k=t.closest('[data-k]');
 if(editMode&&lang=='ld'&&k){e.preventDefault();const v=prompt(ts('editq'),tx(k.dataset.k).todo?'':k.textContent);if(v!==null){const m=ldt();m[k.dataset.k]=v;LS.ldt=JSON.stringify(m);route()}return}
 const d=t.dataset;
 if(d.br)drawFleet(d.br);if(d.nc)drawNews(d.nc);
 if(d.ls){lsec=d.ls;route()}
 if(d.li!==undefined){lsel=+d.li;$('#lb').innerHTML=langBody()}
 if(t.id=='reg')$('#mi').textContent=ts('mapinfo');
 if(!t.closest('.sw'))$('#res').style.display='none'});
document.addEventListener('input',e=>{if(e.target.id=='nt'){const m=notes();m[DATA.alphabet[lsel][0]]=e.target.value;LS.notes=JSON.stringify(m)}if(e.target.id=='rs')drawRoutes(e.target.value)});
document.addEventListener('change',e=>{if(e.target.id=='tb'){tbase=+e.target.value;$('#lb').innerHTML=langBody()}});
$('#q').oninput=e=>{const q=e.target.value.trim().toLowerCase(),r=$('#res');if(!q){r.style.display='none';return}
 const h=P.filter(p=>(ts('p_'+p[0]+'_t')+' '+ts('p_'+p[0]+'_b')).toLowerCase().includes(q));
 r.innerHTML=h.length?h.map(p=>`<a href="${U(p[0])}">${ts('p_'+p[0]+'_t')}</a>`).join(''):`<a>${ts('nores')}</a>`;r.style.display='block'};
$('#lang').value=lang;$('#lang').onchange=e=>{lang=e.target.value;LS.lang=lang;route()};
$('#th').onclick=()=>{theme=theme=='dark'?'light':'dark';LS.theme=theme;applyTheme()};
$('#ed').onclick=()=>{editMode=!editMode;document.body.classList.toggle('edm',editMode);if(editMode)alert(ts('editon'))};
$('#bg').onclick=()=>$('#nav').classList.toggle('open');
applyTheme();route();
$('#ex').onclick=()=>{const m=Object.assign({},window.LD,ldt());Object.keys(m).forEach(k=>{if(!m[k])delete m[k]});
 const s='// Ландайские переводы (выгружено из редактора). Пустые/отсутствующие ключи = не переведено.\nwindow.LD='+JSON.stringify(m,null,1)+';\n';
 try{navigator.clipboard.writeText(s)}catch(e){}
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([s],{type:'text/javascript'}));a.download='landai.js';a.click();alert(ts('exp'))};
