import{o as u,c as p,a as i,b as c,w as l,u as _,R as d,d as f,e as $,F as k,r as b,f as E,t as P,g as x,h as L,i as O,j as A}from"./vendor.58018eac.js";const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};S();const w={class:"app-header"},N={class:"app-nav"},R=f("Home"),V=f("About"),j={setup(a){return(t,o)=>(u(),p("header",w,[i("nav",N,[c(_(d),{class:"nav-link",to:"/"},{default:l(()=>[R]),_:1}),c(_(d),{class:"nav-link",to:"/about"},{default:l(()=>[V]),_:1})])]))}};const C={setup(a){return(t,o)=>(u(),p(k,null,[c(j),c(_($))],64))}},D="modulepreload",h={},B="/dungeons-game-project/",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${B}${r}`,r in h)return;h[r]=!0;const e=r.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":D,e||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),e)return new Promise((v,y)=>{s.addEventListener("load",v),s.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},F={title:"Dungeons, Monsters & Developers"};var H=(a,t)=>{const o=a.__vccOpts||a;for(const[r,e]of t)o[r]=e;return o};const I={},M={class:"page-main"};function T(a,t){return u(),p("main",M,[b(a.$slots,"default")])}var q=H(I,[["render",T]]);const G={class:"jumbotron"},W={class:"app-title"},K=i("h2",null,"Start the adventure!",-1),U=f("Start"),z={data(){return{title:F.title}}},J=Object.assign(z,{setup(a){return(t,o)=>(u(),E(q,null,{default:l(()=>[i("section",G,[i("h1",W,P(t.title),1),K,c(_(d),{class:"game-link",to:"/game"},{default:l(()=>[U]),_:1})])]),_:1}))}}),Q=x({history:L("/dungeons-game-project/"),linkActiveClass:"active-link",routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:()=>g(()=>import("./AboutView.078d14c1.js"),["assets/AboutView.078d14c1.js","assets/AboutView.e793d47f.css","assets/vendor.58018eac.js"])},{path:"/game",name:"game",component:()=>g(()=>import("./GameView.72077642.js"),["assets/GameView.72077642.js","assets/GameView.d6489a35.css","assets/vendor.58018eac.js"])}]}),m=O(C);m.use(Q);m.use(A());m.mount("#app");export{F as G,q as P,H as _};