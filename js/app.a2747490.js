(function(e){function t(t){for(var a,o,i=t[0],s=t[1],u=t[2],c=0,p=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(p.length)p.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},l=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9ab99c99","chunk-2d0c2632":"25d0a3d3"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var u=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+l+")",u.name="ChunkLoadError",u.type=a,u.request=l,r[1](u)}n[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/SE03-HCI-Prototype/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=u;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1442:function(e,t,r){"use strict";r("e9c8")},"46c8":function(e,t,r){"use strict";r("ce6f")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavigationBar"),r("router-view")],1)},l=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{staticClass:"navbar"},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Ticketo")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/create-form"}},[e._v("Opret ticket")])],1),r("b-navbar-nav",{staticClass:"ms-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Søg"}}),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Søg")])],1)],1)],1)],1)],1)},i=[],s={name:"NavigationBar"},u=s,c=(r("46c8"),r("2877")),d=Object(c["a"])(u,o,i,!1,null,"55a1db4b",null),p=d.exports,f={components:{NavigationBar:p}},b=f,v=(r("034f"),Object(c["a"])(b,n,l,!1,null,null,null)),m=v.exports,g=r("5f5b"),h=r("b1e0"),_=(r("f9e3"),r("2dd8"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("div",{staticClass:"container d-flex justify-content-center"},[r("form",{attrs:{action:"/"}},[r("fieldset",[r("legend",{staticClass:"legend"},[e._v("Opret Ticket")]),r("hr"),r("div",{attrs:{id:"form"}},[r("label",[e._v("Navn")]),r("br"),r("input",{staticClass:"custom",attrs:{type:"text",id:"fname",placeholder:"Navn",required:""}}),r("br"),r("br")]),r("div",{attrs:{id:"form"}},[r("label",[e._v("E-mail")]),r("br"),r("input",{staticClass:"custom",attrs:{type:"email",id:"email",placeholder:"E-mail",required:""}}),r("br"),r("br")]),r("div",{attrs:{id:"form"}},[r("label",[e._v("Kategori")]),r("br"),r("select",{staticClass:"custom",attrs:{name:"category",id:"category",required:""}},[r("option",{attrs:{value:""}},[e._v("Vælg Kategori")]),r("option",{attrs:{value:"it"}},[e._v("IT")]),r("option",{attrs:{value:"reklamation"}},[e._v("Reklamation")]),r("option",{attrs:{value:"Ordre"}},[e._v("Ordre")]),r("option",{attrs:{value:"teknisk-support"}},[e._v("Teknisk support")])]),r("br"),r("br")]),r("div",{attrs:{id:"form"}},[r("label",[e._v("Besked")]),r("br"),r("textarea",{staticClass:"custom",attrs:{name:"besked",id:"besked",cols:"40",rows:"5",placeholder:"Skriv din besked her",required:""}}),r("br"),r("br")]),r("div",{attrs:{id:"buttons"}},[r("button",{staticClass:"button-afbryd",attrs:{to:"/"}},[e._v("Afbryd")]),r("button",{staticClass:"button-send"},[e._v("Send")])]),r("br"),r("br")])])])])}],C={name:"create",props:{msg:String}},x=C,w=(r("1442"),Object(c["a"])(x,y,k,!1,null,"3ef5fac2",null)),O=w.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container d-flex align-items-center justify-content-center flex-column"},[r("div",{staticClass:"col-lg-6 col-md-8 col-sm-10"},[r("h1",{staticClass:"mt-5 mb-5 text-center"},[e._v("Print en ordreliste ")]),r("div",{staticClass:"d-flex align-items-center input-group flex-row mb-4"},[r("div",{staticClass:"p-3 border rounded w-100 text-start"},[r("p",[e._v("1. For at printe en ordre liste skal du være logget ind som bruger i systemet. Når du er logget ind, kan du som vist på billedet for neden vælge de ordre du gerne vil printe. ")]),r("p",[e._v("2. la al al lal alla al al lalal alalal l l la l a lal a")]),r("b-card-img",{attrs:{alt:"billde",src:"#"}}),r("p",[e._v("3. For at printe en ordre liste skal du være logget ind som bruger i systemet. Når du er logget ind, kan du som vist på billedet for neden vælge de ordre du gerne vil printe. ")]),r("p",[e._v("4. la al al lal alla al al lalal alalal l l la l a lal a")]),r("b-card-img",{attrs:{alt:"billde",src:"#"}}),r("p",[e._v("5. For at printe en ordre liste skal du være logget ind som bruger i systemet. Når du er logget ind, kan du som vist på billedet for neden vælge de ordre du gerne vil printe. ")]),r("p",[e._v("6. la al al lal alla al al lalal alalal l l la l a lal a")]),r("b-card-img",{attrs:{alt:"billde",src:"#"}})],1)])])])},P=[],S={name:"GuidePage"},E=S,T=Object(c["a"])(E,j,P,!1,null,"e97875d0",null),N=T.exports;a["default"].use(_["a"]);var $=[{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/search",name:"Search",alias:"/",component:function(){return r.e("chunk-2d0c2632").then(r.bind(null,"49a8"))}},{path:"/create-form",name:"Create",component:O},{path:"/guide-page",name:"GuidePage",component:N}],q=new _["a"]({mode:"history",base:"/SE03-HCI-Prototype/",routes:$}),B=q;a["default"].config.productionTip=!1,a["default"].use(g["a"]),a["default"].use(h["a"]),new a["default"]({router:B,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,r){},ce6f:function(e,t,r){},e9c8:function(e,t,r){}});
//# sourceMappingURL=app.a2747490.js.map