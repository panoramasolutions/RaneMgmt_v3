import{c as F,z as Be}from"./utility_all2-DyA0G0Ac.js";import{g as D,d as We,a as He,W as J,b as Ye,G as he}from"./goodiesMethods-D5CY8yns.js";import"./index-9qqFRw2W.js";import"./effects-l9hwnwzV.js";import"./autoCouponMessages-BG9mCsyF.js";import"./priceGraph-Cg_ToZ07.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-utils-DxlUqrPD.js";import"./analyticsEventName-CJ37ZnCZ.js";import"./indexedDb.js-1a1GZY9p.js";import"./domCheckout-CooVs9En.js";const Ke=e=>F({type:"GOODIE_SPIN_LIST",goodieId:e}),Ve=e=>F({type:"GOODIE_START_REDEEM",goodieId:e}),Ze=e=>F({type:"GOODIE_GET_CODE",goodieId:e}),Xe=(e,t,n)=>F({type:"GOODIE_UPDATE_STATUS",goodieId:e,isSuccess:t,errorMessage:n}),Je=e=>F({type:"GOODIE_GET_CONFIG",campaignId:e}),Qe=()=>F({type:"getMyTabId"}),et=3600*1e3,N=new Map,tt=e=>`bh-goodie-config-${e}`,de=async e=>{if(e==null||e==="")return null;const t=String(e);if(N.has(t))return N.get(t);const n=tt(t);let o;try{const a=await chrome.storage.local.get([n]);if(o=a==null?void 0:a[n],o&&Date.now()-o.fetchedAt<et)return N.set(t,o.config),o.config}catch{}try{const a=await Je(t);if(a&&typeof a=="object"&&Array.isArray(a.steps)){N.set(t,a);try{await chrome.storage.local.set({[n]:{config:a,fetchedAt:Date.now()}})}catch{}return a}return(o==null?void 0:o.config)??null}catch{return(o==null?void 0:o.config)??null}},nt=(e,t)=>{const n=t.replace(/^www\./,"");return(e.matchHosts??[]).some(o=>o.replace(/^www\./,"")===n)},V="bh-goodies-checkout",Q=async()=>{try{const e=await chrome.storage.local.get([V]);return(e==null?void 0:e[V])??null}catch{return null}},Le=async e=>{try{await chrome.storage.local.set({[V]:e})}catch{}},y=async e=>{const t=await Q();if(!t)return null;const n={...t,...e};return await Le(n),n},_=async()=>{try{await chrome.storage.local.remove(V)}catch{}},ot='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512"><g clip-path="url(#bhl24a)"><path fill="url(#bhl24b)" stroke="url(#bhl24c)" stroke-width="8.13" d="M169.98 4.06h172.04c34.9 0 62.67 1.88 84.73 6.78 22.01 4.9 38.1 12.75 49.88 24.53s19.64 27.87 24.53 49.88c4.9 22.06 6.78 49.83 6.78 84.73v172.04c0 34.9-1.88 62.67-6.78 84.73-4.9 22.01-12.75 38.1-24.53 49.88s-27.87 19.64-49.88 24.53c-22.06 4.9-49.83 6.78-84.73 6.78H169.98c-34.9 0-62.67-1.88-84.73-6.78-22.01-4.9-38.1-12.75-49.88-24.53s-19.64-27.87-24.53-49.88c-4.9-22.06-6.78-49.83-6.78-84.73V169.98c0-34.9 1.88-62.67 6.78-84.73 4.9-22.01 12.75-38.1 24.53-49.88s27.87-19.64 49.88-24.53c22.06-4.9 49.83-6.78 84.73-6.78Z"/><mask id="bhl24d" width="512" height="512" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#4f46e5" d="M0 169.98C0 30 30 0 169.98 0h172.04C482 0 512 30 512 169.98v172.04C512 482 482 512 342.02 512H169.98C30 512 0 482 0 342.02z"/></mask><g mask="url(#bhl24d)"><path fill="url(#bhl24e)" stroke="url(#bhl24f)" stroke-width="2.03" d="M241.88 237.92a5.9 5.9 0 0 1 5.8 6.92l-23.5 133.2c43.42-36.81 100.98-47.12 146.2-21 60.5 34.91 75.59 121.45 34.21 193.1-41.37 71.67-123.85 101.87-184.34 66.94a108 108 0 0 1-33.03-29.6l-6.2 35.1-.14.83h-77.25l.2-1.2 66.61-377.4a8.3 8.3 0 0 1 8.2-6.89zM329.6 430.2c-25.62-23.88-69.72-18.66-98.5 12.2-28.78 30.88-30.92 75.23-5.3 99.12 25.61 23.89 69.7 18.66 98.49-12.2 28.78-30.87 30.92-75.23 5.3-99.12Z"/></g><path fill="#ffe372" d="M354.29 85.87c7.84 0 14.31 6.39 13.22 14.17a101.56 101.56 0 0 1-100.55 87.36 101.54 101.54 0 0 1-100.54-87.36c-1.1-7.78 5.38-14.17 13.23-14.17 7.84 0 14.07 6.42 15.59 14.12a73.1 73.1 0 0 0 71.72 58.98A73.1 73.1 0 0 0 338.7 100c1.52-7.7 7.75-14.12 15.6-14.12"/></g><defs><linearGradient id="bhl24b" x1="77.21" x2="402.29" y1="30.48" y2="457.14" gradientUnits="userSpaceOnUse"><stop stop-color="#4f46e5"/><stop offset="1" stop-color="#3932bf"/></linearGradient><linearGradient id="bhl24c" x1="18.29" x2="398.22" y1="36.57" y2="414.48" gradientUnits="userSpaceOnUse"><stop stop-color="#5667ff"/><stop offset="1" stop-color="#302b9e" stop-opacity=".4"/></linearGradient><linearGradient id="bhl24e" x1="265.87" x2="265.87" y1="238.94" y2="556.7" gradientUnits="userSpaceOnUse"><stop offset=".31" stop-color="#f4f5f0"/><stop offset="1" stop-color="#fff" stop-opacity=".6"/></linearGradient><linearGradient id="bhl24f" x1="109.72" x2="265.87" y1="392.13" y2="630.6" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><clipPath id="bhl24a"><path fill="#fff" d="M0 0h512v512H0z"/></clipPath></defs></svg>',Z="bh-goodie-modal",k="#4f46e5",X="#ffcc00",Oe=["#3730a3","#6366f1"],at="#1e1b4b",it="#1e1b4b",rt="#ffffff",Re="#facc15",ge=4600,me=6,b=160,be=152,I=138,st=88,oe=124,B=111,lt=68,C=20;let W=null,x=null,A=null,G=null,P=!1,S=!1;const ye=e=>e==="checkout"||e==="awaiting_user",ct=`
  :host { all: initial; }
  * { box-sizing: border-box; font-family: Metropolis, system-ui, -apple-system, sans-serif; }
  .scrim {
    position: fixed; inset: 0; z-index: 2147483647;
    background: rgba(10,8,20,.55); backdrop-filter: blur(3px);
    display: flex; align-items: center; justify-content: center; padding: 16px;
  }
  .card {
    position: relative; width: 440px; max-width: 96vw; background: #fff;
    border: 2px solid ${X}; border-radius: 18px; overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,.28); color: #1b1612;
    max-height: 92vh; display: flex; flex-direction: column;
  }
  .head { flex: 0 0 auto; }
  .body { overflow-y: auto; }
  /* Docked mode: a small non-blocking corner card so the user can still fill the
     address / choose payment on the merchant page underneath. */
  .scrim.docked {
    background: transparent; backdrop-filter: none; pointer-events: none;
    align-items: flex-end; justify-content: flex-end; padding: 16px;
  }
  .scrim.docked .card { width: 320px; pointer-events: auto; }
  .head {
    display: flex; align-items: center; gap: 8px; padding: 12px 16px;
    background: ${X}; font-weight: 600; font-size: 13px; color: #1b1612;
  }
  .head .brand { width: 22px; height: 22px; display: inline-flex; flex: 0 0 auto; }
  .head .brand svg { width: 100%; height: 100%; display: block; }
  .close {
    margin-left: auto; border: 0; background: rgba(0,0,0,.08); cursor: pointer;
    width: 24px; height: 24px; border-radius: 999px; color: #1b1612; font-size: 15px;
    line-height: 1; display: flex; align-items: center; justify-content: center;
  }
  .body { padding: 18px 16px 16px; }
  .title { font-size: 16px; font-weight: 600; line-height: 1.25; text-align: center; }
  .wontitle { font-size: 21px; font-weight: 700; line-height: 1.2; text-align: center; }
  .detail { font-size: 13px; color: #6b7280; margin-top: 6px; line-height: 1.4; text-align: center; }

  /* Prize wheel (SVG) */
  .wheelwrap { position: relative; width: 380px; height: 380px; max-width: 100%; margin: 12px auto 2px; }
  .wheelwrap svg.wheelface { display: block; width: 100%; height: 100%; }
  .rotor { transform-origin: 160px 160px; will-change: transform; }
  .wedge-group { transition: opacity .45s ease; }
  .wedge-group.dimmed { opacity: .25; }
  .winglow { pointer-events: none; opacity: 0; }
  .winglow.on { animation: winpulse 1.4s ease-in-out; }
  @keyframes winpulse {
    0%, 100% { opacity: 0; }
    20%, 60% { opacity: .5; }
    40%, 80% { opacity: .15; }
  }
  /* rim bulbs: static when idle; alternating chase while spinning */
  .spinning .bulb.a { animation: bhblink .32s steps(1) infinite; }
  .spinning .bulb.b { animation: bhblink .32s steps(1) infinite .16s; }
  @keyframes bhblink { 0% { opacity: 1; } 50% { opacity: .18; } 100% { opacity: 1; } }
  /* pointer: kite at top, kicks as wedges pass */
  .pointer {
    position: absolute; top: -7px; left: 50%; width: 40px; height: 54px; z-index: 6;
    transform: translateX(-50%); transform-origin: 50% 18%;
    filter: drop-shadow(0 3px 3px rgba(0,0,0,.3));
    transition: transform 80ms ease-out;
  }
  .pointer.tick { transform: translateX(-50%) rotate(-14deg); transition: transform 40ms ease-in; }
  .pointer svg { display: block; width: 100%; height: 100%; }
  .hub {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); z-index: 5;
    width: 86px; height: 86px; border-radius: 50%; background: #fff; border: 0; cursor: pointer;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px;
    font-family: inherit;
    box-shadow: 0 3px 12px rgba(0,0,0,.3), inset 0 0 0 4px ${k};
  }
  .hub[disabled] { cursor: default; }
  .hub .g { font-size: 20px; line-height: 1; }
  .hub .t { font-size: 10.5px; font-weight: 800; letter-spacing: .12em; color: ${k}; }
  /* confetti layer (won screen) */
  .confetti { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 8; }
  .confetti i { position: absolute; width: 8px; height: 12px; top: -14px; border-radius: 2px; }
  /* campaign banner below the wheel (single, best-fitting image) */
  .banner { margin-top: 10px; border-radius: 12px; overflow: hidden; }
  .banner img { display: block; width: 100%; height: auto; }
  .banner:empty { display: none; }
  /* result screens (won / lost) share one frame so the card doesn't resize —
     shorter content centers within the same height */
  .result { min-height: 420px; display: flex; flex-direction: column; justify-content: center; }

  .btn {
    margin-top: 16px; width: 100%; border: 0; border-radius: 12px; cursor: pointer;
    background: ${k}; color: #fff; font-size: 14px; font-weight: 600; padding: 12px;
  }
  .btn:hover { background: #4338ca; }
  .btn[disabled] { opacity: .6; cursor: default; }
  .btn.ghost { background: #f3f4f6; color: #374151; margin-top: 8px; }
  .center { display: flex; flex-direction: column; align-items: center; }
  .offer { display: flex; flex-direction: column; align-items: center; margin-top: 12px; }
  .offer img { width: 120px; height: 120px; object-fit: contain; }
  .offer .b {
    font-size: 11px; color: ${k}; font-weight: 700; margin-top: 8px;
    text-transform: uppercase; letter-spacing: .05em;
    background: #eef2ff; border-radius: 999px; padding: 3px 10px;
  }
  .offer .n { font-size: 16px; font-weight: 600; margin-top: 6px; text-align: center; }
  .offer .u { font-size: 12px; color: #6b7280; margin-top: 4px; text-align: center; }
  .offer .exp { font-size: 11px; color: #9ca3af; margin-top: 2px; text-align: center; }
  .spinner {
    width: 30px; height: 30px; border: 3px solid #e0e7ff; border-top-color: ${k};
    border-radius: 50%; animation: bhspin .8s linear infinite; margin: 14px auto 0;
  }
  @keyframes bhspin { to { transform: rotate(360deg); } }
  .dot { width: 40px; height: 40px; border-radius: 50%; display:flex; align-items:center;
    justify-content:center; color:#fff; font-size:22px; margin: 6px auto 0; }
  .ok { background: #22c55e; } .err { background: #ef4444; } .ask { background: #f59e0b; }
  .emoji { font-size: 40px; margin: 6px auto 0; text-align: center; }
  .foot { margin-top: 14px; padding-top: 10px; border-top: 1px solid #f0eef2;
    font-size: 11px; color: #6b7280; display: flex; align-items: center; gap: 5px; justify-content: center; }
  .foot.warn { color: #d97706; }
  /* "Keep this page open" advisory shown while the claim is running. */
  .keepopen { margin-top: 14px; display: flex; align-items: flex-start; gap: 7px;
    background: #fff7ed; border: 1px solid #fed7aa; border-radius: 10px;
    padding: 9px 11px; font-size: 12px; line-height: 1.4; color: #9a3412; text-align: left; }
  .keepopen b { font-weight: 600; }
  /* Star rating on the success screen */
  .rate { margin-top: 14px; padding-top: 12px; border-top: 1px solid #f0eef2; }
  .rate .q { font-size: 13px; font-weight: 600; text-align: center; color: #1b1612; line-height: 1.35; }
  .stars { display: flex; justify-content: center; gap: 6px; margin-top: 8px; }
  .star { border: 0; background: none; cursor: pointer; padding: 2px; width: 34px; height: 34px; }
  .star svg { width: 100%; height: 100%; display: block; }
  .star svg path { fill: none; stroke: #d1d5db; stroke-width: 1.5; transition: fill .12s ease, stroke .12s ease; }
  .star.on svg path { fill: ${k}; stroke: ${k}; }
  .stars.done .star { cursor: default; }
  .rate-more { margin-top: 10px; }
  .rate-more[hidden] { display: none; }
  .rate-input {
    width: 100%; min-height: 56px; resize: none; font-family: inherit; font-size: 12px;
    color: #1b1612; border: 1px solid #e5e7eb; border-radius: 10px; padding: 8px 10px;
  }
  .rate-input::placeholder { color: #9ca3af; }
  .rate-input:focus { outline: none; border-color: ${k}; }
  .rate-submit { margin-top: 8px; }
`,p=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Fe=e=>He(e)||"Your goodie",dt=e=>e&&typeof e.discount=="string"?e.discount:"",ft=e=>{const t=dt(e).trim();return/^\d+(\.\d+)?$/.test(t)?`${t}% OFF`:t},ut=e=>e&&typeof e.usage=="string"?e.usage:"",pt=e=>{const t=e&&typeof e.expiry=="string"?e.expiry:"";if(!t)return"";const n=new Date(t);return isNaN(n.getTime())?"":`Valid till ${n.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}`},ht=e=>{if(e<=0)return"";const t=Math.floor(e/1e3),n=Math.floor(t/60),o=t%60;return n>0?`${n}m ${o}s`:`${o}s`},fe=()=>{var e;return((e=document.getElementById(Z))==null?void 0:e.shadowRoot)??null},xe=()=>{var e;return((e=fe())==null?void 0:e.querySelector(".rotor"))??null},Pe=(e,t)=>e*t+t/2,T=(e,t)=>{const n=e*Math.PI/180;return[b+t*Math.sin(n),b-t*Math.cos(n)]},De=(e,t)=>{const[n,o]=T(e*t,I),[a,r]=T((e+1)*t,I);return`M ${b} ${b} L ${n.toFixed(2)} ${o.toFixed(2)} A ${I} ${I} 0 0 1 ${a.toFixed(2)} ${r.toFixed(2)} Z`},gt=e=>{const t=e.split(/\s+/);if(t.length<2)return[e,""];let n=[e,""],o=e.length;for(let a=1;a<t.length;a++){const r=t.slice(0,a).join(" "),s=t.slice(a).join(" "),i=Math.max(r.length,s.length);i<o&&(o=i,n=[r,s])}return n},mt=e=>{const t=Math.max(...e.map(n=>n.length));return t<=12?12:t<=15?10.5:t<=18?9.5:8.5},Ge=52,bt=e=>e*(Ge*Math.PI/180),yt=e=>{const t=Math.max(...e.map(n=>n.length));return Math.max(7,Math.min(10,.95*bt(B)/(.52*t)))},xt=(e,t,n,o,a)=>{const r=t>90&&t<270,s=Ge/2,i=(l,c)=>{const d=n[l];if(!d)return"";const u=r?c+o*.75:c,[f,h]=T(r?t+s:t-s,u),[m,v]=T(r?t-s:t+s,u),j=`bh-wl-${e}-${l}`;return`<path id="${j}" d="M ${f.toFixed(1)} ${h.toFixed(1)} A ${u} ${u} 0 0 ${r?0:1} ${m.toFixed(1)} ${v.toFixed(1)}" fill="none"/>
      <text font-size="${o}" font-weight="700" fill="${a}"><textPath href="#${j}" startOffset="50%" text-anchor="middle">${p(d)}</textPath></text>`};return n[1]?r?i(0,B)+i(1,oe):i(0,oe)+i(1,B):i(0,(oe+B)/2)},we=(e,t=!1)=>{const n=e.length+1,o=360/n,a=e.some(i=>D(i));let r="";if(e.length)for(let i=0;i<n;i++){const l=i===n-1,c=l?at:Oe[i%2],d=Pe(i,o),u=l?"":D(e[i]),[f,h]=T(d,lt),m=l?["Better luck",a?"next time":"next time 🍀"]:gt(Fe(e[i])),v=l?"rgba(255,255,255,.9)":rt,j=u?`<g transform="translate(${f.toFixed(1)} ${h.toFixed(1)})">
             <circle r="${C+2}" fill="#fff" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
             <image href="${p(u)}" x="${-C}" y="${-C}" width="${C*2}" height="${C*2}"
                    clip-path="url(#bhbclip)" preserveAspectRatio="xMidYMid slice"/>
           </g>`:l&&a?`<g transform="translate(${f.toFixed(1)} ${h.toFixed(1)})">
             <circle r="${C+2}" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
             <text y="7" text-anchor="middle" font-size="20">🍀</text>
           </g>`:"";let ee;if(a){const te=l?9:yt(m);ee=xt(i,d,m,te,v)}else{const[te,qe]=T(d,st);let pe=d-90;d>180&&(pe+=180);const ne=l?10:mt(m);ee=`<g transform="translate(${te.toFixed(1)} ${qe.toFixed(1)}) rotate(${pe.toFixed(1)})">
          <text x="0" y="${m[1]?-2.5:3}" text-anchor="middle" font-size="${ne}" font-weight="700" fill="${v}">${p(m[0])}</text>
          ${m[1]?`<text x="0" y="${ne+1.5}" text-anchor="middle" font-size="${ne}" font-weight="700" fill="${v}">${p(m[1])}</text>`:""}
        </g>`}r+=`<g class="wedge-group" data-i="${i}">
        <path d="${De(i,o)}" fill="${c}" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
        ${j}
        ${ee}
      </g>`}let s="";for(let i=0;i<n*2;i++){const[l,c]=T(i*(360/(n*2)),be-7);s+=`<circle class="bulb ${i%2?"b":"a"}" cx="${l.toFixed(1)}" cy="${c.toFixed(1)}" r="3.2" fill="${Re}"/>`}return`
    <div class="wheelwrap${t?" spinning":""}">
      <div class="pointer">
        <svg viewBox="0 0 34 46">
          <path d="M17 44 C 9 32, 4 24, 4 15 A 13 13 0 0 1 30 15 C 30 24, 25 32, 17 44 Z"
                fill="${X}" stroke="#1b1612" stroke-width="2.5" stroke-linejoin="round"/>
          <circle cx="17" cy="15" r="4.5" fill="#1b1612"/>
        </svg>
      </div>
      <svg class="wheelface" viewBox="0 0 320 320" role="img" aria-label="Prize wheel">
        <defs>
          <clipPath id="bhbclip"><circle r="${C}"/></clipPath>
          <radialGradient id="bhsheen" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stop-color="#fff" stop-opacity=".22"/>
            <stop offset="55%" stop-color="#fff" stop-opacity="0"/>
            <stop offset="100%" stop-color="#000" stop-opacity=".18"/>
          </radialGradient>
        </defs>
        <circle cx="${b}" cy="${b}" r="${be}" fill="${it}"/>
        ${e.length?"":`<circle cx="${b}" cy="${b}" r="${I}" fill="#eef2ff"/>`}
        <g class="rotor">
          ${r}
          <circle cx="${b}" cy="${b}" r="${I}" fill="url(#bhsheen)" pointer-events="none"/>
        </g>
        ${s}
        <circle cx="${b}" cy="${b}" r="${I}" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="2"/>
      </svg>
      <button class="hub" data-act="spin" ${t||!e.length?"disabled":""}>
        <span class="g">🎁</span><span class="t">SPIN</span>
      </button>
    </div>`};let ae=null,$e="";const wt=async e=>{var a;const t=e.join("|");if($e===t)return ae;const o=(await Promise.all(e.map(r=>new Promise(s=>{const i=new Image;i.onload=()=>s({u:r,ar:i.naturalWidth/Math.max(1,i.naturalHeight)}),i.onerror=()=>s(null),i.src=r})))).filter(Boolean);return o.sort((r,s)=>s.ar-r.ar),$e=t,ae=((a=o[0])==null?void 0:a.u)??null,ae},$t=()=>{let e=document.getElementById(Z),t;if(e)t=e.shadowRoot;else{e=document.createElement("div"),e.id=Z,(document.documentElement||document.body).appendChild(e),t=e.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent=ct,t.appendChild(n);const o=document.createElement("div");o.className="scrim",o.innerHTML='<div class="card"></div>',t.appendChild(o)}return t.querySelector(".card")},ke=`
        <div class="keepopen">
          <span>⚠️</span>
          <span><b>Keep this page open.</b> Please don’t close this window or reload the
          page until your goodie is claimed — doing so will cancel it.</span>
        </div>`,kt=`
        <div class="dot err">!</div>
        <div class="title" style="margin-top:10px">Claim in progress</div>
        <div class="detail">Your goodie is still being claimed. Closing now will cancel
        it. Are you sure you want to close?</div>
        <button class="btn" data-act="keep-open">Keep it open</button>
        <button class="btn ghost" data-act="force-close">Close anyway</button>`,vt=4,Ct="M12 .587l3.668 7.431L24 9.748l-6 5.849 1.416 8.263L12 19.771 4.584 23.86 6 15.597 0 9.748l8.332-1.73z",q={chrome_web:"https://chromewebstore.google.com/detail/Buyhatke:%20Price%20History%20%26%20Tracker%2C%20Spend%20Lens/ojplmecpdpgccookcobabopnaifgidhf/reviews/my-review",edge_web:"https://microsoftedge.microsoft.com/addons/detail/buyhatke-price-history-/gdgnlfdenkmjcfgjpnookbglpndleahm",safari_mac_appstore:"https://apps.apple.com/in/app/buyhatke-price-tracker-coupon/id6476868488",safari_ios_appstore:"https://apps.apple.com/in/app/buyhatke-ai-shopping-assistant/id895452619"},St=()=>`
        <div class="rate">
          <div class="q">Enjoying Buyhatke? Rate us</div>
          <div class="stars">${[1,2,3,4,5].map(t=>`<button class="star" data-star="${t}" aria-label="Rate ${t} star"><svg viewBox="0 0 24 24"><path d="${Ct}"/></svg></button>`).join("")}</div>
          <div class="rate-more" hidden>
            <textarea class="rate-input" rows="2" placeholder="Tell us more (optional)"></textarea>
            <button class="btn rate-submit">Submit</button>
          </div>
        </div>`,It=(e,t="")=>{try{const n=JSON.stringify([{feedback_selected:e,source:"goodie_success",feedback_other:t,email:"",url:window.location.href}]);Be(n,()=>{})}catch{}},Et=()=>{const e=navigator.userAgent||"",t=/Android/i.test(e),n=/iPhone|iPad|iPod/i.test(e),o=/Macintosh/i.test(e),a=/Chrome\/\d+/i.test(e)&&!/Edg\//i.test(e)&&!/OPR\//i.test(e),r=/Edg\//i.test(e),s=/Safari\/\d+/i.test(e)&&!/Chrome\/\d+/i.test(e);let i="";a&&!t&&!n?i=q.chrome_web:r?i=q.edge_web:o?i=q.safari_mac_appstore:s&&(i=q.safari_ios_appstore),i&&window.open(i,"_blank","noopener")},Tt=e=>{const t=e.querySelector(".stars"),n=Array.from(e.querySelectorAll(".star")),o=e.querySelector(".rate-more"),a=e.querySelector(".rate-input"),r=e.querySelector(".rate-submit");if(!t||!n.length)return;const s=c=>n.forEach((d,u)=>d.classList.toggle("on",u<c));let i=0,l=!1;n.forEach((c,d)=>{const u=d+1;c.onmouseenter=()=>{l||s(u)},c.onmouseleave=()=>{l||s(i)},c.onclick=()=>{l||(i=u,s(u),o&&(o.hidden=!1))}}),r&&(r.onclick=()=>{if(l||!i)return;l=!0,t.classList.add("done"),o&&(o.hidden=!0),It(i,(a==null?void 0:a.value.trim())??"");const c=e.querySelector(".rate .q");i>=vt?(c&&(c.textContent="Thanks! Taking you to the store ❤️"),Et()):c&&(c.textContent="Thanks for your feedback! 🙏")})},_t=e=>{var t,n,o,a,r;switch(e.screen){case"spin":return`
        <div class="title">${p(e.title??"You’ve unlocked a spin! 🎉")}</div>
        <div class="detail">${p(e.detail??"Give it a spin and reveal your surprise! 🎁")}</div>
        ${we(e.goodies??[])}
        ${(t=e.banners)!=null&&t.length?'<div class="banner"></div>':""}
        <button class="btn" data-act="spin" ${e.onSpin?"":"disabled"}>Spin Now</button>`;case"spinning":return`
        <div class="title">${p(e.title??"Spinning…")}</div>
        <div class="detail">${p(e.detail??"Good luck!")}</div>
        ${we(e.goodies??[],!0)}
        ${(n=e.banners)!=null&&n.length?'<div class="banner"></div>':""}`;case"won":{const s=ft(e.offer)||e.brand||"",i=ut(e.offer),l=pt(e.offer),c=D(e.offer)?`<img src="${p(D(e.offer))}" alt="" />`:(o=e.banners)!=null&&o.length?"":'<div class="emoji">🎁</div>';return`
      <div class="result">
        <div class="wontitle">${p(e.title??"Hurrah! You’ve won 🎉")}</div>
        ${!D(e.offer)&&((a=e.banners)!=null&&a.length)?'<div class="banner"></div>':""}
        <div class="center">
          <div class="offer">
            ${c}
            ${s?`<div class="b">${p(s)}</div>`:""}
            <div class="n">${p(Fe(e.offer))}</div>
            ${i?`<div class="u">${p(i)}</div>`:""}
            ${l?`<div class="exp">${p(l)}</div>`:""}
          </div>
        </div>
        <div class="detail">${p(e.detail??"It’s all yours! 🎁 Redeem now and we’ll handle the checkout for you.")}</div>
        <button class="btn" data-act="redeem">Redeem Now</button>
      </div>`}case"lost":return`
      <div class="result">
        <div class="wontitle">${p(e.title??"Better luck next time!")}</div>
        ${(r=e.banners)!=null&&r.length?'<div class="banner"></div>':""}
        <div class="emoji">🍀</div>
        <div class="detail">${p(e.detail??"No goodie this time — keep shopping with Buyhatke for another chance.")}</div>
        <button class="btn ghost" data-act="cancel">Close</button>
      </div>`;case"checkout":return`
        <div class="spinner"></div>
        <div class="title" style="margin-top:12px">${p(e.title??"Redeeming your goodie…")}</div>
        ${e.detail?`<div class="detail">${p(e.detail)}</div>`:""}
        ${ke}`;case"awaiting_user":return`
        <div class="dot ask">👤</div>
        <div class="title" style="margin-top:10px">${p(e.title??"A quick step needs you")}</div>
        ${e.detail?`<div class="detail">${p(e.detail)}</div>`:""}
        ${e.onConfirm?`<button class="btn" data-act="confirm">${p(e.confirmLabel??"Confirm & continue")}</button>`:""}
        ${ke}`;case"success":return`
        <div class="dot ok">✓</div>
        <div class="title" style="margin-top:10px">${p(e.title??"Order placed — enjoy your goodie! 🎉")}</div>
        ${e.detail?`<div class="detail">${p(e.detail)}</div>`:""}
        ${St()}
        <button class="btn ghost" data-act="cancel">Close</button>`;case"failed":return`
        <div class="dot err">!</div>
        <div class="title" style="margin-top:10px">${p(e.title??"Couldn't finish automatically")}</div>
        ${e.detail?`<div class="detail">${p(e.detail)}</div>`:""}
        ${e.onRetry?`<button class="btn" data-act="retry">${p(e.retryLabel??"Try again")}</button>`:""}
        <button class="btn ghost" data-act="cancel">Close</button>`;default:return""}},Mt=e=>e==="spin"||e==="spinning"||e==="won"||e==="checkout"||e==="awaiting_user",At=e=>e==="checkout"||e==="awaiting_user"||e==="success"||e==="failed",Lt=e=>{const t=document.createElement("div");t.className="confetti",e.appendChild(t);const n=[...Oe,Re,X,"#22c55e","#ec4899"];for(let o=0;o<44;o++){const a=document.createElement("i");a.style.left=`${8+Math.random()*84}%`,a.style.background=n[o%n.length],t.appendChild(a);const r=300+Math.random()*260;a.animate([{transform:"translateY(0) rotate(0deg)",opacity:1},{transform:`translateY(${r}px) rotate(${(Math.random()<.5?-1:1)*(360+Math.random()*540)}deg)`,opacity:0}],{duration:1400+Math.random()*900,delay:Math.random()*250,easing:"cubic-bezier(.2,.5,.6,1)",fill:"forwards"})}setTimeout(()=>t.remove(),2700)},ie=e=>{var t;We(),(t=e.onCancel)==null||t.call(e),L()};function g(e){var r,s;W=e,ye(e.screen)||(S=!1);const t=$t();(r=t.parentElement)==null||r.classList.toggle("docked",At(e.screen)),x&&(clearInterval(x),x=null);const n=!S&&!!e.deadline&&Mt(e.screen);t.innerHTML=`
    <div class="head"><span class="brand">${ot}</span> Buyhatke Goodie
      <button class="close" data-act="cancel" aria-label="Close">×</button>
    </div>
    <div class="body">
      ${S?kt:_t(e)}
      ${n?'<div class="foot"><span>⏳</span><span class="foot-txt"></span></div>':""}
    </div>`,t.querySelectorAll("[data-act]").forEach(i=>{const l=i.dataset.act;i.onclick=()=>{var c,d,u;l==="cancel"?ye(e.screen)&&!S?(S=!0,g(e)):ie(e):l==="keep-open"?(S=!1,g(e)):l==="force-close"?ie(e):l==="spin"?Rt(e):l==="redeem"?(c=e.onRedeem)==null||c.call(e):l==="confirm"?(d=e.onConfirm)==null||d.call(e):l==="retry"&&((u=e.onRetry)==null||u.call(e))}}),e.screen==="success"&&Tt(t);const o=t.querySelector(".offer img");o&&(o.onerror=()=>{const i=document.createElement("div");i.className="emoji",i.textContent="🎁",o.replaceWith(i)});const a=t.querySelector(".banner");if(a&&((s=e.banners)!=null&&s.length)&&wt(e.banners).then(i=>{i&&W===e&&a.isConnected&&(a.innerHTML=`<img src="${p(i)}" alt="" />`)}),e.screen==="won"&&Lt(t),n&&e.deadline){const i=e.deadline,l=t.querySelector(".foot"),c=t.querySelector(".foot-txt"),d=()=>{if(!c||!l)return;const u=i-Date.now();if(u<=0){x&&clearInterval(x),x=null,W===e&&ie(e);return}c.textContent=`Offer reserved · ${ht(u)} left`,l.classList.toggle("warn",u<300*1e3)};d(),x=setInterval(d,1e3)}}const Ot=(e,t)=>{var i;const n=(i=fe())==null?void 0:i.querySelector(".pointer");if(!n)return;let o=0,a=0,r=-1;const s=()=>{const l=getComputedStyle(e).transform;if(l&&l!=="none"){const[c,d]=l.slice(7,-1).split(",").map(Number),u=Math.atan2(d,c)*180/Math.PI;let f=u-o;f<-180?f+=360:f>180&&(f-=360),a+=f,o=u;const h=Math.floor(a/t);h!==r&&(r=h,n.classList.add("tick"),setTimeout(()=>n.classList.remove("tick"),55))}G=requestAnimationFrame(s)};G=requestAnimationFrame(s)},le=()=>{G!=null&&cancelAnimationFrame(G),G=null};async function Rt(e){if(P||!e.onSpin)return;P=!0;const t=Date.now()+J,n=e.goodies??[],a=360/(n.length+1);g({...e,screen:"spinning",deadline:t});const r=xe();r&&(r.style.transition=`transform ${ge}ms cubic-bezier(0.15, 0.82, 0.25, 1.035)`,r.getBoundingClientRect(),r.style.transform=`rotate(${360*me}deg)`,Ot(r,a));const s=await e.onSpin(t).catch(()=>({won:!1,error:!0}));if(s!=null&&s.error){A=setTimeout(()=>{var c;le(),P=!1,(c=e.onSettled)==null||c.call(e,s)},900);return}let i;if(s!=null&&s.won&&s.goodieId!=null){const c=n.findIndex(d=>d.goodieId===s.goodieId);i=c>=0?c:0}else i=n.length;const l=360*me-Pe(i,a);r&&(r.style.transform=`rotate(${l}deg)`),A=setTimeout(()=>{var d,u;le();const c=fe();(d=c==null?void 0:c.querySelector(".wheelwrap"))==null||d.classList.remove("spinning"),c==null||c.querySelectorAll(".wedge-group").forEach(f=>{Number(f.dataset.i)!==i&&f.classList.add("dimmed")}),(u=xe())==null||u.insertAdjacentHTML("beforeend",`<path class="winglow on" d="${De(i,a)}" fill="#fff"/>`),A=setTimeout(()=>{var f;P=!1,(f=e.onSettled)==null||f.call(e,s)},1200)},r?ge+80:700)}function L(){var e;x&&(clearInterval(x),x=null),A&&(clearTimeout(A),A=null),le(),P=!1,S=!1,W=null,(e=document.getElementById(Z))==null||e.remove()}const Ft=12e3,O=e=>new Promise(t=>setTimeout(t,e)),w=e=>e?document.querySelector(e):null,Pt=e=>{const t=e.payableAmount??0;return t<=0?"₹0":`₹${Number.isInteger(t)?t:t.toFixed(2)}`},R=(e,t)=>e.replace(/\{code\}/g,t.code??"").replace(/\{productUrl\}/g,t.url??"").replace(/\{amount\}/g,Pt(t)),Dt=e=>{const t=e.match(/[\d,]+(?:\.\d+)?/g);if(!t||!t.length)return null;const n=parseFloat(t[t.length-1].replace(/,/g,""));return Number.isNaN(n)?null:n},z=e=>{if(!e)return!1;if(e.startsWith("url:"))return location.href.includes(e.slice(4));if(e.startsWith("text:")){const t=e.slice(5),n=t.indexOf("=");if(n===-1)return!1;const o=w(t.slice(0,n));return!!o&&(o.textContent??"").includes(t.slice(n+1))}return!!w(e)},Gt=e=>{try{return location.pathname===new URL(e,location.origin).pathname}catch{return!1}},re=async(e,t)=>{if(!e)return null;const n=Date.now();for(;Date.now()-n<t;){const o=w(e);if(o)return o;await O(250)}return null},ve=async(e,t)=>{if(!e)return!0;const n=Date.now();for(;Date.now()-n<t;){if(z(e))return!0;await O(250)}return!1},Ce=async(e,t,n)=>{const o=Date.now();for(;Date.now()-o<n;){if(e&&z(e))return"success";if(t&&z(t))return"fail";await O(250)}return"timeout"},zt=e=>{var n;return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?e:((n=e.shadowRoot)==null?void 0:n.querySelector("input, textarea"))??e},Se=e=>{e.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,view:window})),e.click()},Ie=(e,t,n)=>{const o=zt(e);if(o.focus(),o.value=t,o.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),o.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),n)for(const a of["keydown","keyup"])o.dispatchEvent(new KeyboardEvent(a,{key:"Enter",code:"Enter",keyCode:13,bubbles:!0}))},Ut=async e=>{var t;try{const n=await Ze(e),o=(t=n==null?void 0:n.data)==null?void 0:t.code;if(!o||typeof o!="string")return null;try{return atob(o)}catch{return null}}catch{return null}},M=async(e,t)=>{const n=await Q();if(!(!n||n.statusReported||!n.code)){try{await Xe(n.goodieId,e,t)}catch{}await y({statusReported:!0})}},ze=e=>{var t;if(e.doneWhen&&z(e.doneWhen))return!0;if((t=e.autofillFields)!=null&&t.length){const n=e.autofillFields.map(o=>w(o.selector)).filter(o=>!!o);if(n.length>0&&n.every(o=>(o.value??"").trim().length>0))return!0}return!1},Ee=e=>{var a;if(!((a=e.autofillFields)!=null&&a.length))return!0;const t=e.autofillFields.map(r=>w(r.selector)).filter(r=>!!r);if(!t.length)return!0;const n=t.every(r=>(r.value??"").trim().length>0),o=t.some(r=>r.getAttribute("aria-invalid")==="true");return n&&!o},jt=async(e,t,n)=>{var r,s,i,l,c;const o=e.timeoutMs??n,a=t.payableAmount??0;if(e.payment==="free"&&a>0||e.payment==="paid"&&a<=0)return"advance";if(e.navigate){const d=R(e.navigate,t);if(!Gt(d))return location.href=d,"retry"}if(e.doneWhen&&z(e.doneWhen)||e.showWhen&&!w(e.showWhen)||e.showUnless&&w(e.showUnless))return"advance";switch(e.type){case"waitFor":{if(e.failWhen){const u=await Ce(e.doneWhen??e.selector,e.failWhen,o);return u==="fail"&&e.errorSelector&&(E=((s=(r=w(e.errorSelector))==null?void 0:r.textContent)==null?void 0:s.trim())||null),u==="success"||e.optional?"advance":"failed"}return await ve(e.doneWhen??e.selector,o)||e.optional?"advance":"failed"}case"click":{const d=await re(e.selector,o);return d?(Se(d),e.waitForNav?"advance-nav":(e.doneWhen?await ve(e.doneWhen,o):await O(700),"advance")):e.optional?"advance":"failed"}case"fill":{const d=await re(e.selector,o);if(!d)return e.optional?"advance":"failed";if(e.maxAttempts!=null){const f=((i=t.attempts)==null?void 0:i[e.id])??0;if(f>=e.maxAttempts)return E="The page kept asking to retry — finish it on the page if needed.","failed";t.attempts={...t.attempts??{},[e.id]:f+1},await y({attempts:t.attempts})}const u=e.value??"";if(u.includes("{code}")&&!t.code){const f=await Ut(t.goodieId);if(!f)return"no-code";t.code=f,await y({code:f})}if(Ie(d,R(u,t),e.pressEnter),e.andClick){const f=await re(e.andClick,4e3);f&&Se(f)}if(e.doneWhen||e.failWhen){if(await Ce(e.doneWhen,e.failWhen,o)==="fail"&&(e.errorSelector&&(E=((c=(l=w(e.errorSelector))==null?void 0:l.textContent)==null?void 0:c.trim())||null),e.clearOnFail&&Ie(d,""),!e.optional))return"failed"}else await O(600);return"advance"}case"clearCart":{try{await fetch("/cart/clear.js",{method:"POST",headers:{"Content-Type":"application/json"}}),await O(300)}catch{}return"advance"}case"readAmount":{const d=w(e.selector),u=d?Dt(d.textContent??""):null,f=u??Math.max(t.payableAmount??0,1);return t.payableAmount=f,await y({payableAmount:f}),"advance"}case"user":return e.confirm?"await-user":ze(e)?"advance":"await-user";default:return"advance"}};let se=!1,H=null,Y,Ue=null,E=null;const U=()=>{H&&(clearInterval(H),H=null)},K=()=>{U(),M(!1,"Cancelled before completion").finally(()=>void _())},Te=e=>e.id.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,t=>t.toUpperCase()),Nt=async e=>{U(),await y({stepIndex:e+1,status:"running"}),ue()},je=(e,t,n=!1)=>{var l;const o=Ue,a=!!((l=e.autofillFields)!=null&&l.length),r=a&&!Ee(e);let s,i;a?(s=r?"Enter your delivery details to continue":e.prompt??"Confirm your delivery address to Claim",i=n?"Some required fields are still empty — fill in your name, address and phone, then confirm.":r?"Add your name, address and phone on the page, then tap Confirm.":"Review your address on the page, then confirm."):(s=e.prompt??"Confirm to continue",i=e.promptDetail??""),g({screen:"awaiting_user",title:o?R(s,o):s,detail:o?R(i,o):i,confirmLabel:"Confirm & continue",onConfirm:()=>{if(a&&!Ee(e)){je(e,t,!0);return}Nt(t)},onCancel:K,deadline:Y})},qt=(e,t)=>{U(),H=setInterval(async()=>{ze(e)&&(U(),await y({stepIndex:t+1,status:"running"}),ue())},1200)},Bt=async()=>{const e=await Q();if(!e||e.status==="success"||e.status==="failed")return!1;const t=(e.wonAt??e.startedAt)+J;return Date.now()<=t?!1:(await M(!1,"Redemption window expired"),await _(),L(),!0)},ue=async()=>{if(se)return;const e=await Q();if(!e||e.status==="success"||e.status==="failed")return;const t=await de(e.campaignId);if(!t||!nt(t,location.hostname))return;const n=await Qe();if(n!=null){if(e.tabId==null)e.tabId=n,await y({tabId:n});else if(e.tabId!==n){await M(!1,"Checkout tab was closed"),await _(),L();return}}Y=(e.wonAt??e.startedAt)+J,Ue=e,E=null,se=!0;try{const o=t.steps??[],a=t.stepTimeoutMs??Ft;U();let r=e.stepIndex;for(;r<o.length;){const s=o[r],i=s.silent||s.type==="clearCart"||s.type==="readAmount";g({screen:"checkout",title:"Redeeming your goodie…",detail:i?void 0:Te(s),onCancel:K,deadline:Y});const l=await jt(s,e,a);if(l==="await-user"){await y({stepIndex:r,status:"awaiting_user",message:s.prompt??""}),s.confirm?je(s,r):(g({screen:"awaiting_user",title:R(s.prompt??"A quick step needs you",e),detail:R(s.promptDetail??"We'll continue automatically once you're done.",e),onCancel:K,deadline:Y}),qt(s,r));return}if(l==="no-code"){await M(!1,"Redeem code unavailable"),await _(),g({screen:"lost",banners:t.banners,onCancel:L});return}if(l==="failed"){const c=E||s.id;await y({stepIndex:r,status:"failed",message:c}),await M(!1,c),g({screen:"failed",title:t.failTitle??"Couldn't finish automatically",detail:E||`The "${Te(s)}" step didn't complete — you can finish it manually on the page.`,onCancel:K}),E=null;return}if(l==="retry"){await y({stepIndex:r,status:"running"});return}if(r+=1,await y({stepIndex:r,status:"running"}),l==="advance-nav")return}await y({status:"success"}),await M(!0),g({screen:"success",title:t.successTitle??"Order placed — enjoy your goodie! 🎉",detail:t.successDetail??"Your goodie is on its way. You can close this.",onCancel:()=>{_(),L()}}),setTimeout(()=>_(),8e3)}finally{se=!1}};let ce=!1;const _e=4,Wt=e=>e&&typeof e.brand=="string"?e.brand:void 0,Me=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},Ht=(e,t)=>{const n=e.find(a=>a.goodieId===t);if(!n)return e.slice(0,_e+1);const o=Me(e.filter(a=>a.goodieId!==t)).slice(0,_e);return Me([n,...o])},$=()=>{ce=!1,L()},Yt=async e=>{var c,d,u;const t=(c=e==null?void 0:e.goodie)==null?void 0:c.goodieId;if(!t||ce)return;ce=!0;const n=e.campaignId;let o;g({screen:"spin",title:"Loading your spin…",goodies:[],onCancel:$});const[a,r]=await Promise.all([Ke(t),de(n)]),s=(r==null?void 0:r.banners)??[],i=((d=a==null?void 0:a.data)==null?void 0:d.goodies)??[],l=Ht(i,t);if(!a||a.status!==1||!((u=a.data)!=null&&u.eligible)||!l.length){g({screen:"lost",title:"This offer isn’t available right now",detail:"Please try again in a little while.",banners:s,onCancel:$});return}g({screen:"spin",title:"You’ve unlocked a spin! 🎉",detail:"Spin to reveal your goodie.",goodies:l,banners:s,onCancel:$,onSpin:async f=>{o=f;const h=await Ve(t);return!h||h.status!==1||!h.data?{won:!1,error:!0}:{won:!!h.data.won,goodieId:h.data.goodieId??t}},onSettled:f=>{if(f!=null&&f.error)g({screen:"lost",title:"Something went wrong",detail:"We couldn’t complete the spin just now. Please try again in a bit.",banners:s,onCancel:$});else if(f!=null&&f.won){const h=f.goodieId??t,m=i.find(v=>v.goodieId===h)??e.goodie;g({screen:"won",offer:m,brand:Wt(m),banners:s,deadline:o,onRedeem:()=>void Kt(n,m,o),onCancel:$})}else g({screen:"lost",banners:s,onCancel:$})}})},Kt=async(e,t,n)=>{const o=Ye(t),a=await de(e),r=a!=null&&a.startUrl?a.startUrl.replace(/\{productUrl\}/g,o):o;if(!r){$();return}if(!a){window.open(r,"_blank","noopener,noreferrer"),$();return}await Le({campaignId:e,pos:a.pos,goodieId:t.goodieId,url:o||r,payableAmount:0,stepIndex:0,status:"running",message:"",startedAt:Date.now(),wonAt:n?n-J:Date.now()}),window.open(r,"_blank","noopener,noreferrer"),$()},Ae=()=>{(async()=>{await Bt()||await ue()})().catch(()=>{})},Ne=async()=>{var e;try{const t=await chrome.storage.local.get(he),n=t==null?void 0:t[he];(e=n==null?void 0:n.goodie)!=null&&e.goodieId&&await Yt(n)}catch{}};window.addEventListener("bh-goodie:claim",()=>void Ne());try{chrome.runtime.onMessage.addListener(e=>{e&&e.type==="BH_GOODIE_CLAIM"&&Ne()})}catch{}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ae,{once:!0}):Ae();
