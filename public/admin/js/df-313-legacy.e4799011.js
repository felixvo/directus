(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-313","df-0","df-1","df-2","df-3","df-308","df-309","df-310","df-311","df-312"],{"0c3f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=n(a("4170"));function n(e){return e&&e.__esModule?e:{default:e}}var o=["nedeľu","pondelok","utorok","stredu","štvrtok","piatok","sobotu"];function u(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'minulú "+t+" o' p";default:return"'minulý' eeee 'o' p"}}function i(e){var t=o[e];return 4===e?"'vo' eeee 'o' p":"'v "+t+" o' p"}function d(e){var t=o[e];switch(e){case 0:case 4:case 6:return"'budúcu' "+t+" 'o' p";default:return"'budúci' eeee 'o' p"}}var l={lastWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?i(n):u(n)},yesterday:"'včera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?i(n):d(n)},other:"P"};function s(e,t,a,r){var n=l[e];return"function"===typeof n?n(t,a,r):n}e.exports=t.default},"1f21":function(e,t,a){"use strict";function r(e){return function(t){var a=t||{},r=a.width?String(a.width):e.defaultWidth,n=e.formats[r]||e.formats[e.defaultWidth];return n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},"2c21":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("9686")),n=o(a("b028"));function o(e){return e&&e.__esModule?e:{default:e}}var u=/^(\d+)\.?/i,i=/\d+/i,d={narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i},l={any:[/^pr/i,/^(po|n)/i]},s={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [šs]tvr[ťt]rok/i},f={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i},p={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[áa]j/i,/^j[úu]n/i,/^j[úu]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},m={narrow:/^[npusšp]/i,short:/^(ne|po|ut|st|št|pi|so)/i,abbreviated:/^(ne|po|ut|st|št|pi|so)/i,wide:/^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i},v={narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^š/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(št|stv)/i,/^pi/i,/^so/i]},h={narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i},b={any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[áa]no/i,afternoon:/^pop/i,evening:/^ve[čc]/i,night:/^(noc|v n\.)/i}},g={ordinalNumber:(0,r.default)({matchPattern:u,parsePattern:i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},w=g;t.default=w,e.exports=t.default},"2cfd":function(e,t,a){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},4170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=o(a("701a")),n=o(a("6068"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t,a){(0,n.default)(2,arguments);var o=(0,r.default)(e,a),u=(0,r.default)(t,a);return o.getTime()===u.getTime()}e.exports=t.default},"5aa6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(a("c551")),n=d(a("ca9a")),o=d(a("0c3f")),u=d(a("e7c1")),i=d(a("2c21"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"sk",formatDistance:r.default,formatLong:n.default,formatRelative:o.default,localize:u.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},s=l;t.default=s,e.exports=t.default},6068:function(e,t,a){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},"701a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=u(a("2cfd")),n=u(a("d8e8")),o=u(a("6068"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){(0,o.default)(1,arguments);var a=t||{},u=a.locale,i=u&&u.options&&u.options.weekStartsOn,d=null==i?0:(0,r.default)(i),l=null==a.weekStartsOn?d:(0,r.default)(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=(0,n.default)(e),f=s.getUTCDay(),c=(f<l?7:0)+f-l;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}e.exports=t.default},9686:function(e,t,a){"use strict";function r(e){return function(t,a){var r=String(t),n=a||{},o=r.match(e.matchPattern);if(!o)return null;var u=o[0],i=r.match(e.parsePattern);if(!i)return null;var d=e.valueCallback?e.valueCallback(i[0]):i[0];return d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:r.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},af039:function(e,t,a){"use strict";function r(e){return function(t,a){var r,n=a||{},o=n.context?String(n.context):"standalone";if("formatting"===o&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,i=n.width?String(n.width):u;r=e.formattingValues[i]||e.formattingValues[u]}else{var d=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[d]}var s=e.argumentCallback?e.argumentCallback(t):t;return r[s]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},b028:function(e,t,a){"use strict";function r(e){return function(t,a){var r=String(t),u=a||{},i=u.width,d=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],l=r.match(d);if(!l)return null;var s,f=l[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?o(c,(function(e){return e.test(f)})):n(c,(function(e){return e.test(f)})),s=e.valueCallback?e.valueCallback(s):s,s=u.valueCallback?u.valueCallback(s):s,{value:s,rest:r.slice(f.length)}}}function n(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function o(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},c551:function(e,t,a){"use strict";function r(e,t){return 1===t?e.one:t>=2&&t<=4?e.twoFour:e.other}function n(e,t,a){var n=r(e,t),o=n[a]||n;return o.replace("{{count}}",t)}function o(e){var t=["lessThan","about","over","almost"].filter((function(t){return!!e.match(new RegExp("^"+t))}));return t[0]}function u(e){var t="";return"almost"===e&&(t="takmer"),"about"===e&&(t="približne"),t.length>0?t+" ":""}function i(e){var t="";return"lessThan"===e&&(t="menej než"),"over"===e&&(t="viac než"),t.length>0?t+" ":""}function d(e){return e.charAt(0).toLowerCase()+e.slice(1)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var l={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sekúnd",past:"{{count}} sekundami",future:"{{count}} sekúnd"}},halfAMinute:{other:{regular:"pol minúty",past:"pol minútou",future:"pol minúty"}},xMinutes:{one:{regular:"minúta",past:"minútou",future:"minútu"},twoFour:{regular:"{{count}} minúty",past:"{{count}} minútami",future:"{{count}} minúty"},other:{regular:"{{count}} minút",past:"{{count}} minútami",future:"{{count}} minút"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodín",past:"{{count}} hodinami",future:"{{count}} hodín"}},xDays:{one:{regular:"deň",past:"dňom",future:"deň"},twoFour:{regular:"{{count}} dni",past:"{{count}} dňami",future:"{{count}} dni"},other:{regular:"{{count}} dní",past:"{{count}} dňami",future:"{{count}} dní"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};function s(e,t,a){a=a||{};var r=o(e)||"",s=d(e.substring(r.length)),f=l[s];return a.addSuffix?a.comparison>0?u(r)+"o "+i(r)+n(f,t,"future"):u(r)+"pred "+i(r)+n(f,t,"past"):u(r)+i(r)+n(f,t,"regular")}e.exports=t.default},ca9a:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("1f21"));function n(e){return e&&e.__esModule?e:{default:e}}var o={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. M. y",short:"d. M. y"},u={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},i={full:"{{date}}, {{time}}",long:"{{date}}, {{time}}",medium:"{{date}}, {{time}}",short:"{{date}} {{time}}"},d={date:(0,r.default)({formats:o,defaultWidth:"full"}),time:(0,r.default)({formats:u,defaultWidth:"full"}),dateTime:(0,r.default)({formats:i,defaultWidth:"full"})},l=d;t.default=l,e.exports=t.default},d8e8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(a("6068"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}e.exports=t.default},e7c1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("af039"));function n(e){return e&&e.__esModule?e:{default:e}}var o={narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]},u={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"]},i={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},d={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"]},l={narrow:["n","p","u","s","š","p","s"],short:["ne","po","ut","st","št","pi","so"],abbreviated:["ne","po","ut","st","št","pi","so"],wide:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},s={narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"ráno",afternoon:"popoludnie",evening:"večer",night:"noc"}},f={narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"ráno",afternoon:"popoludní",evening:"večer",night:"v noci"}};function c(e,t){var a=Number(e);return a+"."}var p={ordinalNumber:c,era:(0,r.default)({values:o}),quarter:(0,r.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:i,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"}),day:(0,r.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:s,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},m=p;t.default=m,e.exports=t.default}}]);
//# sourceMappingURL=df-313-legacy.e4799011.js.map