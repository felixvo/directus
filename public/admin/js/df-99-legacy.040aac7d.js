(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-99","df-2","df-3"],{9686:function(a,t,e){"use strict";function n(a){return function(t,e){var n=String(t),i=e||{},r=n.match(a.matchPattern);if(!r)return null;var u=r[0],d=n.match(a.parsePattern);if(!d)return null;var l=a.valueCallback?a.valueCallback(d[0]):d[0];return l=i.valueCallback?i.valueCallback(l):l,{value:l,rest:n.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,a.exports=t.default},b028:function(a,t,e){"use strict";function n(a){return function(t,e){var n=String(t),u=e||{},d=u.width,l=d&&a.matchPatterns[d]||a.matchPatterns[a.defaultMatchWidth],o=n.match(l);if(!o)return null;var s,f=o[0],c=d&&a.parsePatterns[d]||a.parsePatterns[a.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?r(c,(function(a){return a.test(f)})):i(c,(function(a){return a.test(f)})),s=a.valueCallback?a.valueCallback(s):s,s=u.valueCallback?u.valueCallback(s):s,{value:s,rest:n.slice(f.length)}}}function i(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function r(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,a.exports=t.default},b7a2:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(e("9686")),i=r(e("b028"));function r(a){return a&&a.__esModule?a:{default:a}}var u=/^(\d+)(th|st|nd|rd)?/i,d=/\d+/i,l={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},o={any:[/^b/i,/^(a|c)/i]},s={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},h={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},m={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},b={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},v={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},p={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,n.default)({matchPattern:u,parsePattern:d,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:b,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},w=y;t.default=w,a.exports=t.default}}]);
//# sourceMappingURL=df-99-legacy.040aac7d.js.map