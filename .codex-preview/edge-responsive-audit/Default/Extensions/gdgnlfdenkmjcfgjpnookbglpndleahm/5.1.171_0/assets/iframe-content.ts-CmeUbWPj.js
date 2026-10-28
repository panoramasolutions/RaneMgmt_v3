import{b as _,C as M}from"./applyThems-BXCylPpv.js";import{m as D}from"./index-client-B85JF038.js";import{U as b,g as C,v as S}from"./utility_all2-DyA0G0Ac.js";import{h as w,t as v}from"./iframe-utils-DxlUqrPD.js";import"./preload-helper-Dp1pzeXC.js";import"./disclose-version-DnOPDreN.js";import"./effects-l9hwnwzV.js";import"./index-9qqFRw2W.js";import"./logo-DWSRunxj.js";import"./analyticsEventName-CJ37ZnCZ.js";import"./autoCouponMessages-BG9mCsyF.js";import"./flightSearchContextKey-DampX7pq.js";import"./hotelTracking-jO-873xa.js";import"./affiliateCashback.js-CFlZ-yLM.js";import"./priceGraph-Cg_ToZ07.js";import"./indexedDb.js-1a1GZY9p.js";import"./domCheckout-CooVs9En.js";import"./medsAlternative-D7mPvZiZ.js";import"./goodiesMethods-D5CY8yns.js";import"./key-eYLlx5gw.js";import"./autoCouponUI-BsCf0nzZ.js";import"./index-BnEwwU7r.js";let o=document.getElementById("bh-crx-root"),p,e=null,s=!1,a=!1,m=!1;function h(){if(e){try{typeof e.$destroy=="function"?e.$destroy():typeof e.destroy=="function"&&e.destroy()}catch{}e=null}}function n(t,l){try{if(window.parent&&window.parent!==window){if(t==="BUYHATKE_IFRAME_LOADED"&&a)return;window.parent.postMessage({type:t,source:"buyhatke-extension",url:l||window.location.href},"*"),t==="BUYHATKE_IFRAME_LOADED"&&(a=!0)}}catch{}}let r=null,i=null;function B(){r!==null&&(clearTimeout(r),r=null),i!==null&&(clearTimeout(i),i=null),h(),n("BUYHATKE_IFRAME_UNLOADED"),o&&o.parentNode&&(o.parentNode.removeChild(o),o=null),a=!1}async function E(){if(s||e)return e;try{if(s=!0,await w(),!v())return null;if(p=await C()||await S(),p||m){o&&(h(),o.parentNode&&o.parentNode.removeChild(o)),o=document.createElement("div"),o.id="bh-crx-root",o.setAttribute("style","display: block !important; position: fixed !important; inset: 0 !important; z-index: 2147483647 !important; pointer-events: none !important;"),document.body.appendChild(o);const t=o.attachShadow({mode:"closed"}),l=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-400-normal.woff2"),A=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-500-normal.woff2"),U=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-600-normal.woff2"),g=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-700-normal.woff2"),R=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-400-normal.woff"),T=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-500-normal.woff"),I=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-600-normal.woff"),L=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-700-normal.woff"),c=document.createElement("style");return c.textContent=`
			  @font-face {
				font-family: 'Metropolis';
				src: url(${l}) format('woff2');
				src: url(${R}) format('woff');
				font-weight: 400;
				font-display: swap;
				font-style: normal;
			  }
			  @font-face {
				font-family: 'Metropolis';
				src: url(${A}) format('woff2');
				src: url(${T}) format('woff');
				font-weight: 500;
				font-display: swap;
				font-style: normal;
			  }
			  @font-face {
				font-family: 'Metropolis';
				src: url(${U}) format('woff2');
				src: url(${I}) format('woff');
				font-weight: 600;
				font-display: swap;
				font-style: normal;
			  }
			  @font-face {
				font-family: 'Metropolis';
				src: url(${g}) format('woff2');
				src: url(${L}) format('woff');
				font-weight: 700;
				font-display: swap;
				font-style: normal;
			  }
				`,t.appendChild(c),_(t),e=D(M,{target:t}),n("BUYHATKE_IFRAME_LOADED"),r=setTimeout(()=>{n("BUYHATKE_RAISE_IFRAME"),r=null},400),i=setTimeout(()=>{n("BUYHATKE_RAISE_IFRAME"),i=null},1200),e}}catch{e=null}finally{s=!1}return null}let f=null;w();b.subscribe(t=>{(t==null?void 0:t.genericShopifyRun)!==!0||m||(m=!0,e||u())});function u(){f!==null&&clearTimeout(f),f=window.setTimeout(()=>{E(),f=null},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();const et=E();let d=!1;function y(t){d||(n(t),d=!0),B()}window.addEventListener("beforeunload",()=>{y("BUYHATKE_IFRAME_UNLOADED")});document.addEventListener("visibilitychange",()=>{document.hidden&&n("BUYHATKE_IFRAME_HIDDEN")});window.addEventListener("pagehide",()=>{y("BUYHATKE_IFRAME_UNLOADED")});export{et as default};
