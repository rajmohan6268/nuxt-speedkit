(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{291:function(t,e,n){var content=n(328);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("1e3267f2",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";var l=n(291);n.n(l).a},328:function(t,e,n){(e=n(67)(!1)).push([t.i,".page-index h1,.page-index h2,.page-index nav{text-align:center}.page-index ul{padding:0;list-style:none}.page-index ul li{margin:.625em 0}.page-index a{font-size:1em;color:currentColor;text-decoration:none}",""]),t.exports=e},376:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{links:[{title:"Full Example With Components",to:"/full-example-with-components"},{title:"Full Example Without Components",to:"/full-example-without-components"},{title:"Max Fonts",to:"/max-fonts"},{title:"Test: v-font",to:"/tests/v-font"},{title:"Test: v-font (media)",to:"/tests/v-font-media"},{title:"Test: LazyPicture",to:"/tests/lazy-picture"},{title:"Test: LazyImage",to:"/tests/lazy-image"},{title:"Test: Component Import (Critical by Prop)",to:"/tests/component-import/critical-prop"},{title:"Test: Component Import (Critical by Parent)",to:"/tests/component-import/critical-parent"}],criticalLinks:[{title:"Font basic usage",to:"/critical/font-basic"},{title:"Font extended usage",to:"/critical/font-extended"},{title:"LazyImage",to:"/critical/lazy-image"},{title:"LazyPicture",to:"/critical/lazy-picture"},{title:"LazyIframe",to:"/critical/lazy-iframe"}],lazyLinks:[{title:"Font basic usage",to:"/lazy/font-basic"},{title:"Font extended usage",to:"/lazy/font-extended"},{title:"LazyImage",to:"/lazy/lazy-image"},{title:"LazyPicture",to:"/lazy/lazy-picture"},{title:"LazyIframe",to:"/lazy/lazy-iframe"}],bothLinks:[{title:"Font basic usage",to:"/both/font-basic"},{title:"Font extended usage",to:"/both/font-extended"},{title:"LazyImage",to:"/both/lazy-image"},{title:"LazyPicture",to:"/both/lazy-picture"},{title:"LazyIframe",to:"/both/lazy-iframe"}]}}},o=(n(327),n(15)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Quicksand",400,"normal").isCritical(),t.$fonts.getFont("Quicksand",700,"normal").addSelector("h1, h2").isCritical()],expression:"[\n    $fonts.getFont('Quicksand', 400, 'normal').isCritical(),\n    $fonts.getFont('Quicksand', 700, 'normal').addSelector('h1, h2').isCritical()\n  ]"}],staticClass:"page-index"},[n("h1",[t._v("\n    Preview\n  ")]),t._v(" "),n("nav",[n("ul",t._l(t.links,(function(link,e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:link.to,title:link.title}},[t._v("\n          "+t._s(link.title)+"\n        ")])],1)})),0)]),t._v(" "),n("h2",[t._v("Critical")]),t._v(" "),n("nav",[n("ul",t._l(t.criticalLinks,(function(link,e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:link.to,title:link.title}},[t._v("\n          "+t._s(link.title)+"\n        ")])],1)})),0)]),t._v(" "),n("h2",[t._v("Lazy")]),t._v(" "),n("nav",[n("ul",t._l(t.lazyLinks,(function(link,e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:link.to,title:link.title}},[t._v("\n          "+t._s(link.title)+"\n        ")])],1)})),0)]),t._v(" "),n("h2",[t._v("Both")]),t._v(" "),n("nav",[n("ul",t._l(t.bothLinks,(function(link,e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:link.to,title:link.title}},[t._v("\n          "+t._s(link.title)+"\n        ")])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);