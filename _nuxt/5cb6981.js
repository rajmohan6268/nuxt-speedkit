(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{236:function(e,t,n){var content=n(240);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(68).default)("030c1927",content,!0,{sourceMap:!1})},238:function(e,t,n){"use strict";n(239);var r=n(15),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$fonts.getFont("Quicksand",400,"normal").isCritical(),expression:"$fonts.getFont('Quicksand', 400, 'normal').isCritical()"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"df1b8846",null);t.a=component.exports},239:function(e,t,n){"use strict";var r=n(236);n.n(r).a},240:function(e,t,n){(t=n(67)(!1)).push([e.i,".preview-container[data-v-df1b8846]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-df1b8846]:first-child{margin-top:0}.preview-container[data-v-df1b8846]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-df1b8846]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-df1b8846]{flex-direction:row}}.preview-container>div[data-v-df1b8846]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-df1b8846]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-df1b8846]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-df1b8846]{font-size:2em}.preview-container .preview-container__info p[data-v-df1b8846]{line-height:1.375;text-align:center}.preview-container .preview-container__preview[data-v-df1b8846]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-df1b8846]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-df1b8846]{text-align:center}.preview-container .preview-container__preview>article[data-v-df1b8846],.preview-container .preview-container__preview>div[data-v-df1b8846]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-df1b8846]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-df1b8846]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-df1b8846]{position:relative;width:100%;height:100%}",""]),e.exports=t},248:function(e,t,n){var content=n(270);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(68).default)("7a80f00b",content,!0,{sourceMap:!1})},269:function(e,t,n){"use strict";var r=n(248);n.n(r).a},270:function(e,t,n){(t=n(67)(!1)).push([e.i,".organism-spacer{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;font-size:2em}.organism-spacer>div{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}.organism-spacer>div>span{display:block;font-size:1.375em;text-align:center}.organism-spacer>div p{line-height:1.375;text-align:center}",""]),e.exports=t},271:function(e,t,n){"use strict";var r={props:{title:{type:String,default:"Scroll down"}}},o=(n(269),n(15)),component=Object(o.a)(r,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-spacer"},[t("div",[t("p",[this._v("Scroll down")]),this._v(" "),t("span",[this._v("↓")])])])}],!1,null,null,null);t.a=component.exports},366:function(e,t,n){"use strict";n.r(t);var r=n(271),o=n(238),c={components:{OrganismSpacer:r.a,OrganismPreviewContainer:o.a},data:function(){return{contentA:"<p>This is a <strong>RichText</strong> with different <i>font variants</i>.</p>"}}},l=n(15),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-spacer"),e._v(" "),n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Font extended usage")])]},proxy:!0}])},[[n("article",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Comic Neue",400,"normal"),e.$fonts.getFont("Comic Neue",700,"normal").addSelector("b, strong"),e.$fonts.getFont("Comic Neue",400,"italic").addSelector("i, em")],expression:"[\n          $fonts.getFont('Comic Neue', 400, 'normal'),\n          $fonts.getFont('Comic Neue', 700, 'normal').addSelector('b, strong'),\n          $fonts.getFont('Comic Neue', 400, 'italic').addSelector('i, em')\n        ]"}],domProps:{innerHTML:e._s(e.contentA)}})]],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);