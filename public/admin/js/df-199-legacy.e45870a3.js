(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-199","df-0","df-1","df-194","df-195","df-196","df-197","df-198","df-2","df-3"],{"1f21":function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth,i=e.formats[n]||e.formats[e.defaultWidth];return i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},"55a4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n={lastWeek:"eeee 'scorso alle' p",yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:"eeee 'alle' p",other:"P"};function i(e,t,a,i){return n[e]}e.exports=t.default},8666:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a("e18d")),i=u(a("ed62")),o=u(a("55a4")),r=u(a("914b")),d=u(a("b65b"));function u(e){return e&&e.__esModule?e:{default:e}}var l={code:"it",formatDistance:n.default,formatLong:i.default,formatRelative:o.default,localize:r.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},s=l;t.default=s,e.exports=t.default},"914b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("af039"));function i(e){return e&&e.__esModule?e:{default:e}}var o={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["avanti Cristo","dopo Cristo"]},r={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},d={narrow:["G","F","M","A","M","G","L","A","S","O","N","D"],abbreviated:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],wide:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},u={narrow:["D","L","M","M","G","V","S"],short:["dom","lun","mar","mer","gio","ven","sab"],abbreviated:["dom","lun","mar","mer","gio","ven","sab"],wide:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},l={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"}},s={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"}};function m(e){var t=Number(e);return t+"º"}var f={ordinalNumber:m,era:(0,n.default)({values:o,defaultWidth:"wide"}),quarter:(0,n.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:d,defaultWidth:"wide"}),day:(0,n.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})},c=f;t.default=c,e.exports=t.default},9686:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),i=a||{},o=n.match(e.matchPattern);if(!o)return null;var r=o[0],d=n.match(e.parsePattern);if(!d)return null;var u=e.valueCallback?e.valueCallback(d[0]):d[0];return u=i.valueCallback?i.valueCallback(u):u,{value:u,rest:n.slice(r.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},af039:function(e,t,a){"use strict";function n(e){return function(t,a){var n,i=a||{},o=i.context?String(i.context):"standalone";if("formatting"===o&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):r;n=e.formattingValues[d]||e.formattingValues[r]}else{var u=e.defaultWidth,l=i.width?String(i.width):e.defaultWidth;n=e.values[l]||e.values[u]}var s=e.argumentCallback?e.argumentCallback(t):t;return n[s]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},b028:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},d=r.width,u=d&&e.matchPatterns[d]||e.matchPatterns[e.defaultMatchWidth],l=n.match(u);if(!l)return null;var s,m=l[0],f=d&&e.parsePatterns[d]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(f)?o(f,(function(e){return e.test(m)})):i(f,(function(e){return e.test(m)})),s=e.valueCallback?e.valueCallback(s):s,s=r.valueCallback?r.valueCallback(s):s,{value:s,rest:n.slice(m.length)}}}function i(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function o(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},b65b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("9686")),i=o(a("b028"));function o(e){return e&&e.__esModule?e:{default:e}}var r=/^(\d+)(º)?/i,d=/\d+/i,u={narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},l={any:[/^a/i,/^(d|e)/i]},s={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},m={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},c={narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},g={narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},h={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},v={narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},p={ordinalNumber:(0,n.default)({matchPattern:r,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:g,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},M=p;t.default=M,e.exports=t.default},e18d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"più di un anno",other:"più di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};function i(e,t,a){var i;return a=a||{},i="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"tra "+i:i+" fa":i}e.exports=t.default},ed62:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("1f21"));function i(e){return e&&e.__esModule?e:{default:e}}var o={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},r={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},d={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,n.default)({formats:o,defaultWidth:"full"}),time:(0,n.default)({formats:r,defaultWidth:"full"}),dateTime:(0,n.default)({formats:d,defaultWidth:"full"})},l=u;t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=df-199-legacy.e45870a3.js.map