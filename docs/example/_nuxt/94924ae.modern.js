(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,t,n){var content=n(104);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("295b85b1",content,!0,{sourceMap:!1})},102:function(e,t,n){"use strict";n(103);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},103:function(e,t,n){"use strict";n(101)},104:function(e,t,n){(t=n(5)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},107:function(e,t,n){"use strict";(function(e){let r;function l(){return r||(r=new Promise(t=>{const img=new e.Image;img.onload=()=>t(!0),img.onerror=()=>t(!1),img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),r}function c(element,t){let n={};return e.document&&(n=e.document.createElement(element)),t in n}n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}))}).call(this,n(3))},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(10);var l=n(11),c=n(107);const h=new class{constructor(){this.map=new Map}getEntry(e){return this.map.has(e)||this.map.set(e,new r.a),this.map.get(e)}};function o(e,t,n){const r=Object(l.a)(e.srcset),o=h.getEntry(r);return o.promise.then(()=>t()),Object(c.a)("link","imageSrcset")?{link:[d(e,r,o.resolve,n)]}:function(e,t,n){const img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,o.resolve,n)}function d(e,t,n,r){return{hid:t,rel:"preload",as:"image",crossorigin:r,callback:n,imageSrcset:e.srcset}}},133:function(e,t,n){e.exports=(()=>{const e=n(134);return{sources:[{srcset:n(135).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(136)),width:e.width,height:e.height}})()},134:function(e,t,n){e.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},135:function(e,t,n){e.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},136:function(e,t,n){var r={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M112.5 797.5l-60-550 1305 435z'/%3E%3Cpath fill='%23ccc3a8' d='M1267.5-77.5l90 580-1435-395z'/%3E%3Cpath fill='%23ff0' d='M112.5 797.5l-100-810-90 640z'/%3E%3Cpath fill='%23100615' d='M1062.5 117.5l115 680h-700z'/%3E%3Cpath fill='%23ff0' d='M1357.5 362.5l-120 435v-875z'/%3E%3Cpath fill='%238e7c00' d='M232.5 437.5l560 225h-670z'/%3E%3Cpath fill='%23ff0' d='M37.5-77.5l15 875-130-415z'/%3E%3Cpath fill='%23fff1d1' d='M1072.5 402.5l180-375-75 470z'/%3E%3Cpath fill='%23afa993' d='M212.5 347.5l1015-270-1115-155z'/%3E%3Cpath fill='%234a4e68' d='M527.5 152.5l720 360-745-95z'/%3E%3Cpath fill='%23020000' d='M1017.5 477.5l220 35v285z'/%3E%3Cpath fill='%23ff0' d='M1242.5-77.5l115 390-110 410z'/%3E%3Cpath fill='%23c5c4da' d='M747.5-37.5l-5 390 215-305z'/%3E%3Cpath fill='%23161323' d='M252.5 322.5l-175 180 795-40z'/%3E%3Cpath fill='%23d2cf11' d='M292.5 162.5l-260-80 515 15z'/%3E%3Cpath fill='%233e1c1a' d='M962.5 527.5l195-325-165-35z'/%3E%3Cpath fill='%236a472f' d='M172.5 157.5l-130 285v-395z'/%3E%3Cpath fill='%23ff0' d='M-7.5 247.5l15 550 85-230z'/%3E%3Cpath fill='%23160000' d='M137.5 642.5l-190 155 630-95z'/%3E%3Cpath fill='%23030000' d='M472.5 547.5l-285 5 310 80z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},173:function(e,t,n){e.exports=(()=>{const e=n(174);return{sources:[{srcset:n(175).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(176)),width:e.width,height:e.height}})()},174:function(e,t,n){e.exports={srcSet:n.p+"img/989de56-480.jpg 480w,"+n.p+"img/860842d-768.jpg 768w,"+n.p+"img/8ede879-960.jpg 960w,"+n.p+"img/df666a4-1080.jpg 1080w,"+n.p+"img/0683296-1200.jpg 1200w,"+n.p+"img/984bf0c-1280.jpg 1280w",images:[{path:n.p+"img/989de56-480.jpg",width:480,height:270},{path:n.p+"img/860842d-768.jpg",width:768,height:432},{path:n.p+"img/8ede879-960.jpg",width:960,height:540},{path:n.p+"img/df666a4-1080.jpg",width:1080,height:608},{path:n.p+"img/0683296-1200.jpg",width:1200,height:675},{path:n.p+"img/984bf0c-1280.jpg",width:1280,height:720}],src:n.p+"img/989de56-480.jpg",toString:function(){return n.p+"img/989de56-480.jpg"},width:480,height:270}},175:function(e,t,n){e.exports={srcSet:n.p+"img/6e81844-480.webp 480w,"+n.p+"img/000570c-768.webp 768w,"+n.p+"img/542b50c-960.webp 960w,"+n.p+"img/b4b2178-1080.webp 1080w,"+n.p+"img/14fed16-1200.webp 1200w,"+n.p+"img/76320eb-1280.webp 1280w",images:[{path:n.p+"img/6e81844-480.webp",width:480,height:270},{path:n.p+"img/000570c-768.webp",width:768,height:432},{path:n.p+"img/542b50c-960.webp",width:960,height:540},{path:n.p+"img/b4b2178-1080.webp",width:1080,height:608},{path:n.p+"img/14fed16-1200.webp",width:1200,height:675},{path:n.p+"img/76320eb-1280.webp",width:1280,height:720}],src:n.p+"img/6e81844-480.webp",toString:function(){return n.p+"img/6e81844-480.webp"},width:480,height:270}},176:function(e,t,n){var r={src:n.p+"img/36b4356.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%231e2133' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23d1d6e5' d='M512.5 177.5l520 115-795 285z'/%3E%3Cpath fill='%23154db5' d='M707.5 247.5l-335 60-135-260z'/%3E%3Cpath fill='%23000005' d='M1352.5 332.5l-90 465-1325-90z'/%3E%3Cpath d='M-32.5 797.5l410-515-365-360z'/%3E%3Cpath fill='%23fff8f7' d='M877.5 172.5l-140 205-65-125z'/%3E%3Cpath fill='%23000009' d='M1187.5 532.5l-555-610 725 75z'/%3E%3Cpath fill='%23676264' d='M987.5 382.5l-60-170-590 350z'/%3E%3Cpath fill='%2300073f' d='M847.5 67.5l-205 220-540-365z'/%3E%3Cpath fill='%23c1c0c4' d='M207.5 542.5l340-140 15-180z'/%3E%3Cpath fill='%233aaafb' d='M377.5 127.5l180 140-145-5z'/%3E%3Cpath fill='%230f0f00' d='M647.5 292.5l-95 60 15 95z'/%3E%3Cpath d='M-77.5 42.5l360-120-160 875z'/%3E%3Cpath fill='%23040946' d='M1042.5 797.5l-85-595 400 200z'/%3E%3Cpath fill='%23625e65' d='M477.5 382.5l40 200-210-15z'/%3E%3Cpath fill='%23cbc4cf' d='M607.5 292.5l265-95-125 190z'/%3E%3Cpath fill='%23211f19' d='M927.5 367.5l-100-60 35-335z'/%3E%3Cpath fill='%23fff' d='M967.5 342.5l-35 60-20-10z'/%3E%3Cpath fill='%23080402' d='M322.5 797.5h795l-270-430z'/%3E%3Cpath fill='%230a0000' d='M257.5 397.5v115l205-215z'/%3E%3Cpath fill='%239d9d9b' d='M792.5 257.5l20-115 75 75z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},202:function(e,t,n){"use strict";n.r(t);var r=n(151),l=n(102),c={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:l.a},data:()=>({iframe:{id:"cLKvbhfVBUU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(133))}})},h=n(2),o=Object(h.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,d={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:l.a},data:()=>({iframe:{id:"VBafwg16xpU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(173))}})},w={components:{Critical:o,Lazy:Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(h.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=f.exports}}]);