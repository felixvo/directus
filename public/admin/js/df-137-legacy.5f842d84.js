(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-137","df-0","df-1","df-131","df-132","df-133","df-135","df-136","df-2","df-3"],{"1f21":function(e,t,a){"use strict";function i(e){return function(t){var a=t||{},i=a.width?String(a.width):e.defaultWidth,r=e.formats[i]||e.formats[e.defaultWidth];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},"2ca03":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(a("f730")),r=o(a("aea1")),n=o(a("bbdf")),u=o(a("5d00")),d=o(a("c035"));function o(e){return e&&e.__esModule?e:{default:e}}var s={code:"fr",formatDistance:i.default,formatLong:r.default,formatRelative:n.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},l=s;t.default=l,e.exports=t.default},"5d00":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("af039"));function r(e){return e&&e.__esModule?e:{default:e}}var n={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},u={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},d={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},o={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},s={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}};function l(e,t){var a,i=Number(e),r=t||{},n=String(r.unit);return 0===i?i:(a="year"===n||"hour"===n||"week"===n?1===i?"ère":"ème":1===i?"er":"ème",i+a)}var f={ordinalNumber:l,era:(0,i.default)({values:n,defaultWidth:"wide"}),quarter:(0,i.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:d,defaultWidth:"wide"}),day:(0,i.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:s,defaultWidth:"wide"})},m=f;t.default=m,e.exports=t.default},9686:function(e,t,a){"use strict";function i(e){return function(t,a){var i=String(t),r=a||{},n=i.match(e.matchPattern);if(!n)return null;var u=n[0],d=i.match(e.parsePattern);if(!d)return null;var o=e.valueCallback?e.valueCallback(d[0]):d[0];return o=r.valueCallback?r.valueCallback(o):o,{value:o,rest:i.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},aea1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var n={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},u={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},d={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o={date:(0,i.default)({formats:n,defaultWidth:"full"}),time:(0,i.default)({formats:u,defaultWidth:"full"}),dateTime:(0,i.default)({formats:d,defaultWidth:"full"})},s=o;t.default=s,e.exports=t.default},af039:function(e,t,a){"use strict";function i(e){return function(t,a){var i,r=a||{},n=r.context?String(r.context):"standalone";if("formatting"===n&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):u;i=e.formattingValues[d]||e.formattingValues[u]}else{var o=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;i=e.values[s]||e.values[o]}var l=e.argumentCallback?e.argumentCallback(t):t;return i[l]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},b028:function(e,t,a){"use strict";function i(e){return function(t,a){var i=String(t),u=a||{},d=u.width,o=d&&e.matchPatterns[d]||e.matchPatterns[e.defaultMatchWidth],s=i.match(o);if(!s)return null;var l,f=s[0],m=d&&e.parsePatterns[d]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(m)?n(m,(function(e){return e.test(f)})):r(m,(function(e){return e.test(f)})),l=e.valueCallback?e.valueCallback(l):l,l=u.valueCallback?u.valueCallback(l):l,{value:l,rest:i.slice(f.length)}}}function r(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},bbdf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"};function r(e,t,a,r){return i[e]}e.exports=t.default},c035:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("9686")),r=n(a("b028"));function n(e){return e&&e.__esModule?e:{default:e}}var u=/^(\d+)(ième|ère|ème|er|e)?/i,d=/\d+/i,o={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},s={any:[/^av/i,/^ap/i]},l={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](er|ème|e)? trimestre/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},c={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},v={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},h={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},p={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},M={ordinalNumber:(0,i.default)({matchPattern:u,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:p,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},w=M;t.default=w,e.exports=t.default},f730:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}};function r(e,t,a){var r;return a=a||{},r="string"===typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"dans "+r:"il y a "+r:r}e.exports=t.default}}]);
//# sourceMappingURL=df-137-legacy.5f842d84.js.map