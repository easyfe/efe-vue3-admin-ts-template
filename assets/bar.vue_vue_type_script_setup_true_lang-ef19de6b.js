import{e as t,_ as a}from"./index-a5714ead.js";import"./index-ac4fc627.js";/* empty css              */import{b2 as e,i as s}from"./ui-1a80a603.js";import{e as r,c as i,h as o,q as p,C as d,v as n,a9 as l}from"./core-661414b1.js";const u=r({__name:"bar",props:{id:{default:""}},setup(r){const u=r,m=i((()=>{const a={tooltip:{trigger:"axis"},grid:{top:"20",bottom:"20"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[],type:"bar",barWidth:7}]};return Array.isArray(a.series)?(a.series[0].data=[150,230,224,218,135,147,260].map(((t,a)=>({value:t,itemStyle:{color:a%2?"#468DFF":"#86DF6C"}}))),t.option(a)):a}));return(t,r)=>{const i=a,c=e,x=s;return o(),p(x,{style:{width:"100%"}},{default:d((()=>[n(c,{title:"柱状图",class:"general-card"},{default:d((()=>[n(i,{id:u.id,option:l(m),height:"200px"},null,8,["id","option"])])),_:1})])),_:1})}}});export{u as _};
