(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-151","df-0","df-1","df-146","df-147","df-148","df-149","df-150","df-2","df-3"],{1962:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n={lessThanXSeconds:{one:"હમણાં",other:"​આશરે {{count}} સેકંડ"},xSeconds:{one:"1 સેકંડ",other:"{{count}} સેકંડ"},halfAMinute:"અડધી મિનિટ",lessThanXMinutes:{one:"આ મિનિટ",other:"​આશરે {{count}} મિનિટ"},xMinutes:{one:"1 મિનિટ",other:"{{count}} મિનિટ"},aboutXHours:{one:"​આશરે 1 કલાક",other:"​આશરે {{count}} કલાક"},xHours:{one:"1 કલાક",other:"{{count}} કલાક"},xDays:{one:"1 દિવસ",other:"{{count}} દિવસ"},aboutXMonths:{one:"આશરે 1 મહિનો",other:"આશરે {{count}} મહિના"},xMonths:{one:"1 મહિનો",other:"{{count}} મહિના"},aboutXYears:{one:"આશરે 1 વર્ષ",other:"આશરે {{count}} વર્ષ"},xYears:{one:"1 વર્ષ",other:"{{count}} વર્ષ"},overXYears:{one:"1 વર્ષથી વધુ",other:"{{count}} વર્ષથી વધુ"},almostXYears:{one:"લગભગ 1 વર્ષ",other:"લગભગ {{count}} વર્ષ"}};function r(e,t,a){var r;return a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?r+"માં":r+" પહેલાં":r}e.exports=t.default},"1f21":function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},"7c733":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("9686")),r=i(a("b028"));function i(e){return e&&e.__esModule?e:{default:e}}var u=/^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i,o=/\d+/i,d={narrow:/^(ઈસપૂ|ઈસ)/i,abbreviated:/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,wide:/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i},l={any:[/^(ઈસપૂ|ઈસ)/i,/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i]},f={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](લો|જો|થો)? ત્રિમાસ/i},s={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[જાફેમાએમેજૂજુઓસઓનડિ]/i,abbreviated:/^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,wide:/^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i},h={narrow:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i],any:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i]},m={narrow:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,short:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,abbreviated:/^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,wide:/^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i},v={narrow:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i],any:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i]},b={narrow:/^(a|p|મ\.?|સ|બ|સાં|રા)/i,any:/^(a|p|મ\.?|સ|બ|સાં|રા)/i},p={any:{am:/^a/i,pm:/^p/i,midnight:/^મ\.?/i,noon:/^બ/i,morning:/સ/i,afternoon:/બ/i,evening:/સાં/i,night:/રા/i}},g={ordinalNumber:(0,n.default)({matchPattern:u,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},w=g;t.default=w,e.exports=t.default},9686:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var u=i[0],o=n.match(e.parsePattern);if(!o)return null;var d=e.valueCallback?e.valueCallback(o[0]):o[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:n.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},af039:function(e,t,a){"use strict";function n(e){return function(t,a){var n,r=a||{},i=r.context?String(r.context):"standalone";if("formatting"===i&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):u;n=e.formattingValues[o]||e.formattingValues[u]}else{var d=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[d]}var f=e.argumentCallback?e.argumentCallback(t):t;return n[f]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},b028:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),u=a||{},o=u.width,d=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],l=n.match(d);if(!l)return null;var f,s=l[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(c)?i(c,(function(e){return e.test(s)})):r(c,(function(e){return e.test(s)})),f=e.valueCallback?e.valueCallback(f):f,f=u.valueCallback?u.valueCallback(f):f,{value:f,rest:n.slice(s.length)}}}function r(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function i(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},be41:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var i={full:"EEEE, d MMMM, y",long:"d MMMM, y",medium:"d MMM, y",short:"d/M/yy"},u={full:"hh:mm:ss a zzzz",long:"hh:mm:ss a z",medium:"hh:mm:ss a",short:"hh:mm a"},o={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:(0,n.default)({formats:i,defaultWidth:"full"}),time:(0,n.default)({formats:u,defaultWidth:"full"}),dateTime:(0,n.default)({formats:o,defaultWidth:"full"})},l=d;t.default=l,e.exports=t.default},dede:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a("1962")),r=d(a("be41")),i=d(a("f1d9")),u=d(a("fb52")),o=d(a("7c733"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"gu",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},f=l;t.default=f,e.exports=t.default},f1d9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n={lastWeek:"'પાછલા' eeee p",yesterday:"'ગઈકાલે' p",today:"'આજે' p",tomorrow:"'આવતીકાલે' p",nextWeek:"eeee p",other:"P"};function r(e,t,a,r){return n[e]}e.exports=t.default},fb52:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("af039"));function r(e){return e&&e.__esModule?e:{default:e}}var i={narrow:["ઈસપૂ","ઈસ"],abbreviated:["ઈ.સ.પૂર્વે","ઈ.સ."],wide:["ઈસવીસન પૂર્વે","ઈસવીસન"]},u={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1લો ત્રિમાસ","2જો ત્રિમાસ","3જો ત્રિમાસ","4થો ત્રિમાસ"]},o={narrow:["જા","ફે","મા","એ","મે","જૂ","જુ","ઓ","સ","ઓ","ન","ડિ"],abbreviated:["જાન્યુ","ફેબ્રુ","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટે","ઓક્ટો","નવે","ડિસે"],wide:["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઇ","ઓગસ્ટ","સપ્ટેમ્બર","ઓક્ટોબર","નવેમ્બર","ડિસેમ્બર"]},d={narrow:["ર","સો","મં","બુ","ગુ","શુ","શ"],short:["ર","સો","મં","બુ","ગુ","શુ","શ"],abbreviated:["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],wide:["રવિવાર","સોમવાર","મંગળવાર","બુધવાર","ગુરુવાર","શુક્રવાર","શનિવાર"]},l={narrow:{am:"AM",pm:"PM",midnight:"મ.રાત્રિ",noon:"બ.",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},abbreviated:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},wide:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"}},f={narrow:{am:"AM",pm:"PM",midnight:"મ.રાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},abbreviated:{am:"AM",pm:"PM",midnight:"મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},wide:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"}};function s(e,t){var a=Number(e);return a}var c={ordinalNumber:s,era:(0,n.default)({values:i,defaultWidth:"wide"}),quarter:(0,n.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:o,defaultWidth:"wide"}),day:(0,n.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},h=c;t.default=h,e.exports=t.default}}]);
//# sourceMappingURL=df-151-legacy.a41caf93.js.map