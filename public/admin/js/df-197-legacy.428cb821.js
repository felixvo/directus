(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-197","df-1"],{"914b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("af039"));function i(e){return e&&e.__esModule?e:{default:e}}var o={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["avanti Cristo","dopo Cristo"]},r={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},d={narrow:["G","F","M","A","M","G","L","A","S","O","N","D"],abbreviated:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],wide:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},m={narrow:["D","L","M","M","G","V","S"],short:["dom","lun","mar","mer","gio","ven","sab"],abbreviated:["dom","lun","mar","mer","gio","ven","sab"],wide:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},g={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"}},u={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"}};function l(e){var t=Number(e);return t+"º"}var f={ordinalNumber:l,era:(0,a.default)({values:o,defaultWidth:"wide"}),quarter:(0,a.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:d,defaultWidth:"wide"}),day:(0,a.default)({values:m,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:g,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"})},s=f;t.default=s,e.exports=t.default},af039:function(e,t,n){"use strict";function a(e){return function(t,n){var a,i=n||{},o=i.context?String(i.context):"standalone";if("formatting"===o&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):r;a=e.formattingValues[d]||e.formattingValues[r]}else{var m=e.defaultWidth,g=i.width?String(i.width):e.defaultWidth;a=e.values[g]||e.values[m]}var u=e.argumentCallback?e.argumentCallback(t):t;return a[u]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default}}]);
//# sourceMappingURL=df-197-legacy.428cb821.js.map