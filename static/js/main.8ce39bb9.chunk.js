(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],{23:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(16),i=t.n(a),r=(t(23),t(18)),l=t(3),j=t(5),d=t(0),o=Object(n.createContext)();function b(e){var c=Object(n.useState)([]),t=Object(l.a)(c,2),s=t[0],a=t[1];return Object(d.jsx)(o.Provider,{value:[s,a],children:e.children})}var u=t(17),h=t.n(u);function x(e){return e<=.09?e:e.toFixed(2)}t(43);var O=function(){var e=Object(n.useState)(),c=Object(l.a)(e,2),t=c[0],s=c[1],a=Object(n.useContext)(o),i=Object(l.a)(a,2),b=i[0],u=i[1];return Object(n.useEffect)((function(){return function(e,c,t){var n=!["delete","get"].includes(e);return h.a[e](c,n?t:null)}("get","".concat("https://api.nbp.pl/api","/exchangerates/tables/C")).then((function(e){s(e.data[0].rates)}))}),[]),Object(d.jsxs)("div",{className:"main-panel",children:[Object(d.jsxs)("div",{className:"greeting-container",children:[Object(d.jsx)("h1",{className:"greeting-heading",children:"Hello!"}),Object(d.jsx)("p",{className:"greeting-text",children:"good too see you again"}),Object(d.jsx)("h2",{className:"greeting-subheading",children:"Have you seen today's exchange rates?"})]}),Object(d.jsx)("div",{className:"currencies",children:null===t||void 0===t?void 0:t.map((function(e,c){return Object(d.jsxs)("div",{className:"".concat(e.code," card"),children:[Object(d.jsx)("p",{className:"code",children:e.code}),Object(d.jsxs)("div",{className:"rates",children:[Object(d.jsx)("p",{className:"buy",children:"Bid:"}),Object(d.jsx)("p",{className:"green",children:x(e.bid)}),Object(d.jsx)("p",{className:"sell",children:"Ask:"}),Object(d.jsx)("p",{className:"fade",children:x(e.ask)})]}),Object(d.jsx)("div",{className:"buttons",children:Object(d.jsx)("div",{className:"button",children:Object(d.jsx)(j.a,{size:"1.5em",style:b.filter((function(c){return c.code===e.code})).length>0&&{color:"black",fill:"#cc2424"},onClick:function(){return function(e){var c=t.filter((function(c){return c.code===e.code})),n=b.filter((function(c){return c.code===e.code}));n.length>0&&c[0].code===n[0].code||b.length>=5||u((function(c){return[].concat(Object(r.a)(c),[e])}))}(e)}})})})]},c)}))})]})};t(44);var m=function(){return Object(d.jsx)("div",{className:"sidebar-panel",children:Object(d.jsx)("div",{className:"tabs",children:Object(d.jsxs)("div",{className:"tab-button",children:[Object(d.jsx)("p",{className:"contact",children:"Contact"}),Object(d.jsx)("a",{href:"mailto:chabrowski.kuba@gmail.com",className:"mail",children:"chabrowski.kuba@gmail.com"})]})})})};t(45);var f=function(){var e=Object(n.useContext)(o),c=Object(l.a)(e,2),t=c[0],s=c[1];return Object(d.jsx)("div",{className:"favourites-panel",children:Object(d.jsxs)("div",{className:"favourites-container",children:[Object(d.jsx)("h1",{className:"fav-heading",children:"Favourites"}),Object(d.jsx)("p",{className:"fav-text",children:"keep an eye on them!"}),Object(d.jsx)("p",{className:"fav-text silent",children:"You can follow up to 5 favourite currencies"}),Object(d.jsxs)("div",{className:"currencies-container",children:[null===t||void 0===t?void 0:t.map((function(e,c){return Object(d.jsxs)("div",{className:"".concat(e.code," fav-card"),children:[Object(d.jsx)("p",{className:"code",children:e.code}),Object(d.jsxs)("div",{className:"rates",children:[Object(d.jsx)("p",{className:"buy",children:"Bid:"}),Object(d.jsx)("p",{className:"green",children:x(e.bid)}),Object(d.jsx)("p",{className:"sell",children:"Ask:"}),Object(d.jsx)("p",{className:"fade",children:x(e.ask)})]}),Object(d.jsx)("div",{className:"button",children:Object(d.jsx)(j.c,{size:"1.5em",onClick:function(){return function(e){var c=t.filter((function(c){return c.code!==e}));s(c)}(e.code)}})})]},c)})),t.length>0&&Object(d.jsxs)("div",{className:"clear-fav-button",onClick:function(){s([])},children:[Object(d.jsx)("p",{className:"clear-text",children:"clear all"}),Object(d.jsx)(j.b,{size:"1.5em"})]})]})]})})};t(46);var v=function(){return Object(d.jsx)(b,{children:Object(d.jsxs)("div",{className:"exchange-wrapper",children:[Object(d.jsx)(m,{}),Object(d.jsx)(O,{}),Object(d.jsx)(f,{})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),N()}},[[47,1,2]]]);
//# sourceMappingURL=main.8ce39bb9.chunk.js.map