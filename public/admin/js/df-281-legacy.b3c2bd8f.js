(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-281","df-1"],{a7c3:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(a("af039"));function t(e){return e&&e.__esModule?e:{default:e}}function o(e){var n=Number(e);return String(n)}var r={narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed naszą erą","naszej ery"]},d={narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwartał","II kwartał","III kwartał","IV kwartał"]},u={narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},w={narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]},p={narrow:["N","P","W","Ś","C","P","S"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},l={narrow:["n","p","w","ś","c","p","s"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},c={narrow:{am:"a",pm:"p",midnight:"półn.",noon:"poł",morning:"rano",afternoon:"popoł.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"}},m={narrow:{am:"a",pm:"p",midnight:"o półn.",noon:"w poł.",morning:"rano",afternoon:"po poł.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"}},s={ordinalNumber:o,era:(0,i.default)({values:r,defaultWidth:"wide"}),quarter:(0,i.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:u,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"}),day:(0,i.default)({values:p,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"}),dayPeriod:(0,i.default)({values:c,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},f=s;n.default=f,e.exports=n.default},af039:function(e,n,a){"use strict";function i(e){return function(n,a){var i,t=a||{},o=t.context?String(t.context):"standalone";if("formatting"===o&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=t.width?String(t.width):r;i=e.formattingValues[d]||e.formattingValues[r]}else{var u=e.defaultWidth,w=t.width?String(t.width):e.defaultWidth;i=e.values[w]||e.values[u]}var p=e.argumentCallback?e.argumentCallback(n):n;return i[p]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i,e.exports=n.default}}]);
//# sourceMappingURL=df-281-legacy.b3c2bd8f.js.map