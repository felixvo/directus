(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-204","df-2","df-3"],{9686:function(t,a,e){"use strict";function r(t){return function(a,e){var r=String(a),n=e||{},i=r.match(t.matchPattern);if(!i)return null;var u=i[0],l=r.match(t.parsePattern);if(!l)return null;var d=t.valueCallback?t.valueCallback(l[0]):l[0];return d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:r.slice(u.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=r,t.exports=a.default},b028:function(t,a,e){"use strict";function r(t){return function(a,e){var r=String(a),u=e||{},l=u.width,d=l&&t.matchPatterns[l]||t.matchPatterns[t.defaultMatchWidth],c=r.match(d);if(!c)return null;var f,s=c[0],o=l&&t.parsePatterns[l]||t.parsePatterns[t.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(o)?i(o,(function(t){return t.test(s)})):n(o,(function(t){return t.test(s)})),f=t.valueCallback?t.valueCallback(f):f,f=u.valueCallback?u.valueCallback(f):f,{value:f,rest:r.slice(s.length)}}}function n(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}function i(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}Object.defineProperty(a,"__esModule",{value:!0}),a.default=r,t.exports=a.default},c857:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(e("9686")),n=i(e("b028"));function i(t){return t&&t.__esModule?t:{default:t}}var u=/^第?\d+(日)?/i,l=/\d+/i,d={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},c={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},f={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},s={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},o={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},h={any:[/^1/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},P={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},v={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},b={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},p={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},w={ordinalNumber:(0,r.default)({matchPattern:u,parsePattern:l,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},y=w;a.default=y,t.exports=a.default}}]);
//# sourceMappingURL=df-204-legacy.565e0782.js.map