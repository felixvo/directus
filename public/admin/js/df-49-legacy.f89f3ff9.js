(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-49","df-1"],{af039:function(e,n,t){"use strict";function a(e){return function(n,t){var a,r=t||{},i=r.context?String(r.context):"standalone";if("formatting"===i&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):o;a=e.formattingValues[u]||e.formattingValues[o]}else{var d=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;a=e.values[l]||e.values[d]}var f=e.argumentCallback?e.argumentCallback(n):n;return a[f]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a,e.exports=n.default},cacd:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("af039"));function r(e){return e&&e.__esModule?e:{default:e}}var i={locale:{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},number:{"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"}},o={narrow:["খ্রিঃপূঃ","খ্রিঃ"],abbreviated:["খ্রিঃপূর্ব","খ্রিঃ"],wide:["খ্রিস্টপূর্ব","খ্রিস্টাব্দ"]},u={narrow:["১","২","৩","৪"],abbreviated:["১ত্রৈ","২ত্রৈ","৩ত্রৈ","৪ত্রৈ"],wide:["১ম ত্রৈমাসিক","২য় ত্রৈমাসিক","৩য় ত্রৈমাসিক","৪র্থ ত্রৈমাসিক"]},d={narrow:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],abbreviated:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],wide:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]},l={narrow:["র","সো","ম","বু","বৃ","শু","শ"],short:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],abbreviated:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],wide:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার ","শুক্রবার","শনিবার"]},f={narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},c={narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}};function m(e,n){if(e>18&&e<=31)return n+"শে";switch(e){case 1:return n+"লা";case 2:case 3:return n+"রা";case 4:return n+"ঠা";default:return n+"ই"}}function s(e,n){var t=h.localeToNumber(e),a=h.numberToLocale(t),r=n.unit;if("date"===r)return m(t,a);if(t>10||0===t)return a+"তম";var i=t%10;switch(i){case 2:case 3:return a+"য়";case 4:return a+"র্থ";case 6:return a+"ষ্ঠ";case 1:case 5:case 7:case 8:case 9:case 0:return a+"ম"}}function g(e){var n=e.toString().replace(/[১২৩৪৫৬৭৮৯০]/g,(function(e){return i.number[e]}));return Number(n)}function v(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))}var h={localeToNumber:g,numberToLocale:v,ordinalNumber:s,era:(0,a.default)({values:o,defaultWidth:"wide"}),quarter:(0,a.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:d,defaultWidth:"wide"}),day:(0,a.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:f,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"})},w=h;n.default=w,e.exports=n.default}}]);
//# sourceMappingURL=df-49-legacy.f89f3ff9.js.map