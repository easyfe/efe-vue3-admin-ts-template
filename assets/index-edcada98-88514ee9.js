import"./index-cb520362.js";import{e}from"./index-79d804fd-09e44a48.js";import{au as a,a_ as l,ao as s}from"./ui-3c01ac45.js";import{e as t,c as o,h as u,q as d,C as m,v as r,x as i,j as n,F as f,O as p,y as c,N as x}from"./core-e904f21d.js";const V=t({name:"CheckBox",__name:"index",props:{labelKey:{default:"label"},valueKey:{default:"value"},modelValue:{default:()=>[]},options:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:V}){const _=t,v=o({get:()=>_.modelValue,set:e=>{V("update:modelValue",e)}});return(t,o)=>{const V=a,j=l,y=s;return u(),d(e,null,{default:m((()=>[r(y,{direction:"vertical",size:"large"},{default:m((()=>[r(j,i({modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),class:"checkbox"},t.$attrs),{default:m((()=>[(u(!0),n(f,null,p(_.options,((e,a)=>(u(),d(V,i({key:a},e),{default:m((()=>[c(x(e[_.labelKey]),1)])),_:2},1040)))),128))])),_:1},16,["modelValue"])])),_:1})])),_:1})}}});export{V as default};
