import{c as E,I as t,w as C,j as a,k as l,a as s,E as p,o as c}from"./chunks/framework.CIwKAfii.js";const r=a("h1",{id:"弹窗",tabindex:"-1"},[s("弹窗 "),a("a",{class:"header-anchor",href:"#弹窗","aria-label":'Permalink to "弹窗"'},"​")],-1),D=a("h2",{id:"高级用法",tabindex:"-1"},[s("高级用法 "),a("a",{class:"header-anchor",href:"#高级用法","aria-label":'Permalink to "高级用法"'},"​")],-1),u=a("p",null,"modal/advanced/index",-1),k=a("h2",{id:"属性",tabindex:"-1"},[s("属性 "),a("a",{class:"header-anchor",href:"#属性","aria-label":'Permalink to "属性"'},"​")],-1),F={tabindex:"0"},i=a("thead",null,[a("tr",null,[a("th",null,"属性名"),a("th",null,"说明"),a("th",null,"类型"),a("th",null,"默认值")])],-1),d=a("td",null,"size",-1),A=a("td",null,"弹窗大小",-1),B=a("td",null,"一",-1),m=a("tr",null,[a("td",null,"......"),a("td",null,[a("a",{href:"https://element-plus.org/zh-CN/component/dialog.html#attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),a("td",null,"一"),a("td",null,"一")],-1),g=JSON.parse('{"title":"弹窗","description":"","frontmatter":{},"headers":[],"relativePath":"examples/modal/advanced.md","filePath":"examples/modal/advanced.md"}'),_={name:"examples/modal/advanced.md"},M=Object.assign(_,{setup(h){let n=["large","small","medium"].join("' | '");return n="'"+n+"'",(f,y)=>{const o=p("DinertDemo"),e=p("dinert-api-typing");return c(),E("div",null,[r,D,t(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Button%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20Space%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'antd'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EDinertModal%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20UseModal%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..%2F..%2F..%2F..%2Fpackages'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20React%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20forwardRef%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'react'%3C%2Fspan%3E%0A%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EApp%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20useModal%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EUseModal%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'large'%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EstateOpen%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20updateOpen%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20useModal%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ediv%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3ESpace%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EButton%20onClick%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EupdateOpen%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3Ehook%E5%BC%B9%E7%AA%97%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3EButton%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3ESpace%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EDinertModal%20open%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EstateOpen%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20onCancel%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EupdateOpen%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20size%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EuseModal%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eoptions%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Esize%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ep%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%E9%BB%98%E8%AE%A4%E5%BC%B9%E7%AA%97%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ep%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ep%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%E9%BB%98%E8%AE%A4%E5%BC%B9%E7%AA%97%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ep%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ep%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%E9%BB%98%E8%AE%A4%E5%BC%B9%E7%AA%97%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ep%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3EDinertModal%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ediv%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20forwardRef%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Eany%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20any%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EApp%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"modal/advanced/index","raw-source":"import%20%7B%20Button%2C%20Space%20%7D%20from%20'antd'%0Aimport%20%7BDinertModal%2C%20UseModal%7D%20from%20'..%2F..%2F..%2F..%2Fpackages'%0A%0Aimport%20React%2C%20%7B%20forwardRef%20%7D%20from%20'react'%0A%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20useModal%20%3D%20new%20UseModal(%7B%0A%20%20%20%20%20%20%20%20size%3A%20'large'%0A%20%20%20%20%7D)%0A%20%20%20%20const%20%7BstateOpen%2C%20updateOpen%7D%20%3D%20useModal%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CSpace%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20onClick%3D%7B()%20%3D%3E%20updateOpen(true)%7D%3Ehook%E5%BC%B9%E7%AA%97%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FSpace%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CDinertModal%20open%3D%7BstateOpen%7D%20onCancel%3D%7B()%20%3D%3E%20updateOpen(false)%7D%20size%3D%7BuseModal.options.size%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3E%E9%BB%98%E8%AE%A4%E5%BC%B9%E7%AA%97%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3E%E9%BB%98%E8%AE%A4%E5%BC%B9%E7%AA%97%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3E%E9%BB%98%E8%AE%A4%E5%BC%B9%E7%AA%97%3C%2Fp%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FDinertModal%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%0A%20%20%20%20)%0A%7D%0A%0Aexport%20default%20forwardRef%3Cany%2C%20any%3E(App)%0A",description:""},{default:C(()=>[u]),_:1}),k,a("table",F,[i,a("tbody",null,[a("tr",null,[d,A,a("td",null,[t(e,{type:"emnu",details:l(n)},null,8,["details"])]),B]),m])])])}}});export{g as __pageData,M as default};
