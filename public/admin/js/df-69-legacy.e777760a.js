(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-69","df-0","df-1","df-2","df-3","df-64","df-65","df-66","df-67","df-68"],{"1d05":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t("f013")),r=u(t("7619")),d=u(t("2e3f")),i=u(t("5fd8")),o=u(t("67cd"));function u(e){return e&&e.__esModule?e:{default:e}}var l={code:"cy",formatDistance:n.default,formatLong:r.default,formatRelative:d.default,localize:i.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},s=l;a.default=s,e.exports=a.default},"1f21":function(e,a,t){"use strict";function n(e){return function(a){var t=a||{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},"2e3f":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var n={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"};function r(e,a,t,r){return n[e]}e.exports=a.default},"5fd8":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("af039"));function r(e){return e&&e.__esModule?e:{default:e}}var d={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},i={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},o={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},u={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},l={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},s={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}};function f(e,a){var t=Number(e);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||80===t||t>=100)return t+"fed";return t+"ain"}var h={ordinalNumber:f,era:(0,n.default)({values:d,defaultWidth:"wide"}),quarter:(0,n.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:o,defaultWidth:"wide"}),day:(0,n.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})},c=h;a.default=c,e.exports=a.default},"67cd":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=d(t("9686")),r=d(t("b028"));function d(e){return e&&e.__esModule?e:{default:e}}var i=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,o=/\d+/i,u={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},l={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},s={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},f={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},c={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},y={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},m={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},w={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},b={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},g={ordinalNumber:(0,n.default)({matchPattern:i,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},v=g;a.default=v,e.exports=a.default},7619:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var d={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},i={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},o={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,n.default)({formats:d,defaultWidth:"full"}),time:(0,n.default)({formats:i,defaultWidth:"full"}),dateTime:(0,n.default)({formats:o,defaultWidth:"full"})},l=u;a.default=l,e.exports=a.default},9686:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),r=t||{},d=n.match(e.matchPattern);if(!d)return null;var i=d[0],o=n.match(e.parsePattern);if(!o)return null;var u=e.valueCallback?e.valueCallback(o[0]):o[0];return u=r.valueCallback?r.valueCallback(u):u,{value:u,rest:n.slice(i.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},af039:function(e,a,t){"use strict";function n(e){return function(a,t){var n,r=t||{},d=r.context?String(r.context):"standalone";if("formatting"===d&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[u]}var s=e.argumentCallback?e.argumentCallback(a):a;return n[s]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},b028:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),i=t||{},o=i.width,u=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],l=n.match(u);if(!l)return null;var s,f=l[0],h=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(h)?d(h,(function(e){return e.test(f)})):r(h,(function(e){return e.test(f)})),s=e.valueCallback?e.valueCallback(s):s,s=i.valueCallback?i.valueCallback(s):s,{value:s,rest:n.slice(f.length)}}}function r(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function d(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},f013:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var n={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 funud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",other:"{{count}} diwrnod"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}};function r(e,a,t){var r;return t=t||{},r="string"===typeof n[e]?n[e]:1===a?n[e].one:2===a&&n[e].two?n[e].two:n[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"mewn "+r:r+" yn ôl":r}e.exports=a.default}}]);
//# sourceMappingURL=df-69-legacy.e777760a.js.map