(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-55","df-1"],{af03:function(e,t,a){"use strict";function d(e){return function(t,a){var d,i=a||{},n=i.context?String(i.context):"standalone";if("formatting"===n&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,m=i.width?String(i.width):r;d=e.formattingValues[m]||e.formattingValues[r]}else{var o=e.defaultWidth,l=i.width?String(i.width):e.defaultWidth;d=e.values[l]||e.values[o]}var u=e.argumentCallback?e.argumentCallback(t):t;return d[u]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d,e.exports=t.default},bf0a:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=i(a("af03"));function i(e){return e&&e.__esModule?e:{default:e}}var n={narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","després de Crist"]},r={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},m={narrow:["GN","FB","MÇ","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},o={narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},l={narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"}},u={narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}};function s(e,t){var a=Number(e),d=a%100;if(d>20||d<10)switch(d%10){case 1:return a+"r";case 2:return a+"n";case 3:return a+"r";case 4:return a+"t"}return a+"è"}var g={ordinalNumber:s,era:(0,d.default)({values:n,defaultWidth:"wide"}),quarter:(0,d.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,d.default)({values:m,defaultWidth:"wide"}),day:(0,d.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:l,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"})},f=g;t.default=f,e.exports=t.default}}]);
//# sourceMappingURL=df-55.7ab40b9b.js.map