"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),c=t.n(s),d=new URL(t(631),t.b),p=a()(o());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700&display=swap);"]);var l=c()(d);p.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Barlow Semi Condensed', sans-serif;\n  font-family: 'Lato', sans-serif;\n  font-family: 'Poppins', sans-serif;\n  font-family: 'Sora', sans-serif;\n  background-color: whitesmoke;\n}\n\n.main-container {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 0 10px;\n  height: auto;\n  box-shadow: -12px 5px 5px 4px;\n  border-radius: 4px;\n  margin-bottom: 60px;\n}\n\n.nav-items {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n}\n\n.nav-img {\n  background: url("+l+");\n  background-repeat: no-repeat;\n  background-size: 200px;\n  width: 200px;\n  height: 150px;\n  background-position: center;\n}\n\n.nav-m .nav-items li a {\n  margin-left: 25px;\n  text-decoration: none;\n  color: #000;\n  font-size: 18px;\n  cursor: pointer;\n}\n\nfooter {\n  justify-content: space-between;\n  align-items: center;\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 1rem;\n  position: fixed;\n  bottom: 0;\n  color: #000;\n  background-color: #ababc4;\n  z-index: 2;\n}\n\n.main-js-page {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 30px;\n    padding: 72px;\n  }\n  \n  .content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    border-radius: 10px;\n    box-shadow: 14px 4px 24px -1px;\n  }\n  \n  .card-image {\n    border: 2px solid #2c2c2c;\n    width: 100%;\n    height: 400px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n  \n  .movie-img {\n    width: inherit;\n    border: 4px solid;\n  }\n  \n  .content:hover {\n    transform: scale(1.05);\n  }\n  \n  .movie-descrption {\n    width: inherit;\n    background: #1f1f1f;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 2px;\n    gap: 5px;\n  }\n  \n  .movie-ratings {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    width: inherit;\n    justify-content: flex-end;\n    padding: 5px;\n  }\n  \n  .statistics {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: inherit;\n  }\n  \n  .like-btn {\n    color: white;\n    font-size: 25px;\n    cursor: pointer;\n    margin-left: 2px;\n    justify-self: flex-start;\n  }\n  \n  .rateCounts {\n    color: #fff;\n    font-size: 20px;\n    margin-left: 20px;\n  }\n  \n  .movie-title {\n    color: darkcyan;\n    padding: 4px;\n    cursor: pointer;\n    text-align: center;\n    font-size: 1rem;\n    font-weight: normal;\n  }\n  \n  .movie-comment {\n    width: 100%;\n    height: 40px;\n    color: white;\n    font-weight: 500;\n    border: none;\n    border-radius: 2px;\n    background-color: cornflowerblue;\n    justify-self: flex-end;\n    margin-top: 10px;\n    margin-bottom: 0;\n  }\n",""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),d=0;d<i.length;d++){var p=t(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},604:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),s=t(569),c=t.n(s),d=t(565),p=t.n(d),l=t(216),u=t.n(l),f=t(589),m=t.n(f),h=t(426),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const x=document.querySelector(".main-js-page"),v=async n=>{for(let e=0;e<n.length;e+=1){const t=document.createElement("div");t.classList.add("content"),document.createElement("div").classList.add("card-image");const r=document.createElement("img");r.setAttribute("src",`${n[e].image.medium}`),r.setAttribute("alt",`affiche of ${n[e].name}`),r.setAttribute("class","movie-img");const o=document.createElement("div");o.classList.add("movie-descrption");const i=document.createElement("div");i.setAttribute("class","movie-ratings");const a=document.createElement("h2");a.classList.add("movie-title"),a.textContent=`${n[e].name}`;const s=document.createElement("span");s.classList.add("statistics");const c=document.createElement("i");c.setAttribute("class","fa like-btn fa-heart"),c.setAttribute("id",`${n[e].id}`),c.setAttribute("aria-hidden","true");const d=document.createElement("p");d.setAttribute("class","rateCounts"),d.setAttribute("Id",`${n[e].id}`),d.textContent="0",s.append(c),i.appendChild(s),o.append(a,i);const p=document.createElement("button");p.classList.add("movie-comment"),p.setAttribute("movie-Id",`${n[e].id}`),p.id=`${n[e].id}`,p.textContent="Comments",o.append(p),t.append(r,o),x.appendChild(t)}};document.addEventListener("DOMContentLoaded",v),(async()=>{const n=await(async()=>{const n=await fetch("https://api.tvmaze.com/shows");return await n.json()})();v(n)})()},631:(n,e,t)=>{n.exports=t.p+"c1a21f7dea14f3c3b440.png"}},n=>{n(n.s=604)}]);