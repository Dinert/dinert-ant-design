import{U as o,aZ as p,a_ as u,a$ as l,b0 as c,b1 as f,b2 as d,b3 as m,b4 as b,b5 as h,b6 as g,d as A,u as P,y as v,x as y,b7 as C,b8 as w,b9 as R,aC as _}from"./chunks/framework.CIwKAfii.js";import{R as E}from"./chunks/theme.Dc3CyhFS.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(E),S=A({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=P();return v(()=>{y(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),w(),R(),s.setup&&s.setup(),()=>_(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=D(),t=x();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function x(){return b(S)}function D(){let e=o,t;return h(a=>{let n=g(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{T as createApp};
