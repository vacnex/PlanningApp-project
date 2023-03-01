import{y as B,h as v,q as C,r as k,G as V,d as J,F as W,m as u,at as X,b as $,au as L,av as m,ak as g,N as Z,c as Q,e as w,j as ee,aw as te,o as f,O as I,P as s,k as h,p as H,t as P,S as U,s as x,ax as ne,ag as oe,ay as se,L as le,T as F,V as ae,w as re,W as o,l as e,X as ie,R as ce,Y as K,a0 as D,ab as j,Z as S,$ as N,ac as T,_ as q,af as pe}from"./index.23219cff.js";import{E as ue,a as de,b as fe}from"./el-col.705c90c1.js";const _e=v({inheritAttrs:!1});function me(a,i,r,n,c,l){return C(a.$slots,"default")}var he=B(_e,[["render",me],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const ve=v({name:"ElCollectionItem",inheritAttrs:!1});function be(a,i,r,n,c,l){return C(a.$slots,"default")}var ge=B(ve,[["render",be],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const Ee="data-el-collection-item",ye=a=>{const i=`El${a}Collection`,r=`${i}Item`,n=Symbol(i),c=Symbol(r),l={...he,name:i,setup(){const d=k(null),E=new Map;V(n,{itemMap:E,getItems:()=>{const b=u(d);if(!b)return[];const _=Array.from(b.querySelectorAll(`[${Ee}]`));return[...E.values()].sort((M,O)=>_.indexOf(M.ref)-_.indexOf(O.ref))},collectionRef:d})}},p={...ge,name:r,setup(d,{attrs:E}){const y=k(null),b=J(n,void 0);V(c,{collectionItemRef:y}),W(()=>{const _=u(y);_&&b.itemMap.set(_,{ref:_,...E})}),X(()=>{const _=u(y);b.itemMap.delete(_)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:c,ElCollection:l,ElCollectionItem:p}},A=$({trigger:L.trigger,effect:{...m.effect,default:"light"},type:{type:g(String)},placement:{type:g(String),default:"bottom"},popperOptions:{type:g(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:g([Number,String]),default:0},maxHeight:{type:g([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:g(Object)}});$({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:Z}});$({onKeydown:{type:g(Function)}});ye("Dropdown");const we=$({trigger:L.trigger,placement:A.placement,disabled:L.disabled,visible:m.visible,transition:m.transition,popperOptions:A.popperOptions,tabindex:A.tabindex,content:m.content,popperStyle:m.popperStyle,popperClass:m.popperClass,enterable:{...m.enterable,default:!0},effect:{...m.effect,default:"light"},teleported:m.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),xe={"update:visible":a=>Q(a),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},Ce="onUpdate:visible",$e=v({name:"ElPopover"}),Ie=v({...$e,props:we,emits:xe,setup(a,{expose:i,emit:r}){const n=a,c=w(()=>n[Ce]),l=ee("popover"),p=k(),d=w(()=>{var t;return(t=u(p))==null?void 0:t.popperRef}),E=w(()=>[{width:te(n.width)},n.popperStyle]),y=w(()=>[l.b(),n.popperClass,{[l.m("plain")]:!!n.content}]),b=w(()=>n.transition===`${l.namespace.value}-fade-in-linear`),_=()=>{var t;(t=p.value)==null||t.hide()},R=()=>{r("before-enter")},M=()=>{r("before-leave")},O=()=>{r("after-enter")},z=()=>{r("update:visible",!1),r("after-leave")};return i({popperRef:d,hide:_}),(t,ot)=>(f(),I(u(oe),ne({ref_key:"tooltipRef",ref:p},t.$attrs,{trigger:t.trigger,placement:t.placement,disabled:t.disabled,visible:t.visible,transition:t.transition,"popper-options":t.popperOptions,tabindex:t.tabindex,content:t.content,offset:t.offset,"show-after":t.showAfter,"hide-after":t.hideAfter,"auto-close":t.autoClose,"show-arrow":t.showArrow,"aria-label":t.title,effect:t.effect,enterable:t.enterable,"popper-class":u(y),"popper-style":u(E),teleported:t.teleported,persistent:t.persistent,"gpu-acceleration":u(b),"onUpdate:visible":u(c),onBeforeShow:R,onBeforeHide:M,onShow:O,onHide:z}),{content:s(()=>[t.title?(f(),h("div",{key:0,class:H(u(l).e("title")),role:"title"},P(t.title),3)):U("v-if",!0),C(t.$slots,"default",{},()=>[x(P(t.content),1)])]),default:s(()=>[t.$slots.reference?C(t.$slots,"reference",{key:0}):U("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Se=B(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const G=(a,i)=>{const r=i.arg||i.value,n=r==null?void 0:r.popperRef;n&&(n.triggerRef=a)};var Ne={mounted(a,i){G(a,i)},updated(a,i){G(a,i)}};const Te="popover",Me=se(Ne,Te),Oe=le(Se,{directive:Me}),Ae={class:"d-flex gap-2"},ke=e("span",null,"Ghim",-1),Le=e("div",null,[e("span",null,"Sang chuy\u1EC3n giao T\xE0i Ch\xEDnh cho anh H\u1EADu h\u1ED7 tr\u1EE3 trong T8")],-1),Pe=e("div",{class:"d-flex gap-3"},[e("div",{class:"d-flex flex-column"},[e("div",null,[e("span",{class:"fw-bold"},"M\u1EA7m non")]),e("div",null,[e("span",{class:"text-muted"},[e("small",null,"Ph\xE2n h\u1EC7")])])]),e("div",{class:"d-flex flex-column"},[e("div",null,[e("span",{class:"fw-bold"},"20/9/2022")]),e("div",null,[e("span",{class:"text-muted"},[e("small",null,"Deadline")])])])],-1),Y=v({__name:"MonthItemComponent",setup(a){return(i,r)=>{const n=ce,c=F("v-contextmenu-item"),l=F("v-contextmenu"),p=K,d=ae("contextmenu");return re((f(),I(p,{shadow:"hover"},{header:s(()=>[Le]),default:s(()=>[o(l,{ref:"contextmenu"},{default:s(()=>[o(c,null,{default:s(()=>[e("div",Ae,[o(n,null,{default:s(()=>[o(u(ie))]),_:1}),ke])]),_:1})]),_:1},512),Pe]),_:1})),[[d,void 0,"contextmenu"]])}}}),Be={class:"d-flex flex-column p-2 gap-2"},De={class:"d-flex align-items-center justify-content-between"},je=e("div",{class:"fs-4 fw-bold"},[e("span",null,"M\u1EE5c ti\xEAu th\xE1ng team")],-1),Re=v({__name:"TeamMonthListComponent",setup(a){return(i,r)=>{const n=T,c=Y,l=D;return f(),h("div",Be,[e("div",De,[je,e("div",null,[o(n,{type:"primary",icon:u(j)},{default:s(()=>[x(" Th\xEAm ")]),_:1},8,["icon"])])]),e("div",null,[o(l,{height:"35vh","view-class":"d-flex flex-column gap-3 p-2"},{default:s(()=>[(f(),h(S,null,N(10,p=>o(c,{key:p})),64))]),_:1})])])}}}),Ve={class:"d-flex flex-column p-2 gap-2"},Ue={class:"d-flex align-items-center justify-content-between"},Fe=e("div",{class:"fs-4 fw-bold"},[e("span",null,"M\u1EE5c ti\xEAu th\xE1ng c\xF4ng ty")],-1),Ge=v({__name:"CompanyMonthListComponent",setup(a){return(i,r)=>{const n=T,c=Y,l=D;return f(),h("div",Ve,[e("div",Ue,[Fe,e("div",null,[o(n,{type:"primary",icon:u(j)},{default:s(()=>[x(" Th\xEAm ")]),_:1},8,["icon"])])]),e("div",null,[o(l,{height:"35vh","view-class":"d-flex flex-column gap-3 p-2"},{default:s(()=>[(f(),h(S,null,N(10,p=>o(c,{key:p})),64))]),_:1})])])}}});const He={},Ke=e("div",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores at, temporibus nulla molestias harum cumque impedit blanditiis asperiores ex reiciendis maxime incidunt explicabo ut accusantium laudantium saepe reprehenderit minima. ",-1),qe={class:"d-flex align-items-center justify-content-between"},Ye={class:"d-flex gap-2 justify-content-start align-items-center"},ze={class:"w-75"};function Je(a,i){const r=T,n=pe,c=Oe,l=ue,p=K;return f(),I(p,{shadow:"hover"},{default:s(()=>[Ke,e("div",qe,[e("div",null,[o(c,{placement:"top-start",title:"Danh s\xE1ch th\xE0nh vi\xEAn",width:200,trigger:"hover"},{reference:s(()=>[o(r,{type:"info",link:""},{default:s(()=>[x(" Th\xE0nh vi\xEAn ")]),_:1})]),default:s(()=>[(f(),h(S,null,N(3,d=>e("div",{key:d,class:H(d+"-member mb-2")},[e("div",Ye,[o(n,{class:"avatar",src:"https://github.com/identicons/"+d+".png"},null,8,["src"]),e("span",null,P(d),1)])],2)),64))]),_:1})]),e("div",ze,[o(l,{percentage:50,"show-text":!1})])])]),_:1})}const We=q(He,[["render",Je]]),Xe={class:"d-flex flex-column p-2 gap-2"},Ze={class:"d-flex align-items-center justify-content-between"},Qe=e("div",{class:"fs-4 fw-bold"},[e("span",null,"M\u1EE5c ti\xEAu th\xE1ng c\xE1 nh\xE2n")],-1),et=v({__name:"SelfMonthListComponent",setup(a){return(i,r)=>{const n=T,c=We,l=D;return f(),h("div",Xe,[e("div",Ze,[Qe,e("div",null,[o(n,{type:"primary",icon:u(j)},{default:s(()=>[x(" Th\xEAm ")]),_:1},8,["icon"])])]),e("div",null,[o(l,{height:"75vh","view-class":"d-flex flex-column gap-3 p-2"},{default:s(()=>[(f(),h(S,null,N(10,p=>o(c,{key:p})),64))]),_:1})])])}}}),tt={};function nt(a,i){const r=et,n=de,c=Ge,l=fe,p=Re;return f(),I(l,null,{default:s(()=>[o(n,{span:8},{default:s(()=>[o(r)]),_:1}),o(n,{span:16},{default:s(()=>[o(l,null,{default:s(()=>[o(n,{span:24},{default:s(()=>[o(c)]),_:1})]),_:1}),o(l,null,{default:s(()=>[o(n,{span:24},{default:s(()=>[o(p)]),_:1})]),_:1})]),_:1})]),_:1})}const at=q(tt,[["render",nt]]);export{at as default};
