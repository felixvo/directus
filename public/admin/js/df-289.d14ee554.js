(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-289","df-0","df-1","df-2","df-284","df-285","df-286","df-287","df-288","df-3"],{"1f21":function(e,a,t){"use strict";function n(e){return function(a){var t=a||{},n=t.width?String(t.width):e.defaultWidth,i=e.formats[n]||e.formats[e.defaultWidth];return i}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},"81d9":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t("9248")),i=u(t("f5a3")),r=u(t("c7ea")),o=u(t("aae9")),d=u(t("ccc7"));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"pt",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},m=s;a.default=m,e.exports=a.default},9248:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=i;var n={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXMonths:{one:"aproximadamente 1 mês",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};function i(e,a,t){var i;return t=t||{},i="string"===typeof n[e]?n[e]:1===a?n[e].one:n[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"daqui a "+i:"há "+i:i}e.exports=a.default},9686:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),i=t||{},r=n.match(e.matchPattern);if(!r)return null;var o=r[0],d=n.match(e.parsePattern);if(!d)return null;var u=e.valueCallback?e.valueCallback(d[0]):d[0];return u=i.valueCallback?i.valueCallback(u):u,{value:u,rest:n.slice(o.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},aae9:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t("af03"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e){var a=Number(e);return a+"º"}var o={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},d={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},u={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},s={narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","sáb"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},m={narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"}},l={narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},f={ordinalNumber:r,era:(0,n.default)({values:o,defaultWidth:"wide"}),quarter:(0,n.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:u,defaultWidth:"wide"}),day:(0,n.default)({values:s,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:m,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},c=f;a.default=c,e.exports=a.default},af03:function(e,a,t){"use strict";function n(e){return function(a,t){var n,i=t||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):o;n=e.formattingValues[d]||e.formattingValues[o]}else{var u=e.defaultWidth,s=i.width?String(i.width):e.defaultWidth;n=e.values[s]||e.values[u]}var m=e.argumentCallback?e.argumentCallback(a):a;return n[m]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},b028:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),o=t||{},d=o.width,u=d&&e.matchPatterns[d]||e.matchPatterns[e.defaultMatchWidth],s=n.match(u);if(!s)return null;var m,l=s[0],f=d&&e.parsePatterns[d]||e.parsePatterns[e.defaultParseWidth];return m="[object Array]"===Object.prototype.toString.call(f)?r(f,(function(e){return e.test(l)})):i(f,(function(e){return e.test(l)})),m=e.valueCallback?e.valueCallback(m):m,m=o.valueCallback?o.valueCallback(m):m,{value:m,rest:n.slice(l.length)}}}function i(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function r(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},c7ea:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=i;var n={lastWeek:"'na última' eeee 'às' p",yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"};function i(e,a,t,i){return n[e]}e.exports=a.default},ccc7:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("9686")),i=r(t("b028"));function r(e){return e&&e.__esModule?e:{default:e}}var o=/^(\d+)(º|ª)?/i,d=/\d+/i,u={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},s={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},m={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º|ª)? trimestre/i},l={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},c={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},h={narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,wide:/^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i},v={narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[áa]/i]},g={narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[ãa]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},p={ordinalNumber:(0,n.default)({matchPattern:o,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:g,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},w=p;a.default=w,e.exports=a.default},f5a3:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t("1f21"));function i(e){return e&&e.__esModule?e:{default:e}}var r={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},o={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},d={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,n.default)({formats:r,defaultWidth:"full"}),time:(0,n.default)({formats:o,defaultWidth:"full"}),dateTime:(0,n.default)({formats:d,defaultWidth:"full"})},s=u;a.default=s,e.exports=a.default}}]);
//# sourceMappingURL=df-289.d14ee554.js.map