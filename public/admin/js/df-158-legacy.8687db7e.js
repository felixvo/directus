(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-158","df-1","df-161"],{3057:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=u;var o=a(t("cee0"));function a(e){return e&&e.__esModule?e:{default:e}}var r={lessThanXSeconds:{one:"१ सेकंड से कम",other:"{{count}} सेकंड से कम"},xSeconds:{one:"१ सेकंड",other:"{{count}} सेकंड"},halfAMinute:"आधा मिनट",lessThanXMinutes:{one:"१ मिनट से कम",other:"{{count}} मिनट से कम"},xMinutes:{one:"१ मिनट",other:"{{count}} मिनट"},aboutXHours:{one:"लगभग १ घंटा",other:"लगभग {{count}} घंटे"},xHours:{one:"१ घंटा",other:"{{count}} घंटे"},xDays:{one:"१ दिन",other:"{{count}} दिन"},aboutXMonths:{one:"लगभग १ महीना",other:"लगभग {{count}} महीने"},xMonths:{one:"१ महीना",other:"{{count}} महीने"},aboutXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"},xYears:{one:"१ वर्ष",other:"{{count}} वर्ष"},overXYears:{one:"१ वर्ष से अधिक",other:"{{count}} वर्ष से अधिक"},almostXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"}};function u(e,n,t){var a;return t=t||{},a="string"===typeof r[e]?r[e]:1===n?r[e].one:r[e].other.replace("{{count}}",o.default.numberToLocale(n)),t.addSuffix?t.comparison>0?a+"मे ":a+" पहले":a}e.exports=n.default},af039:function(e,n,t){"use strict";function o(e){return function(n,t){var o,a=t||{},r=a.context?String(a.context):"standalone";if("formatting"===r&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):u;o=e.formattingValues[i]||e.formattingValues[u]}else{var d=e.defaultWidth,l=a.width?String(a.width):e.defaultWidth;o=e.values[l]||e.values[d]}var c=e.argumentCallback?e.argumentCallback(n):n;return o[c]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o,e.exports=n.default},cee0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("af039"));function a(e){return e&&e.__esModule?e:{default:e}}var r={locale:{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},number:{"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}},u={narrow:["ईसा-पूर्व","ईस्वी"],abbreviated:["ईसा-पूर्व","ईस्वी"],wide:["ईसा-पूर्व","ईसवी सन"]},i={narrow:["1","2","3","4"],abbreviated:["ति1","ति2","ति3","ति4"],wide:["पहली तिमाही","दूसरी तिमाही","तीसरी तिमाही","चौथी तिमाही"]},d={narrow:["ज","फ़","मा","अ","मई","जू","जु","अग","सि","अक्तू","न","दि"],abbreviated:["जन","फ़र","मार्च","अप्रैल","मई","जून","जुल","अग","सित","अक्तू","नव","दिस"],wide:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्तूबर","नवंबर","दिसंबर"]},l={narrow:["र","सो","मं","बु","गु","शु","श"],short:["र","सो","मं","बु","गु","शु","श"],abbreviated:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],wide:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]},c={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},f={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}};function s(e){var n=g.localeToNumber(e),t=g.numberToLocale(n),o=n%10;switch(o){case 2:case 3:case 4:case 6:case 1:case 5:case 7:case 8:case 9:case 0:return t}}function h(e){var n=e.toString().replace(/[१२३४५६७८९०]/g,(function(e){return r.number[e]}));return Number(n)}function m(e){return e.toString().replace(/\d/g,(function(e){return r.locale[e]}))}var g={localeToNumber:h,numberToLocale:m,ordinalNumber:s,era:(0,o.default)({values:u,defaultWidth:"wide"}),quarter:(0,o.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:d,defaultWidth:"wide"}),day:(0,o.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:c,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},v=g;n.default=v,e.exports=n.default}}]);
//# sourceMappingURL=df-158-legacy.8687db7e.js.map