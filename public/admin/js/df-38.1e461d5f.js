(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-38","df-2","df-3"],{5787:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("9686")),r=n(e("b028"));function n(t){return t&&t.__esModule?t:{default:t}}var u=/^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i,l=/\d+/i,d={narrow:/^((да )?н\.?\s?э\.?)/i,abbreviated:/^((да )?н\.?\s?э\.?)/i,wide:/^(да нашай эры|нашай эры|наша эра)/i},s={any:[/^д/i,/^н/i]},c={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыі]?)? кв.?/i,wide:/^[1234](-?[ыі]?)? квартал/i},f={any:[/1/i,/2/i,/3/i,/4/i]},o={narrow:/^[слкмчжв]/i,abbreviated:/^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i,wide:/^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i},h={narrow:[/^с/i,/^л/i,/^с/i,/^к/i,/^м/i,/^ч/i,/^л/i,/^ж/i,/^в/i,/^к/i,/^л/i,/^с/i],any:[/^ст/i,/^лю/i,/^са/i,/^кр/i,/^ма/i,/^ч/i,/^ліп/i,/^ж/i,/^в/i,/^ка/i,/^ліс/i,/^сн/i]},v={narrow:/^[нпасч]/i,short:/^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,abbreviated:/^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i,wide:/^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i},b={narrow:[/^н/i,/^п/i,/^а/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[ан]/i,/^а/i,/^с[ер]/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},P={narrow:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,abbreviated:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,wide:/^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i},p={any:{am:/^дп/i,pm:/^пп/i,midnight:/^поўн/i,noon:/^поўд/i,morning:/^р/i,afternoon:/^д[зн]/i,evening:/^в/i,night:/^н/i}},w={ordinalNumber:(0,i.default)({matchPattern:u,parsePattern:l,valueCallback:function(t){return parseInt(t,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:b,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"})},m=w;a.default=m,t.exports=a.default},9686:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),r=e||{},n=i.match(t.matchPattern);if(!n)return null;var u=n[0],l=i.match(t.parsePattern);if(!l)return null;var d=t.valueCallback?t.valueCallback(l[0]):l[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:i.slice(u.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,t.exports=a.default},b028:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),u=e||{},l=u.width,d=l&&t.matchPatterns[l]||t.matchPatterns[t.defaultMatchWidth],s=i.match(d);if(!s)return null;var c,f=s[0],o=l&&t.parsePatterns[l]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(o)?n(o,(function(t){return t.test(f)})):r(o,(function(t){return t.test(f)})),c=t.valueCallback?t.valueCallback(c):c,c=u.valueCallback?u.valueCallback(c):c,{value:c,rest:i.slice(f.length)}}}function r(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}function n(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,t.exports=a.default}}]);
//# sourceMappingURL=df-38.1e461d5f.js.map