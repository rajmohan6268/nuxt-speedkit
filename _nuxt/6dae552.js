(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{289:function(t,e,n){var content=n(324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("9462d6ea",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(326);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("46cdf8a6",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return d}));var r=n(346),c=n(349),o=n(348),f=n(314),l=n(350),h=Object(r.a)(t,"resize").pipe(Object(o.a)((function(){return Object(c.a)(350)})),Object(f.a)((function(){return d()})),Object(l.a)());function d(){var e={x:Math.max(t.document.documentElement.clientWidth,t.innerWidth),y:Math.max(t.document.documentElement.clientHeight,t.innerHeight)},n=e.x,r=e.y,c=t.devicePixelRatio||1;return{x:n*c,y:r*c}}}).call(this,n(16))},315:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return f}));n(302),n(8),n(21),n(23),n(24);var r=n(3),c=n(317),o=n(299),f=function(){function t(t){this.el=t,this.subscriber=null}var e=t.prototype;return e.setup=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var c,f,h,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(this.el);case 2:return c=t.sent,f=c.player,h=c.support,d=Object(o.a)(),this.instance=f,this.instance.configure(R(d)),t.next=10,v(f,h,e,n,d);case 10:this.subscriber=o.b.subscribe(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f.configure(R(r)),O()){t.next=4;break}return t.next=4,v(f,h,e,n,r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}(),e.destroy=function(){this.subscriber&&this.subscriber.unsubscribe(),this.instance&&this.instance.destroy()},t}();function l(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(video){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:return e=t.sent,n=e.Player.probeSupport(),t.abrupt("return",new Promise((function(t){document.addEventListener("shaka-ui-loaded",Object(r.a)(regeneratorRuntime.mark((function e(){var r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=video.ui).configure({clearBufferOnQualityChange:!0}),c=r.getControls(),o=c.getPlayer(),e.t0=t,e.t1=c,e.t2=o,e.next=9,n;case 9:e.t3=e.sent,e.t4={controls:e.t1,player:e.t2,support:e.t3},(0,e.t0)(e.t4);case 12:case"end":return e.stop()}}),e)}))))})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(41).then(n.t.bind(null,341,7)),n.e(40).then(n.t.bind(null,342,7))]);case 2:return e=t.sent,(r=e[0]).polyfill.installAll(),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e,n,r,c){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,c,o){var f,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f=e.getMediaElement().currentTime||0,!n.manifest.mpd){t.next=6;break}return t.next=4,e.load(r,f);case 4:t.next=11;break;case 6:return t.next=8,x(j(o),c);case 8:return l=t.sent,t.next=11,e.load(l,f);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return w.apply(this,arguments)}function w(){return(w=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O()){t.next=4;break}return t.next=3,Object(c.a)(n,e);case 3:return t.abrupt("return",t.sent);case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return"MediaSource"in t}function R(t){var e={maxWidth:t.x,orientation:j(t)};return{abr:{restrictions:e},restrictions:e,streaming:{useNativeHlsOnSafari:!1,bufferingGoal:1,rebufferingGoal:1,bufferBehind:1}}}function j(t){var e=t.x/t.y;return Math.sign(e-1)}}).call(this,n(16))},317:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return f}));n(302),n(8),n(17),n(21),n(29),n(23),n(318),n(24);var r=n(3),c=n(322),o="data:application/vnd.apple.mpegURL;base64,";function f(t,e){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var content,r,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:return content=t.sent,r=m(e,window.location.href),f=v(content,n,r),t.abrupt("return",""+o+Object(c.a)(f));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return t.abrupt("return",t.sent.text());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(e,n){return new t.URL(e,n)}function v(content,t,e){return function(content,t){return content.replace(/([\w/-]*.m3u8)/gm,(function(e){return m(e,t).href}))}(content.replace(/^#EXT.*RESOLUTION=(\d+)x(\d+).*[\s]?[^.]*\.m3u8.*\s/gm,(function(e,n,r){return t===function(t,e){var n=t/e;return Math.sign(n-1)}(n,r)?e:""})),e)}}).call(this,n(16))},322:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function c(t){var e="",i=0;do{var a=t.charCodeAt(i++),b=t.charCodeAt(i++),n=t.charCodeAt(i++),c=(3&(a=a||0))<<4|(b=b||0)>>4&15,o=(15&b)<<2|(n=n||0)>>6&3,f=63&n;b?n||(f=64):o=f=64,e+=r.charAt(a>>2&63)+r.charAt(c)+r.charAt(o)+r.charAt(f)}while(i<t.length);return e}},323:function(t,e,n){"use strict";var r=n(289);n.n(r).a},324:function(t,e,n){(e=n(67)(!1)).push([t.i,".shaka-video-container{height:100vh}video{display:block;width:100%;-o-object-fit:contain;object-fit:contain;background-color:#000}",""]),t.exports=e},325:function(t,e,n){"use strict";var r=n(290);n.n(r).a},326:function(t,e,n){(e=n(67)(!1)).push([t.i,".dimension[data-v-01a70472]{position:absolute;top:0;right:0;font-size:2em;color:#fff}",""]),t.exports=e},347:function(t,e,n){"use strict";n.r(e);var r=n(299),c=n(315),o={props:{dash:{type:String,default:function(){return null}},hls:{type:String,default:function(){return null}},autoplay:{type:Boolean,default:function(){return!1}}},data:function(){return{player:null}},computed:{isMuted:function(){return this.autoplay}},mounted:function(){var video=this.$refs.video;this.streamPlayer=new c.a(video),this.streamPlayer.setup(this.dash,this.hls)},destroyed:function(){this.streamPlayer.destroy()}},f=(n(323),n(15)),l={components:{LazyVideo:Object(f.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{"data-shaka-player-container":""}},[e("video",{ref:"video",attrs:{"data-shaka-player":"",autoplay:this.autoplay,playsinline:""},domProps:{muted:this.isMuted}})])}),[],!1,null,null,null).exports},data:function(){return{width:0,height:0}},mounted:function(){var t=this;this.subscriber=r.b.subscribe((function(e){t.width=e.x,t.height=e.y}))}},h=(n(325),Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("lazy-video",{attrs:{dash:"/stream/h264.mpd",hls:"/stream/h264.m3u8",autoplay:Boolean(!0)}}),this._v(" "),e("div",{staticClass:"dimension"},[this._v("\n    "+this._s(this.width)+" "+this._s(this.height)+"\n  ")])],1)}),[],!1,null,"01a70472",null));e.default=h.exports}}]);