(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-337","df-0","df-1","df-2","df-3","df-332","df-333","df-334","df-335","df-336"],{1593:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("9686")),r=i(a("b028"));function i(e){return e&&e.__esModule?e:{default:e}}var u=/^(\d+)(:a|:e)?/i,d=/\d+/i,l={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},o={any:[/^f/i,/^[ev]/i]},f={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},s={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},c={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},g={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tor|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},v={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},p={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},h={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},b={ordinalNumber:(0,n.default)({matchPattern:u,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:g,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:p,defaultMatchWidth:"any",parsePatterns:h,defaultParseWidth:"any"})},k=b;t.default=k,e.exports=t.default},"1f21":function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},"73c82":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var i={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},u={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},d={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},l={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tor","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},o={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},f={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}};function s(e){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:case 2:return t+":a"}return t+":e"}var m={ordinalNumber:s,era:(0,n.default)({values:i,defaultWidth:"wide"}),quarter:(0,n.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:d,defaultWidth:"wide"}),day:(0,n.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:o,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},c=m;t.default=c,e.exports=t.default},8367:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};function r(e,t,a,r){return n[e]}e.exports=t.default},8718:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("b818")),r=l(a("c4f0")),i=l(a("8367")),u=l(a("73c82")),d=l(a("1593"));function l(e){return e&&e.__esModule?e:{default:e}}var o={code:"sv",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},f=o;t.default=f,e.exports=t.default},9686:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var u=i[0],d=n.match(e.parsePattern);if(!d)return null;var l=e.valueCallback?e.valueCallback(d[0]):d[0];return l=r.valueCallback?r.valueCallback(l):l,{value:l,rest:n.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},af03:function(e,t,a){"use strict";function n(e){return function(t,a){var n,r=a||{},i=r.context?String(r.context):"standalone";if("formatting"===i&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):u;n=e.formattingValues[d]||e.formattingValues[u]}else{var l=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;n=e.values[o]||e.values[l]}var f=e.argumentCallback?e.argumentCallback(t):t;return n[f]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},b028:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),u=a||{},d=u.width,l=d&&e.matchPatterns[d]||e.matchPatterns[e.defaultMatchWidth],o=n.match(l);if(!o)return null;var f,s=o[0],m=d&&e.parsePatterns[d]||e.parsePatterns[e.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(m)?i(m,(function(e){return e.test(s)})):r(m,(function(e){return e.test(s)})),f=e.valueCallback?e.valueCallback(f):f,f=u.valueCallback?u.valueCallback(f):f,{value:f,rest:n.slice(s.length)}}}function r(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function i(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},b818:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n={lessThanXSeconds:{singular:"mindre än en sekund",plural:"mindre än {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre än en minut",plural:"mindre än {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungefär en timme",plural:"ungefär {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXMonths:{singular:"ungefär en månad",plural:"ungefär {{count}} månader"},xMonths:{singular:"en månad",plural:"{{count}} månader"},aboutXYears:{singular:"ungefär ett år",plural:"ungefär {{count}} år"},xYears:{singular:"ett år",plural:"{{count}} år"},overXYears:{singular:"över ett år",plural:"över {{count}} år"},almostXYears:{singular:"nästan ett år",plural:"nästan {{count}} år"}},r=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"];function i(e,t,a){a=a||{onlyNumeric:!1};var i,u=n[e];return i="string"===typeof u?u:0===t||t>1?a.onlyNumeric?u.plural.replace("{{count}}",t):u.plural.replace("{{count}}",t<13?r[t]:t):u.singular,a.addSuffix?a.comparison>0?"om "+i:i+" sedan":i}e.exports=t.default},c4f0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var i={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},u={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},d={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},l={date:(0,n.default)({formats:i,defaultWidth:"full"}),time:(0,n.default)({formats:u,defaultWidth:"full"}),dateTime:(0,n.default)({formats:d,defaultWidth:"full"})},o=l;t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=df-337.a9a967e0.js.map