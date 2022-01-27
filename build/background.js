!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=23)}({1:function(t,e,n){"use strict";function r(t){var e="string"==typeof t?t.charCodeAt(0):t;return e>=97&&e<=122||e>=65&&e<=90}function a(t){var e="string"==typeof t?t.charCodeAt(0):t;return e>=48&&e<=57}function o(t){return r(t)||a(t)}n.d(e,"a",(function(){return u}));var s=["art-lojban","cel-gaulish","no-bok","no-nyn","zh-guoyu","zh-hakka","zh-min","zh-min-nan","zh-xiang"],i={"en-gb-oed":"en-GB-oxendict","i-ami":"ami","i-bnn":"bnn","i-default":null,"i-enochian":null,"i-hak":"hak","i-klingon":"tlh","i-lux":"lb","i-mingo":null,"i-navajo":"nv","i-pwn":"pwn","i-tao":"tao","i-tay":"tay","i-tsu":"tsu","sgn-be-fr":"sfb","sgn-be-nl":"vgt","sgn-ch-de":"sgg","art-lojban":"jbo","cel-gaulish":null,"no-bok":"nb","no-nyn":"nn","zh-guoyu":"cmn","zh-hakka":"hak","zh-min":null,"zh-min-nan":"nan","zh-xiang":"hsn"},l={}.hasOwnProperty;var c={useTooltip:"true",useTTS:"false",translateWhen:"mouseoverselect",translateSource:"auto",translateTarget:function t(e,n){var c,u,h,g=n||{},d={language:null,extendedLanguageSubtags:[],script:null,region:null,variants:[],extensions:[],privateuse:[],irregular:null,regular:null},f=String(e),p=f.toLowerCase(),m=0;if(null==e)throw new Error("Expected string, got `"+e+"`");if(l.call(i,p))return(void 0===g.normalize||null===g.normalize||g.normalize)&&i[p]?t(i[p]):(d[s.includes(p)?"regular":"irregular"]=f,d);for(;r(p.charCodeAt(m))&&m<9;)m++;if(m>1&&m<9){if(d.language=f.slice(0,m),m<4)for(u=0;45===p.charCodeAt(m)&&r(p.charCodeAt(m+1))&&r(p.charCodeAt(m+2))&&r(p.charCodeAt(m+3))&&!r(p.charCodeAt(m+4));){if(u>2)return y(m,3,"Too many extended language subtags, expected at most 3 subtags");d.extendedLanguageSubtags.push(f.slice(m+1,m+4)),m+=4,u++}for(45===p.charCodeAt(m)&&r(p.charCodeAt(m+1))&&r(p.charCodeAt(m+2))&&r(p.charCodeAt(m+3))&&r(p.charCodeAt(m+4))&&!r(p.charCodeAt(m+5))&&(d.script=f.slice(m+1,m+5),m+=5),45===p.charCodeAt(m)&&(r(p.charCodeAt(m+1))&&r(p.charCodeAt(m+2))&&!r(p.charCodeAt(m+3))?(d.region=f.slice(m+1,m+3),m+=3):a(p.charCodeAt(m+1))&&a(p.charCodeAt(m+2))&&a(p.charCodeAt(m+3))&&!a(p.charCodeAt(m+4))&&(d.region=f.slice(m+1,m+4),m+=4));45===p.charCodeAt(m);){for(h=c=m+1;o(p.charCodeAt(h));){if(h-c>7)return y(h,1,"Too long variant, expected at most 8 characters");h++}if(!(h-c>4||h-c>3&&a(p.charCodeAt(c))))break;d.variants.push(f.slice(c,h)),m=h}for(;45===p.charCodeAt(m)&&120!==p.charCodeAt(m+1)&&o(p.charCodeAt(m+1))&&45===p.charCodeAt(m+2)&&o(p.charCodeAt(m+3));){for(h=m+2,u=0;45===p.charCodeAt(h)&&o(p.charCodeAt(h+1))&&o(p.charCodeAt(h+2));)for(h=(c=h+1)+2,u++;o(p.charCodeAt(h));){if(h-c>7)return y(h,2,"Too long extension, expected at most 8 characters");h++}if(!u)return y(h,4,"Empty extension, extensions must have at least 2 characters of content");d.extensions.push({singleton:f.charAt(m+1),extensions:f.slice(m+3,h).split("-")}),m=h}}else m=0;if(0===m&&120===p.charCodeAt(m)||45===p.charCodeAt(m)&&120===p.charCodeAt(m+1))for(h=m=m?m+2:1;45===p.charCodeAt(h)&&o(p.charCodeAt(h+1));){for(h=c=m+1;o(p.charCodeAt(h));){if(h-c>7)return y(h,5,"Too long private-use area, expected at most 8 characters");h++}d.privateuse.push(f.slice(m+1,h)),m=h}return m!==f.length?y(m,6,"Found superfluous content after tag"):d;function y(t,e,n){return g.warning&&g.warning(n,e,t),g.forgiving?d:{language:null,extendedLanguageSubtags:[],script:null,region:null,variants:[],extensions:[],privateuse:[],irregular:null,regular:null}}}(navigator.language).language,translatorVendor:"google",keyDownTooltip:"null",keyDownTTS:"null",detectType:"sentence",translateReverseTarget:"null",tooltipFontSize:"14",tooltipWidth:"200",detectPDF:"true",useOCR:"false",ocrDetectionLang:"jpn_vert",historyList:[],historyRecordActions:[]};function u(){return new Promise((t,e)=>{chrome.storage.local.get(Object.keys(c),(function(e){var n={};for(var r in c)e[r]?n[r]=e[r]:n[r]=c[r];t(n)}))})}},23:function(t,e,n){"use strict";n.r(e);var r=n(1),a={},o=!1,s={auto:"auto-detect",af:"af",am:"am",ar:"ar",az:"az",bg:"bg",bs:"bs",ca:"ca",cs:"cs",cy:"cy",da:"da",de:"de",el:"el",en:"en",es:"es",et:"et",fa:"fa",fi:"fi",fr:"fr",ga:"ga",gu:"gu",hi:"hi",hmn:"mww",hr:"hr",ht:"ht",hu:"hu",hy:"hy",id:"id",is:"is",it:"it",iw:"he",ja:"ja",kk:"kk",km:"km",kn:"kn",ko:"ko",ku:"ku",lo:"lo",lt:"lt",lv:"lv",mg:"mg",mi:"mi",ml:"ml",mr:"mr",ms:"ms",mt:"mt",my:"my",ne:"ne",nl:"nl",no:"nb",pa:"pa",pl:"pl",ps:"ps",pt:"pt",ro:"ro",ru:"ru",sk:"sk",sl:"sl",sm:"sm",sq:"sq",sr:"sr-Cyrl",sv:"sv",sw:"sw",ta:"ta",te:"te",th:"th",tl:"fil",tr:"tr",uk:"uk",ur:"ur",vi:"vi","zh-cn":"zh-Hans","zh-tw":"zh-Hant"};var i=function(t){var e={};for(var n in t)e[t[n]]=n;return e}(s);function l(t){chrome.storage.local.set(t,(function(){a=t}))}async function c(){a=await Object(r.a)(),o=!0}let u;c(),chrome.runtime.onMessage.addListener((function(t,e,n){return(async()=>{0==o&&await c(),"translate"===t.type?async function(t,e){var n,r,o="",l="";try{if("google"==a.translatorVendor)n="https://clients5.google.com/translate_a/single?dj=1&dt=t&dt=sp&dt=ld&dt=bd&client=dict-chrome-ex&",r={q:t.word,sl:a.translateSource,tl:t.translateTarget};else{n="https://www.bing.com/ttranslatev3?isVertical=1&&";const{token:e,key:o,IG:i,IID:l}=await async function(){try{if(!u||Date.now()-u.tokenTs>u.tokenExpiryInterval){const t=await fetch("https://www.bing.com/translator").then(t=>t.text()),e=t.match(/IG:"([^"]+)"/)[1],n=t.match(/data-iid="([^"]+)"/)[1],[r,a,o,s,i]=JSON.parse(t.match(/params_RichTranslateHelper\s?=\s?([^\]]+\])/)[1]);u={IG:e,IID:n,key:r,token:a,tokenTs:r,tokenExpiryInterval:o,isAuthv2:void 0,count:0}}return u}catch(t){console.log(t)}}();r={text:t.word,fromLang:s[a.translateSource],to:s[t.translateTarget],token:e,key:o,IG:i,IID:l&&l.length?l+"."+u.count++:""}}const c=await fetch(n+new URLSearchParams(r),{method:"POST"}).then(t=>t.json());"google"==a.translatorVendor?(c.sentences&&c.sentences.forEach((function(t){t.trans&&(l+=t.trans)})),o=c.src):(o=i[c[0].detectedLanguage.language],l=c[0].translations[0].text),e({translatedText:l,sourceLang:o,targetLang:t.translateTarget})}catch(n){console.log(n),e({translatedText:"",sourceLang:"en",targetLang:t.translateTarget})}}(t,n):"tts"===t.type?(!async function(t,e){var n=await function(t){return new Promise(e=>{h[t]?e(h[t]):chrome.tts.getVoices(n=>{let r=n.filter(t=>null!=t.remote&&null!=t.lang&&null!=t.voiceName);for(var a of(r.sort((t,e)=>e.remote-t.remote),r))if(a.lang.toLowerCase().includes(t.toLowerCase())){h[t]=a.voiceName,e(h[t]);break}})})}(e);chrome.tts.speak(t,{lang:e,voiceName:n})}(t.word,t.lang),n({})):"stopTTS"===t.type?(chrome.tts.stop(),n({})):"saveSetting"===t.type?(l(t.options),n({})):"recordHistory"===t.type&&(!function(t){a.historyList.unshift({sourceText:t.sourceText,targetText:t.targetText}),a.historyList.length>100&&a.historyList.pop();l(a)}(t),n({}))})(),!0}));var h={}}});
//# sourceMappingURL=background.js.map