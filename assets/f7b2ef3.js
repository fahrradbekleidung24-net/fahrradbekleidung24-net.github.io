(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5,15,16],{256:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(19),o=r(68),l=r(140),c=r(257),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=this.product.categories[this.product.categories.length-2],r=o.find((function(t){return t.key===e.toLowerCase()||t.subCategories.find((function(t){return t.key==e.toLowerCase()}))||"sonstiges"===t.key})),c=l.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:r,brandData:c}},methods:{decode:function(t){return c.decode(t)}}},f=r(18),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),t._v(" "),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),t._v(" "),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,r){"use strict";r.r(e);var n={name:"products",props:{products:Array}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(256).default})},260:function(t,e,r){"use strict";r.r(e);r(20),r(10);var n=r(19),o=r(68),l=r(50);for(var c=[],i=0;i<=l.length;i++)try{c.push(l[i].brand)}catch(t){}c=c.filter((function(t,e,r){return r.indexOf(t)===e}));var d={name:"categorySidebar",data:function(){return{config:n,categories:o}}},f=r(18),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"dropdown"},[r("nuxt-link",{staticClass:"d-flex align-items-center text-white text-decoration-none",class:e.subCategories.length>=1&&"dropdown-toggle",attrs:{to:"/kategorie/"+e.slug+"/",title:""+e.name,id:"dropdownUser1","data-bs-toggle":e.subCategories.length>=1&&"dropdown","aria-expanded":"false"}},[r("strong",[t._v(t._s(e.name))])]),t._v(" "),e.subCategories.length>=1?r("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[r("li",t._l(e.subCategories,(function(e,n){return r("a",{key:n,staticClass:"dropdown-item",attrs:{href:"/kategorie/"+e.slug+"/"}},[t._v(t._s(e.name))])})),0)]):t._e()],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,r){r(262)},262:function(t,e,r){"use strict";var n=r(5),o=r(1),l=r(13),c=r(3),d=r(25),f=r(8),m=r(110),v=r(14),h=r(51),x=r(111),C=r(192),_=r(6),k=r(32),y=_("replace"),w=RegExp.prototype,D=o.TypeError,L=c(x),S=c("".indexOf),E=c("".replace),T=c("".slice),P=Math.max,I=function(t,e,r){return r>t.length?-1:""===e?r:S(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,o,c,x,_,O,$,j,R=d(this),U=0,A=0,F="";if(null!=t){if((r=m(t))&&(n=v(d("flags"in w?t.flags:L(t))),!~S(n,"g")))throw D("`.replaceAll` does not allow non-global regexes");if(o=h(t,y))return l(o,t,R,e);if(k&&r)return E(v(R),t,e)}for(c=v(R),x=v(t),(_=f(e))||(e=v(e)),O=x.length,$=P(1,O),U=I(c,x,0);-1!==U;)j=_?v(e(x,U,c)):C(x,c,U,[],void 0,e),F+=T(c,A,U)+j,A=U+O,U=I(c,x,U+$);return A<c.length&&(F+=T(c,A)),F}})},284:function(t,e,r){"use strict";r.r(e);r(33),r(69),r(261),r(30),r(20),r(10);var n=r(19),o=r(50),l=r(109),c={name:"singleBrandComponent",head:function(){return{title:this.seoData&&this.seoData.seo&&this.seoData.seo.title?this.seoData.seo.title:n.brandSeo.defaultTitle.replaceAll("$HERSTELLER",this.brandData.name),meta:[{hid:"description",name:"description",content:this.seoData&&this.seoData.seo&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription:n.brandSeo.defaultMetaDescription.replaceAll("$HERSTELLER",this.brandData.name)},{hid:"robots",name:"robots",content:this.seoData&&this.seoData.seo&&this.seoData.seo.robots?this.seoData.seo.robots:n.brandSeo.defaultRobots}]}},data:function(){var t=this.$route.params.slug,e=l.a.brands.getBrandFromSlug(t),r=l.a.seo.getSeoForBrand(e);return{filteredProducts:o.filter((function(t){return t.brand===e.name})),brandData:e,seoData:r,config:n}}},d=r(18),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid py-5"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-2 fadeInUp"},[r("CategorySidebar")],1),t._v(" "),r("div",{staticClass:"col-lg-10 fadeInUp"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n              "+t._s(t.config.seo.mainKeyword)+"\n            ")]),t._v(" "),r("h1",{staticClass:"mb-5 h2",domProps:{innerHTML:t._s(t.brandData.name)}})]),t._v(" "),r("Products",{attrs:{products:t.filteredProducts}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:r(260).default,Products:r(258).default})}}]);