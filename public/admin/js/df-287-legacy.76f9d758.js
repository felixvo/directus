(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-287","df-1"],{aae9:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("af039"));function n(e){return e&&e.__esModule?e:{default:e}}function d(e){var a=Number(e);return a+"º"}var r={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},o={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},u={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},m={narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","sáb"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},f={narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"}},s={narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},g={ordinalNumber:d,era:(0,i.default)({values:r,defaultWidth:"wide"}),quarter:(0,i.default)({values:o,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:u,defaultWidth:"wide"}),day:(0,i.default)({values:m,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:f,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})},l=g;a.default=l,e.exports=a.default},af039:function(e,a,t){"use strict";function i(e){return function(a,t){var i,n=t||{},d=n.context?String(n.context):"standalone";if("formatting"===d&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=n.width?String(n.width):r;i=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,m=n.width?String(n.width):e.defaultWidth;i=e.values[m]||e.values[u]}var f=e.argumentCallback?e.argumentCallback(a):a;return i[f]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,e.exports=a.default}}]);
//# sourceMappingURL=df-287-legacy.76f9d758.js.map