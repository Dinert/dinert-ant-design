import{c as d,j as t,I as n,k as u,aY as a,a as e,E as s,o as r}from"./chunks/framework.CIwKAfii.js";const i=a('<h1 id="自动补全输入框" tabindex="-1">自动补全输入框 <a class="header-anchor" href="#自动补全输入框" aria-label="Permalink to &quot;自动补全输入框&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>// :::demo</p><p>Form/autocomplete/index :::</p><h2 id="form-属性" tabindex="-1">form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;form 属性&quot;">​</a></h2>',5),_={tabindex:"0"},c=t("thead",null,[t("tr",null,[t("th",null,"属性名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1),h=t("td",null,"formItem",-1),m=t("td",null,[e("表单组件列表对象，"),t("a",{href:"#formitem-属性"},"详细请参阅下面formItem属性")],-1),p=t("td",null,"{}",-1),f=t("tr",null,[t("td",null,"showLabel"),t("td",null,"是否显示每个表单组件的值，不显示表单组件"),t("td",null,"boolean"),t("td",null,"一")],-1),b=t("td",null,"name",-1),y=t("td",null,"值为'search'时在查询中使用，值为horizontal时在弹窗中使用",-1),x=t("td",null,"一",-1),g=t("tr",null,[t("td",null,"required"),t("td",null,"是否验证每个表单组件是否必填"),t("td",null,"boolean"),t("td",null,"一")],-1),k=t("tr",null,[t("td",null,"packUp"),t("td",null,"第一次加载是否默认展开超出的组件"),t("td",null,"boolean"),t("td",null,"false")],-1),I=t("tr",null,[t("td",null,"onSearch"),t("td",null,"点击查询的事件"),t("td",null,"Function"),t("td",null,"一")],-1),P=t("tr",null,[t("td",null,"onReset"),t("td",null,"点击重置的事件"),t("td",null,"Function"),t("td",null,"一")],-1),q=t("tr",null,[t("td",null,"onUnFold"),t("td",null,"点击展开的事件"),t("td",null,"Function"),t("td",null,"一")],-1),N=t("tr",null,[t("td",null,"......"),t("td",null,[t("a",{href:"https://ant.design/components/form-cn#form",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),t("td",null,"一"),t("td",null,"一")],-1),T=t("h2",{id:"formitem-属性",tabindex:"-1"},[e("formItem 属性 "),t("a",{class:"header-anchor",href:"#formitem-属性","aria-label":'Permalink to "formItem 属性"'},"​")],-1),V={tabindex:"0"},F=t("thead",null,[t("tr",null,[t("th",null,"属性名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1),S=t("td",null,"type",-1),j=t("td",null,"表单组件类型",-1),v=t("td",null,"一",-1),w=t("td",null,"label",-1),B=t("td",null,"表单组件的名称",-1),A=t("td",null,"一",-1),C=t("td",null,"vif",-1),E=t("td",null,"是否渲染该表单组件",-1),O=t("td",null,"一",-1),z=t("tr",null,[t("td",null,"sort"),t("td",null,"表单组件的列的排序，第一个组件为0，第二个为10，以此类推，数值越小组件越靠前"),t("td",null,"Number"),t("td",null,"一")],-1),D=t("tr",null,[t("td",null,"options"),t("td",null,"组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法"),t("td",null,"Object"),t("td",null,"一")],-1),L=t("tr",null,[t("td",null,"showLabel"),t("td",null,"是否直接显示表单组件的值"),t("td",null,"boolean"),t("td",null,"一")],-1),R=t("td",null,"slot",-1),U=t("td",null,"自定义组件插槽",-1),J=t("td",null,"一",-1),Y=t("tr",null,[t("td",null,"required"),t("td",null,"是否必填"),t("td",null,"Boolean"),t("td",null,"一")],-1),G=t("tr",null,[t("td",null,"......"),t("td",null,[t("a",{href:"https://ant.design/components/form-cn#formitem",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),t("td",null,"一"),t("td",null,"一")],-1),X=JSON.parse('{"title":"自动补全输入框","description":"","frontmatter":{},"headers":[],"relativePath":"examples/form/autocomplete.md","filePath":"examples/form/autocomplete.md"}'),H={name:"examples/form/autocomplete.md"},Z=Object.assign(H,{setup(K){const o=["input","select","textarea","input-number","input-autocomplete","switch","datetime","date","week","month","year","datetimerange","daterange","monthrange","custom","radio","tree-select","radio-button","rate","checkbox","cascader"].join(" | ");return(M,Q)=>{const l=s("dinert-api-typing");return r(),d("div",null,[i,t("table",_,[c,t("tbody",null,[t("tr",null,[h,m,t("td",null,[n(l,{type:"object",details:"{[key: string]: FormItemProps}"})]),p]),f,t("tr",null,[b,y,t("td",null,[n(l,{type:"enmu",details:"'search' | 'horizontal'"})]),x]),g,k,I,P,q,N])]),T,t("table",V,[F,t("tbody",null,[t("tr",null,[S,j,t("td",null,[n(l,{type:"enmu",details:u(o)},null,8,["details"])]),v]),t("tr",null,[w,B,t("td",null,[n(l,{type:"enmu",details:"'string' | (formItem) => any"})]),A]),t("tr",null,[C,E,t("td",null,[n(l,{type:"enmu",details:"boolean' | (initialValues) => boolean"})]),O]),z,D,L,t("tr",null,[R,U,t("td",null,[n(l,{type:"enmu",details:"'string' | (formItem) => any"})]),J]),Y,G])])])}}});export{X as __pageData,Z as default};
