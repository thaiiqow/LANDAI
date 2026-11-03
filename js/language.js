const LS=localStorage;
let lang=LS.lang||'ru',theme=LS.theme||'light',editMode=false;
const ldt=()=>{try{return JSON.parse(LS.ldt||'{}')}catch(e){return{}}};
function tx(k){if(lang==='ld'){const v=ldt()[k]||(window.LD&&LD[k]);return v?{s:v}:{s:D.ru[k]||k,todo:1}}return{s:D[lang][k]||D.ru[k]||k}}
function x(k){const r=tx(k);return `<span data-k="${k}"${r.todo?' class="todo"':''}>${r.s}</span>`}
function ts(k){return tx(k).s}
function lt(ru,en){return lang==='en'?en:ru}
