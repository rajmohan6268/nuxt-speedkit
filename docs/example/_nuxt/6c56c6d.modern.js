(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t,n){"use strict";var o=n(98),r=n(99),l=n(97),c={components:{ImageContainer:o.a,CustomNoScript:r.a,CustomImage:l.a},props:{sources:{type:Array,default:()=>[]},placeholder:{type:Object,default:()=>({})},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},width:{type:Number,default:()=>null},height:{type:Number,default:()=>null},crossorigin:{type:String,default:()=>"anonymous"}},data(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{hasSlot(){return this.$slots.caption}},mounted(){this.loading=!0},methods:{onLoad(e){this.loading=!1,this.$emit("load")},onPreload(){this.preloadedSources=this.sources}}},h=n(2),component=Object(h.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("image-container",{staticClass:"nuxt-speedkit__lazy-picture",attrs:{loading:e.loading},scopedSlots:e._u([{key:"default",fn:function(){return[n("picture",[e._l(e.preloadedSources,(function(source,t){return n("source",e._b({key:t},"source",source,!1))})),e._v(" "),n("custom-image",e._b({on:{load:e.onLoad,preload:e.onPreload}},"custom-image",{src:e.placeholder.base64,preload:e.sources,width:e.width,height:e.height,alt:e.alt,title:e.title,crossorigin:e.crossorigin},!1))],2),e._v(" "),n("custom-no-script",[n("picture",[e._l(e.sources,(function(source,t){return n("source",e._b({key:t},"source",source,!1))})),e._v(" "),n("custom-image",e._b({on:{load:e.onLoad,preload:e.onPreload}},"custom-image",{src:e.placeholder.url,width:e.width,height:e.height,alt:e.alt,title:e.title,crossorigin:e.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[e._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},101:function(e,t,n){var o={src:n.p+"img/d05258f.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff4' d='M2320.3 2545.3l-65.6-1312.5L201.6 2245.3z'/%3E%3Cpath fill='%23411200' d='M-145.3 342.2l2203.1-225-2128.1 1425z'/%3E%3Cpath fill='%233d1500' d='M1307.8 1617.2l-581.2 9.4 881.2-1772z'/%3E%3Cpath fill='%23fce1a7' d='M192.2 1326.6l2025 946.8-1818.8 272z'/%3E%3Cpath fill='%233d1b00' d='M1701.6 51.6l-93.8 796.8L548.4 192.2z'/%3E%3Cpath fill='%23f0c688' d='M1636 192.2L2545.2 914l-178-1059.3z'/%3E%3Cpath fill='%23cb9e66' d='M267.2-145.3l1012.5 1378.1L89 417.2z'/%3E%3Cpath fill='%23703a05' d='M407.8 1167.2l562.5 581.2 956.3-478z'/%3E%3Cpath fill='%23250000' d='M342.2 632.8L-145.3 2161l9.4-1471.8z'/%3E%3Cpath fill='%23bd7c2a' d='M257.8 848.4l281.3 1697-684.4-234.5z'/%3E%3Cpath fill='%23bfc3b8' d='M2198.4 1148.4l-843.7-28 103.1-337.6z'/%3E%3Cpath fill='%23c98726' d='M1242.2 304.7L529.7 14l1256.2-159.4z'/%3E%3Cpath fill='%23efecc7' d='M811 2545.3l1256.2-196.9L2189 1101.6z'/%3E%3Cpath fill='%23aa6e2f' d='M1336 1720.3L1017.1 586l778.1 984.4z'/%3E%3Cpath fill='%2335220e' d='M1298.4 764l-628 56.3L1785.8-98.4z'/%3E%3Cpath fill='%23a3946f' d='M1720.3 857.8L548.4 1251.6l18.8-422z'/%3E%3Cpath fill='%23774505' d='M2545.3 1598.4l-140.6 825L2264 1017.2z'/%3E%3Cpath fill='%23e2ba7e' d='M154.7 1607.8l290.6 937.5 478.1-1050z'/%3E%3Cpath fill='%232d1304' d='M1551.6 1092.2l-75 496.9 215.6-422z'/%3E%3Cpath fill='%230a0000' d='M1007.8 1007.8l243.8 571.9-272-159.4z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};e.exports=o.preview,e.exports=Object.assign(e.exports,o)},103:function(e,t,n){e.exports={srcSet:n.p+"img/00b4f63-480.webp 480w,"+n.p+"img/7e328ce-768.webp 768w,"+n.p+"img/ff303bf-960.webp 960w,"+n.p+"img/011a37a-1080.webp 1080w,"+n.p+"img/104d21d-1200.webp 1200w,"+n.p+"img/dd4364f-1536.webp 1536w,"+n.p+"img/13f3ee4-2160.webp 2160w,"+n.p+"img/1ab22ac-2400.webp 2400w",images:[{path:n.p+"img/00b4f63-480.webp",width:480,height:480},{path:n.p+"img/7e328ce-768.webp",width:768,height:768},{path:n.p+"img/ff303bf-960.webp",width:960,height:960},{path:n.p+"img/011a37a-1080.webp",width:1080,height:1080},{path:n.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:n.p+"img/dd4364f-1536.webp",width:1536,height:1536},{path:n.p+"img/13f3ee4-2160.webp",width:2160,height:2160},{path:n.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:n.p+"img/00b4f63-480.webp",toString:function(){return n.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRv4CAABXRUJQVlA4IPICAACwDgCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTK4yZe18qDX144Odt1dx7vKsbg8JfCD6r/zst3dyoHuR1e8z3yYfVHAZIEC4jOSqdWagWrP2JEH2tHObHlZac17xTvvnD9/lEBCcDXrU93rlm9nLgmFzu1uYTMheExe6V1YAA/rhRXFitIlFiUnfkaCxMB3q4+H2j7FJ+uqIBzd2FZXmGQSKbFRJ/APHJXS3+FsIrYXnwsBXhXOqsm/5NcygWAwOy58pW699xO2dmMSRnZ2N66//InVKIsra0tRGQnBnLaG/894gtodAxr77KkJOtr6TMn4+NuQi7eG1E+Z/S67/4vDlI0rgpNxQHuaRpOpl0tUXLn/CP0bt52kUlFH9Fk+38XWsI/aTUyT6uVREShMkiN7Nzi1SiDDdyUBO5YKGVuyhPFO/eFPo46LzK8W7Nwvv3zV1yi1wh4v45wKfdOIv99JRk/eIM0++mOzdLuNY6kEb7F9jYvP58Mz5JfCHXsjqg3EDcXGkXqIrHFKRAxqau7Gk0p857vRKPIL1zaOEJrhyBfIwb3cc0aq431k7OvlFnencXCs+e+5WRS5b+3DBlG7c3AdIiR+OO79Dh8wLLkTujsGEvVvHAy737PA6fM7aYX3M5Rv7H7fMOhEWFcC/RWs9MhGBpf9sWi33oTjLpccFK2HIHa6t50dviHoVKHK7BJvewCErA2qbO61QqJQ1e3vdOHyRv3dtf2JCDtQ9+cSLYVfDi8bKvsr2K+M5PKwGS32rxAB/HDnxstsvlV+m1iudHoxO/s3NcHTpXckxiK0GrrsvPMLwR7tIrRbHtX85AJJ6JtZJYRwAz/asvVFCKPDoxcnPXbvIS7Nauu1EF4ZvidXkvq4oLI74sqIABKbyl6K3ohK9Xzktqq9kbS166PveR0OOTsKXxURZI0T2YWaBW9EQwbuVS3wXSsa38568I11ZSVat1YfwFO9HYoDbB8bYfF6UB8jqtFSrPPivwwAAA",width:480,height:480}},104:function(e,t,n){e.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/729de95-768.webp 768w,"+n.p+"img/b9f70ed-960.webp 960w,"+n.p+"img/0d8cbc2-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/5d6bf38-1536.webp 1536w,"+n.p+"img/ad67b53-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/729de95-768.webp",width:768,height:768},{path:n.p+"img/b9f70ed-960.webp",width:960,height:960},{path:n.p+"img/0d8cbc2-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/5d6bf38-1536.webp",width:1536,height:1536},{path:n.p+"img/ad67b53-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAAAQDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMoR2xI7sjVqiZQstuBzsummxubwX8Sa1izDNKVwoz/RUz/vUfsDim0At7R42LgSfd6INzWRVtjLzkthUEbyLx5q+1kdZeB3nGIBi6vPu3O4CwCEHk4QR79nPUSvngAAP756+GOs5Hd0r5vv8Lc/6iV7u8uAAZ/Sr9YDB6yB1HOWm+ZSg7bhxw6W2ddkIrCMjtHyz/UrOtqOZh5zI+F/y+uR+U4HSljRxbZbAWwMebwcikDV81VuiY3E3HjdoNeV+32aPjZA9rU++YsXzww7Ugp+r4nJetS6zFLhP//xRGjZFbFIi38G3RNZVmrJUX7y28NdbI+76ykfzeGZsR23TLLM355T+u6HjxqgiR+G+4sGhxmciK0zDC84fytRbT8pHmrKzE15x01PqJ5xSd5m0cuBgbpXIqe1030U1Tys1AGA5xNiaKlAUO6LYmkdLVVF8hWtclQbvUiqfpUI87dTwmLv8IcQuVlE5zQSuuN7MDwuX315gDrpEKQ256Be+i8TDGWya2+ZsneZS+J+95HvqYSHQsrpHj29ftNP1NZx+NPQjxvbrqWP/xLi42k7Cfnqd0EwxcTsW9ivBAnFBWc4oL5DsVO6OqHRZGOWXGcm3UIQBkvxB8qrJZ5qw8ac+UbJp5g05e6nSRT2GLvew+m6YneVGCIzLVIi3jB5C2cPa+HDs68xpbBiMsAao6t3SVSyT3CWVshNEDcJJkNChVHL4Xzz3C3rzv3N+sCitWxqdF59wYvAmSfF3kBMYFDlwE3CkBYDrC4SnpqiAH5LRVoSbcsfHHVkNHWZqKjnEOBCE79Y+M2tyGjtdvIdxEJ8UVGvKrJ7H642pNGijTAdmi9Iyv5PqnSszKI++MrdUWmPYZ4hTWCqFpf4/Sed8jWrMV+OnduLa41u4TDZWwyv9F3fT3PhGfFXdj7j5GCCr6mQEBy3hrs1sZK11OyuH9wIW3WRg3J8RgaLgus8M2++F1WTSIsu2LiFwmtVgHMg0yLcCSjQpIFeIcHvBufeLSxuQWpKVKwoMTHN5MjzCr/w2qtHSuP3Kqv3O2Y3hzgSZfEuDENNdBeGayFO55oYQVYrrDxAAAA",width:480,height:480}},106:function(e,t,n){e.exports={srcSet:n.p+"img/59e11e9-480.jpg 480w,"+n.p+"img/19da376-768.jpg 768w,"+n.p+"img/7b1d988-960.jpg 960w,"+n.p+"img/bd65a00-1080.jpg 1080w,"+n.p+"img/de250d4-1200.jpg 1200w,"+n.p+"img/d6672be-1536.jpg 1536w,"+n.p+"img/5d6c464-2160.jpg 2160w,"+n.p+"img/b17eca7-2400.jpg 2400w",images:[{path:n.p+"img/59e11e9-480.jpg",width:480,height:480},{path:n.p+"img/19da376-768.jpg",width:768,height:768},{path:n.p+"img/7b1d988-960.jpg",width:960,height:960},{path:n.p+"img/bd65a00-1080.jpg",width:1080,height:1080},{path:n.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:n.p+"img/d6672be-1536.jpg",width:1536,height:1536},{path:n.p+"img/5d6c464-2160.jpg",width:2160,height:2160},{path:n.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:n.p+"img/59e11e9-480.jpg",toString:function(){return n.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAACAQMDAgUDAwUAAAAAAAABAgMEBREAEiEGMQcUQVFhEyIyFXGRUoKhsdH/xAAZAQADAQEBAAAAAAAAAAAAAAADBAUGAQL/xAAgEQACAwACAwADAAAAAAAAAAABAgADEQQSISIxI0HB/9oADAMBAAIRAxEAPwDYsXU0MFrpoBMqSRyFXz/SSSM8j5/jU/8AEG+X2h6lhWzUzBZ843qRGT6kk8YI5yPbSt0f1Pdau4RVEdMklJC+ZN6BhuxheD++ny8U1deZ6KHyjMatgQ+5V2exAJHHYHHbPbWQUEEI42aggYWUxbm8VJ6aL6MGY6gHbuXBXOcHuNbfgbVXusvs1Xd2lqp6lBJHUSylvsPIVc/iBnt750m3bou9LHZ6iaiSKulUO9O5xJDI277WU+mVB/uOql0nYb305VpDUUsK0rVRijkZjlodqfTcd8AkkZPt86YFFVS/j+wJuZz7eJTKao3Vc+9XBXC/fwc9zn/GjSta6ypN0rKyeq+rHPtQD1VkyO/yMfxo1MvJLnYUAZI/4fdI3Gbo52SqFGs05d5F/IAAcAngfv6aaqa801uqPKGkoo5I4kiaOvnYxsyMSrrIoYlTk5UjnAwdPPh1RQPZVpCowhI599bvUXRNFf7a8Qp44a1AfpTxxorcj9v96Yo5D9y85yK1K9G+SD9L9Xz31LW9xjd6mnkWKVjwXVSdr47424Az6DVEh6nu94q7ikVE5jau8vGIaUkywJtZQJQ34FlwQF3cEZHfXak8KYKcJcq0yC7b1p2jjjOySEnG4hRwy5zntxjjvqr9JdH0nTtRF+ntN5Gng2U0MpO5WJyzH3JJJ01SbQ5YDAYLkGgVj9kfyTvqW0PbLLJe5aXytVLMhqVRNiliO+30PoTo08eKUKt0Tdg2WxTs/wA5HOjSt9evs90vqydeHl1j83W08bAJHNtB+ffVWtNQmQwG7PJJPc+2jRoVJxvELyFB2MVHIrKC6rkDvjXRnEalSePQ/wDdGjVhSeshso7ZJ/4rXKKPpu4whwoaAqze2eBo0aNJn2JJlRB1UAT/2Q==",width:480,height:480}},107:function(e,t,n){e.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/d4c360b-768.jpg 768w,"+n.p+"img/64541ee-960.jpg 960w,"+n.p+"img/ddae62c-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/100d05f-1536.jpg 1536w,"+n.p+"img/5a01275-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/d4c360b-768.jpg",width:768,height:768},{path:n.p+"img/64541ee-960.jpg",width:960,height:960},{path:n.p+"img/ddae62c-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/100d05f-1536.jpg",width:1536,height:1536},{path:n.p+"img/5a01275-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcGCAEEBQP/xAAuEAABAwMDAgUDBAMAAAAAAAABAgMEBREhAAYSMUETIlFhcQcUgSMyobEIFcH/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQACAwH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHLhbZ4lCQclXHpq5219rwKNt5xyXQU1ipTW4r70R1aAhbrSEBJBVhPGwycY99Vh+nuz5lf3fDpUBDTawrxS4+ohCEIIUokjJwLYznVgtyOz6q5/rYDs2l1RE3lFkoUrg6lGQu4xxPIgpPS3ew0op4gZkRgSx7AYs/wDKj7ym/VJNQPiqYkQ23I61J8iSkWLfIdci+c+b86V8qc8aCzLkJLsmU4pWeiUj09c30yPrttGswt1Rn6kpyXKnRErcfWvkVFJUnj5bJsBboAc51AK/Tpr8ONFaiOlDbQ4njbNz/GdD1lTV6C01TJRve00oVSMqSiK8tTZQLtKx0tkX/kfGjWYdIqbcZtyUy2wQvkoKV5lD/ujVqaKL2nciY9dmiFt/cBrUhspahsPuL4Ni9g2QbaaWzqhQ641Eq1NcUfuWgtCXCAQPjv36aU8CoIfq0cBgIQ++loNOq4+KpQPJIvjva/vrs7ZlO06rwktRTGR43FUdHXiSVCwNrEk3P51OXudPFh5+IK4JJMdO9Nrwt1beTT3iGnm/1Iz1r+Gq39HuNV2rNEeh1VyJIs2/GX4a0qBPmHf47399WMnTX3ZMcw57MVDQAfbUgL5Ej9pzcWuOnrqH/VihPPRI1fCEcwgNTfC6eiVj+vbGteY0M11FHUen1K0qhXtPmJRNGPI+WMu+QAjv8nRrsrUXHnCWrtk3C8gLt0HvjN9GkeZhN2nhsdMWRvSC67wS1GClgIJthJsbHAIxn4139syqLU6oinKkPKlsz0qjOc+TriAQLFXfp39dGjR3C1CgRRsSfaDNteb+/wCuSaduOIxTXHQzELBDbpJWpsp6KOSb9fwNS6sb6gKoyoT8ByY0+wlRKEck8TbBt0z3PS2jRo5q7hmHj9l8AbSA1SfttyG4+qCuPJZADamyf1VWI/acXI7i2jRo0kqVCTtNDP/Z",width:480,height:480}},114:function(e,t,n){var content=n(128);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("9e118aee",content,!0,{sourceMap:!1})},115:function(e,t,n){var content=n(135);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("66d12e0e",content,!0,{sourceMap:!1})},127:function(e,t,n){"use strict";n(114)},128:function(e,t,n){var o=n(6)(!1);o.push([e.i,'.component-stage[data-v-43bebef8]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-43bebef8]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-43bebef8]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-43bebef8]{font-size:40px;line-height:80px}}.component-stage[data-v-43bebef8] picture:before{display:block;padding-top:56.25%;content:""}.component-stage[data-v-43bebef8] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.component-stage h1[data-v-43bebef8]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-43bebef8]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}',""]),e.exports=o},129:function(e,t,n){var o={src:n.p+"img/43b68f6.jpg",preSrc:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAoACgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APsyw/YIi+Mv/BPDQfhX8NPiiyat+z5rh8bap4ct/D9gLzxNqPiLSPiJe+JPEMGt6c39oX89lb68f7HWa9isZdG8KWul3Vpdavb6M9x/PNaEs04MjnGCwuHrSw9PCZlicDUw3LipckZVcc41o0Jc0VhoQ5U43nToyp+1cnQpL9Kw+ZLDY+2IjXh7SNejQxKrPkp04XhRg6LeknXbqNpR5ZT9oouLqVH+XMP7B3iGOGKM/EiSQxxohka2SVpCihS7SvveRmxuLs7M5O5mYkk/mi4sy+y/4TMPsvt0V+HsVb0srdj2/rb61at+vuz36/bP2n+DWu65ongrwheaLrOq6ReL4js4lutL1G8sLkRv8ANdunjE9pNFKEe5u7q4ZA21p7m4mIMk0jN91wxiMRTyLCKnXrU1GtSpx5Ks4ctN8PYebpx5ZK0HOcpOK93mlKVrts+UowjUnWVSMZpUqLSmlJJ/WZq6TT1tGK9IxXRHCS3t5JJJJJd3Mkkju7u88rO7sxZndmcszMxJZiSSSSTmvzCbcpSlJttybbbu222223q23q29z7FUqVl+6p7L7Ef8j//Z",palette:["#64512d","#d9cebc","#a8a55c","#e5cda7","#605a09","#944414"]};e.exports=o.preSrc,e.exports=Object.assign(e.exports,o)},130:function(e,t,n){e.exports=(()=>{const e=n(131);return{sources:[{srcset:n(132).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(133)),width:e.width,height:e.height}})()},131:function(e,t,n){e.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},132:function(e,t,n){e.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},133:function(e,t,n){var o={src:n.p+"img/257cf22.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M1357.5 682.5l-1245 115-60-560z'/%3E%3Cpath fill='%23d0c6bf' d='M772.5-77.5l-840 380 1425-70z'/%3E%3Cpath fill='%23ff0' d='M107.5 797.5l-185-280 100-595z'/%3E%3Cpath fill='%23ffff78' d='M1077.5 407.5l280 200-90-685z'/%3E%3Cpath fill='%23150b1c' d='M1052.5 127.5l125 660-675-5z'/%3E%3Cpath fill='%23ff0' d='M1242.5 792.5l115-360-105-410z'/%3E%3Cpath fill='%238e8200' d='M152.5 672.5l-25-225 600 195z'/%3E%3Cpath fill='%23a5a69e' d='M947.5 422.5l-990-450 1005-50z'/%3E%3Cpath fill='%23ff0' d='M7.5 117.5l80 570-165 110z'/%3E%3Cpath fill='%23d7c2d5' d='M1257.5 87.5l-90 430-85-595z'/%3E%3Cpath fill='%230d0600' d='M1227.5 797.5l15-340-460 250z'/%3E%3Cpath fill='%23caba56' d='M102.5 72.5l450 10-340 265z'/%3E%3Cpath fill='%23221d1f' d='M42.5 192.5l610 345-605-95z'/%3E%3Cpath fill='%234b5067' d='M457.5 427.5l85-270 675 335z'/%3E%3Cpath fill='%23441e1a' d='M992.5 172.5l-20 320 185-290z'/%3E%3Cpath fill='%23fbe3da' d='M1112.5 477.5l115-290-150 160z'/%3E%3Cpath fill='%23ff0' d='M-77.5 37.5l125-85-25 535zm1435 450l-115-350 5 660z'/%3E%3Cpath fill='%2326190c' d='M137.5 577.5l760-5-205-200z'/%3E%3Cpath fill='%23c8b608' d='M522.5 497.5l-80 60-200-55z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=o.preview,e.exports=Object.assign(e.exports,o)},134:function(e,t,n){"use strict";n(115)},135:function(e,t,n){var o=n(6)(!1);o.push([e.i,".page-full-example-with-components[data-v-2d4c9496]{font-size:1.25em}.page-full-example-with-components>*[data-v-2d4c9496]{margin:25px 0}.page-full-example-with-components[data-v-2d4c9496]>:first-child{margin-top:0}.page-full-example-with-components[data-v-2d4c9496]>:last-child{margin-bottom:0}",""]),e.exports=o},170:function(e,t,n){"use strict";n.r(t);var o={components:{LazyPicture:n(100).a},props:{picture:{type:Object,default:()=>({})},headline:{type:String,default:()=>"Headline"},claim:{type:String,default:()=>"Claim"}}},r=(n(127),n(2)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-stage"},[n("lazy-picture",e._b({},"lazy-picture",e.picture,!1)),e._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),e.$fonts.getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $fonts.getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[e._v(e._s(e.headline))]),e._v(" "),n("span",{staticClass:"claim"},[e._v(e._s(e.claim))])])],1)}),[],!1,null,"43bebef8",null);t.default=component.exports},178:function(e,t,n){"use strict";n.r(t);var o={speedkitComponents:{ComponentStage:()=>Promise.resolve().then(n.bind(null,170)),ComponentLazyYoutube:()=>n.e(0).then(n.bind(null,113)),ComponentTextA:()=>n.e(2).then(n.bind(null,198)),ComponentTextImage:()=>n.e(32).then(n.bind(null,199)),ComponentTextB:()=>n.e(33).then(n.bind(null,200))},asyncData(){const e=n(103),t=n(106),o=n(101),r=n(104),l=n(107),c=n(129);return{contentA:"<p>This is a basic test with single font variant.</p>",stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:e.srcSet,type:"image/webp"},{srcset:t.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(o),width:t.width,height:t.height,alt:"Alt Text",title:"Title Text",caption:null}},youtubePlayer:{poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(130))},videoPlayer:{poster:{sources:[{srcset:e.srcSet,type:"image/webp"},{srcset:t.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(o),width:t.width,height:t.height,alt:"Alt Text",title:"Title Text",caption:null}},textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:r.srcSet,type:"image/webp"},{srcset:l.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(c),width:l.width,height:l.height,alt:"Alt Text",title:"Title Text",caption:null}},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"}}},methods:{onLoadFont(e){console.log("page: font loaded",e)}}},r=(n(134),n(2)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-full-example-with-components"},[n("component-stage",e._b({on:{"load:font":e.onLoadFont}},"component-stage",e.stage,!1)),e._v(" "),n("ComponentLazyYoutube",e._b({attrs:{id:String("cLKvbhfVBUU")}},"ComponentLazyYoutube",e.youtubePlayer,!1)),e._v(" "),n("component-text-a",e._b({on:{"load:font":e.onLoadFont}},"component-text-a",e.textA,!1)),e._v(" "),n("component-text-image",e._b({},"component-text-image",e.imageTextA,!1)),e._v(" "),n("component-text-b",e._b({},"component-text-b",e.textB,!1))],1)}),[],!1,null,"2d4c9496",null);t.default=component.exports},87:function(e,t,n){var content=n(92);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("0ca7e28f",content,!0,{sourceMap:!1})},88:function(e,t,n){var content=n(94);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("1c0f1833",content,!0,{sourceMap:!1})},89:function(e,t,n){"use strict";(function(e){let o;function r(){return o||(o=new Promise((t=>{const img=new e.Image;img.onload=()=>t(!0),img.onerror=()=>t(!1),img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),o}function l(element,t){let n={};return e.document&&(n=e.document.createElement(element)),t in n}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}))}).call(this,n(3))},90:function(e,t,n){var content=n(96);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("dba19a4e",content,!0,{sourceMap:!1})},91:function(e,t,n){"use strict";n(87)},92:function(e,t,n){var o=n(6)(!1);o.push([e.i,'.nuxt-speedkit__image-container[data-v-e23a632a]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),e.exports=o},93:function(e,t,n){"use strict";n(88)},94:function(e,t,n){var o=n(6)(!1);o.push([e.i,".nuxt-speedkit__noscript[data-v-fc27cbec]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),e.exports=o},95:function(e,t,n){"use strict";n(90)},96:function(e,t,n){var o=n(6)(!1);o.push([e.i,".nuxt-speedkit__custom-image[data-v-c1feaf18]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),e.exports=o},97:function(e,t,n){"use strict";var o=n(12),r=n(89),l=n(17);var c=n(10);const h=new class{constructor(){this.map=new Map}getEntry(e){return this.map.has(e)||this.map.set(e,new l.a),this.map.get(e)}};function d(e,t,n){const o=Object(c.a)(e.srcset),l=h.getEntry(o);return l.promise.then((()=>t())),Object(r.a)("link","imageSrcset")?{link:[A(e,o,l.resolve,n)]}:function(e,t,n){const img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,l.resolve,n)}function A(e,t,n,o){return{hid:t,rel:"preload",as:"image",crossorigin:o,callback:n,imageSrcset:e.srcset}}var m={props:{preload:{type:Array,default:()=>null},crossorigin:{type:String,default:()=>"anonymous"}},fetchOnServer:!1,data(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},async fetch(){this.webpSupport=await Object(r.b)()},head(){return this.preload&&this.visible&&this.preload&&this.preload.length?d((e=this.preload,this.webpSupport&&e.find((source=>"image/webp"===source.type))||e.find((source=>"image/webp"!==source.type))),(()=>this.onPreload()),this.crossorigin):{};var e},mounted(){Object(o.a)(this.$el,(()=>{this.visible=!0}))},destroyed(){Object(o.b)(this.$el)},methods:{onLoad(e){this.preloaded&&this.$emit("load",e.target)},onPreload(){this.preloaded=!0,this.$emit("preload")}}},w=(n(95),n(2)),component=Object(w.a)(m,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:e.crossorigin},on:{load:e.onLoad}})}),[],!1,null,"c1feaf18",null);t.a=component.exports},98:function(e,t,n){"use strict";var o={props:{loading:{type:Boolean,default:()=>!1}},computed:{hasSlot(){return this.$slots.caption}}},r=(n(91),n(2)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"nuxt-speedkit__image-container"},[e._t("default"),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"}),e._v(" "),e.hasSlot?n("figcaption",[e._t("caption")],2):e._e()],2)}),[],!1,null,"e23a632a",null);t.a=component.exports},99:function(e,t,n){"use strict";n(93);var o=n(2),component=Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,"fc27cbec",null);t.a=component.exports}}]);