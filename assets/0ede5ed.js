(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15],{261:function(t,e,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("62f8c877",content,!0,{sourceMap:!1})},262:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(263);var n=r(19);function o(t){return(t*n.snipcart.factor).toFixed(2)}},263:function(t,e,r){"use strict";var n=r(5),o=r(1),c=r(3),l=r(58),d=r(197),f=r(196),m=r(4),v=o.RangeError,x=o.String,h=Math.floor,_=c(f),y=c("".slice),C=c(1..toFixed),k=function(t,e,r){return 0===e?r:e%2==1?k(t,e-1,r*t):k(t*t,e/2,r)},w=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},T=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=x(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:m((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!m((function(){C({})}))},{toFixed:function(t){var e,r,n,o,c=d(this),f=l(t),data=[0,0,0,0,0,0],m="",h="0";if(f<0||f>20)throw v("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return x(c);if(c<0&&(m="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*k(2,69,1))-69)<0?c*k(2,-e,1):c/k(2,e,1),r*=4503599627370496,(e=52-e)>0){for(w(data,0,r),n=f;n>=7;)w(data,1e7,0),n-=7;for(w(data,k(10,n,1),0),n=e-1;n>=23;)T(data,1<<23),n-=23;T(data,1<<n),w(data,1,1),T(data,2),h=j(data)}else w(data,0,r),w(data,1<<-e,0),h=j(data)+_("0",f);return h=f>0?m+((o=h.length)<=f?"0."+_("0",f-o)+h:y(h,0,o-f)+"."+y(h,o-f)):m+h}})},264:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(19);function n(t){var e="/assets/images/"+(t.localThumbs&&t.localThumbs[0]?t.localThumbs[0]:t.localThumb?t.localThumb:""),r=e.lastIndexOf(".");return-1===r?e:e.substr(0,r)+".webp"}},265:function(t,e,r){"use strict";r.r(e);r(142),r(10),r(30);var n=r(19),o=r(70),c=r(141),l=r(262),d=r(264),f=r(268),m={name:"productItem",props:{product:Object},data:function(){return{config:n}},computed:{calculatedPrice:function(){return Object(l.a)(this.product.price)},productThumbnail:function(){return Object(d.a)(this.product)},categoryData:function(){var t=this.product.category||this.product.categories[this.product.categories.length-2];return o.find((function(e){return e.name===t||e.subCategories.find((function(e){return e.name===t}))}))},brandData:function(){var t=this;return c.find((function(e){return e.name===t.product.brand}))}},methods:{decode:function(t){return f.decode(t)}}},v=(r(266),r(16)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:t.productThumbnail,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(t.calculatedPrice)+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"630a0660",null);e.default=component.exports},266:function(t,e,r){"use strict";r(261)},267:function(t,e,r){var n=r(56)(!1);n.push([t.i,".course-item[data-v-630a0660]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-630a0660]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-630a0660]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=n},284:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(110).a.products.getFeaturedProducts(),c={name:"popularProducts",data:function(){return{config:n,products:o}}},l=r(16),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),r("div",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),r("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return r("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[r("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(265).default})}}]);