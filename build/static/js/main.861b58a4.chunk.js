(this["webpackJsonpnatali-sec"]=this["webpackJsonpnatali-sec"]||[]).push([[0],{116:function(e,n){},145:function(e,n,t){},152:function(e,n){},153:function(e,n){},160:function(e,n,t){"use strict";t.r(n);var a=t(6),r=t(0),s=t.n(r),c=t(45),i=t.n(c),l=(t(144),t(50)),u=t(177),o=t(173),d=(t(145),t(109)),j=t.n(d),f=t(122),b=t(123);function p(){return fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vS8jZCwOdkYsBe7ite2E8nejzNAKZCgENwe6KBw6w7WtHh_TZALsW08kORNAYWPsZSmnx7Iscdcuky_/pub?output=xlsx").then((function(e){return e.arrayBuffer()}))}var h=t(110),O=t(72),m=["A","B","C","D","E","F","G"],v=["\u041f\u043e\u0440\u0443\u0448\u0435\u043d\u043d\u044f \u0446\u0456\u043b\u0456\u0441\u043d\u043e\u0441\u0442\u0456 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u0430\u043a\u0442\u0438\u0432\u0443 \u043f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0441\u0442\u0432\u0430","\u041f\u043e\u0440\u0443\u0448\u0435\u043d\u043d\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u0430\u043a\u0442\u0438\u0432\u0443 \u043f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0441\u0442\u0432\u0430","\u041f\u043e\u0440\u0443\u0448\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u0430\u043a\u0442\u0438\u0432\u0443 \u043f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0441\u0442\u0432\u0430"];function x(e,n){return n.findIndex((function(n){return n.start<=e&&n.end>=e}))}function y(e){var n=e.SheetNames[0],t=e.Sheets[n];if(!t)return null;for(var a={},r=parseInt(Object(O.tail)(t["!ref"].split(":")[1].split("")).join("")),s=0,c=Object.keys(t);s<c.length;s++){var i=c[s];if(m.includes(i[0])){var l=i.split(""),u=l[0];a[u]||(a[u]={});var o=parseInt(Object(O.tail)(l).join(""));if(!o)return null;a[u][o]=t[i].v}}var d,j=new Array(v.length),f=function(e,n){for(var t=new Array(v.length),a=function(){var n=s[r],a=parseInt(n),c=e[n],i=v.findIndex((function(e){return e===c}));i>=0&&(t[i]={start:a,end:NaN})},r=0,s=Object.keys(e);r<s.length;r++)a();return t.map((function(e,a){return{start:e.start,end:t[a+1]?t[a+1].start-1:n}}))}(a[m[0]],r),b=function(e,n){for(var t=new Array(v.length),a=0,r=Object.keys(e);a<r.length;a++){var s=r[a],c=parseInt(s),i=e[s],l=x(c,n);l<0||i.includes("\u0430\u043a\u0442\u0438\u0432")||(t[l]||(t[l]=[]),t[l].push({name:i,range:{start:c,end:NaN}}))}return t.map((function(e,a){return e.map((function(e,r){return{name:e.name,range:{start:e.range.start,end:t[a][r+1]?t[a][r+1].range.start-1:n[a].end}}}))}))}(a[m[0]],f),p=0,y=Object(h.a)(b);try{for(y.s();!(d=y.n()).done;){var k,g=d.value,N=new Array,w=Object(h.a)(g);try{var C=function(){for(var e=k.value,n=Object.keys(a[m[1]]).find((function(n){var t=parseInt(n);return e.range.start<=t&&e.range.end>=t})),t=Object.keys(a[m[2]]).find((function(n){var t=parseInt(n);return e.range.start<=t&&e.range.end>=t})),r=Object.keys(a[m[3]]).find((function(n){var t=parseInt(n);return e.range.start<=t&&e.range.end>=t})),s=new Array,c=Object.keys(a[m[4]]).filter((function(n){var t=parseInt(n);return e.range.start<=t&&e.range.end>=t})),i=function(n){for(var t=c[n],r={start:parseInt(t),end:c[n+1]?parseInt(c[n+1])-1:e.range.end},i=new Array,l=Object.keys(a[m[5]]).filter((function(e){var n=parseInt(e);return r.start<=n&&r.end>=n})),u=function(e){var n=l[e],t=parseInt(n),s=l[e+1]?parseInt(l[e+1])-1:r.end,c=Object.keys(a[m[6]]).filter((function(e){var n=parseInt(e);return t<=n&&s>=n}));i.push({name:a[m[5]][n],realisations:c.map((function(e){return a[m[6]][e]}))})},o=0;o<l.length;o++)u(o);s.push({name:a[m[4]][t],sources:i})},l=0;l<c.length;l++)i(l);N.push({name:e.name,owner:a[m[1]][n],position:a[m[2]][t],category:a[m[3]][r],risks:s})};for(w.s();!(k=w.n()).done;)C()}catch(I){w.e(I)}finally{w.f()}j[p]={name:v[p],assets:N},p++}}catch(I){y.e(I)}finally{y.f()}return j}function k(){return(k=Object(f.a)(j.a.mark((function e(){var n,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return n=e.sent,t=Object(b.read)(n,{type:"array"}),e.abrupt("return",y(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=t(172),N=t(75),w=t(175),C=t(174),I=function(e){var n=e.selected,t=e.setSelected,r=e.availableAssets,s=e.availableRisks,c=e.riskTypes;return Object(a.jsx)(w.a,{className:"ns-form",children:Object(a.jsxs)(w.a.Group,{widths:"equal",children:[Object(a.jsx)(C.a,{fluid:!0,selection:!0,clearable:!0,className:"ns-select",onChange:function(e,n){return t({riskType:parseInt(n.value),assetName:null,riskName:null})},options:c.map((function(e){var n=e.name,t=e.index;return{key:t,value:t,text:n}})),value:n.riskType,placeholder:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0442\u0438\u043f \u0437\u0430\u0433\u0440\u043e\u0437\u0438"}),Object(a.jsx)(C.a,{fluid:!0,selection:!0,clearable:!0,className:"ns-select",onChange:function(e,a){return t(Object(N.a)(Object(N.a)({},n),{},{assetName:a.value||null}))},options:r.map((function(e){return{key:e,value:e,text:e}})),value:n.assetName,placeholder:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u0438\u0439 \u0430\u043a\u0442\u0438\u0432",disabled:0===r.length}),Object(a.jsx)(C.a,{fluid:!0,selection:!0,clearable:!0,className:"ns-select",onChange:function(e,a){return t(Object(N.a)(Object(N.a)({},n),{},{riskName:a.value||null}))},options:s.map((function(e){return{key:e,value:e,text:e}})),value:n.riskName,placeholder:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0437\u0430\u0433\u0440\u043e\u0437\u0443 \u0406\u0411",disabled:0===s.length})]})})},A=t(179),S=t(180),T=t(69),H=t(176),E=function(e){var n=e.data;if(!n)return Object(a.jsx)(A.a,{placeholder:!0,children:Object(a.jsxs)(S.a,{icon:!0,children:[Object(a.jsx)(T.a,{name:"info circle"}),"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0432\u0438\u0436\u0447\u0435 \u0434\u043b\u044f \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043c\u0435\u0445\u0430\u043d\u0456\u0437\u043c\u0456\u0432 \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u0437\u0430\u0433\u0440\u043e\u0437\u0456 \u0406\u0411"]})});var t=n.asset,r=n.risk;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(H.a,{celled:!0,children:[Object(a.jsx)(H.a.Header,{children:Object(a.jsxs)(H.a.Row,{children:[Object(a.jsx)(H.a.HeaderCell,{children:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u0438\u0439 \u0430\u043a\u0442\u0438\u0432"}),Object(a.jsx)(H.a.HeaderCell,{children:"\u0412\u043b\u0430\u0441\u043d\u0438\u043a \u0430\u043a\u0442\u0438\u0432\u0443"}),Object(a.jsx)(H.a.HeaderCell,{children:"\u041c\u0456\u0441\u0446\u0435 \u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f"}),Object(a.jsx)(H.a.HeaderCell,{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f \u0430\u043a\u0442\u0438\u0432\u0443"})]})}),Object(a.jsx)(H.a.Body,{children:Object(a.jsxs)(H.a.Row,{children:[Object(a.jsx)(H.a.Cell,{children:t.name}),Object(a.jsx)(H.a.Cell,{children:t.owner}),Object(a.jsx)(H.a.Cell,{children:t.position}),Object(a.jsx)(H.a.Cell,{children:t.category})]})})]}),Object(a.jsxs)(H.a,{celled:!0,children:[Object(a.jsx)(H.a.Header,{children:Object(a.jsxs)(H.a.Row,{children:[Object(a.jsx)(H.a.HeaderCell,{children:"\u0414\u0436\u0435\u0440\u0435\u043b\u043e \u0437\u0430\u0433\u0440\u043e\u0437"}),Object(a.jsx)(H.a.HeaderCell,{children:"\u041c\u0435\u0445\u0430\u043d\u0456\u0437\u043c \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u043d\u0430\u043f\u0430\u0434\u0443 \u0447\u0435\u0440\u0435\u0437 \u0443\u0440\u0430\u0437\u043b\u0438\u0432\u0456\u0441\u0442\u044c (\u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0443\u0432\u0430\u0442\u0438 \u0443\u0440\u0430\u0437\u043b\u0438\u0432\u0456\u0441\u0442\u044c)"})]})}),Object(a.jsx)(H.a.Body,{children:r.sources.map((function(e){return e.realisations.map((function(n,t){return Object(a.jsxs)(H.a.Row,{children:[0===t&&Object(a.jsx)(H.a.Cell,{rowSpan:e.realisations.length,children:e.name}),Object(a.jsx)(H.a.Cell,{children:n})]},"".concat(e.name,"-").concat(t))}))}))})]})]})},B=function(e){var n=e.data,t=r.useState(null),s=Object(l.a)(t,2),c=s[0],i=s[1],u=r.useState([]),o=Object(l.a)(u,2),d=o[0],j=o[1],f=r.useState([]),b=Object(l.a)(f,2),p=b[0],h=b[1],m=r.useState({assetName:null,riskName:null,riskType:0}),v=Object(l.a)(m,2),x=v[0],y=v[1];return r.useEffect((function(){var e;j(Object(O.uniq)(null===(e=n[x.riskType])||void 0===e?void 0:e.assets.map((function(e){return e.name}))))}),[x.riskType]),r.useEffect((function(){if(x.assetName){var e=n[x.riskType].assets.find((function(e){return e.name===x.assetName}));h((null===e||void 0===e?void 0:e.risks.map((function(e){return e.name})))||[])}else h([])}),[x.assetName]),r.useEffect((function(){var e=x.riskType,t=x.assetName,a=x.riskName;if("number"===typeof e&&t&&a){var r=n[x.riskType].assets.find((function(e){return e.name===x.assetName})),s=null===r||void 0===r?void 0:r.risks.find((function(e){return e.name===x.riskName}));i({asset:r,risk:s})}else i(null)}),[x]),Object(a.jsxs)(g.a,{children:[Object(a.jsx)(I,{riskTypes:n.map((function(e,n){return{name:e.name,index:n}})),availableAssets:d,availableRisks:p,setSelected:y,selected:x}),Object(a.jsx)(E,{data:c})]})};var R=function(){var e=s.a.useState(null),n=Object(l.a)(e,2),t=n[0],r=n[1];return s.a.useEffect((function(){(function(){return k.apply(this,arguments)})().then(r)}),[]),t?Object(a.jsx)(B,{data:t}):Object(a.jsx)(u.a,{active:!0,children:Object(a.jsx)(o.a,{indeterminate:!0,children:"\u0417\u0447\u0435\u043a\u0430\u0439\u0442\u0435 \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0434\u0430\u043d\u0456 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0442\u044c\u0441\u044f!"})})};i.a.render(Object(a.jsx)(R,{}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.861b58a4.chunk.js.map