(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{278:function(e,t,n){var content=n(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("295b85b1",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";n(280);var r=n(8),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},280:function(e,t,n){"use strict";n(278)},281:function(e,t,n){(t=n(25)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},284:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r;n(7);function c(){return r||(r=new Promise((function(t){var img=new e.Image;img.onload=function(){return t(!0)},img.onerror=function(){return t(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),r}function l(element,t){var n={};return e.document&&(n=e.document.createElement(element)),t in n}}).call(this,n(12))},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(7),n(20),n(22),n(187),n(18),n(81);var r=n(58),c=function(){function e(){this.map=new Map}return e.prototype.getEntry=function(e){return this.map.has(e)||this.map.set(e,new r.a),this.map.get(e)},e}(),l=n(59),h=n(284),o=new c;function d(e,t,n){var r=Object(l.a)(e.srcset),c=o.getEntry(r);return c.promise.then((function(){return t()})),Object(h.a)("link","imageSrcset")?{link:[w(e,r,c.resolve,n)]}:function(e,t,n){var img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,c.resolve,n)}function w(e,t,n,r){return{hid:t,rel:"preload",as:"image",crossorigin:r,callback:n,imageSrcset:e.srcset}}},311:function(e,t,n){e.exports=(()=>{const e=n(312);return{sources:[{srcset:n(313).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(314)),width:e.width,height:e.height}})()},312:function(e,t,n){e.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},313:function(e,t,n){e.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},314:function(e,t,n){var r={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M67.5 257.5l35 540 1255-120z'/%3E%3Cpath fill='%23cac4b6' d='M402.5 367.5l-480-445 1435 125z'/%3E%3Cpath fill='%23ffff7e' d='M1077.5 407.5l190-485 90 685z'/%3E%3Cpath fill='%23ff0' d='M112.5 797.5l-95-805-95 650z'/%3E%3Cpath fill='%23100b1c' d='M82.5 307.5l1160 170-25 320z'/%3E%3Cpath fill='%23ff0' d='M1357.5 427.5l-110-430-10 800z'/%3E%3Cpath fill='%238d7d00' d='M712.5 662.5l-605 5 130-230z'/%3E%3Cpath fill='%23b6b5c9' d='M957.5-77.5l-410 190 400 250z'/%3E%3Cpath fill='%23ff0' d='M62.5 797.5l-30-835-110 470z'/%3E%3Cpath fill='%23d8c3d4' d='M1157.5 572.5l-55-650 155 170z'/%3E%3Cpath fill='%234c4857' d='M1037.5 592.5l-995-295 1070-45z'/%3E%3Cpath fill='%230c0c1e' d='M42.5 252.5v185l400 65z'/%3E%3Cpath fill='%23c9b958' d='M207.5 347.5l345-255-450-20z'/%3E%3Cpath fill='%231a0b01' d='M1232.5 797.5l-1005-60 1010-230z'/%3E%3Cpath fill='%2326101a' d='M1057.5 107.5l-110 175 165 400z'/%3E%3Cpath fill='%23ff0' d='M1357.5 712.5l-120 10 10-430z'/%3E%3Cpath fill='%230e0000' d='M57.5 727.5l360-25-305-75z'/%3E%3Cpath fill='%23929297' d='M877.5 412.5l-500-275 655-45z'/%3E%3Cpath fill='%23ece100' d='M522.5 577.5h100v100z'/%3E%3Cpath fill='%23ff0' d='M7.5 797.5l85-230-115-335z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},352:function(e,t,n){e.exports=(()=>{const e=n(353);return{sources:[{srcset:n(354).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(355)),width:e.width,height:e.height}})()},353:function(e,t,n){e.exports={srcSet:n.p+"img/989de56-480.jpg 480w,"+n.p+"img/860842d-768.jpg 768w,"+n.p+"img/8ede879-960.jpg 960w,"+n.p+"img/df666a4-1080.jpg 1080w,"+n.p+"img/0683296-1200.jpg 1200w,"+n.p+"img/984bf0c-1280.jpg 1280w",images:[{path:n.p+"img/989de56-480.jpg",width:480,height:270},{path:n.p+"img/860842d-768.jpg",width:768,height:432},{path:n.p+"img/8ede879-960.jpg",width:960,height:540},{path:n.p+"img/df666a4-1080.jpg",width:1080,height:608},{path:n.p+"img/0683296-1200.jpg",width:1200,height:675},{path:n.p+"img/984bf0c-1280.jpg",width:1280,height:720}],src:n.p+"img/989de56-480.jpg",toString:function(){return n.p+"img/989de56-480.jpg"},width:480,height:270}},354:function(e,t,n){e.exports={srcSet:n.p+"img/6e81844-480.webp 480w,"+n.p+"img/000570c-768.webp 768w,"+n.p+"img/542b50c-960.webp 960w,"+n.p+"img/b4b2178-1080.webp 1080w,"+n.p+"img/14fed16-1200.webp 1200w,"+n.p+"img/76320eb-1280.webp 1280w",images:[{path:n.p+"img/6e81844-480.webp",width:480,height:270},{path:n.p+"img/000570c-768.webp",width:768,height:432},{path:n.p+"img/542b50c-960.webp",width:960,height:540},{path:n.p+"img/b4b2178-1080.webp",width:1080,height:608},{path:n.p+"img/14fed16-1200.webp",width:1200,height:675},{path:n.p+"img/76320eb-1280.webp",width:1280,height:720}],src:n.p+"img/6e81844-480.webp",toString:function(){return n.p+"img/6e81844-480.webp"},width:480,height:270}},355:function(e,t,n){var r={src:n.p+"img/36b4356.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%231e2133' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23d1d3df' d='M1017.5 312.5l-820 280 355-420z'/%3E%3Cpath fill='%233063b7' d='M902.5 227.5l-495 70-185-175z'/%3E%3Cpath d='M2.5 797.5l355-555-355-320z'/%3E%3Cpath fill='%23000008' d='M1357.5 742.5l-70-450-1350 440z'/%3E%3Cpath fill='%23f1e4e4' d='M867.5 162.5l-250 125 145 105z'/%3E%3Cpath fill='%23000004' d='M447.5-77.5l910 555-65-555z'/%3E%3Cpath fill='%23000745' d='M647.5 282.5l-645-360 830 130z'/%3E%3Cpath fill='%235c585a' d='M417.5 542.5l520-320 60 150z'/%3E%3Cpath fill='%23e2dcde' d='M637.5 277.5l-335 210 145-185z'/%3E%3Cpath fill='%233186ea' d='M297.5 67.5l255 185-100 55z'/%3E%3Cpath fill='%23000100' d='M-77.5 667.5l380 130-40-265z'/%3E%3Cpath fill='%23010746' d='M1197.5 797.5l160-480-435-115z'/%3E%3Cpath fill='%23161707' d='M562.5 452.5l100-195-115 105z'/%3E%3Cpath fill='%23868284' d='M552.5 587.5l-380-75 200-55z'/%3E%3Cpath d='M272.5-77.5l-350 145 200 730z'/%3E%3Cpath fill='%23555452' d='M822.5 122.5l10 245 175 75z'/%3E%3Cpath fill='%23dcdddf' d='M942.5 407.5l35-75-70 60z'/%3E%3Cpath fill='%23615e6c' d='M457.5 427.5l230 85-425 70z'/%3E%3Cpath fill='%23d7d2e6' d='M542.5 437.5l20-150-100 155z'/%3E%3Cpath fill='%231d2274' d='M372.5 382.5l100-90-285-370z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},385:function(e,t,n){"use strict";n.r(t);var r=n(330),c=n(279),l={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:c.a},data:function(){return{iframe:{id:"cLKvbhfVBUU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(311))}}}},h=n(8),o=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,d={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:c.a},data:function(){return{iframe:{id:"VBafwg16xpU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(352))}}}},w={components:{Critical:o,Lazy:Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(h.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=f.exports}}]);