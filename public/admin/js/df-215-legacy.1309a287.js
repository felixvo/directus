(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-215","df-1"],{af039:function(t,e,a){"use strict";function n(t){return function(e,a){var n,i=a||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&t.formattingValues){var d=t.defaultFormattingWidth||t.defaultWidth,o=i.width?String(i.width):d;n=t.formattingValues[o]||t.formattingValues[d]}else{var u=t.defaultWidth,l=i.width?String(i.width):t.defaultWidth;n=t.values[l]||t.values[u]}var f=t.argumentCallback?t.argumentCallback(e):e;return n[f]}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,t.exports=e.default},dc9f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("af039"));function i(t){return t&&t.__esModule?t:{default:t}}var r={narrow:["б.з.д.","б.з."],abbreviated:["б.з.д.","б.з."],wide:["біздің заманымызға дейін","біздің заманымыз"]},d={narrow:["1","2","3","4"],abbreviated:["1-ші тоқ.","2-ші тоқ.","3-ші тоқ.","4-ші тоқ."],wide:["1-ші тоқсан","2-ші тоқсан","3-ші тоқсан","4-ші тоқсан"]},o={narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},u={narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},l={narrow:["Ж","Д","С","С","Б","Ж","С"],short:["жс","дс","сс","ср","бс","жм","сб"],abbreviated:["жс","дс","сс","ср","бс","жм","сб"],wide:["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"]},f={narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"}},g={narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түс",morning:"таң",afternoon:"күн",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түсте",morning:"таңертең",afternoon:"күндіз",evening:"кеште",night:"түнде"}};function m(t,e){var a,n=e||{};String(n.unit);return a="-ші",t+a}var w={ordinalNumber:m,era:(0,n.default)({values:r,defaultWidth:"wide"}),quarter:(0,n.default)({values:d,defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,n.default)({values:o,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,n.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:f,defaultWidth:"any",formattingValues:g,defaultFormattingWidth:"wide"})},s=w;e.default=s,t.exports=e.default}}]);
//# sourceMappingURL=df-215-legacy.1309a287.js.map