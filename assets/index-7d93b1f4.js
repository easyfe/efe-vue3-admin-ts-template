var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,n=(e,n)=>{for(var r in n||(n={}))l.call(n,r)&&o(e,r,n[r]);if(a)for(var r of a(n))t.call(n,r)&&o(e,r,n[r]);return e};import{_ as r}from"./index-099ae768.js";import{q as i,v as s,x as u,y as d}from"./index-2888892a.js";/* empty css              *//* empty css              */import{t as f}from"./common-e73f0785.js";import{B as c,S as p,R as v}from"./ui-1a80a603.js";import{s as b}from"./index-50be18e5.js";import{e as m,r as y,c as g,h,q as _,C as w,v as C,y as j,N as k,a9 as x,X as K}from"./core-661414b1.js";const O=m({__name:"index",setup(e){const a=y(!1),l=y(),t=y([]),o=y({test:"草草草草",tabsData:"1"}),m=g((()=>({fn:f,params:n({},o.value)}))),O=g((()=>[i.input("测试","test",{span:8}),i.input("测试2","test2",{span:8}),i.datePicker("日期","key10",{type:"date",span:8})])),P=g((()=>s.create({disableSelectedRow:!0,pageKey:"_page",sizeKey:"_size",rowKey:"",arcoProps:{rowKey:"id",bordered:!1,rowSelection:{type:"checkbox",showCheckedAll:!0}},blBtns:[{label:"编辑",type:"primary"},{label:"删除",status:"danger"}],tlBtns:[{label:"全部",value:"0"},{label:"已发布",value:"1"},{label:"草稿箱",value:"2"}],trBtns:[{label:"新增",type:"primary"},{label:"删除",status:"danger"}],columns:[s.default("用户ID","id",{width:100}),s.default("标题","title"),s.default("内容","body"),s.btns("操作",[{label:"编辑"},{label:"删除",status:"danger"}],{width:150})]}))),D=g((()=>({title:"测试",width:"70%"})));function S(e){return a=this,t=null,o=function*(){yield b(1e3),l.value=e},new Promise(((l,n)=>{var r=a=>{try{s(o.next(a))}catch(e){n(e)}},i=a=>{try{s(o.throw(a))}catch(e){n(e)}},s=e=>e.done?l(e.value):Promise.resolve(e.value).then(r,i);s((o=o.apply(a,t)).next())}));var a,t,o}function q(e){var n,r;1===e&&(a.value=!0,t.value=[]),2===e&&(a.value=!0,t.value=null==(n=l.value)?void 0:n.map((e=>e.id))),3===e&&d({modalConfig:D.value,defaultSelected:null==(r=l.value)?void 0:r.map((e=>e.id)),tableConfig:{tableConfig:P.value,filterConfig:O.value,filterData:o.value,req:m.value,pageKey:"_page",sizeKey:"_size",rowKey:""},ok:S})}function z(){f({}).then((e=>{console.log(e)}))}function B(){for(let e=0;e<10;e++)f({}).then((a=>{console.log(`第${e}条返回：`,a)}))}return(e,n)=>{const i=c,s=p,d=v,f=r;return h(),_(f,null,{default:w((()=>[C(s,null,{default:w((()=>[C(i,{onClick:n[0]||(n[0]=e=>q(1))},{default:w((()=>[j("组件打开表格")])),_:1}),C(i,{onClick:n[1]||(n[1]=e=>q(2))},{default:w((()=>[j("默认选中")])),_:1}),C(i,{onClick:n[2]||(n[2]=e=>q(3))},{default:w((()=>[j("函数打开表格")])),_:1}),C(i,{onClick:z},{default:w((()=>[j("单条测试")])),_:1}),C(i,{onClick:B},{default:w((()=>[j("并发测试")])),_:1})])),_:1}),C(d,null,{default:w((()=>[j(k(x(l)),1)])),_:1}),C(x(u),{visible:x(a),"onUpdate:visible":n[3]||(n[3]=e=>K(a)?a.value=e:null),"modal-config":x(D),"default-selected":x(t),"table-config":{tableConfig:x(P),filterData:x(o),filterConfig:x(O),req:x(m)},onOk:S},null,8,["visible","modal-config","default-selected","table-config"])])),_:1})}}});export{O as default};
