(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-68","df-2","df-3"],{"67cd":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(t("9686")),i=n(t("b028"));function n(a){return a&&a.__esModule?a:{default:a}}var d=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,l=/\d+/i,u={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},h={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},s={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},c={any:[/1/i,/2/i,/3/i,/4/i]},o={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},f={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},y={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},m={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},w={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},b={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},v={ordinalNumber:(0,r.default)({matchPattern:d,parsePattern:l,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},P=v;e.default=P,a.exports=e.default},9686:function(a,e,t){"use strict";function r(a){return function(e,t){var r=String(e),i=t||{},n=r.match(a.matchPattern);if(!n)return null;var d=n[0],l=r.match(a.parsePattern);if(!l)return null;var u=a.valueCallback?a.valueCallback(l[0]):l[0];return u=i.valueCallback?i.valueCallback(u):u,{value:u,rest:r.slice(d.length)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,a.exports=e.default},b028:function(a,e,t){"use strict";function r(a){return function(e,t){var r=String(e),d=t||{},l=d.width,u=l&&a.matchPatterns[l]||a.matchPatterns[a.defaultMatchWidth],h=r.match(u);if(!h)return null;var s,c=h[0],o=l&&a.parsePatterns[l]||a.parsePatterns[a.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(o)?n(o,(function(a){return a.test(c)})):i(o,(function(a){return a.test(c)})),s=a.valueCallback?a.valueCallback(s):s,s=d.valueCallback?d.valueCallback(s):s,{value:s,rest:r.slice(c.length)}}}function i(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function n(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,a.exports=e.default}}]);
//# sourceMappingURL=df-68-legacy.e6e727e7.js.map