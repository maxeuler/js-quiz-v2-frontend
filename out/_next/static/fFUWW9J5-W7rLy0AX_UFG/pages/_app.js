(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1TCz":function(n,e,t){"use strict";t.r(e);var r=t("ln6h"),a=t.n(r),i=t("O40h"),o=t("0iUn"),u=t("sLSF"),c=t("MI3g"),l=t("a7VT"),s=t("Tit0"),p=t("q1tI"),f=t.n(p),d=t("8Bbg"),h=t.n(d),m=t("rt45"),b=t("5D9J"),v=t("qKvR"),g=t("YFqc"),x=t.n(g),y=f.a.createElement;function w(){var n=Object(m.a)(["\n  color: #fff;\n  display: grid;\n  grid-template-columns: auto 20%;\n  padding: 1rem 2rem;\n  border-bottom: 1px solid #fff;\n  z-index: 100;\n\n  .logo {\n    font-size: 3rem;\n    > * {\n      padding: 0;\n      margin: 1rem 0;\n    }\n    user-select: none;\n  }\n\n  nav {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    font-size: 2rem;\n  }\n\n  a {\n    color: #fff;\n    text-decoration: none;\n    :hover {\n      color: #eee;\n    }\n  }\n"]);return w=function(){return n},n}var P=b.a.header(w()),j=function(){return y(P,null,y("div",{className:"logo"},y("h1",null,"JS QUIZ")),y("nav",null,y(x.a,{href:"/"},y("a",null,"Home"))))},k=f.a.createElement;function I(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 3rem;\n  color: #aaa;\n  font-size: 1.2rem;\n\n  @media (max-width: 800px) {\n    color: #fff;\n  }\n\n  > div {\n    color: #aaa;\n    opacity: 0.5;\n    :hover {\n      opacity: 0.8;\n    }\n  }\n"]);return I=function(){return n},n}var O=b.a.footer(I()),C=function(){return k(O,null,k("p",null,"Created by Max Euler \xa9 2019"),k("div",null,k(x.a,{href:""},k("a",null,k("img",{src:"/static/github.png",alt:"GitHub icon"})))))},T=f.a.createElement;function z(){var n=Object(m.a)(["\n        html,\n        body {\n          margin: 0;\n          body: 0;\n          box-sizing: border-box;\n          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n            'Lucida Sans', Arial, sans-serif;\n          font-size: 10px;\n\n          @media (max-width: 800px) {\n            background-image: linear-gradient(#0fb9b1, #2bcbba);\n          }\n        }\n        *,\n        *:before,\n        *:after {\n          box-sizing: inherit;\n        }\n      "]);return z=function(){return n},n}function _(){var n=Object(m.a)(["\n  margin: 2rem auto;\n  width: 90%;\n  max-width: 1200px;\n"]);return _=function(){return n},n}function q(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  main {\n    flex-grow: 1;\n  }\n"]);return q=function(){return n},n}var E=b.a.div(q()),G=b.a.div(_()),U=function(n){var e=n.children;return T(E,null,T(v.a,{styles:Object(v.c)(z())}),T("main",null,T(j,null),T(G,null,e)),T(C,null))},N=f.a.createElement,S=function(n){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(s.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.props,e=n.Component,t=n.pageProps;return N(f.a.Fragment,null,N(U,null,N(e,t)))}}],[{key:"getInitialProps",value:function(){var n=Object(i.a)(a.a.mark(function n(e){var t,r,i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.Component,r=e.ctx,i={},!t.getInitialProps){n.next=6;break}return n.next=5,t.getInitialProps(r);case 5:i=n.sent;case 6:return i.query=r.query,n.abrupt("return",{pageProps:i});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}]),e}(h.a);e.default=S},"8Bbg":function(n,e,t){n.exports=t("B5Ud")},B5Ud:function(n,e,t){"use strict";var r=t("/HRN"),a=t("WaGi"),i=t("ZDA2"),o=t("/+P4"),u=t("N9n2"),c=t("ln6h"),l=t("KI45");e.__esModule=!0,e.Container=function(n){0;return n.children},e.createUrl=x,e.default=void 0;var s=l(t("htGi")),p=l(t("+oT+")),f=l(t("q1tI")),d=l(t("17x9")),h=t("g/15");e.AppInitialProps=h.AppInitialProps;var m=t("nOHt");function b(n){return v.apply(this,arguments)}function v(){return(v=(0,p.default)(c.mark(function n(e){var t,r,a;return c.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.Component,r=e.ctx,n.next=3,(0,h.loadGetInitialProps)(t,r);case 3:return a=n.sent,n.abrupt("return",{pageProps:a});case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}var g=function(n){function e(){return r(this,e),i(this,o(e).apply(this,arguments))}return u(e,n),a(e,[{key:"getChildContext",value:function(){return{router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(n,e){throw n}},{key:"render",value:function(){var n=this.props,e=n.router,t=n.Component,r=n.pageProps,a=x(e);return f.default.createElement(t,(0,s.default)({},r,{url:a}))}}]),e}(f.default.Component);function x(n){var e=n.pathname,t=n.asPath,r=n.query;return{get query(){return r},get pathname(){return e},get asPath(){return t},back:function(){n.back()},push:function(e,t){return n.push(e,t)},pushTo:function(e,t){var r=t?e:"",a=t||e;return n.push(r,a)},replace:function(e,t){return n.replace(e,t)},replaceTo:function(e,t){var r=t?e:"",a=t||e;return n.replace(r,a)}}}e.default=g,g.childContextTypes={router:d.default.object},g.origGetInitialProps=b,g.getInitialProps=b},GcxT:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])}},[["GcxT",1,0]]]);