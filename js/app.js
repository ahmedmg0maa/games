const $=(q)=>document.querySelector(q); const $$=(q)=>[...document.querySelectorAll(q)];
const params=new URLSearchParams(location.search); const caseId=params.get('id')||'case-001';
const getCase=(id=caseId)=>window.CASES.find(c=>c.id===id)||window.CASES[0];
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set(k,v){localStorage.setItem(k,JSON.stringify(v))}};
function nav(){return `<div class="nav"><div class="container navin"><a class="brand" href="index.html" style="text-decoration:none;color:inherit"><div class="mark">F</div><span>Family Detective Files</span></a><div class="links"><a href="cases.html">القضايا</a><a href="evidence-board.html">لوحة الأدلة</a><a href="hints.html">التلميحات</a><a href="games.html">تحديات</a></div></div></div>`}
function footer(){return `<div class="footer"><div class="container">نظام تحقيق تفاعلي عربي — كل القضايا قابلة للحل بالأدلة فقط، بدون حظ.</div></div>`}
function boot(){document.body.insertAdjacentHTML('afterbegin',nav());document.body.insertAdjacentHTML('beforeend',footer());}
function caseCards(){return CASES.map(c=>`<article class="card"><img src="${c.cover}" alt="${c.title}"><div class="pillrow" style="margin:14px 0"><span class="badge ${c.levelClass}">${c.level}</span><span class="badge">${c.duration}</span></div><h3>${c.title}</h3><p class="muted">${c.tagline}</p><a class="btn primary" href="case.html?id=${c.id}">فتح ملف القضية</a></article>`).join('')}
function addEvidence(id,title){let arr=store.get('evidence',[]); if(!arr.some(x=>x.id===id)){arr.push({id,title,caseId});store.set('evidence',arr)} alert('تمت إضافة الدليل إلى لوحة الأدلة');}
function removeEvidence(i){let arr=store.get('evidence',[]);arr.splice(i,1);store.set('evidence',arr);renderBoard?.();}
function saveNote(id,val){let notes=store.get('notes',{});notes[id]=val;store.set('notes',notes)}
function typeLabel(t){return {police:'شرطة',forensic:'طب شرعي',camera:'كاميرا',calls:'اتصالات',email:'بريد',messages:'رسائل',witness:'شهادة',evidence:'دليل مادي',timeline:'تفصيلة زمنية'}[t]||'مستند'}
boot();
