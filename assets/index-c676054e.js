/*!
 * dush <https://github.com/tunnckoCore/dush>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */
const n=t={_allEvents:Object.create(null),use:function(n,l){return n(t,l)||t},on:function(n,l,e){var a=t._allEvents[n]||(t._allEvents[n]=[]);function r(){t.off(n,r),l.apply(l,arguments)}r.fn=l;var c=e?r:l;return a.push(c),t},once:function(n,l){return t.on(n,l,!0),t},off:function(n,l){return l&&t._allEvents[n]?t._allEvents[n]=t._allEvents[n].filter((function(n){return n!==l&&n!==l.fn})):n?t._allEvents[n]=[]:t._allEvents=Object.create(null),t},emit:function(n){if("*"!==n){var l=[].slice.call(arguments);(t._allEvents[n]||[]).map((function(n){n.apply(n,l.slice(1))})),(t._allEvents["*"]||[]).map((function(n){n.apply(n,l)}))}return t}};var t;const l="EVENT_CHART_RESIZE";export{l as E,n as e};
