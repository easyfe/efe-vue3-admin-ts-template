var e=Object.defineProperty,o=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(o,n,a)=>n in o?e(o,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[n]=a,s=(e,o)=>{for(var n in o||(o={}))i.call(o,n)&&l(e,n,o[n]);if(a)for(var n of a(o))t.call(o,n)&&l(e,n,o[n]);return e},p=(e,a)=>o(e,n(a));import{_ as r,r as u,A as c,B as d}from"./index-454b6122.js";/* empty css              */import{aF as f,g as v,i as m,B as A}from"./ui-eef44c8f.js";import{e as M,a5 as g,A as h,c as w,w as y,o as b,f as I,h as k,j as L,k as U,l as x,a9 as _,aa as C,i as P,r as O,R as j,m as N,G as S,v as T,C as E,F,O as R,N as W,y as z,s as B}from"./core-fdeff694.js";import{b as D}from"./_baseIsEqual-c7ec941d.js";const J="/vue3-admin-ts-template/assets/location1-b7af9c91.png";var $={exports:{}};const H=v($.exports=function(){function e(e){var a=[];return e.AMapUI&&a.push(o(e.AMapUI)),e.Loca&&a.push(n(e.Loca)),Promise.all(a)}function o(e){return new Promise((function(o,n){var i=[];if(e.plugins)for(var p=0;p<e.plugins.length;p+=1)-1==t.AMapUI.plugins.indexOf(e.plugins[p])&&i.push(e.plugins[p]);if(l.AMapUI===a.failed)n("前次请求 AMapUI 失败");else if(l.AMapUI===a.notload){l.AMapUI=a.loading,t.AMapUI.version=e.version||t.AMapUI.version,p=t.AMapUI.version;var r=document.body||document.head,u=document.createElement("script");u.type="text/javascript",u.src="https://webapi.amap.com/ui/"+p+"/main.js",u.onerror=function(e){l.AMapUI=a.failed,n("请求 AMapUI 失败")},u.onload=function(){if(l.AMapUI=a.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var e=0,n=i.length;e<n;e++){var a=i[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}for(o();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()}));else for(o();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()},r.appendChild(u)}else l.AMapUI===a.loaded?e.version&&e.version!==t.AMapUI.version?n("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,n=i.length;e<n;e++){var a=i[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}o()})):o():e.version&&e.version!==t.AMapUI.version?n("不允许多个版本 AMapUI 混用"):s.AMapUI.push((function(e){e?n(e):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,n=i.length;e<n;e++){var a=i[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}o()})):o()}))}))}function n(e){return new Promise((function(o,n){if(l.Loca===a.failed)n("前次请求 Loca 失败");else if(l.Loca===a.notload){l.Loca=a.loading,t.Loca.version=e.version||t.Loca.version;var i=t.Loca.version,p=t.AMap.version.startsWith("2"),r=i.startsWith("2");if(p&&!r||!p&&r)n("JSAPI 与 Loca 版本不对应！！");else{p=t.key,r=document.body||document.head;var u=document.createElement("script");u.type="text/javascript",u.src="https://webapi.amap.com/loca?v="+i+"&key="+p,u.onerror=function(e){l.Loca=a.failed,n("请求 AMapUI 失败")},u.onload=function(){for(l.Loca=a.loaded,o();s.Loca.length;)s.Loca.splice(0,1)[0]()},r.appendChild(u)}}else l.Loca===a.loaded?e.version&&e.version!==t.Loca.version?n("不允许多个版本 Loca 混用"):o():e.version&&e.version!==t.Loca.version?n("不允许多个版本 Loca 混用"):s.Loca.push((function(e){e?n(e):n()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a,i;(i=a||(a={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},l={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},s={AMap:[],AMapUI:[],Loca:[]},p=[],r=function(e){"function"==typeof e&&(l.AMap===a.loaded?e(window.AMap):p.push(e))};return{load:function(o){return new Promise((function(n,i){if(l.AMap==a.failed)i("");else if(l.AMap==a.notload){var s=o.key,u=o.version,c=o.plugins;s?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=s,t.AMap.version=u||t.AMap.version,t.AMap.plugins=c||t.AMap.plugins,l.AMap=a.loading,u=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)l.AMap=a.failed,i(t);else for(l.AMap=a.loaded,e(o).then((function(){n(window.AMap)})).catch(i);p.length;)p.splice(0,1)[0]()},(c=document.createElement("script")).type="text/javascript",c.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+s+"&plugin="+t.AMap.plugins.join(","),c.onerror=function(e){l.AMap=a.failed,i(e)},u.appendChild(c)):i("请填写key")}else if(l.AMap==a.loaded)if(o.key&&o.key!==t.key)i("多个不一致的 key");else if(o.version&&o.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(s=[],o.plugins)for(u=0;u<o.plugins.length;u+=1)-1==t.AMap.plugins.indexOf(o.plugins[u])&&s.push(o.plugins[u]);s.length?window.AMap.plugin(s,(function(){e(o).then((function(){n(window.AMap)})).catch(i)})):e(o).then((function(){n(window.AMap)})).catch(i)}else if(o.key&&o.key!==t.key)i("多个不一致的 key");else if(o.version&&o.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var d=[];if(o.plugins)for(u=0;u<o.plugins.length;u+=1)-1==t.AMap.plugins.indexOf(o.plugins[u])&&d.push(o.plugins[u]);r((function(){d.length?window.AMap.plugin(d,(function(){e(o).then((function(){n(window.AMap)})).catch(i)})):e(o).then((function(){n(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},l={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},s={AMap:[],AMapUI:[],Loca:[]}}}}()),K=r(M({__name:"index",props:{height:{},options:{default:()=>({viewMode:"3D",zoom:11,center:[116.397428,39.90923]})},mapType:{default:"NORMAL_MAP"},mapKey:{}},emits:["click"],setup(e,{expose:o,emit:n}){const a=e,i=n;let t=g(null);h("map",t),h("infoWindow",null);const l=w((()=>"number"==typeof a.height?{height:`${a.height}px`}:{height:a.height}));let s=null;return y((()=>a.mapType),(e=>{t.value&&("NORMAL_MAP"===e?t.value.removeLayer(s):t.value.addLayer(s))})),o({map:t}),b((()=>{H.load({key:a.mapKey,version:"2.0",AMapUI:{version:"1.1",plugins:["overlay/SimpleMarker"]}}).then((()=>{const e=a.options;s=new AMap.TileLayer.Satellite,t.value=new AMap.Map("amap-container",e),t.value.on("click",(function(e){i("click",e)}))})).catch((e=>{console.error(e)}))})),I((()=>{var e;null==(e=t.value)||e.destroy()})),(e,o)=>(k(),L("div",{id:"amap-container",class:"amap-container",style:x(_(l))},[U(e.$slots,"default",{},void 0,!0)],4))}}),[["__scopeId","data-v-b0046bb8"]]),Z={style:{display:"none"}},q=M({__name:"index",props:{options:{default:()=>({content:""})}},emits:["dbclick","click","mouseover","mouseout"],setup(e,{emit:o}){const n=e,a=o,i=C(),t=P("map");let l;const s=O();let p;return j((()=>{var e,o,r;t&&t.value&&(o=p,r=n.options,D(o,r)||(l&&(t.value.remove(l),t.value.setCenter(n.options.position||[0,0])),p=u(n.options),(null==i?void 0:i.default)&&(p.label||(p.label={content:"",direction:"right",offset:[5,-15]}),p.label.content=(null==(e=s.value)?void 0:e.innerHTML)||""),l=new AMap.Marker(p),t.value.add(l),l.on("dblclick",(()=>{a("dbclick")})),l.on("click",(()=>{a("click")})),l.on("mouseover",(()=>{a("mouseover")})),l.on("mouseout",(()=>{a("mouseout")}))))})),(e,o)=>(k(),L("div",Z,[N("div",{ref_key:"mapMarkerContainer",ref:s},[U(e.$slots,"default")],512)]))}}),G={style:{display:"none"}},Q=M({__name:"index",props:{options:{default:()=>({content:""})}},emits:["dbclick","click","mouseover","mouseout"],setup(e,{emit:o}){const n=e,a=o,i=P("map"),t=O();return j((()=>{if(!i.value)return;let e=u(n.options);const o=new AMap.Text(e);o.setMap(i.value),o.on("dblclick",(()=>{a("dbclick")})),o.on("click",(()=>{a("click")})),o.on("mouseover",(()=>{a("mouseover")})),o.on("mouseout",(()=>{a("mouseout")}))})),(e,o)=>(k(),L("div",G,[N("div",{ref_key:"mapTextContainer",ref:t},null,512)]))}}),V={style:{display:"none"}},X=M({__name:"index",props:{options:{default:()=>({content:""})},show:{type:Boolean,default:!1}},emits:["infoShow","infoClose"],setup(e,{emit:o}){const n=e;C();const a=o,i=P("map"),t=O();let l=null,r=null,u=O("");j((()=>{n.show&&u.value?function(){if(!i.value)return;const e=n.options;l?(l.setContent(u.value),l.setPosition(e.position||i.value.getCenter())):l=new AMap.InfoWindow(p(s({},e),{content:u.value})),l.open(i.value,e.position||i.value.getCenter()),a("infoShow")}():(null==l||l.close(),a("infoClose"))}));const c=()=>{t.value&&(u.value=t.value.innerHTML)};return b((()=>{t.value&&(r=new MutationObserver(c),r.observe(t.value,{childList:!0,subtree:!0,characterData:!0}),c())})),S((()=>{r&&r.disconnect()})),(e,o)=>(k(),L("div",V,[N("div",{ref_key:"mapInfoWindowContainer",ref:t},[U(e.$slots,"default")],512)]))}}),Y={class:"map-container"},ee={style:{display:"flex","flex-direction":"column",padding:"10px"}},oe={style:{"font-weight":"bold","margin-bottom":"10px",color:"rgb(85, 85, 85)"}},ne={style:{display:"inherit","font-size":"12px",color:"rgb(85, 85, 85)"}},ae={style:{width:"80px"}},ie={class:"actions"},te={class:"bottom-tips"},le={class:"tips-item"},se=["src"],pe={class:"tips-item"},re=["src"],ue={key:0,class:"map-dev"},ce=M({name:"MapBox1"}),de=r(M(p(s({},ce),{props:{detail:{},dept:{}},setup(e){const o=O("NORMAL_MAP"),n=O(-1),a=O(!1),i=O("100%"),t=O([]),l=O([{title:"在线设备",value:0,suffix:"台",bgColor:"#2d76fe"},{title:"离线设备",value:0,suffix:"台",bgColor:"#ff1111"},{title:"待处理工单",value:0,suffix:"个",bgColor:"#ffb200"},{title:"待处理事件",value:0,suffix:"个",bgColor:"#4db8ff"}]),s=O();function p(){var e,o;console.log(null==(e=s.value)?void 0:e.map.getCenter()),console.log(null==(o=s.value)?void 0:o.map.getZoom())}return b((()=>{t.value=[{fullname:"南京市",longitude:"118.796877",latitude:"32.060255"},{fullname:"上海市",longitude:"121.472644",latitude:"31.231706"}]})),(e,r)=>{const u=m,f=A;return k(),L("div",Y,[T(_(K),{ref_key:"myMap",ref:s,"map-key":"6cb85da518029607d421917b7ddeb94a","map-type":_(o),height:_(i),options:{zoom:5.37,center:[119.728933,32.333552]}},{default:E((()=>[(k(!0),L(F,null,R(_(t),((e,o)=>(k(),L(F,{key:e.fullname},[T(_(q),{options:{position:[Number(e.longitude),Number(e.latitude)],size:[23,35],icon:_(J)},onDbclick:o=>{return n=e,void(null==(a=s.value)||a.map.setZoomAndCenter(15,[Number(n.longitude),Number(n.latitude)]));var n,a},onClick:e=>function(e,o){a.value=!0,n.value=o,setTimeout((()=>{a.value=!1}),1e3)}(0,o)},null,8,["options","onDbclick","onClick"]),T(_(Q),{options:{position:[Number(e.longitude),Number(e.latitude)],text:e.fullname,offset:[25,0],style:{color:"#CC3333",fontSize:"13px",backgroundColor:"#CCFFFF",border:"0",fontWeight:"bold"}}},null,8,["options"]),T(_(X),{show:_(n)===o,options:{position:[Number(e.longitude),Number(e.latitude)]}},{default:E((()=>[T(u,{loading:_(a)},{default:E((()=>[N("div",ee,[N("div",oe,W(e.fullname),1),(k(!0),L(F,null,R(_(l),((e,o)=>(k(),L("div",{key:o,style:{display:"flex","align-items":"center","margin-bottom":"6px"}},[N("div",{style:x({width:"10px",height:"10px",background:e.bgColor+" !important",borderRadius:"0px",marginRight:"10px"})},null,4),N("div",ne,[N("span",ae,W(e.title),1),N("span",null,W(e.value)+"("+W(e.suffix)+")",1)])])))),128))])])),_:2},1032,["loading"])])),_:2},1032,["show","options"])],64)))),128))])),_:1},8,["map-type","height"]),N("div",ie,[T(_(c),{name:"map3",width:20,height:20,color:"SATELLITE_MAP"===_(o)?"#3366FF":"#000000",onClick:r[0]||(r[0]=e=>o.value="SATELLITE_MAP")},null,8,["color"]),T(_(c),{name:"map4",width:20,height:20,color:"NORMAL_MAP"===_(o)?"#3366FF":"#000000",onClick:r[1]||(r[1]=e=>o.value="NORMAL_MAP")},null,8,["color"])]),N("div",te,[N("div",le,[N("img",{src:_(J),alt:""},null,8,se),r[2]||(r[2]=N("div",null,"正常运行",-1))]),N("div",pe,[N("img",{src:_("/vue3-admin-ts-template/assets/location2-80b725cd.png"),alt:""},null,8,re),r[3]||(r[3]=N("div",null,"告警运行",-1))])]),_(d).dev()?(k(),L("div",ue,[T(f,{type:"primary",onClick:p},{default:E((()=>r[4]||(r[4]=[z("获取中心点和定位")]))),_:1})])):B("",!0)])}}})),[["__scopeId","data-v-a98d5803"]]);export{de as default};
