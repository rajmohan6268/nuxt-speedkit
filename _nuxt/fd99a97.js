(window.webpackJsonp=window.webpackJsonp||[]).push([[24,37],{236:function(t,e,n){var content=n(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("030c1927",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";(function(t){t.IntersectionObserver=t.IntersectionObserver||function(){function t(){}var e=t.prototype;return e.observe=function(){},e.unobserve=function(){},t}(),e.a={abstract:!0,props:{root:{type:t.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}}},created:function(){var t,e=this;if(!this.$attrs.critical||!this.$options.critical){var n={root:(t=this).root,rootMargin:t.rootMargin,threshold:t.threshold};this.observer=new IntersectionObserver((function(t){var n=t[0];return e.onIntersect(n)}),n)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(t){t.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(t){this.$emit("enter",t)}},render:function(){try{return this.$slots.default[0]}catch(t){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,n(16))},238:function(t,e,n){"use strict";n(239);var r=n(15),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preview-container"},[e("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),e("div",{directives:[{name:"font",rawName:"v-font",value:this.$fonts.getFont("Quicksand",400,"normal").isCritical(),expression:"$fonts.getFont('Quicksand', 400, 'normal').isCritical()"}],staticClass:"preview-container__info"},[this._t("title",[e("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"df1b8846",null);e.a=component.exports},239:function(t,e,n){"use strict";var r=n(236);n.n(r).a},240:function(t,e,n){(e=n(67)(!1)).push([t.i,".preview-container[data-v-df1b8846]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-df1b8846]:first-child{margin-top:0}.preview-container[data-v-df1b8846]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-df1b8846]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-df1b8846]{flex-direction:row}}.preview-container>div[data-v-df1b8846]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-df1b8846]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-df1b8846]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-df1b8846]{font-size:2em}.preview-container .preview-container__info p[data-v-df1b8846]{line-height:1.375;text-align:center}.preview-container .preview-container__preview[data-v-df1b8846]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-df1b8846]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-df1b8846]{text-align:center}.preview-container .preview-container__preview>article[data-v-df1b8846],.preview-container .preview-container__preview>div[data-v-df1b8846]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-df1b8846]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-df1b8846]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-df1b8846]{position:relative;width:100%;height:100%}",""]),t.exports=e},241:function(t,e,n){var content=n(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("69b596f0",content,!0,{sourceMap:!1})},242:function(t,e,n){var content=n(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("5571714b",content,!0,{sourceMap:!1})},243:function(t,e,n){var content=n(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("25249a9c",content,!0,{sourceMap:!1})},244:function(t,e,n){var content=n(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("9f5ed704",content,!0,{sourceMap:!1})},245:function(t,e,n){var content=n(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("51506ec2",content,!0,{sourceMap:!1})},246:function(t,e,n){"use strict";var r=n(12),o=n(5),c=n(72),l=n(20),h=n(11),d=n(34),f=n(118),v=n(70),m=n(6),w=n(69),A=n(71).f,x=n(44).f,y=n(13).f,E=n(188).trim,_=o.Number,S=_.prototype,j="Number"==d(w(S)),I=function(t){var e,n,r,o,c,l,h,code,d=v(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=E(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,h=0;h<l;h++)if((code=c.charCodeAt(h))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var Q,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(j?m((function(){S.valueOf.call(n)})):"Number"!=d(n))?f(new _(I(e)),n,C):I(e)},k=r?A(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;k.length>N;N++)h(_,Q=k[N])&&!h(C,Q)&&y(C,Q,x(_,Q));C.prototype=S,S.constructor=C,l(o,"Number",C)}},247:function(t,e,n){"use strict";var r=n(237).a,o=n(15),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports},248:function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("7a80f00b",content,!0,{sourceMap:!1})},250:function(t,e,n){t.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/f902958-768.webp 768w,"+n.p+"img/8ff4429-960.webp 960w,"+n.p+"img/6ad4c4c-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/62dfd4d-1536.webp 1536w,"+n.p+"img/a6b7c63-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/f902958-768.webp",width:768,height:768},{path:n.p+"img/8ff4429-960.webp",width:960,height:960},{path:n.p+"img/6ad4c4c-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/62dfd4d-1536.webp",width:1536,height:1536},{path:n.p+"img/a6b7c63-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlYDAABXRUJQVlA4IEoDAACwDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMr2CzIisPUHirQttuBzvmmgR7j9V8HfA4ujtBTRLp70y7+2MD0Xc/70/7BQptAQLZ1XJxUwGWRlJw06txdtGSqRdPAepfu+fxYRtmup/ltviiGrMC88eAV1kxc7iPbne1iSPAA/vnr/aIPkPKLE31d/7/1E9ReBSo7X61pmylYg3rFmrxyp5R9uHfEbg523EdMC26PTUUZ6v6Cp4vsildm+L0z2xW6VUHQC0N0pF0c6LecVIJcFyS6QQuPx6byK0o/3f7JwH/zu51T37OGwkSY7E43akTahQ2iFro///FEZi3JQ8vThoKfclVNYrExTl++T1di339lnczDa9ew9W+pCuKKVOmuUP3gUncQlkUh+H1cIXnGN6dBBexvzwiKj5HFjGeckZD+7kVQWUXtUTVdEu0hiaTWbraaZgromhnFM4OX/MlgZNv8d2Jp64gDxYK4ZaXT92AL0PsVm1JmAeN8C6eoOq1exAGV5WbdDgjiDPAxGagKvXChGUsok8tTdpN/KE/CZzIUrkVTfz9S0808C9dJgjieBXi6e00ZCqp1mtDXm1Io4rRsJBvU0mG/yCmCzSRkXB1ZukOVRrTYS+EXNR2bTkrli0aUGmNux2yBMvpz+S9C+82Oy8pVqfYgDm43oLYDPZgp3vCSytyclXoTXcI2XaFhh6DqluAV+87OVLR/jzuvJaz7D8p5PPxk16Z9/mrjVRuqQV3RwzknahqwcwRS5TTjQcn6+n+th69SgQaQBlcD4/naiV0N3g1/GrB8u+nUJDYimICNgcTdyEDdK5j4TdO/LGLvgUsXhu/X/zpyf2Nu+Q7h9Y5hWa1LzZf64gwrbx3AknAIoO+S3tnPhNg6Gu/k5kWWtfzdampTk8XGKP34/KfNwclwD9sEHp7p2rgT1wxGBR68T75aE1usZf1sH8kzJMLIMPhlTWptnIxU3k8fPUnD6oWawrO8xN6fZZuQ30uukxLmr18lMJMSIUPA43GVTzkBYR9SSP5hE0QQIrgoXZKSntVduVJR735D/ZuahZYvEH+zdkoq3//BExRZrcnetF6gX4WQG6y57IB68pWpZWMGHjL8RAAAAA==",width:480,height:480}},251:function(t,e,n){"use strict";var r=n(241);n.n(r).a},252:function(t,e,n){(e=n(67)(!1)).push([t.i,'figure[data-v-69b57ab2]{position:relative;width:100%;height:100%;margin:0}figure>span.loading[data-v-69b57ab2]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}figure>span.loading[data-v-69b57ab2]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}figure>span.loading[data-v-69b57ab2]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation:spinner .6s linear infinite;animation:spinner .6s linear infinite;will-change:transform}',""]),t.exports=e},253:function(t,e,n){"use strict";var r=n(242);n.n(r).a},254:function(t,e,n){(e=n(67)(!1)).push([t.i,"noscript[data-v-27f04a69]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},255:function(t,e,n){"use strict";var r=n(243);n.n(r).a},256:function(t,e,n){(e=n(67)(!1)).push([t.i,"img[data-v-d62cab08]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},257:function(t,e,n){"use strict";var r={components:{IntersectionObserver:n(247).a},props:{loading:{type:Boolean,default:function(){return!1}}},data:function(){return{init:!1}},computed:{hasSlot:function(){return this.$slots.caption}},watch:{loading:{handler:function(t){this.init=t||this.init}}},methods:{onEnter:function(){this.$emit("visible")}}},o=(n(251),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intersection-observer",{on:{enter:t.onEnter}},[n("figure",[t._t("default"),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"}),t._v(" "),t.hasSlot?n("figcaption",[t._t("caption")],2):t._e()],2)])}),[],!1,null,"69b57ab2",null);e.a=component.exports},258:function(t,e,n){"use strict";var r={computed:{loading:function(){return this.isCritical?"eager":"lazy"}},mounted:function(){console.log("mounted")},methods:{onLoad:function(t){this.$emit("load",t.target)}}},o=(n(255),n(15)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{loading:this.loading},on:{load:this.onLoad}})}),[],!1,null,"d62cab08",null);e.a=component.exports},259:function(t,e,n){"use strict";n(253);var r=n(15),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"27f04a69",null);e.a=component.exports},260:function(t,e,n){"use strict";var r=n(244);n.n(r).a},261:function(t,e,n){(e=n(67)(!1)).push([t.i,"",""]),t.exports=e},262:function(t,e,n){"use strict";var r=n(245);n.n(r).a},263:function(t,e,n){(e=n(67)(!1)).push([t.i,"",""]),t.exports=e},264:function(t,e,n){"use strict";n.r(e);n(246);var r=n(257),o=n(259),c={components:{CustomImage:n(258).a},props:{src:{type:String,default:function(){return null}},srcset:{type:String,default:function(){return null}},sources:{type:Array,default:function(){return null}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}}},methods:{onLoad:function(t){this.$emit("load",t.target)}}},l=(n(260),n(15)),h=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad}},"custom-image",{src:t.src,srcset:t.srcset,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],2)}),[],!1,null,"75a3a139",null).exports,d={components:{ImageContainer:r.a,CustomNoScript:o.a,CustomPicture:h},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:[Array,String],default:function(){return null}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}}},data:function(){return{init:!1,loading:!1}},computed:{pictureSources:function(){return this.init?this.sources:null},hasSlot:function(){return this.$slots.caption}},methods:{onVisible:function(){this.loading=!0,this.init=!0},onLoad:function(){this.loading=!1,this.$emit("load")}}},f=(n(262),Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{attrs:{loading:t.loading},on:{visible:t.onVisible},scopedSlots:t._u([{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)},[[n("custom-picture",t._b({on:{load:t.onLoad}},"custom-picture",{src:t.placeholder,sources:t.pictureSources,width:t.width,height:t.height,alt:t.alt,title:t.title},!1)),t._v(" "),t.init?t._e():n("custom-no-script",[n("custom-picture",t._b({},"custom-picture",{sources:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],1)]],2)}),[],!1,null,"08176984",null));e.default=f.exports},268:function(t,e,n){t.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/37e590c-768.jpg 768w,"+n.p+"img/59faa2f-960.jpg 960w,"+n.p+"img/e3185aa-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/7524a62-1536.jpg 1536w,"+n.p+"img/301685b-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/37e590c-768.jpg",width:768,height:768},{path:n.p+"img/59faa2f-960.jpg",width:960,height:960},{path:n.p+"img/e3185aa-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/7524a62-1536.jpg",width:1536,height:1536},{path:n.p+"img/301685b-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBggFAf/EAC8QAAEDAwMCBQMDBQAAAAAAAAECAwQABREGEiExQRMiUWFxBxWBCDKxFCORocH/xAAZAQEAAwEBAAAAAAAAAAAAAAAEAgMFAAH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHMhTflKEg8lW3pWzdL6XgWbTzjkuwpvFxmtxX3ojq0BC3WkICSCrhO3A5PHHvWYvp9o+Zf8AV0O1QENNrCvFK31EIQhBClEkcngY455rQOpHZ91c+2wHZtsuiJu6LJQpex1KOQvI42ncQUnpjvgVkUwoGZEeST2A7xafqpEy2/VJNwPiliRDbcjrUnyJKRgthQ68jPr5vzSvlTnlWFmZISXZMpxSvN0SkenrzmmR9dtJXmFqqM/ci5MlToiVuPqXuKikqTt8uE4Ax0APPNUC/wBumvw40VqI8UNtDaQnHOSf8UesqavQWlyZKN7yFCuRlSURXlqbKBlpfHTHIz/sfFFew7Rc24zbkpltghe5QUrzKH/aKlTRRe09yJj10YIen9QfepDZS1DYfcXsbGcBsg4ppaOuFjvjUS7W11R/qWgtCXCAQPjv36Up4FwQ/do4DIQh99LQbdVt8VSgdyRnjvjPvXZ0zKdt13hJaimM3421UdHXaSVDAOMEk5P5ruXudPFh5+IVwSSY6daaXhaq08m3vENPIHiRnsZ8NeP4PcVna82R6HdXIkjDb8VfhrSoE+Yd/juD71oydNfdkxzDnsxUNAB9tSAvcSP2nnIxkdPWqf8AVixPPRI1/CEbwgNTS1064Ssfx7cVbzGhmuoo6j0+pGlUK9p8xKJsx3Hyxl7uQAjv8miuytRcecJby2TnfyAvHQe/HOaKw8zE3Mj6ITFka0guu7EtRgpYCCccJODg8Ajjn4qwaZlWW53VFuVIeVLZnpVGc37nXEAgYKu/Tv60UU7hahQIo2JPtDNteT9f3yRbtRRGLa44GYhYIbdJK1NlPRR5Jz1/Aq3XjXUBVmVCfgOzGn2EqJQjcnaccHHTnuemKKKa1dwzDx+yeANpQbpP025EcfVBcjyWQA2psn+6rBH7TxkjuMUUUVi1KhJ2lhn/2Q==",width:480,height:480}},269:function(t,e,n){"use strict";var r=n(248);n.n(r).a},270:function(t,e,n){(e=n(67)(!1)).push([t.i,".organism-spacer{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;font-size:2em}.organism-spacer>div{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}.organism-spacer>div>span{display:block;font-size:1.375em;text-align:center}.organism-spacer>div p{line-height:1.375;text-align:center}",""]),t.exports=e},271:function(t,e,n){"use strict";var r={props:{title:{type:String,default:"Scroll down"}}},o=(n(269),n(15)),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"organism-spacer"},[e("div",[e("p",[this._v("Scroll down")]),this._v(" "),e("span",[this._v("↓")])])])}],!1,null,null,null);e.a=component.exports},369:function(t,e,n){"use strict";n.r(e);var r=n(264),o=n(271),c=n(238),l={components:{LazyPicture:r.default,OrganismSpacer:o.a,OrganismPreviewContainer:c.a},data:function(){var t=n(250),e=n(268);return{lazyPicture:{sources:[{srcset:t.srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:e.placeholder,width:e.width,height:e.height,alt:"Alt Text",title:"Title Text",caption:null}}}},h=n(15),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("organism-spacer"),t._v(" "),n("organism-preview-container",{scopedSlots:t._u([{key:"title",fn:function(){return[n("p",[t._v("LazyPicture"),n("br"),t._v("Source Switch by >768px")])]},proxy:!0}])},[[n("lazy-picture",t._b({},"lazy-picture",t.lazyPicture,!1))]],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);