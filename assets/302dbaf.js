(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{260:function(e,t,n){"use strict";n.r(t);n(20),n(10);var r=n(19),o=n(68),l=n(50);for(var d=[],i=0;i<=l.length;i++)try{d.push(l[i].brand)}catch(e){}d=d.filter((function(e,t,n){return n.indexOf(e)===t}));var c={name:"categorySidebar",data:function(){return{config:r,categories:o}}},f=n(18),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"},e._l(e.categories,(function(t,r){return n("div",{key:r,staticClass:"dropdown"},[n("nuxt-link",{staticClass:"d-flex align-items-center text-white text-decoration-none",class:t.subCategories.length>=1&&"dropdown-toggle",attrs:{to:"/kategorie/"+t.slug+"/",title:""+t.name,id:"dropdownUser1","data-bs-toggle":t.subCategories.length>=1&&"dropdown","aria-expanded":"false"}},[n("strong",[e._v(e._s(t.name))])]),e._v(" "),t.subCategories.length>=1?n("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[n("li",e._l(t.subCategories,(function(t,r){return n("a",{key:r,staticClass:"dropdown-item",attrs:{href:"/kategorie/"+t.slug+"/"}},[e._v(e._s(t.name))])})),0)]):e._e()],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);