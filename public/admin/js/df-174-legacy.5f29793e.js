(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-174","df-2","df-3"],{"1a1e":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("9686")),r=n(a("b028"));function n(e){return e&&e.__esModule?e:{default:e}}var s=/^(\d+)\.?/i,u=/\d+/i,l={narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i},d={narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/előtt/i,/(szerint|i. sz.)/i]},c={narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.év/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyedév/i},o={any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},f={narrow:/^[jfmaásond]|sz/i,abbreviated:/^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i},h={narrow:[/^j/i,/^f/i,/^m/i,/^a|á/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^már/i,/^áp/i,/^máj/i,/^jún/i,/^júl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},v={narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i},b={narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},p={any:/^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i},m={any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^éjf/i,noon:/^dé/i,morning:/reg/i,afternoon:/^délu\.?/i,evening:/es/i,night:/éjj/i}},P={ordinalNumber:(0,i.default)({matchPattern:s,parsePattern:u,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:b,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:p,defaultMatchWidth:"any",parsePatterns:m,defaultParseWidth:"any"})},z=P;t.default=z,e.exports=t.default},9686:function(e,t,a){"use strict";function i(e){return function(t,a){var i=String(t),r=a||{},n=i.match(e.matchPattern);if(!n)return null;var s=n[0],u=i.match(e.parsePattern);if(!u)return null;var l=e.valueCallback?e.valueCallback(u[0]):u[0];return l=r.valueCallback?r.valueCallback(l):l,{value:l,rest:i.slice(s.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},b028:function(e,t,a){"use strict";function i(e){return function(t,a){var i=String(t),s=a||{},u=s.width,l=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],d=i.match(l);if(!d)return null;var c,o=d[0],f=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(f)?n(f,(function(e){return e.test(o)})):r(f,(function(e){return e.test(o)})),c=e.valueCallback?e.valueCallback(c):c,c=s.valueCallback?s.valueCallback(c):c,{value:c,rest:i.slice(o.length)}}}function r(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default}}]);
//# sourceMappingURL=df-174-legacy.5f29793e.js.map