(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{268:function(t,e,n){"use strict";n.r(e);n(141),n(10),n(30);var r=n(19),c=n(68),o=n(140),l=n(257),d={name:"productcard",props:{product:Object},data:function(){var t=this,e=this.product.categories[this.product.categories.length-2],n=c.find((function(t){return t.key===e.toLowerCase()||t.subCategories.find((function(t){return t.key==e.toLowerCase()}))}));n.key===e.toLowerCase()||(n=n.subCategories.find((function(t){return t.key===e.toLowerCase()})));var l=o.find((function(e){return e.name===t.product.brand}));return{config:r,categoryData:n,brandData:l}},methods:{decode:function(t){return l.decode(t)}}},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sidebar-widget schedule-widget mt-5"},[n("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},[n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Marke")]),t._v(" "),n("span",[n("nuxt-link",{attrs:{title:t.config.seo.mainKeyword+" von "+t.decode(t.product.brand),to:"/marken/"+t.brandData.slug+"/"},domProps:{innerHTML:t._s(t.product.brand)}})],1)]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Kategorie")]),t._v(" "),n("nuxt-link",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[n("span",[t._v(t._s(t.categoryData.name))])])],1),t._v(" "),n("hr"),t._v(" "),t._l(t.product.specifications,(function(e,r){return n("div",{key:r},[n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v(t._s(Object.keys(e)[0]))]),t._v(" "),n("span",[t._v(t._s(Object.values(e)[0]))])]),t._v(" "),n("hr")])})),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Bewertung")]),t._v(" "),n("div",{staticClass:"mb-1 mt-3"},[t._l(t.product.stars,(function(t){return n("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return n("small",{key:t,staticClass:"fa fa-star text-default"})}))],2)]),t._v(" "),n("hr")],2),t._v(" "),n("div",{staticClass:"sidebar-contact-info mt-4"},[n("p",{staticClass:"mb-0"},[t._v("Preis")]),t._v(" "),n("h3",[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" EUR")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);