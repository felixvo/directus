(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-193","df-0","df-1","df-188","df-189","df-190","df-191","df-192","df-2","df-3"],{"0977":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r={lastWeek:"'síðasta' dddd 'kl.' p",yesterday:"'í gær kl.' p",today:"'í dag kl.' p",tomorrow:"'á morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"L"};function n(e,t,a,n){return r[e]}e.exports=t.default},"1f21":function(e,t,a){"use strict";function r(e){return function(t){var a=t||{},r=a.width?String(a.width):e.defaultWidth,n=e.formats[r]||e.formats[e.defaultWidth];return n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},3786:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("87b4")),n=o(a("c882")),i=o(a("0977")),u=o(a("6023")),d=o(a("d104"));function o(e){return e&&e.__esModule?e:{default:e}}var l={code:"is",formatDistance:r.default,formatLong:n.default,formatRelative:i.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},f=l;t.default=f,e.exports=t.default},6023:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("af039"));function n(e){return e&&e.__esModule?e:{default:e}}var i={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},u={narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fjórðungur","2. fjórðungur","3. fjórðungur","4. fjórðungur"]},d={narrow:["J","F","M","A","M","J","J","Á","S","Ó","N","D"],abbreviated:["jan.","feb.","mars","apríl","maí","júní","júlí","ágúst","sept.","okt.","nóv.","des."],wide:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},o={narrow:["S","M","Þ","M","F","F","L"],short:["Su","Má","Þr","Mi","Fi","Fö","La"],abbreviated:["sun.","mán.","þri.","mið.","fim.","fös.","lau"],wide:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"]},l={narrow:{am:"f",pm:"e",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"}},f={narrow:{am:"f",pm:"e",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"}};function s(e,t){var a=Number(e);return a+"."}var m={ordinalNumber:s,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:d,defaultWidth:"wide"}),day:(0,r.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},h=m;t.default=h,e.exports=t.default},"87b4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}};function n(e,t,a){var n;return a=a||{},n="string"===typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"í "+n:n+" síðan":n}e.exports=t.default},9686:function(e,t,a){"use strict";function r(e){return function(t,a){var r=String(t),n=a||{},i=r.match(e.matchPattern);if(!i)return null;var u=i[0],d=r.match(e.parsePattern);if(!d)return null;var o=e.valueCallback?e.valueCallback(d[0]):d[0];return o=n.valueCallback?n.valueCallback(o):o,{value:o,rest:r.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},af039:function(e,t,a){"use strict";function r(e){return function(t,a){var r,n=a||{},i=n.context?String(n.context):"standalone";if("formatting"===i&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,d=n.width?String(n.width):u;r=e.formattingValues[d]||e.formattingValues[u]}else{var o=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[o]}var f=e.argumentCallback?e.argumentCallback(t):t;return r[f]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},b028:function(e,t,a){"use strict";function r(e){return function(t,a){var r=String(t),u=a||{},d=u.width,o=d&&e.matchPatterns[d]||e.matchPatterns[e.defaultMatchWidth],l=r.match(o);if(!l)return null;var f,s=l[0],m=d&&e.parsePatterns[d]||e.parsePatterns[e.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(m)?i(m,(function(e){return e.test(s)})):n(m,(function(e){return e.test(s)})),f=e.valueCallback?e.valueCallback(f):f,f=u.valueCallback?u.valueCallback(f):f,{value:f,rest:r.slice(s.length)}}}function n(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function i(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},c882:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("1f21"));function n(e){return e&&e.__esModule?e:{default:e}}var i={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},u={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},d={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},o={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:u,defaultWidth:"full"}),dateTime:(0,r.default)({formats:d,defaultWidth:"full"})},l=o;t.default=l,e.exports=t.default},d104:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("9686")),n=i(a("b028"));function i(e){return e&&e.__esModule?e:{default:e}}var u=/^(\d+)(th|st|nd|rd)?/i,d=/\d+/i,o={narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},l={any:[/^(f\.Kr\.|e\.Kr\.)/i]},f={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234] fjórðungur/i},s={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmásónd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|februar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i},h={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^á/i,/^s/i,/^ó/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maí/i,/^jún/i,/^júl/i,/^áu/i,/^s/i,/^ó/i,/^n/i,/^d/i]},c={narrow:/^[smtwf]/i,short:/^(su|má|þr|mi|fi|fö|la)/i,abbreviated:/^(sun|mán|þri|mið|fim|fös|lau)\.?/i,wide:/^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i},g={narrow:[/^s/i,/^m/i,/^þ/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^má/i,/^þr/i,/^mi/i,/^fi/i,/^fö/i,/^la/i]},v={narrow:/^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,any:/^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i},b={any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^há/i,morning:/morgunn/i,afternoon:/síðdegi/i,evening:/kvöld/i,night:/nótt/i}},p={ordinalNumber:(0,r.default)({matchPattern:u,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},k=p;t.default=k,e.exports=t.default}}]);
//# sourceMappingURL=df-193-legacy.7f5ea118.js.map