import"./index-454b6122.js";import{U as e}from"./index-176aefe7-456df957.js";import{M as a,b0 as u}from"./ui-eef44c8f.js";import{e as l,c as r,h as t,q as i,C as s,v as o,x as n}from"./core-fdeff694.js";const m=l({name:"PicUpload",__name:"index",props:{modelValue:{default:()=>""},maxSize:{default:0}},emits:["update:modelValue"],setup(l,{emit:m}){const d=l,f=r({get:()=>d.modelValue,set:e=>{m("update:modelValue",e)}}),p=r((()=>f.value?Array.isArray(f.value)?f.value.map((e=>({uid:e,name:e,status:"done",url:e}))):[{uid:f.value,name:f.value,status:"done",url:f.value}]:[]));function c(e){return new Promise(((u,l)=>{if(d.maxSize&&e.size>1024*d.maxSize){const e=function(e){return e<1024?e+" B":e<1048576?(e/1024).toFixed(2)+" KB":e<1073741824?(e/1048576).toFixed(2)+" MB":(e/1073741824).toFixed(2)+" GB"}(1024*d.maxSize);a.error(`文件大小不能超过${e}`),l(!1)}u(!0)}))}function v(e){return new Promise((a=>{const u=p.value.findIndex((a=>a.url===e.url));u>-1&&(p.value.splice(u,1),f.value=p.value.map((e=>e.url))),a(!0)}))}function x(e){e.url&&(Array.isArray(f.value)?f.value.push(e.url):f.value=e.url)}return(a,l)=>{const r=u;return t(),i(e,null,{default:s((()=>[o(r,n({"list-type":"picture-card","image-preview":!0,"default-file-list":p.value,accept:"image/*","on-before-upload":c,"on-before-remove":v},a.$attrs,{onSuccess:x}),null,16,["default-file-list"])])),_:1})}}});export{m as default};
