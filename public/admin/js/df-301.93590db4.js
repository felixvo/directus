(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-301","df-0","df-1","df-2","df-296","df-297","df-298","df-299","df-3","df-300"],{"1f21":function(e,a,t){"use strict";function i(e){return function(a){var t=a||{},i=t.width?String(t.width):e.defaultWidth,n=e.formats[i]||e.formats[e.defaultWidth];return n}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,e.exports=a.default},"2f25":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var i={lessThanXSeconds:{one:"mai puțin de o secundă",other:"mai puțin de {{count}} secunde"},xSeconds:{one:"1 secundă",other:"{{count}} secunde"},halfAMinute:"jumătate de minut",lessThanXMinutes:{one:"mai puțin de un minut",other:"mai puțin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 oră",other:"circa {{count}} ore"},xHours:{one:"1 oră",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXMonths:{one:"circa 1 lună",other:"circa {{count}} luni"},xMonths:{one:"1 lună",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};function n(e,a,t){var n;return t=t||{},n="string"===typeof i[e]?i[e]:1===a?i[e].one:i[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"în "+n:n+" în urmă":n}e.exports=a.default},"4ef5":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("af03"));function n(e){return e&&e.__esModule?e:{default:e}}var r={narrow:["Î","D"],abbreviated:["Î.d.C.","D.C."],wide:["Înainte de Cristos","După Cristos"]},u={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},o={narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},d={narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","sâ"],abbreviated:["dum","lun","mar","mie","joi","vin","sâm"],wide:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"]},l={narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},s={narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}};function m(e){var a=Number(e);return String(a)}var f={ordinalNumber:m,era:(0,i.default)({values:r,defaultWidth:"wide"}),quarter:(0,i.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:o,defaultWidth:"wide"}),day:(0,i.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:l,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})},c=f;a.default=c,e.exports=a.default},"688b":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var i={lastWeek:"eeee 'trecută la' p",yesterday:"'ieri la' p",today:"'astăzi la' p",tomorrow:"'mâine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"};function n(e,a,t,n){return i[e]}e.exports=a.default},9686:function(e,a,t){"use strict";function i(e){return function(a,t){var i=String(a),n=t||{},r=i.match(e.matchPattern);if(!r)return null;var u=r[0],o=i.match(e.parsePattern);if(!o)return null;var d=e.valueCallback?e.valueCallback(o[0]):o[0];return d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:i.slice(u.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,e.exports=a.default},af03:function(e,a,t){"use strict";function i(e){return function(a,t){var i,n=t||{},r=n.context?String(n.context):"standalone";if("formatting"===r&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,o=n.width?String(n.width):u;i=e.formattingValues[o]||e.formattingValues[u]}else{var d=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;i=e.values[l]||e.values[d]}var s=e.argumentCallback?e.argumentCallback(a):a;return i[s]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,e.exports=a.default},af6c:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=d(t("2f25")),n=d(t("e978")),r=d(t("688b")),u=d(t("4ef5")),o=d(t("f8e6"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"ro",formatDistance:i.default,formatLong:n.default,formatRelative:r.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},s=l;a.default=s,e.exports=a.default},b028:function(e,a,t){"use strict";function i(e){return function(a,t){var i=String(a),u=t||{},o=u.width,d=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],l=i.match(d);if(!l)return null;var s,m=l[0],f=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(f)?r(f,(function(e){return e.test(m)})):n(f,(function(e){return e.test(m)})),s=e.valueCallback?e.valueCallback(s):s,s=u.valueCallback?u.valueCallback(s):s,{value:s,rest:i.slice(m.length)}}}function n(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function r(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,e.exports=a.default},e978:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("1f21"));function n(e){return e&&e.__esModule?e:{default:e}}var r={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},u={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},o={full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},d={date:(0,i.default)({formats:r,defaultWidth:"full"}),time:(0,i.default)({formats:u,defaultWidth:"full"}),dateTime:(0,i.default)({formats:o,defaultWidth:"full"})},l=d;a.default=l,e.exports=a.default},f8e6:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(t("9686")),n=r(t("b028"));function r(e){return e&&e.__esModule?e:{default:e}}var u=/^(\d+)?/i,o=/\d+/i,d={narrow:/^(Î|D)/i,abbreviated:/^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i},l={any:[/^ÎC/i,/^DC/i],wide:[/^(Înainte de Cristos|Înaintea erei noastre)/i,/^(După Cristos|Era noastră)/i]},s={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},m={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},c={narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},p={narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|sâ)/i,wide:/^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i},h={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},v={narrow:/^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/dimineaţa/i,afternoon:/după-amiaza/i,evening:/seara/i,night:/noaptea/i}},g={ordinalNumber:(0,i.default)({matchPattern:u,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},w=g;a.default=w,e.exports=a.default}}]);
//# sourceMappingURL=df-301.93590db4.js.map