import"./admin-component-7dd8806f.js";import{e}from"./index-373f141f-7407a3fc.js";import{aI as a}from"./ui-0054cf0a.js";import{a as t,c as o,e as l,k as s,w as m,g as u,p as r}from"./core-ade0485a.js";const d=t({name:"Textarea",__name:"index",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:d}){const n=t,i=o({get:()=>n.modelValue,set:e=>{d("update:modelValue",e)}});return(t,o)=>{const d=a;return l(),s(e,null,{default:m((()=>[u(d,r({modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),modelModifiers:{trim:!0}},t.$attrs),null,16,["modelValue"])])),_:1})}}});export{d as default};
