(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-310"],{"0c3f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=u(n("4170"));function u(e){return e&&e.__esModule?e:{default:e}}var o=["nedeľu","pondelok","utorok","stredu","štvrtok","piatok","sobotu"];function a(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'minulú "+t+" o' p";default:return"'minulý' eeee 'o' p"}}function s(e){var t=o[e];return 4===e?"'vo' eeee 'o' p":"'v "+t+" o' p"}function f(e){var t=o[e];switch(e){case 0:case 4:case 6:return"'budúcu' "+t+" 'o' p";default:return"'budúci' eeee 'o' p"}}var l={lastWeek:function(e,t,n){var u=e.getUTCDay();return(0,r.default)(e,t,n)?s(u):a(u)},yesterday:"'včera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,n){var u=e.getUTCDay();return(0,r.default)(e,t,n)?s(u):f(u)},other:"P"};function i(e,t,n,r){var u=l[e];return"function"===typeof u?u(t,n,r):u}e.exports=t.default},"2cfd":function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},4170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=o(n("701a")),u=o(n("6068"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){(0,u.default)(2,arguments);var o=(0,r.default)(e,n),a=(0,r.default)(t,n);return o.getTime()===a.getTime()}e.exports=t.default},6068:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},"701a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=a(n("2cfd")),u=a(n("d8e8")),o=a(n("6068"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){(0,o.default)(1,arguments);var n=t||{},a=n.locale,s=a&&a.options&&a.options.weekStartsOn,f=null==s?0:(0,r.default)(s),l=null==n.weekStartsOn?f:(0,r.default)(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var i=(0,u.default)(e),c=i.getUTCDay(),d=(c<l?7:0)+c-l;return i.setUTCDate(i.getUTCDate()-d),i.setUTCHours(0,0,0,0),i}e.exports=t.default},d8e8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=u(n("6068"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}e.exports=t.default}}]);
//# sourceMappingURL=df-310-legacy.5217db94.js.map