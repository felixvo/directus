(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-63","df-0","df-1","df-2","df-3","df-58","df-59","df-60","df-61","df-62"],{"1f21":function(e,t,n){"use strict";function a(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default},"5e7f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("b028")),r=o(n("9686"));function o(e){return e&&e.__esModule?e:{default:e}}var u=/^(\d+)\.?/i,i=/\d+/i,d={narrow:/^(p[řr]ed Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pe[řr]ed Kr\.|pe[řr]ed n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr]ed Kristem|pred na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},l={any:[/^p[řr]/i,/^(po|n)/i]},p={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},c={any:[/1/i,/2/i,/3/i,/4/i]},s={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},f={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},m={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},v={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^ut/i,/^st/i,/^[čc]t/i,/^p/i,/^so/i]},b={any:/^dopoledne|dop\.?|odpoledne|odp\.?|půlnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci/i},h={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},y={ordinalNumber:(0,r.default)({matchPattern:u,parsePattern:i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:h,defaultParseWidth:"any"})},g=y;t.default=g,e.exports=t.default},6152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var o={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d.M.yyyy",short:"d.M.yy"},u={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},i={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},d={date:(0,a.default)({formats:o,defaultWidth:"full"}),time:(0,a.default)({formats:u,defaultWidth:"full"}),dateTime:(0,a.default)({formats:i,defaultWidth:"full"})},l=d;t.default=l,e.exports=t.default},"76f8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n("cdd4")),r=d(n("6152")),o=d(n("ada3")),u=d(n("a3cb")),i=d(n("5e7f"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"cs",formatDistance:a.default,formatLong:r.default,formatRelative:o.default,localize:u.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},p=l;t.default=p,e.exports=t.default},9686:function(e,t,n){"use strict";function a(e){return function(t,n){var a=String(t),r=n||{},o=a.match(e.matchPattern);if(!o)return null;var u=o[0],i=a.match(e.parsePattern);if(!i)return null;var d=e.valueCallback?e.valueCallback(i[0]):i[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:a.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default},a3cb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var o={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},u={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},i={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},d={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},l={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},p={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},c={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}};function s(e){var t=Number(e);return t+"."}var f={ordinalNumber:s,era:(0,a.default)({values:o,defaultWidth:"wide"}),quarter:(0,a.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:i,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"}),day:(0,a.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:p,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"})},m=f;t.default=m,e.exports=t.default},ada3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],r={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:function(e,t,n){var r=e.getUTCDay();return"'v "+a[r]+" o' p"},other:"P"};function o(e,t,n,a){var o=r[e];return"function"===typeof o?o(t,n,a):o}e.exports=t.default},af03:function(e,t,n){"use strict";function a(e){return function(t,n){var a,r=n||{},o=r.context?String(r.context):"standalone";if("formatting"===o&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):u;a=e.formattingValues[i]||e.formattingValues[u]}else{var d=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;a=e.values[l]||e.values[d]}var p=e.argumentCallback?e.argumentCallback(t):t;return a[p]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default},b028:function(e,t,n){"use strict";function a(e){return function(t,n){var a=String(t),u=n||{},i=u.width,d=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],l=a.match(d);if(!l)return null;var p,c=l[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return p="[object Array]"===Object.prototype.toString.call(s)?o(s,(function(e){return e.test(c)})):r(s,(function(e){return e.test(c)})),p=e.valueCallback?e.valueCallback(p):p,p=u.valueCallback?u.valueCallback(p):p,{value:p,rest:a.slice(c.length)}}}function r(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function o(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default},cdd4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a={lessThanXSeconds:{one:{regular:"méně než vteřina",past:"před méně než vteřinou",future:"za méně než vteřinu"},few:{regular:"méně než {{count}} vteřiny",past:"před méně než {{count}} vteřinami",future:"za méně než {{count}} vteřiny"},many:{regular:"méně než {{count}} vteřin",past:"před méně než {{count}} vteřinami",future:"za méně než {{count}} vteřin"}},xSeconds:{one:{regular:"vteřina",past:"před vteřinou",future:"za vteřinu"},few:{regular:"{{count}} vteřiny",past:"před {{count}} vteřinami",future:"za {{count}} vteřiny"},many:{regular:"{{count}} vteřin",past:"před {{count}} vteřinami",future:"za {{count}} vteřin"}},halfAMinute:{other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než minuta",past:"před méně než minutou",future:"za méně než minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"minuta",past:"před minutou",future:"za minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně hodina",past:"přibližně před hodinou",future:"přibližně za hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"hodina",past:"před hodinou",future:"za hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"den",past:"před dnem",future:"za den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXMonths:{one:{regular:"přibližně měsíc",past:"přibližně před měsícem",future:"přibližně za měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"měsíc",past:"před měsícem",future:"za měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně rok",past:"přibližně před rokem",future:"přibližně za rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"rok",past:"před rokem",future:"za rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než rok",past:"před více než rokem",future:"za více než rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro rok",past:"skoro před rokem",future:"skoro za rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}};function r(e,t,n){n=n||{};var r,o=a[e];r="object"===typeof o.other?"other":1===t?"one":t>1&&t<5||0===t?"few":"many";var u,i=!0===n.addSuffix,d=n.comparison;return u=i&&-1===d?"past":i&&1===d?"future":"regular",o[r][u].replace("{{count}}",t)}e.exports=t.default}}]);
//# sourceMappingURL=df-63.1ee8e94b.js.map