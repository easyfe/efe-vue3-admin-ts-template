import{h as e}from"./admin-component-7dd8806f.js";import{e as a}from"./index-373f141f-7407a3fc.js";import{aG as t}from"./ui-0054cf0a.js";import{a as n,c as o,e as s,k as u,w as d,g as p,p as r,E as l,A as m,t as f}from"./core-ade0485a.js";const i=n({name:"Input",__name:"index",props:{modelValue:{default:""},debounce:{default:void 0}},emits:["update:modelValue"],setup(n,{emit:i}){const c=n,v=o({get:()=>c.modelValue,set:e=>{i("update:modelValue",e)}});function j(e){c.debounce?$(e):v.value=e}const $=e((e=>{v.value=e}),c.debounce);function k(){v.value=""}return(e,n)=>{const o=t;return s(),u(a,null,{default:d((()=>[p(o,r(e.$attrs,{"default-value":v.value,onInput:j,onClear:k}),l({_:2},[e.$attrs.prepend?{name:"prepend",fn:d((()=>[m(f(e.$attrs.prepend),1)])),key:"0"}:void 0,e.$attrs.append?{name:"append",fn:d((()=>[m(f(e.$attrs.append),1)])),key:"1"}:void 0]),1040,["default-value"])])),_:1})}}});export{i as default};
