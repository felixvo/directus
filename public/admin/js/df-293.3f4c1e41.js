(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-293","df-1"],{af03:function(e,a,t){"use strict";function n(e){return function(a,t){var n,i=t||{},d=i.context?String(i.context):"standalone";if("formatting"===d&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var m=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;n=e.values[u]||e.values[m]}var f=e.argumentCallback?e.argumentCallback(a):a;return n[f]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},f7d6:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t("af03"));function i(e){return e&&e.__esModule?e:{default:e}}var d={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},r={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},o={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},m={narrow:["do","2ª","3ª","4ª","5ª","6ª","sá"],short:["do","2ª","3ª","4ª","5ª","6ª","sá"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda","terça","quarta","quinta","sexta","sábado"]},u={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},f={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}};function l(e,a){var t=Number(e),n=a||{},i=String(n.unit);return"week"===i||"isoWeek"===i?t+"ª":t+"º"}var s={ordinalNumber:l,era:(0,n.default)({values:d,defaultWidth:"wide"}),quarter:(0,n.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:o,defaultWidth:"wide"}),day:(0,n.default)({values:m,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:u,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},g=s;a.default=g,e.exports=a.default}}]);
//# sourceMappingURL=df-293.3f4c1e41.js.map