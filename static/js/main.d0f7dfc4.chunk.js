(this.webpackJsonpuserapp2=this.webpackJsonpuserapp2||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"path":"/page-a","linkTitle":"Page A","pageTitle":"Page A","pageDescription":"Description page A","table":{"apiEndpoint":"/page-a-data.json","columns":[{"title":"Name"},{"title":"Email"},{"title":"Location"},{"title":"Online"}]}},{"path":"/page-b","linkTitle":"Page B","pageTitle":"Page B","pageDescription":"Description page B","table":{"apiEndpoint":"/page-b-data.json","columns":[{"title":"Name"},{"title":"Email"},{"title":"Location"},{"title":"Online"}]}},{"path":"/page-c","linkTitle":"Page C","pageTitle":"Page C","pageDescription":"Description page C","table":{"apiEndpoint":"/page-c-data.json","columns":[{"title":"Name"},{"title":"Email"},{"title":"Location"},{"title":"Online"}]}}]')},,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"John Moe","email":"john_moe@email.com","location":"London","online":false,"avatar":"https://source.unsplash.com/random/10x10"},{"id":2,"name":"Jane Doe","email":"jane_doe@email.com","location":"London","online":false,"avatar":"https://source.unsplash.com/random/10x10"},{"id":3,"name":"Mike Smith","email":"mike_smith@email.com","location":"Brighton","online":true,"avatar":"https://source.unsplash.com/random/10x10"}]')},function(e){e.exports=JSON.parse('[{"id":1,"name":"Mike Johnson","email":"mike_johnson@email.com","location":"New York","online":false,"avatar":"https://source.unsplash.com/random/10x10"},{"id":2,"name":"Jane Sorrow","email":"jane_sorrow@email.com","location":"Boston","online":true,"avatar":"https://source.unsplash.com/random/10x10"},{"id":3,"name":"Daniel Johnson","email":"daniel_johnson@email.com","location":"Florida","online":true,"avatar":"https://source.unsplash.com/random/10x10"}]')},function(e){e.exports=JSON.parse('[{"id":1,"name":"Catherine Johnson","email":"catherine_johnson@email.com","location":"Toronto","online":false,"avatar":"https://source.unsplash.com/random/10x10"},{"id":2,"name":"Samuel Bry","email":"samuel_bry@email.com","location":"Vancouver","online":true,"avatar":"https://source.unsplash.com/random/10x10"},{"id":3,"name":"Daniel Simpson","email":"daniel_simposon@email.com","location":"Toronto","online":true,"avatar":"https://source.unsplash.com/random/10x10"}]')},,function(e,a,n){e.exports=n(35)},,,,,function(e,a,n){},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),i=n(15),l=n.n(i),c=(n(26),n(7)),r=n(1),s=function(e){var a=e.linkTitle,n=e.path,t=Object(r.e)();return o.a.createElement("button",{type:"button",onClick:function(){t.push(n)}},a)},m=n(9),p=function(e){var a=e.children,n=Object(r.f)().pathname;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"links-wrapper"},m.filter((function(e){return e.path!==n})).map((function(e){return o.a.createElement(s,{path:e.path,linkTitle:e.linkTitle})}))),a)},u=n(20),h=(n(32),function(){return o.a.createElement("svg",{className:"svg-icon",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"}))}),d=n(17),g=n(18),f=n(19),E=(n(33),{"/page-a-data.json":d,"/page-b-data.json":g,"/page-c-data.json":f}),v=function(e){var a=e.table,n=Object(t.useState)([]),i=Object(u.a)(n,2),l=i[0],c=i[1],r=a.apiEndpoint,s=a.columns;return Object(t.useEffect)((function(){c(E[r])}),[r,l]),o.a.createElement("div",{className:"wrapper"},s.map((function(e){return o.a.createElement("div",{key:e.title,className:"content"},o.a.createElement("p",null,e.title),l.map((function(a){var n=e.title.toLowerCase();return o.a.createElement("p",{className:!0===a[n]?"online":"",key:a[n]},!0===a[n]?o.a.createElement(h,null):a[n])})))})))},b=(n(34),function(){var e=Object(r.f)().pathname,a=m.find((function(a){return a.path===e})),n=a.table,t=a.pageDescription,i=a.pageTitle;return o.a.createElement(o.a.Fragment,null,i&&o.a.createElement("h2",null,i),t&&o.a.createElement("p",null,t),n&&o.a.createElement(v,{table:n}))}),k=function(){return o.a.createElement(c.a,null,o.a.createElement(p,null,o.a.createElement(r.a,{path:"/page-a",component:b}),o.a.createElement(r.a,{path:"/page-b",component:b}),o.a.createElement(r.a,{path:"/page-c",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.d0f7dfc4.chunk.js.map