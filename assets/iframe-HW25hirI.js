function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./useAxios.stories-COzKf7pP.js","./index-BBkUAzwr.js","./ShowDocs-CJznU43B.js","./ShowDocs-BF23iiPK.css","./useLocalStorage.stories-V11Bt7cg.js","./entry-preview-Xn6uC1vK.js","./react-18-DHj1n7xi.js","./entry-preview-docs-BUgXHDjP.js","./_getPrototype-QNcgTGLk.js","./index-DrFu-skq.js","./preview-DzbRFJg_.js","./index-B_J8iUie.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f="modulepreload",R=function(n,s){return new URL(n,s).href},O={},r=function(s,l,c){let e=Promise.resolve();if(l&&l.length>0){const t=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(l.map(i=>{if(i=R(i,c),i in O)return;O[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const m=t[a];if(m.href===i&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":f,u||(_.as="script",_.crossOrigin=""),_.href=i,d&&_.setAttribute("nonce",d),document.head.appendChild(_),u)return new Promise((a,m)=>{_.addEventListener("load",a),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,E=P({page:"preview"});L.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const T={"./stories/useAxios.stories.tsx":async()=>r(()=>import("./useAxios.stories-COzKf7pP.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./stories/useAxios.stories.tsx":async()=>r(()=>import("./useAxios.stories-COzKf7pP.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./stories/useLocalStorage.stories.tsx":async()=>r(()=>import("./useLocalStorage.stories-V11Bt7cg.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"./stories/useLocalStorage.stories.tsx":async()=>r(()=>import("./useLocalStorage.stories-V11Bt7cg.js"),__vite__mapDeps([4,1,2,3]),import.meta.url)};async function v(n){return T[n]()}const{composeConfigs:w,PreviewWeb:A,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const n=await Promise.all([r(()=>import("./entry-preview-Xn6uC1vK.js"),__vite__mapDeps([5,1,6]),import.meta.url),r(()=>import("./entry-preview-docs-BUgXHDjP.js"),__vite__mapDeps([7,8,1,9]),import.meta.url),r(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([10,11]),import.meta.url),r(()=>import("./preview-DbT1mggi.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([12,9]),import.meta.url),r(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([13,9]),import.meta.url),r(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-D2d-74FL.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-DlDSBlg0.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-CIRcjyVj.js"),__vite__mapDeps([]),import.meta.url)]);return w(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new A(v,h);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{r as _};