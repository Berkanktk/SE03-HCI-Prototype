(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9ab99c99","chunk-2d0c2632":"25d0a3d3","chunk-addef53e":"66cda076"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-addef53e":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0c2632":"31d6cfe0","chunk-addef53e":"efccece0"}[e]+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/SE03-HCI-Prototype/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"053e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavigationBar"),r("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{staticClass:"navbar"},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Ticketo")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",[e._v("Opret ticket")])],1),r("b-navbar-nav",{staticClass:"ms-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Søg"}}),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Søg")])],1)],1)],1)],1)],1)},s=[],u={name:"NavigationBar"},c=u,l=(r("88f7"),r("2877")),d=Object(l["a"])(c,i,s,!1,null,"5ea489aa",null),f=d.exports,p={components:{NavigationBar:f}},b=p,v=(r("034f"),Object(l["a"])(b,a,o,!1,null,null,null)),m=v.exports,h=r("5f5b"),g=r("b1e0"),y=(r("f9e3"),r("2dd8"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("div",{staticClass:"container"},[r("form",{attrs:{action:"/"}},[r("fieldset",[r("legend",{staticClass:"legend"},[e._v("Opret Ticket")]),r("hr"),r("div",{attrs:{id:"form"}},[r("label",[e._v("Navn")]),r("br"),r("input",{staticClass:"custom",attrs:{type:"text",id:"fname",placeholder:"Navn",required:""}}),r("br"),r("br")]),r("div",{attrs:{id:"form"}},[r("label",[e._v("E-mail")]),r("br"),r("input",{staticClass:"custom",attrs:{type:"email",id:"email",placeholder:"E-mail",required:""}}),r("br"),r("br")]),r("div",{attrs:{id:"form"}},[r("label",[e._v("Kategori")]),r("br"),r("select",{staticClass:"custom",attrs:{name:"category",id:"category",required:""}},[r("option",{attrs:{value:""}},[e._v("Vælg Kategori")]),r("option",{attrs:{value:"it"}},[e._v("IT")]),r("option",{attrs:{value:"reklamation"}},[e._v("Reklamation")]),r("option",{attrs:{value:"Ordre"}},[e._v("Ordre")]),r("option",{attrs:{value:"teknisk-support"}},[e._v("Teknisk support")])]),r("br"),r("br")]),r("div",{attrs:{id:"form"}},[r("label",[e._v("Besked")]),r("br"),r("textarea",{staticClass:"custom",attrs:{name:"besked",id:"besked",cols:"40",rows:"5",placeholder:"Skriv din besked her",required:""}}),r("br"),r("br")]),r("div",{attrs:{id:"buttons"}},[r("button",{staticClass:"button-afbryd"},[e._v("Afbryd")]),r("button",{staticClass:"button-send"},[e._v("Send")])]),r("br"),r("br")])])])])}],C={name:"create",props:{msg:String}},w=C,O=(r("8843"),Object(l["a"])(w,_,k,!1,null,null,null)),E=O.exports;n["default"].use(y["a"]);var S=[{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/search",name:"Search",alias:"/",component:function(){return r.e("chunk-2d0c2632").then(r.bind(null,"49a8"))}},{path:"/create-form",name:"Create",component:E},{path:"/guide-page",name:"GuidePage",component:function(){return r.e("chunk-addef53e").then(r.bind(null,"1615"))}}],j=new y["a"]({mode:"history",base:"/SE03-HCI-Prototype/",routes:S}),x=j;n["default"].config.productionTip=!1,n["default"].use(h["a"]),n["default"].use(g["a"]),new n["default"]({router:x,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,r){},8843:function(e,t,r){"use strict";r("053e")},"88f7":function(e,t,r){"use strict";r("ec82")},ec82:function(e,t,r){}});
//# sourceMappingURL=app.2dadc73b.js.map