/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{105:function(e,t,n){var content=n(110);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("6ff4a064",content,!0,{sourceMap:!1})},106:function(e,t,n){var content=n(112);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("40ede033",content,!0,{sourceMap:!1})},108:function(e,t,n){var content=n(114);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("7d4e2f69",content,!0,{sourceMap:!1})},109:function(e,t,n){"use strict";n(105)},110:function(e,t,n){(t=n(5)(!1)).push([e.i,'.nuxt-speedkit__image-container[data-v-cf96f8a0]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),e.exports=t},111:function(e,t,n){"use strict";n(106)},112:function(e,t,n){(t=n(5)(!1)).push([e.i,".nuxt-speedkit__noscript[data-v-dd0bafc0]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),e.exports=t},113:function(e,t,n){"use strict";n(108)},114:function(e,t,n){(t=n(5)(!1)).push([e.i,".nuxt-speedkit__custom-image[data-v-e31ed088]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},115:function(e,t,n){"use strict";var o={props:{loading:{type:Boolean,default:()=>!1}},computed:{hasSlot(){return this.$slots.caption}}},r=(n(109),n(2)),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("figure",{staticClass:"nuxt-speedkit__image-container"},[this._t("default"),this._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"}),this._v(" "),this.hasSlot?t("figcaption",[this._t("caption")],2):this._e()],2)}),[],!1,null,"cf96f8a0",null);t.a=component.exports},116:function(e,t,n){"use strict";var o=n(13),r=n(107),l=n(118);var c={props:{alt:{type:String,default:()=>null},preload:{type:Array,default:()=>null},crossorigin:{type:String,default:()=>"anonymous"}},fetchOnServer:!1,data(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},async fetch(){this.webpSupport=await Object(r.b)()},head(){return this.preload&&this.visible&&this.preload&&this.preload.length?Object(l.a)((e=this.preload,this.webpSupport&&e.find(source=>"image/webp"===source.type)||e.find(source=>"image/webp"!==source.type)),()=>this.onPreload(),this.crossorigin):{};var e},mounted(){Object(o.a)(this.$el,()=>{this.visible=!0})},destroyed(){Object(o.b)(this.$el)},methods:{onLoad(e){this.preloaded&&this.$emit("load",e.target)},onPreload(){this.preloaded=!0,this.$emit("preload")}}},d=(n(113),n(2)),component=Object(d.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",alt:this.alt,crossorigin:this.crossorigin},on:{load:this.onLoad}})}),[],!1,null,"e31ed088",null);t.a=component.exports},117:function(e,t,n){"use strict";n(111);var o=n(2),component=Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"dd0bafc0",null);t.a=component.exports},119:function(e,t,n){"use strict";var o=n(115),r=n(117),l=n(116),c={components:{ImageContainer:o.a,CustomNoScript:r.a,CustomImage:l.a},props:{sources:{type:Array,default:()=>[]},placeholder:{type:Object,default:()=>({})},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},width:{type:Number,default:()=>null},height:{type:Number,default:()=>null},crossorigin:{type:String,default:()=>"anonymous"}},data(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{preparedPlaceholder(){return Object.assign({base64:void 0,url:void 0},this.placeholder)},hasSlot(){return this.$slots.caption}},mounted(){this.loading=!0},methods:{onLoad(e){this.loading=!1,this.$emit("load")},onPreload(){this.preloadedSources=this.sources}}},d=n(2),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("image-container",{staticClass:"nuxt-speedkit__speedkit-picture",attrs:{loading:e.loading},scopedSlots:e._u([{key:"default",fn:function(){return[n("picture",[e._l(e.preloadedSources,(function(source,t){return n("source",e._b({key:t},"source",source,!1))})),e._v(" "),n("custom-image",e._b({on:{load:e.onLoad,preload:e.onPreload}},"custom-image",{src:e.preparedPlaceholder.base64,preload:e.sources,width:e.width,height:e.height,alt:e.alt,title:e.title,crossorigin:e.crossorigin},!1))],2),e._v(" "),n("custom-no-script",[n("picture",[e._l(e.sources,(function(source,t){return n("source",e._b({key:t},"source",source,!1))})),e._v(" "),n("custom-image",e._b({on:{load:e.onLoad,preload:e.onPreload}},"custom-image",{src:e.preparedPlaceholder.url,width:e.width,height:e.height,alt:e.alt,title:e.title,crossorigin:e.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[e._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},141:function(e,t,n){var content=n(172);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("0fa1f91c",content,!0,{sourceMap:!1})},151:function(e,t,n){"use strict";var o=n(159),r=n.n(o);var l={components:{SpeedkitPicture:n(119).a},props:{id:{type:String,default:()=>""},poster:{type:Object,default:()=>({})}},data:()=>({ready:!1,playing:!1}),methods:{async onLoad(e){var t;await(t=this.$el,new Promise(e=>{const n=new IntersectionObserver(t=>{t.forEach(t=>{void 0===t.isVisible&&(t.isVisible=!0),t.isVisible&&(n.disconnect(),e())})},{threshold:[1],trackVisibility:!0,delay:350});n.observe(t)})),this.loadPlayer()},loadPlayer(e,t){const n=r()(this.$refs.youtube,{host:"https://www.youtube-nocookie.com",videoId:this.id,playerVars:{playsinline:1,modestbranding:1}});n.on("ready",e=>{this.ready=!0}),n.on("stateChange",e=>{1===e.data&&(this.playing=!0)})}}},c=(n(171),n(2)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nuxt-speedkit_speedkit-youtube",class:{ready:e.ready}},[n("div",{ref:"youtube",attrs:{loading:"lazy",width:e.poster.width,height:e.poster.height}}),e._v(" "),e.poster?n("button",{class:{playing:e.playing}},[n("speedkit-picture",e._b({on:{load:e.onLoad}},"speedkit-picture",e.poster,!1))],1):e._e()])}),[],!1,null,"4a75ebe6",null);t.a=component.exports},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=d(n(160)),l=d(n(161)),c=d(n(163));function d(e){return e&&e.__esModule?e:{default:e}}var f=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=(0,r.default)();if(f||(f=(0,l.default)(d)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=c.default.proxyEvents(d);var h=new Promise((function(n){"object"===(void 0===e?"undefined":o(e))&&e.playVideo instanceof Function?n(e):f.then((function(o){var r=new o.Player(e,t);return d.on("ready",(function(){n(r)})),null}))})),y=c.default.promisifyPlayer(h,n);return y.on=d.on,y.off=d.off,y},e.exports=t.default},160:function(e,t,n){"use strict";var o;o=function(){var e={},t={};return e.on=function(e,n){var o={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(o),o},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,data){var i,n=t[e];if(n)for(i=n.length;i--;)n[i].handler(data)},e},e.exports=o},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(162),l=(o=r)&&o.__esModule?o:{default:o};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,l.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){o&&o(),t(window.YT)}}}))},e.exports=t.default},162:function(e,t){function n(script,e){script.onload=function(){this.onerror=this.onload=null,e(null,script)},script.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),script)}}function o(script,e){script.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,script))}}e.exports=function(e,t,r){var head=document.head||document.getElementsByTagName("head")[0],script=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},script.type=t.type||"text/javascript",script.charset=t.charset||"utf8",script.async=!("async"in t)||!!t.async,script.src=e,t.attrs&&function(script,e){for(var t in e)script.setAttribute(t,e[t])}(script,t.attrs),t.text&&(script.text=""+t.text),("onload"in script?n:o)(script,r),script.onload||n(script,r),head.appendChild(script)}},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n(164)),r=d(n(167)),l=d(n(168)),c=d(n(169));function d(e){return e&&e.__esModule?e:{default:e}}var f=(0,o.default)("youtube-player"),h={proxyEvents:function(e){var t={},n=function(n){var o="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[o]=function(t){f('event "%s"',o,t),e.trigger(n,t)}},o=!0,r=!1,c=void 0;try{for(var d,h=l.default[Symbol.iterator]();!(o=(d=h.next()).done);o=!0){n(d.value)}}catch(e){r=!0,c=e}finally{try{!o&&h.return&&h.return()}finally{if(r)throw c}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},o=function(o){t&&c.default[o]?n[o]=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then((function(e){var t=c.default[o],r=e.getPlayerState(),l=e[o].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(r)?new Promise((function(n){e.addEventListener("onStateChange",(function o(){var r=e.getPlayerState(),l=void 0;"number"==typeof t.timeout&&(l=setTimeout((function(){e.removeEventListener("onStateChange",o),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(r)&&(e.removeEventListener("onStateChange",o),clearTimeout(l),n())}))})).then((function(){return l})):l}))}:n[o]=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then((function(e){return e[o].apply(e,n)}))}},l=!0,d=!1,f=void 0;try{for(var h,y=r.default[Symbol.iterator]();!(l=(h=y.next()).done);l=!0){var m=h.value;o(m)}}catch(e){d=!0,f=e}finally{try{!l&&y.return&&y.return()}finally{if(d)throw f}}return n}};t.default=h,e.exports=t.default},164:function(e,t,n){(function(o){function r(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==o&&"env"in o&&(e=o.env.DEBUG),e}(t=e.exports=n(165)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var r=0,l=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(l=r))})),e.splice(l,0,o)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(r())}).call(this,n(52))},165:function(e,t,n){var o;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,l=r-(o||r);e.diff=l,e.prev=o,e.curr=r,o=r;for(var c=new Array(arguments.length),i=0;i<c.length;i++)c[i]=arguments[i];c[0]=t.coerce(c[0]),"string"!=typeof c[0]&&c.unshift("%O");var d=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,(function(n,o){if("%%"===n)return n;d++;var r=t.formatters[o];if("function"==typeof r){var l=c[d];n=r.call(e,l),c.splice(d,1),d--}return n})),t.formatArgs.call(e,c);var f=n.log||t.log||console.log.bind(console);f.apply(e,c)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var i,n=0;for(i in e)n=(n<<5)-n+e.charCodeAt(i),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length,i=0;i<o;i++)n[i]&&("-"===(e=n[i].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var i,n;for(i=0,n=t.skips.length;i<n;i++)if(t.skips[i].test(e))return!1;for(i=0,n=t.names.length;i<n;i++)if(t.names[i].test(e))return!0;return!1},t.humanize=n(166),t.names=[],t.skips=[],t.formatters={}},166:function(e,t){var s=1e3,n=6e4,o=60*n,r=24*o;function l(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,d=typeof e;if("string"===d&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var l=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*l;case"days":case"day":case"d":return l*r;case"hours":case"hour":case"hrs":case"hr":case"h":return l*o;case"minutes":case"minute":case"mins":case"min":case"m":return l*n;case"seconds":case"second":case"secs":case"sec":case"s":return l*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}(e);if("number"===d&&!1===isNaN(e))return t.long?l(c=e,r,"day")||l(c,o,"hour")||l(c,n,"minute")||l(c,s,"second")||c+" ms":function(e){if(e>=r)return Math.round(e/r)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=s)return Math.round(e/s)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(170),l=(o=r)&&o.__esModule?o:{default:o};t.default={pauseVideo:{acceptableStates:[l.default.ENDED,l.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[l.default.ENDED,l.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[l.default.ENDED,l.default.PLAYING,l.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},171:function(e,t,n){"use strict";n(141)},172:function(e,t,n){(t=n(5)(!1)).push([e.i,"div[data-v-4a75ebe6]{position:relative;overflow:hidden}.nuxt-speedkit_speedkit-youtube[data-v-4a75ebe6] iframe{position:absolute;top:0;width:100%;height:100%}.nuxt-speedkit_speedkit-youtube button[data-v-4a75ebe6]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;padding:0;margin:0;overflow:visible;font-family:inherit;font-size:100%;line-height:1.15;text-transform:none;pointer-events:none;border:none;transition-duration:.35s;transition-property:transform;-webkit-appearance:button;-moz-appearance:button;appearance:button}.ready.nuxt-speedkit_speedkit-youtube button[data-v-4a75ebe6]{-webkit-mask-image:radial-gradient(50px at center,transparent 75%,#000 100%);mask-image:radial-gradient(50px at center,transparent 75%,#000 100%)}.nuxt-speedkit_speedkit-youtube button.playing[data-v-4a75ebe6]{transform:scale(20);transform-origin:center}",""]),e.exports=t}}]);