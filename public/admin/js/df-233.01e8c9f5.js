(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-233","df-1"],{"694f":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(e("af03"));function r(i){return i&&i.__esModule?i:{default:i}}var n={narrow:["pr. Kr.","po Kr."],abbreviated:["pr. Kr.","po Kr."],wide:["prieš Kristų","po Kristaus"]},d={narrow:["1","2","3","4"],abbreviated:["I ketv.","II ketv.","III ketv.","IV ketv."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},o={narrow:["1","2","3","4"],abbreviated:["I k.","II k.","III k.","IV k."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},s={narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"]},u={narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio"]},p={narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"]},l={narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienį","pirmadienį","antradienį","trečiadienį","ketvirtadienį","penktadienį","šeštadienį"]},v={narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"}},g={narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"}};function k(i,t){var e=Number(i);return e+"-oji"}var f={ordinalNumber:k,era:(0,a.default)({values:n,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",formattingValues:o,defaultFormattingWidth:"wide",argumentCallback:function(i){return Number(i)-1}}),month:(0,a.default)({values:s,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,a.default)({values:p,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"}),dayPeriod:(0,a.default)({values:v,defaultWidth:"wide",formattingValues:g,defaultFormattingWidth:"wide"})},m=f;t.default=m,i.exports=t.default},af03:function(i,t,e){"use strict";function a(i){return function(t,e){var a,r=e||{},n=r.context?String(r.context):"standalone";if("formatting"===n&&i.formattingValues){var d=i.defaultFormattingWidth||i.defaultWidth,o=r.width?String(r.width):d;a=i.formattingValues[o]||i.formattingValues[d]}else{var s=i.defaultWidth,u=r.width?String(r.width):i.defaultWidth;a=i.values[u]||i.values[s]}var p=i.argumentCallback?i.argumentCallback(t):t;return a[p]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,i.exports=t.default}}]);
//# sourceMappingURL=df-233.01e8c9f5.js.map