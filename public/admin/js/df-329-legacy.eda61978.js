(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-329","df-1"],{"955f":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=o(a("af039"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var n=Number(e);return String(n).concat(".")}var u={narrow:["pr.n.e.","AD"],abbreviated:["pr. Hr.","po. Hr."],wide:["Pre Hrista","Posle Hrista"]},d={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},i={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},l={narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},p={narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sre","čet","pet","sub"],abbreviated:["ned","pon","uto","sre","čet","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","sreda","četvrtak","petak","subota"]},m={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uveče",night:"noću"}},f={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uveče",night:"noću"}},v={ordinalNumber:r,era:(0,t.default)({values:u,defaultWidth:"wide"}),quarter:(0,t.default)({values:l,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,t.default)({values:d,defaultWidth:"wide",formattingValues:i,defaultFormattingWidth:"wide"}),day:(0,t.default)({values:p,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:f,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},g=v;n.default=g,e.exports=n.default},af039:function(e,n,a){"use strict";function t(e){return function(n,a){var t,o=a||{},r=o.context?String(o.context):"standalone";if("formatting"===r&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,d=o.width?String(o.width):u;t=e.formattingValues[d]||e.formattingValues[u]}else{var i=e.defaultWidth,l=o.width?String(o.width):e.defaultWidth;t=e.values[l]||e.values[i]}var p=e.argumentCallback?e.argumentCallback(n):n;return t[p]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=t,e.exports=n.default}}]);
//# sourceMappingURL=df-329-legacy.eda61978.js.map