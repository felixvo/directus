(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-155","df-1"],{af039:function(e,n,t){"use strict";function a(e){return function(n,t){var a,i=t||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):d;a=e.formattingValues[o]||e.formattingValues[d]}else{var u=e.defaultWidth,f=i.width?String(i.width):e.defaultWidth;a=e.values[f]||e.values[u]}var l=e.argumentCallback?e.argumentCallback(n):n;return a[l]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a,e.exports=n.default},c0a4:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("af039"));function i(e){return e&&e.__esModule?e:{default:e}}var r={narrow:["לפנה״ס","לספירה"],abbreviated:["לפנה״ס","לספירה"],wide:["לפני הספירה","לספירה"]},d={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["רבעון 1","רבעון 2","רבעון 3","רבעון 4"]},o={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],wide:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]},u={narrow:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],short:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],abbreviated:["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],wide:["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"]},f={narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"}},l={narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"בצהריים",evening:"בערב",night:"בלילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"}};function m(e,n){var t=Number(e);if(t<=0||t>10)return t;var a=n||{},i=String(a.unit),r=["year","hour","minute","second"].indexOf(i)>=0,d=["ראשון","שני","שלישי","רביעי","חמישי","שישי","שביעי","שמיני","תשיעי","עשירי"],o=["ראשונה","שנייה","שלישית","רביעית","חמישית","שישית","שביעית","שמינית","תשיעית","עשירית"],u=t-1;return r?o[u]:d[u]}var g={ordinalNumber:m,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:o,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:f,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},v=g;n.default=v,e.exports=n.default}}]);
//# sourceMappingURL=df-155-legacy.d9ab700d.js.map