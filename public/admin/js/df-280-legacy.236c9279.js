(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-280"],{"2cfd":function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},"2d16":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var r=a(n("4170"));function a(e){return e&&e.__esModule?e:{default:e}}var u={masculine:"ostatni",feminine:"ostatnia"},o={masculine:"ten",feminine:"ta"},i={masculine:"następny",feminine:"następna"},s={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function f(e,t,n,a){if((0,r.default)(t,n,a))return o;if("lastWeek"===e)return u;if("nextWeek"===e)return i;throw new Error("Cannot determine adjectives for token ".concat(e))}function l(e,t,n,r){var a=t.getUTCDay(),u=f(e,t,n,r),o=s[a];return u[o]}function c(e,t,n,r){var a=l(e,t,n,r);return"'".concat(a,"' eeee 'o' p")}var d={lastWeek:c,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:c,other:"P"};function p(e,t,n,r){var a=d[e];return"function"===typeof a?a(e,t,n,r):a}e.exports=t.default},4170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=u(n("701a")),a=u(n("6068"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){(0,a.default)(2,arguments);var u=(0,r.default)(e,n),o=(0,r.default)(t,n);return u.getTime()===o.getTime()}e.exports=t.default},6068:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},"701a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=o(n("2cfd")),a=o(n("d8e8")),u=o(n("6068"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){(0,u.default)(1,arguments);var n=t||{},o=n.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:(0,r.default)(i),f=null==n.weekStartsOn?s:(0,r.default)(n.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=(0,a.default)(e),c=l.getUTCDay(),d=(c<f?7:0)+c-f;return l.setUTCDate(l.getUTCDate()-d),l.setUTCHours(0,0,0,0),l}e.exports=t.default},d8e8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=a(n("6068"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}e.exports=t.default}}]);
//# sourceMappingURL=df-280-legacy.236c9279.js.map