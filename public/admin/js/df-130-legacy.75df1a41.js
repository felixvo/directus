(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-130","df-0","df-1","df-125","df-126","df-127","df-128","df-129","df-2","df-3"],{"03df":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var u={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};function i(e,t,a,i){return u[e]}e.exports=t.default},"1df8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(a("1f21"));function i(e){return e&&e.__esModule?e:{default:e}}var n={full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},r={full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},l={full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},o={date:(0,u.default)({formats:n,defaultWidth:"full"}),time:(0,u.default)({formats:r,defaultWidth:"full"}),dateTime:(0,u.default)({formats:l,defaultWidth:"full"})},s=o;t.default=s,e.exports=t.default},"1f21":function(e,t,a){"use strict";function u(e){return function(t){var a=t||{},u=a.width?String(a.width):e.defaultWidth,i=e.formats[u]||e.formats[e.defaultWidth];return i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u,e.exports=t.default},"8fd4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a("9686")),i=n(a("b028"));function n(e){return e&&e.__esModule?e:{default:e}}var r=/^(\d+)(\.)/i,l=/\d+/i,o={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},s={any:[/^e/i,/^j/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},f={any:[/1/i,/2/i,/3/i,/4/i]},k={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},c={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},m={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},h={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},v={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},p={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},b={ordinalNumber:(0,u.default)({matchPattern:r,parsePattern:l,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},y=b;t.default=y,e.exports=t.default},9686:function(e,t,a){"use strict";function u(e){return function(t,a){var u=String(t),i=a||{},n=u.match(e.matchPattern);if(!n)return null;var r=n[0],l=u.match(e.parsePattern);if(!l)return null;var o=e.valueCallback?e.valueCallback(l[0]):l[0];return o=i.valueCallback?i.valueCallback(o):o,{value:o,rest:u.slice(r.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u,e.exports=t.default},"9dd5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(a("a91b")),i=o(a("1df8")),n=o(a("03df")),r=o(a("9e86")),l=o(a("8fd4"));function o(e){return e&&e.__esModule?e:{default:e}}var s={code:"fi",formatDistance:u.default,formatLong:i.default,formatRelative:n.default,localize:r.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},d=s;t.default=d,e.exports=t.default},"9e86":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(a("af039"));function i(e){return e&&e.__esModule?e:{default:e}}var n={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},r={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},l={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},o={narrow:l.narrow,abbreviated:l.abbreviated,wide:l.wide.map((function(e){return e+"ta"}))},s={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},d={narrow:s.narrow,short:s.short,abbreviated:s.abbreviated,wide:s.wide.map((function(e){return e+"na"}))},f={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}};function k(e){var t=Number(e);return t+"."}var c={ordinalNumber:k,era:(0,u.default)({values:n,defaultWidth:"wide"}),quarter:(0,u.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,u.default)({values:l,formattingValues:o,defaultWidth:"wide"}),day:(0,u.default)({values:s,formattingValues:d,defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:f,defaultWidth:"wide"})},m=c;t.default=m,e.exports=t.default},a91b:function(e,t,a){"use strict";function u(e){return e.replace(/sekuntia?/,"sekunnin")}function i(e){return e.replace(/minuuttia?/,"minuutin")}function n(e){return e.replace(/tuntia?/,"tunnin")}function r(e){return e.replace(/päivää?/,"päivän")}function l(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var s={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:u},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:u},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:i},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:i},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:n},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:n},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:r},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:l},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:l},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:o}};function d(e,t,a){a=a||{};var u=s[e],i=1===t?u.one:u.other.replace("{{count}}",t);return a.addSuffix?a.comparison>0?u.futureTense(i)+" kuluttua":i+" sitten":i}e.exports=t.default},af039:function(e,t,a){"use strict";function u(e){return function(t,a){var u,i=a||{},n=i.context?String(i.context):"standalone";if("formatting"===n&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,l=i.width?String(i.width):r;u=e.formattingValues[l]||e.formattingValues[r]}else{var o=e.defaultWidth,s=i.width?String(i.width):e.defaultWidth;u=e.values[s]||e.values[o]}var d=e.argumentCallback?e.argumentCallback(t):t;return u[d]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u,e.exports=t.default},b028:function(e,t,a){"use strict";function u(e){return function(t,a){var u=String(t),r=a||{},l=r.width,o=l&&e.matchPatterns[l]||e.matchPatterns[e.defaultMatchWidth],s=u.match(o);if(!s)return null;var d,f=s[0],k=l&&e.parsePatterns[l]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(k)?n(k,(function(e){return e.test(f)})):i(k,(function(e){return e.test(f)})),d=e.valueCallback?e.valueCallback(d):d,d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:u.slice(f.length)}}}function i(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=df-130-legacy.75df1a41.js.map