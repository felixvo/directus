(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-264","df-2","df-3"],{9686:function(a,t,e){"use strict";function r(a){return function(t,e){var r=String(t),i=e||{},n=r.match(a.matchPattern);if(!n)return null;var d=n[0],u=r.match(a.parsePattern);if(!u)return null;var l=a.valueCallback?a.valueCallback(u[0]):u[0];return l=i.valueCallback?i.valueCallback(l):l,{value:l,rest:r.slice(d.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,a.exports=t.default},b028:function(a,t,e){"use strict";function r(a){return function(t,e){var r=String(t),d=e||{},u=d.width,l=u&&a.matchPatterns[u]||a.matchPatterns[a.defaultMatchWidth],s=r.match(l);if(!s)return null;var f,o=s[0],c=u&&a.parsePatterns[u]||a.parsePatterns[a.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(c)?n(c,(function(a){return a.test(o)})):i(c,(function(a){return a.test(o)})),f=a.valueCallback?a.valueCallback(f):f,f=d.valueCallback?d.valueCallback(f):f,{value:f,rest:r.slice(o.length)}}}function i(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function n(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,a.exports=t.default},bd06:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(e("9686")),i=n(e("b028"));function n(a){return a&&a.__esModule?a:{default:a}}var d=/^(\d+)\.?/i,u=/\d+/i,l={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},s={any:[/^f/i,/^e/i]},f={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},o={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},m={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},v={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},h={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},b={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},p={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},P={ordinalNumber:(0,r.default)({matchPattern:d,parsePattern:u,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},g=P;t.default=g,a.exports=t.default}}]);
//# sourceMappingURL=df-264.b710053b.js.map