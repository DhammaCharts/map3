import{M as p,V as f,L as m,c as y}from"./vendor.9880bace.js";const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};g();var h="/assets/suttapitaka.55b66161.svg";const v=new p({target:"map",view:new f({center:[0,0],extent:[-180,-90,180,90],projection:"EPSG:4326",zoom:2})}),o=document.createElement("div"),c=new XMLHttpRequest;c.open("GET",h);c.addEventListener("load",function(){const n=c.responseXML.documentElement;o.ownerDocument.importNode(n),o.appendChild(n)});c.send();const l=2560,u=1280,d=360/l;o.style.width=l+"px";o.style.height=u+"px";o.style.transformOrigin="top left";o.className="svg-layer";v.addLayer(new m({render:function(n){const s=d/n.viewState.resolution,i=n.viewState.center,r=n.size,e=y(r[0]/2,r[1]/2,s,s,n.viewState.rotation,-i[0]/d-l/2,i[1]/d-u/2);return o.style.transform=e,o.style.opacity=this.getOpacity(),o}}));
//# sourceMappingURL=index.5862a719.js.map
