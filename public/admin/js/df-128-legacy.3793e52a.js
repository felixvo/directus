(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-128","df-1"],{"9e86":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t("af039"));function n(a){return a&&a.__esModule?a:{default:a}}var u={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},r={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},l={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},o={narrow:l.narrow,abbreviated:l.abbreviated,wide:l.wide.map((function(a){return a+"ta"}))},d={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},s={narrow:d.narrow,short:d.short,abbreviated:d.abbreviated,wide:d.wide.map((function(a){return a+"na"}))},k={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}};function f(a){var e=Number(a);return e+"."}var m={ordinalNumber:f,era:(0,i.default)({values:u,defaultWidth:"wide"}),quarter:(0,i.default)({values:r,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,i.default)({values:l,formattingValues:o,defaultWidth:"wide"}),day:(0,i.default)({values:d,formattingValues:s,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:k,defaultWidth:"wide"})},v=m;e.default=v,a.exports=e.default},af039:function(a,e,t){"use strict";function i(a){return function(e,t){var i,n=t||{},u=n.context?String(n.context):"standalone";if("formatting"===u&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,l=n.width?String(n.width):r;i=a.formattingValues[l]||a.formattingValues[r]}else{var o=a.defaultWidth,d=n.width?String(n.width):a.defaultWidth;i=a.values[d]||a.values[o]}var s=a.argumentCallback?a.argumentCallback(e):e;return i[s]}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,a.exports=e.default}}]);
//# sourceMappingURL=df-128-legacy.3793e52a.js.map