(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,t,n){var content=n(104);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("295b85b1",content,!0,{sourceMap:!1})},102:function(e,t,n){"use strict";n(103);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},103:function(e,t,n){"use strict";n(101)},104:function(e,t,n){(t=n(5)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},107:function(e,t,n){"use strict";(function(e){let r;function c(){return r||(r=new Promise(t=>{const img=new e.Image;img.onload=()=>t(!0),img.onerror=()=>t(!1),img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),r}function l(element,t){let n={};return e.document&&(n=e.document.createElement(element)),t in n}n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}))}).call(this,n(3))},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(17);var c=n(10),l=n(107);const h=new class{constructor(){this.map=new Map}getEntry(e){return this.map.has(e)||this.map.set(e,new r.a),this.map.get(e)}};function o(e,t,n){const r=Object(c.a)(e.srcset),o=h.getEntry(r);return o.promise.then(()=>t()),Object(l.a)("link","imageSrcset")?{link:[d(e,r,o.resolve,n)]}:function(e,t,n){const img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,o.resolve,n)}function d(e,t,n,r){return{hid:t,rel:"preload",as:"image",crossorigin:r,callback:n,imageSrcset:e.srcset}}},133:function(e,t,n){e.exports=(()=>{const e=n(134);return{sources:[{srcset:n(135).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(136)),width:e.width,height:e.height}})()},134:function(e,t,n){e.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},135:function(e,t,n){e.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},136:function(e,t,n){var r={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M1357.5 672.5l-1280-415 20 540z'/%3E%3Cpath fill='%23ccc2a8' d='M1267.5-77.5l-1345 185 1425 395z'/%3E%3Cpath fill='%23ff0' d='M17.5 17.5l90 780-185-165z'/%3E%3Cpath fill='%23100615' d='M1062.5 117.5l115 680-645-65z'/%3E%3Cpath fill='%23ff0' d='M1247.5 787.5l-10-835 120 410z'/%3E%3Cpath fill='%23927f00' d='M812.5 662.5l-525-195-185 190z'/%3E%3Cpath fill='%23ff0' d='M52.5 797.5l-15-875-115 455z'/%3E%3Cpath fill='%23fff2d1' d='M1187.5 482.5l-115-75 175-370z'/%3E%3Cpath fill='%23afa893' d='M127.5-77.5l1135 160-1080 265z'/%3E%3Cpath fill='%234d526c' d='M1217.5 497.5l-670-355-65 270z'/%3E%3Cpath fill='%231b0e03' d='M267.5 722.5l970 75v-295z'/%3E%3Cpath fill='%23ff0' d='M1237.5 687.5l120-320-100-415z'/%3E%3Cpath fill='%23a9acbb' d='M482.5 147.5l460-225 10 425z'/%3E%3Cpath fill='%23231511' d='M687.5 352.5l-455 220 630 5z'/%3E%3Cpath fill='%2306101f' d='M47.5 287.5l5 155 545 55z'/%3E%3Cpath fill='%23bdb617' d='M197.5 47.5l-160 120 520-55z'/%3E%3Cpath fill='%233e1a17' d='M972.5 502.5l15-330 170 30z'/%3E%3Cpath fill='%23bbae04' d='M497.5 542.5l-375 5 165-60z'/%3E%3Cpath fill='%23c5b488' d='M982.5 597.5l50-195 5 195z'/%3E%3Cpath fill='%23ff0' d='M-77.5 197.5l130 600 40-275z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},173:function(e,t,n){e.exports=(()=>{const e=n(174);return{sources:[{srcset:n(175).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(176)),width:e.width,height:e.height}})()},174:function(e,t,n){e.exports={srcSet:n.p+"img/989de56-480.jpg 480w,"+n.p+"img/860842d-768.jpg 768w,"+n.p+"img/8ede879-960.jpg 960w,"+n.p+"img/df666a4-1080.jpg 1080w,"+n.p+"img/0683296-1200.jpg 1200w,"+n.p+"img/984bf0c-1280.jpg 1280w",images:[{path:n.p+"img/989de56-480.jpg",width:480,height:270},{path:n.p+"img/860842d-768.jpg",width:768,height:432},{path:n.p+"img/8ede879-960.jpg",width:960,height:540},{path:n.p+"img/df666a4-1080.jpg",width:1080,height:608},{path:n.p+"img/0683296-1200.jpg",width:1200,height:675},{path:n.p+"img/984bf0c-1280.jpg",width:1280,height:720}],src:n.p+"img/989de56-480.jpg",toString:function(){return n.p+"img/989de56-480.jpg"},width:480,height:270}},175:function(e,t,n){e.exports={srcSet:n.p+"img/6e81844-480.webp 480w,"+n.p+"img/000570c-768.webp 768w,"+n.p+"img/542b50c-960.webp 960w,"+n.p+"img/b4b2178-1080.webp 1080w,"+n.p+"img/14fed16-1200.webp 1200w,"+n.p+"img/76320eb-1280.webp 1280w",images:[{path:n.p+"img/6e81844-480.webp",width:480,height:270},{path:n.p+"img/000570c-768.webp",width:768,height:432},{path:n.p+"img/542b50c-960.webp",width:960,height:540},{path:n.p+"img/b4b2178-1080.webp",width:1080,height:608},{path:n.p+"img/14fed16-1200.webp",width:1200,height:675},{path:n.p+"img/76320eb-1280.webp",width:1280,height:720}],src:n.p+"img/6e81844-480.webp",toString:function(){return n.p+"img/6e81844-480.webp"},width:480,height:270}},176:function(e,t,n){var r={src:n.p+"img/36b4356.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%231e2133' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23d1d5e4' d='M1027.5 282.5l-520-100-275 410z'/%3E%3Cpath fill='%231655c9' d='M412.5 327.5l-190-270 415 155z'/%3E%3Cpath d='M-77.5 27.5l160 770 270-875z'/%3E%3Cpath fill='%23dbd2dc' d='M762.5 447.5l90-275-240 115z'/%3E%3Cpath fill='%23001' d='M1357.5 797.5l-85-875-900 795z'/%3E%3Cpath fill='%236c696f' d='M902.5 227.5l155 135-720 205z'/%3E%3Cpath fill='%23000339' d='M157.5-37.5l775-40-290 370z'/%3E%3Cpath fill='%23cecccc' d='M497.5 262.5l130 40-400 245z'/%3E%3Cpath d='M1067.5 682.5l-1030 115-115-290z'/%3E%3Cpath fill='%23010000' d='M627.5-77.5l300 315 430-215z'/%3E%3Cpath d='M567.5 327.5l85-45-100 140z'/%3E%3Cpath fill='%23eee8e2' d='M732.5 342.5l-15-125 155-5z'/%3E%3Cpath fill='%233cb1fa' d='M427.5 257.5l125 5-195-140z'/%3E%3Cpath fill='%23020000' d='M-7.5 652.5l435-315-445-415z'/%3E%3Cpath fill='%23b0ada4' d='M162.5 572.5l105-65-55-20z'/%3E%3Cpath fill='%23fff' d='M937.5 402.5l35-65-75 65z'/%3E%3Cpath fill='%23010740' d='M1357.5 322.5l-215 475-215-615z'/%3E%3Cpath fill='%2358565b' d='M237.5 597.5l430-80-40-135z'/%3E%3Cpath fill='%23262b7a' d='M352.5 377.5l135-90-290-365z'/%3E%3Cpath fill='%23cfc9dc' d='M542.5 337.5l10 140-80-50z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},202:function(e,t,n){"use strict";n.r(t);var r=n(151),c=n(102),l={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:c.a},data:()=>({iframe:{id:"cLKvbhfVBUU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(133))}})},h=n(2),o=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,d={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:c.a},data:()=>({iframe:{id:"VBafwg16xpU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(173))}})},w={components:{Critical:o,Lazy:Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(h.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=f.exports}}]);