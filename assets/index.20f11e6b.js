import{r as g,c as u,a as _,F as c,b as a,o as l,d as m,u as v,e as p,w as h,t as d,f as y,g as L,h as $}from"./vendor.058d5aba.js";const b=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};b();var f=(r,o)=>{for(const[s,n]of o)r[s]=n;return r};const w={},P=a("img",{alt:"Vue logo",src:"https://vitejs.dev/logo.svg"},null,-1);function S(r,o){const s=g("router-view");return l(),u(c,null,[P,_(s)],64)}var N=f(w,[["render",S]]);const A=m({name:"IssueListPage",setup(){const r=v(),o=p(String(r.query.page||1)),s=p(String(r.query.per_page||10));return h(()=>r.query,n=>{o.value=String(n.page),s.value=String(n.per_page)}),{page:o,perPage:s}}}),I=a("h1",null,"IssueList",-1);function O(r,o,s,n,e,t){return l(),u(c,null,[I,a("p",null,"page: "+d(r.page),1),a("p",null,"perPage: "+d(r.perPage),1)],64)}var k=f(A,[["render",O]]);const q=[{path:"/",redirect:"/issues"},{path:"/issues",component:k}],B=y({history:L("/sample-issue-viewer/"),routes:q});$(N).use(B).mount("#app");