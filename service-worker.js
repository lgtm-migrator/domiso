if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const l=e=>s(e,o),t={module:{uri:o},exports:c,require:l};i[o]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-41e328c1"],(function(e){"use strict";e.setCacheNameDetails({prefix:"domiso-docs"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/822.bace8daf547a74629ba5.js",revision:null},{url:"/84.c6582c5906325c055eb0.js",revision:null},{url:"/app.36c8b4591ecdd35d75ff.css",revision:null},{url:"/app.b1c2a44bab9442c9986b.js",revision:null},{url:"/app.b1c2a44bab9442c9986b.js.LICENSE.txt",revision:"bd365d35fa812990b679cd9c4f4fc150"},{url:"/manifest.96e9cd735ade049aa7d1.js",revision:null}],{}),e.registerRoute(/\/api\//,new e.NetworkFirst,"GET")}));