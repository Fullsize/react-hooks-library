function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./useAxios.stories-BQ3EooPO.js","./index-BBkUAzwr.js","./ShowDocs-BiDl-P7W.js","./ShowDocs-BF23iiPK.css","./useLazyAxios.stories-nfPv78UF.js","./useLocalStorage.stories-CkfGjtFA.js","./entry-preview-Xn6uC1vK.js","./react-18-DHj1n7xi.js","./entry-preview-docs-BUgXHDjP.js","./_getPrototype-QNcgTGLk.js","./index-DrFu-skq.js","./preview-DzbRFJg_.js","./index-B_J8iUie.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}})();const f="modulepreload",R=function(s,n){return new URL(s,n).href},O={},t=function(n,u,l){let e=Promise.resolve();if(u&&u.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(u.map(i=>{if(i=R(i,l),i in O)return;O[i]=!0;const c=i.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!l)for(let a=r.length-1;a>=0;a--){const m=r[a];if(m.href===i&&(!c||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":f,c||(_.as="script",_.crossOrigin=""),_.href=i,d&&_.setAttribute("nonce",d),document.head.appendChild(_),c)return new Promise((a,m)=>{_.addEventListener("load",a),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>n()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,E=P({page:"preview"});L.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const T={"./stories/useAxios.stories.tsx":async()=>t(()=>import("./useAxios.stories-BQ3EooPO.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./stories/useAxios.stories.tsx":async()=>t(()=>import("./useAxios.stories-BQ3EooPO.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./stories/useLazyAxios.stories.tsx":async()=>t(()=>import("./useLazyAxios.stories-nfPv78UF.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"./stories/useLazyAxios.stories.tsx":async()=>t(()=>import("./useLazyAxios.stories-nfPv78UF.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"./stories/useLocalStorage.stories.tsx":async()=>t(()=>import("./useLocalStorage.stories-CkfGjtFA.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"./stories/useLocalStorage.stories.tsx":async()=>t(()=>import("./useLocalStorage.stories-CkfGjtFA.js"),__vite__mapDeps([5,1,2,3]),import.meta.url)};async function A(s){return T[s]()}const{composeConfigs:v,PreviewWeb:w,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const s=await Promise.all([t(()=>import("./entry-preview-Xn6uC1vK.js"),__vite__mapDeps([6,1,7]),import.meta.url),t(()=>import("./entry-preview-docs-BUgXHDjP.js"),__vite__mapDeps([8,9,1,10]),import.meta.url),t(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([11,12]),import.meta.url),t(()=>import("./preview-DbT1mggi.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([13,10]),import.meta.url),t(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([14,10]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-D2d-74FL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-PXx_wSH1.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-CIRcjyVj.js"),__vite__mapDeps([]),import.meta.url)]);return v(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w(A,y);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
